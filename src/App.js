import React, { useState } from "react";
import axios from "axios";
import { Appstyled, Titlestyled } from "./app.styled";
import Card from "./Card/card";
import { GlobalStyles } from "./global";
import Footer from "./footer/footer";
function App() {
  const [searched, setSearched] = useState("");
  const [input, setInput] = useState();
  const [head, setHead] = useState();
  const [row, setRow] = useState();
  let cancel;
  const api = axios.create({
    baseURL: "https://openapi.gg.go.kr/RegionMnyFacltStus",
    params: {
      KEY: "c3d322c1e2fc4cf0a90790ca45422920",
      Type: "json",
    },
    cancelToken: new axios.CancelToken((c) => (cancel = c)),
  });

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleKeyPress(event) {
    event.preventDefault();
    api
      .get("/", {
        params: {
          CMPNM_NM: input,
        },
      })
      .then((data) => {
        const contents = data.data.RegionMnyFacltStus;
        setRow(contents[1].row);
        setHead(contents[0].head[0]);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        console.log("error");
        setSearched("");
      });
    return () => cancel();
  }

  console.log(head);
  return (
    <div>
      <GlobalStyles />
      <Titlestyled>지역화폐사용되나요?💦</Titlestyled>
      <Appstyled onSubmit={handleKeyPress}>
        <input
          type="text"
          id="city"
          placeholder="상호명을 입력하세요"
          onChange={handleChange}
        />
        <button>검색</button>
      </Appstyled>
      {row ? (
        <Card row={row} head={head} />
      ) : (
        <Appstyled>찾을수가없습니더..💨</Appstyled>
      )}
      <Footer />
    </div>
  );
}

export default App;
