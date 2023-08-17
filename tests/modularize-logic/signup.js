import http from "k6/http";
import { sleep, check, group } from "k6";
import uuid from "../libs/uuid.js";

export const signup = (baseUrl) => {
  group("Add new user", () => {
    let userEmail = `${uuid.v4().substring(24)}@qatest.com`;

    const paylod = JSON.stringify({
      email: userEmail,
      password: "pwd123",
    });

    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = http.post(`${baseUrl}/signup`, paylod, headers);

    check(res, {
      "status should be 201": (r) => r.status === 201,
      "response body should include an ID": (r) => r.body.includes("_id"),
      "response body should include the email registered": (r) =>
        r.body.includes(userEmail),
    });

    sleep(1);
  });
};
