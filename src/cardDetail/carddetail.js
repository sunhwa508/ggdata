import React, { useState } from "react";
import { KakaoMap, Marker } from "react-kakao-maps";
import useToggler from "../useToggle";
import { Citydetail, Newsfeed } from "./carddetail.styled";
export default function Carddetail({ item }) {
  const [toggle, Toggler] = useToggler(false);
  const url =
    "https://dapi.kakao.com/v2/maps/sdk.js?appkey=bc03c06c7d77eb8b2aa132291864fe6b";

  return (
    <Citydetail style={{ backgroundColor: toggle ? "white" : "lightgray" }}>
      {item && (
        <>
          <h2 onClick={Toggler}>{item.CMPNM_NM}</h2>
          <h3>{item.INDUTYPE_NM}</h3>
          <h3>{item.REFINE_LOTNO_ADDR}</h3>
        </>
      )}

      {item && toggle && (
        <>
          <KakaoMap
            id={item.SIGUN_CD}
            apiUrl={url}
            width="240px"
            height="240px"
            level={2}
            lat={item.REFINE_WGS84_LAT}
            lng={item.REFINE_WGS84_LOGT}
          >
            <Marker
              lat={item.REFINE_WGS84_LAT}
              lng={item.REFINE_WGS84_LOGT}
            ></Marker>
          </KakaoMap>
          <p>마지막 업로드 {item.DATA_STD_DE}</p>
        </>
      )}
    </Citydetail>
  );
}
