import React from "react";
import { KakaoMap, Marker } from "react-kakao-maps";

export default function Carddetail({ item }) {
  const url =
    "//dapi.kakao.com/v2/maps/sdk.js?appkey=bc03c06c7d77eb8b2aa132291864fe6b";
  console.log(item);
  return (
    <div>
      <KakaoMap
        apiUrl={url}
        width="500px"
        height="700px"
        level={2}
        lat={item.REFINE_WGS84_LAT}
        lng={item.REFINE_WGS84_LOGT}
      >
        <Marker lat={37.490826} lng={127.03342}></Marker>
      </KakaoMap>
    </div>
  );
}
