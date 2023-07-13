const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/cucumber-json/",
  reportPath: "cypress/reports/html-report-multi/",
  ignoreBadJsonFile: true,
  displayReportTime: true,
  displayDuration: true,
  metadata: {
    device: "Local test machine.",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
});