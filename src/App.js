import React, { useState } from "react";
import { Appstyled, Titlestyled, Buttonstyled } from "./app.styled";
import Card from "./Card/card";
import { GlobalStyles } from "./global";
import Footer from "./footer/footer";
import { GgdataApi } from "./api";
function App() {
  const [searched, setSearched] = useState("");
  const [input, setInput] = useState();
  const [head, setHead] = useState();
  const [row, setRow] = useState();
  const [page, setPage] = useState(null);
  const [total, setTotal] = useState(0);
  const [lastPage, setlastPage] = useState(false);
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
        setPage(1);
        setTotal(contents[0].head[0].list_total_count);
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
    setlastPage(page + 1 >= Math.ceil(total / 15));
    GgdataApi.searchedApi(input, page + 1).then((data) => {
      const contents = data.data.RegionMnyFacltStus;
      if (contents) {
        setRow(contents[1].row);
        setHead(contents[0].head[0]);
      } else {
        setRow(null);
      }
    });
    console.log(page);
  }
  function gotoPrevPage() {
    setPage((prev) => prev - 1);
    setlastPage(page - 1 >= Math.ceil(total / 15));
    GgdataApi.searchedApi(input, page - 1).then((data) => {
      const contents = data.data.RegionMnyFacltStus;
      setRow(contents[1].row);
      setHead(contents[0].head[0]);
    });
    console.log(page);
  }
  return (
    <div>
      <GlobalStyles />
      <Titlestyled>지역화폐사용되나요?</Titlestyled>
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
        <>
          <Card row={row} head={head} />
          <h4 style={{ float: "right" }}>Page: {page}</h4>
        </>
      ) : (
        <Appstyled>검색어가 없거나, 결과가 없습니다</Appstyled>
      )}
      <Footer />
      <Buttonstyled>
        {page > 1 ? <button onClick={gotoPrevPage}>◀</button> : null}
        {page && row && !lastPage ? (
          <button onClick={gotoNextPage}>▶</button>
        ) : null}
      </Buttonstyled>
    </div>
  );
}
export default App;
