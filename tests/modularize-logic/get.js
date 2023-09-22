import http from "k6/http";
import { sleep, check } from "k6";
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const get = (baseUrl) => {
  const res = http.get(baseUrl);

  check(res, {
    "status should be 200": (r) => r.status === 200,
  });

  sleep(randomIntBetween(1, 5));
  // sleep(Math.random() * 10);
};
