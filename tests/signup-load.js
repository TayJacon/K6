import http from "k6/http";
import { sleep, check } from "k6";
import uuid from "./libs/uuid.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

let date = new Date();
date = date.toISOString().split("T")[0];

export function handleSummary(data) {
  return {
    [`summaty-${date}.html`]: htmlReport(data),
  };
}

export const options = {
  stages: [
    { duration: "1m", target: 100 },
    { duration: "2m", target: 100 },
    { duration: "1m", target: 0 },
  ],
  thresholds: {
    //regra de configuracao de limite
    http_req_duration: ["p(95)<2000"], //95% das requisicoes devem responder em ate 2s
    http_req_failed: ["rate<0.01"], //1% das requisicoes podem ocorrer erro
  },
};

export default function () {
  const url = "http://localhost:3333/signup";
  const paylod = JSON.stringify({
    email: `${uuid.v4().substring(24)}@qatest.com`,
    password: "pwd123",
  });
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = http.post(url, paylod, headers);

  check(res, {
    "status should be 201": (r) => r.status === 201,
  });

  sleep(1);
}
