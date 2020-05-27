import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Card/card";
function App() {
  const [searched, setSearched] = useState("");
  const [input, setInput] = useState();
  const [head, setHead] = useState();
  const [row, setRow] = useState();
  const api = axios.create({
    baseURL: "https://openapi.gg.go.kr/RegionMnyFacltStus",
    params: {
      KEY: "c3d322c1e2fc4cf0a90790ca45422920",
      Type: "json",
    },
  });

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.which === 13) {
      api
        .get("/", {
          params: {
            CMPNM_NM: input,
          },
        })
        .then((data) => {
          const contents = data.data.RegionMnyFacltStus;
          setRow(contents[1].row);
          setHead(contents[0].head);
        })
        .catch((error) => {
          console.log("error");
          setSearched("");
        });
    }
  }

  console.log(row);
  console.log(head);
  return (
    <div>
      <input
        type="text"
        id="city"
        placeholder="CITY NAME"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {row && <Card row={row} />}
    </div>
  );
}

export default App;
