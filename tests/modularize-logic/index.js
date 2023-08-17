import { get } from "./get.js";
import { signup } from "./signup.js";
import * as config from "./config.js";

import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

let date = new Date();
date = date.toISOString().split("T")[0];

export const handleSummary = (data) => {
  return {
    [`summary-${date}.html`]: htmlReport(data),
  };
}

export const options = {
  scenarios: { breaking: config.loadWork },
  thresholds: config.thresholdsSettings,
};

const baseUrl = "http://localhost:3333";

export default () => {
  get(baseUrl);
  signup(baseUrl);
}
