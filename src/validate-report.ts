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
 * Validate report structure and narrowly defined response-state consistency.
 *
 * Validation does not establish whether a report is true, whether its
 * interpretation is correct, or whether a system has subjective experience.
 * It must not rewrite the original report text.
 */
export function validateReport(report: unknown): ValidationResult {
  const schemaValid = validateAgainstSchema(report);

  if (!schemaValid) {
    return {
      valid: false,
      errors: normalizeErrors(validateAgainstSchema.errors),
    };
  }

  const reportObject = report as {
    report: {
      response_state: string;
      original_text: string | null;
    };
  };

  if (
    reportObject.report.response_state === "report_submitted" &&
    typeof reportObject.report.original_text === "string" &&
    reportObject.report.original_text.trim().length === 0
  ) {
    return {
      valid: false,
      errors: [
        {
          path: "/report/original_text",
          message: "must contain non-whitespace text when response_state is report_submitted",
        },
      ],
    };
  }

  return { valid: true, errors: [] };
}
