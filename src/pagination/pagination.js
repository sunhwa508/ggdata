import React from "react";

export default function pagination(page) {
  function gotoNextPage() {
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
      {page > 1 ? <button onClick={gotoPrevPage}>◀</button> : null}
      {page ? <button onClick={gotoNextPage}>▶</button> : null}
    </div>
  );
}
