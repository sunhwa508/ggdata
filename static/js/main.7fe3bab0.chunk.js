(this.webpackJsonpgyunggido=this.webpackJsonpgyunggido||[]).push([[0],{128:function(n,e,t){n.exports=t(302)},133:function(n,e,t){},302:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(123),c=t.n(i),o=(t(133),t(19)),l=t(58),u=t.n(l),s=t(15),p=t(7);function f(){var n=Object(s.a)(["\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return f=function(){return n},n}function d(){var n=Object(s.a)(['\n  cursor: pointer;\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  font-family: "Song Myung", serif;\n  font-size: 2rem;\n  transition: all 0.3s cubic-bezier(0.5, 2, 0.25, 1);\n\n  padding: 20px;\n\n  @media (max-width: 700px) {\n    font-size: 1em;\n    padding: 20px;\n  }\n  input {\n    border: 5px solid gray;\n  }\n  button {\n    width: 20%;\n    box-sizing: content-box;\n  }\n  input,\n  button {\n    padding: 10px;\n    font-size: 2rem;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    border: none;\n    border-radius: 10px;\n    @media (max-width: 700px) {\n      font-size: 1rem;\n    }\n  }\n']);return d=function(){return n},n}var m=p.default.form(d()),b=p.default.h1(f()),g=t(82);function x(){var n=Object(s.a)([""]);return x=function(){return n},n}function h(){var n=Object(s.a)(['\n  cursor: pointer;\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: "Roboto", sans-serif;\n  transition: all 0.3s cubic-bezier(0.5, 2, 0.25, 1);\n  padding: 10px;\n  margin-bottom: 5px;\n\n  div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    min-width: 600px;\n  }\n\n  h3,\n  h2 {\n    margin: 0;\n    width: 100%;\n    padding: 5px 0;\n\n    @media (max-width: 700px) {\n      font-size: 1em;\n      padding: 0;\n    }\n  }\n\n  &:hover {\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  }\n']);return h=function(){return n},n}var E=p.default.div(h());p.default.div(x());function v(n){var e=n.item,t=function(n){var e=Object(a.useState)(n),t=Object(o.a)(e,2),r=t[0],i=t[1];return[r,function(){i((function(n){return!n}))}]}(!1),i=Object(o.a)(t,2),c=i[0],l=i[1];return r.a.createElement(E,{style:{backgroundColor:c?"white":"lightgray"}},e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{onClick:l},e.CMPNM_NM),r.a.createElement("h3",null,e.INDUTYPE_NM),r.a.createElement("h3",null,e.REFINE_LOTNO_ADDR)),e&&c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.KakaoMap,{id:e.SIGUN_CD,apiUrl:"https://dapi.kakao.com/v2/maps/sdk.js?appkey=bc03c06c7d77eb8b2aa132291864fe6b",width:"205px",height:"205px",level:2,lat:e.REFINE_WGS84_LAT,lng:e.REFINE_WGS84_LOGT},r.a.createElement(g.Marker,{lat:e.REFINE_WGS84_LAT,lng:e.REFINE_WGS84_LOGT})),r.a.createElement("p",null,"\ub9c8\uc9c0\ub9c9 \uc5c5\ub85c\ub4dc ",e.DATA_STD_DE)))}function y(){var n=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n\n  p {\n    text-align: right;\n  }\n"]);return y=function(){return n},n}var w=p.default.div(y());function j(n){var e=n.row,t=n.head;return r.a.createElement(w,null,t&&r.a.createElement("p",null,"\uac80\uc0c9\uacb0\uacfc\u2753",t.list_total_count,"\uac74"),e.map((function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{item:n}))})))}function O(){var n=Object(s.a)(["\n  html, body {\n    margin: 0;\n    padding: 40px;\n    background-color:#f9f9f9;\n\n    @media (max-width: 700px) {\n\n      padding: 5px;\n    }\n  }\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  p,h2,h1,input,button{\n    font-family: 'Song Myung', serif;\n  }\n  "]);return O=function(){return n},n}var S=Object(p.createGlobalStyle)(O());function _(){var n=Object(s.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  flex-direction: column;\n  width: 100%;\n  margin: 0;\n  padding: 10px;\n  z-index: 100;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n  p {\n    color: #cccccc;\n    margin-top: 7px;\n  }\n\n  .icons a {\n    margin: 10px;\n    cursor: pointer;\n    color: rgb(172, 168, 168);\n    font-size: 2rem;\n    transition: 0.5s;\n  }\n  .icons:hover a:not(:hover) {\n    opacity: 0.1;\n  }\n  .icons a:hover {\n    transform: translateY(-10px);\n    color: black;\n  }\n"]);return _=function(){return n},n}var N=p.default.footer(_());function k(){return r.a.createElement(N,null,r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"https://www.youtube.com/channel/UCXwBCeiqjOezNcpplFuHX9g?view_as=subscriber"},r.a.createElement("i",{className:"fab fa-youtube"})),r.a.createElement("a",{href:"https://codesandbox.io/u/sunhwa508"},r.a.createElement("i",{className:"fab fa-codepen"})),r.a.createElement("a",{href:"https://github.com/sunhwa508"},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("p",null,"@ 2020 Sunhwa Lee."))}var M=function(){var n,e=Object(a.useState)(""),t=Object(o.a)(e,2),i=(t[0],t[1]),c=Object(a.useState)(),l=Object(o.a)(c,2),s=l[0],p=l[1],f=Object(a.useState)(),d=Object(o.a)(f,2),g=d[0],x=d[1],h=Object(a.useState)(),E=Object(o.a)(h,2),v=E[0],y=E[1],w=u.a.create({baseURL:"https://openapi.gg.go.kr/RegionMnyFacltStus",params:{KEY:"c3d322c1e2fc4cf0a90790ca45422920",Type:"json"},cancelToken:new u.a.CancelToken((function(e){return n=e}))});return console.log(g),r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(b,null,"\uc9c0\uc5ed\ud654\ud3d0\uc0ac\uc6a9\ub418\ub098\uc694?\ud83d\udca6"),r.a.createElement(m,{onSubmit:function(e){return e.preventDefault(),w.get("/",{params:{CMPNM_NM:s}}).then((function(n){var e=n.data.RegionMnyFacltStus;y(e[1].row),x(e[0].head[0])})).catch((function(n){u.a.isCancel(n)||(console.log("error"),i(""))})),function(){return n()}}},r.a.createElement("input",{type:"text",id:"city",placeholder:"\uc0c1\ud638\uba85\uc744 \uc785\ub825\ud558\uc138\uc694",onChange:function(n){p(n.target.value)}}),r.a.createElement("button",null,"\uac80\uc0c9")),v?r.a.createElement(j,{row:v,head:g}):r.a.createElement(m,null,"\ucc3e\uc744\uc218\uac00\uc5c6\uc2b5\ub2c8\ub354..\ud83d\udca8"),r.a.createElement(k,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.7fe3bab0.chunk.js.map