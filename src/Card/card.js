import React from "react";
import CardDetail from "../cardDetail/carddetail";
export default function Card({ row }) {
  return (
    <div>
      {row.map((item) => (
        <>
          <h2>{item.CMPNM_NM}</h2>
          <p>{item.INDUTYPE_NM}</p>
          <p>{item.SIGUN_NM}</p>
          <p>{item.REFINE_LOTNO_ADDR}</p>
          <CardDetail item={item} />
        </>
      ))}
    </div>
  );
}
