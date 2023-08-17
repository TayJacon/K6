import http from "k6/http";
import { sleep, check } from "k6";

export const get = (baseUrl) => {
  const res = http.get(baseUrl);

  check(res, {
    "status should be 200": (r) => r.status === 200,
  });

  sleep(1);
};
