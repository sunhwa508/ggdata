import React, { useState } from "react";
import Carddetail from "../cardDetail/carddetail";
import { Citystyled } from "./card.styled";
export default function Card({ row, head }) {
  return (
    <Citystyled>
      {head && <p>검색결과❓{head.list_total_count}건</p>}
      {row.map((item) => (
        <>
          <Carddetail item={item} />
        </>
      ))}
    </Citystyled>
  );
}
