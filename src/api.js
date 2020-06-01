import { useState } from "react";
import axios from "axios";

let cancel;
const api = axios.create({
  baseURL: "https://openapi.gg.go.kr/RegionMnyFacltStus",
  params: {
    KEY: "c3d322c1e2fc4cf0a90790ca45422920",
    Type: "json",
    pIndex: 1,
    pSize: "15",
  },
  cancelToken: new axios.CancelToken((c) => (cancel = c)),
});

export const GgdataApi = {
  searchedApi: (input, page) =>
    api.get("/", {
      params: {
        CMPNM_NM: input,
        pIndex: page,
      },
    }),
};
