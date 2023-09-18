import http from "k6/http";
import { sleep, check } from "k6";
import uuid from "../libs/uuid.js";

export const options = {
  vus: 10,
  duration: "30s",
  thresholds: {
    //threshold setting rule
    http_req_duration: ["p(95)<2000"], //95% of requests must be answered within 2s
    http_req_failed: ["rate<0.01"], //1% of requests may have an error
  },
};

export default () => {
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
