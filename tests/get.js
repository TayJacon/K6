import http from "k6/http";
import { sleep, check } from "k6";

export default () => {
  const res = http.get("http://localhost:3333");

  check(res, {
    "status should be 200": (r) => r.status === 200,
  });

  sleep(1);
};
