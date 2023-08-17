export const thresholdsSettings = {
  //regra de configuracao de limite
  http_req_duration: ["p(95)<2000"], //95% das requisicoes devem responder em ate 2s
  http_req_failed: ["rate<0.01"], //1% das requisicoes podem ocorrer erro
};

export const smokeWork = {
  executor: "ramping-vus",
  stages: [
    { duration: "1m", target: 100 },
    { duration: "2m", target: 100 },
    { duration: "1m", target: 0 },
  ],
};

export const loadWork = {
  executor: "constant-vus",
  vus: 2,
  duration: "10s",
};

export const simpleWork = {
  executor: "per-vu-iterations",
  vus: 1,
};
