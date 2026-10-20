import { readFileSync } from "node:fs";
import { validateReport } from "./validate-report.js";

const inputPath = process.argv[2];

if (!inputPath) {
  console.error("Usage: pnpm exec tsx src/cli.ts <path-to-report.json>");
  process.exitCode = 2;
} else {
  try {
    const input = readFileSync(inputPath, "utf8");
    let report: unknown;

    try {
      report = JSON.parse(input) as unknown;
    } catch {
      console.error("Validation failed: the input file is not valid JSON.");
      process.exitCode = 1;
      report = undefined;
    }

    if (report !== undefined) {
      const result = validateReport(report);

      if (result.valid) {
        console.log("Valid AEN report structure.");
      } else {
        console.error("The report does not match the AEN schema:");
        for (const issue of result.errors) {
          console.error(`- ${issue.path}: ${issue.message}`);
        }
        process.exitCode = 1;
      }
    }
  } catch {
    console.error("Could not read the input file. Check the path and file permissions.");
    process.exitCode = 1;
  }
}
