import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { validateReport } from "../src/validate-report.js";

const samplePath = resolve(process.cwd(), "examples/synthetic-aen-report.json");
const sample = JSON.parse(readFileSync(samplePath, "utf8")) as Record<string, unknown>;

test("accepts the synthetic example report", () => {
  const result = validateReport(sample);
  assert.equal(result.valid, true, JSON.stringify(result.errors));
  assert.deepEqual(result.errors, []);
});

test("rejects a report missing required top-level fields", () => {
  const report = { schema_version: "0.1" };
  const result = validateReport(report);

  assert.equal(result.valid, false);
  assert.ok(result.errors.length > 0);
});

test("rejects an unknown response state", () => {
  const report = structuredClone(sample) as {
    report: { response_state: string; [key: string]: unknown };
  };
  report.report.response_state = "everything_is_fine";

  const result = validateReport(report);
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => error.path === "/report/response_state"));
});

test("rejects unexpected fields instead of silently accepting them", () => {
  const report = {
    ...structuredClone(sample),
    secret_api_key: "synthetic-not-a-real-key",
  };

  const result = validateReport(report);
  assert.equal(result.valid, false);
});

test("rejects an invalid timestamp format", () => {
  const report = structuredClone(sample) as {
    submitted_at: string;
    [key: string]: unknown;
  };
  report.submitted_at = "not-a-date";

  const result = validateReport(report);
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => error.path === "/submitted_at"));
});

test("does not expose report content in validation messages", () => {
  const report = {
    ...structuredClone(sample),
    unexpected_secret_field: "synthetic-sensitive-content",
  };

  const result = validateReport(report);
  const messages = JSON.stringify(result.errors);

  assert.equal(result.valid, false);
  assert.equal(messages.includes("synthetic-sensitive-content"), false);
});
