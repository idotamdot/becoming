import Ajv2020 from "ajv/dist/2020.js";
import type { AnySchema, ErrorObject, ValidateFunction } from "ajv";
import addFormats from "ajv-formats";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export interface ValidationIssue {
  path: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationIssue[];
}

function createValidator(): ValidateFunction {
  const schemaPath = resolve(process.cwd(), "schemas/aen-report.schema.json");
  const schemaText = readFileSync(schemaPath, "utf8");
  const schema = JSON.parse(schemaText) as AnySchema;

  const ajv = new Ajv2020({
    allErrors: true,
    strict: true,
  });

  addFormats(ajv);
  return ajv.compile(schema);
}

const validateAgainstSchema = createValidator();

function normalizeErrors(errors: ErrorObject[] | null | undefined): ValidationIssue[] {
  return (errors ?? []).map((error) => ({
    path: error.instancePath || "/",
    message: error.message ?? "does not satisfy the schema",
  }));
}

/**
 * Validate the structure of a report.
 *
 * This checks the JSON Schema only. It does not establish whether a report
 * is true, whether its interpretation is correct, or whether a system has
 * subjective experience.
 */
export function validateReport(report: unknown): ValidationResult {
  const valid = validateAgainstSchema(report);

  return {
    valid,
    errors: valid ? [] : normalizeErrors(validateAgainstSchema.errors),
  };
}
