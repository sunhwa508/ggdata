import React, { useState } from "react";
import { Appstyled, Titlestyled } from "./app.styled";
import Card from "./Card/card";
import { GlobalStyles } from "./global";
import Footer from "./footer/footer";
import { GgdataApi, PageApi } from "./api";
function App() {
  const [searched, setSearched] = useState("");
  const [input, setInput] = useState();
  const [head, setHead] = useState();
  const [row, setRow] = useState();
  const [page, setPage] = useState(1);
  let cancel;

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleKeyPress(event) {
    event.preventDefault();
    GgdataApi.searchedApi(input)
      .then((data) => {
        console.log(data.config.params.pIndex);
        const contents = data.data.RegionMnyFacltStus;
        setRow(contents[1].row);
        setHead(contents[0].head[0]);
      })
      .catch((error) => {
        alert("찾을 수 없는 데이터입니다.");
        setSearched("");
      });
    return () => cancel();
  }

  function gotoNextPage(event) {
    event.preventDefault();
    setPage((prev) => prev + 1);
    GgdataApi.searchedApi(input, page).then((data) => {
      const contents = data.data.RegionMnyFacltStus;
      setRow(contents[1].row);
      setHead(contents[0].head[0]);
    });
    console.log(page);
  }

  function gotoPrevPage() {
    setPage((prev) => prev - 1);
    GgdataApi.searchedApi(input, page).then((data) => {
      const contents = data.data.RegionMnyFacltStus;
      setRow(contents[1].row);
      setHead(contents[0].head[0]);
    });
    console.log(page);
  }

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
        <Appstyled>검색어가 없거나, 결과가 없습니다💨</Appstyled>
      )}
      <Footer />
      {page > 1 ? <button onClick={gotoPrevPage}>◀</button> : null}
      {page ? <button onClick={gotoNextPage}>▶</button> : null}
    </div>
  );
}

export default App;
