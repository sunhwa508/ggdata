(this.webpackJsonpgyunggido=this.webpackJsonpgyunggido||[]).push([[0],{127:function(e,t,a){e.exports=a(302)},132:function(e,t,a){},151:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(120),r=a.n(l),o=(a(132),a(36)),u=a(121),i=a.n(u),s=(a(151),a(122));function p(e){var t=e.item;return console.log(t),c.a.createElement("div",null,t&&c.a.createElement(s.KakaoMap,{apiUrl:"//dapi.kakao.com/v2/maps/sdk.js?appkey=bc03c06c7d77eb8b2aa132291864fe6b",width:"500px",height:"700px",level:2,lat:t.REFINE_WGS84_LAT,lng:t.REFINE_WGS84_LOGT}))}function m(e){var t=e.row;return c.a.createElement("div",null,t.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,e.CMPNM_NM),c.a.createElement("p",null,e.INDUTYPE_NM),c.a.createElement("p",null,e.SIGUN_NM),c.a.createElement("p",null,e.REFINE_LOTNO_ADDR),c.a.createElement(p,{item:e}))})))}var E=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=(t[0],t[1]),l=Object(n.useState)(),r=Object(o.a)(l,2),u=r[0],s=r[1],p=Object(n.useState)(),E=Object(o.a)(p,2),g=E[0],d=E[1],b=Object(n.useState)(),f=Object(o.a)(b,2),h=f[0],M=f[1],N=i.a.create({baseURL:"https://openapi.gg.go.kr/RegionMnyFacltStus",params:{KEY:"c3d322c1e2fc4cf0a90790ca45422920",Type:"json"}});return console.log(h),console.log(g),c.a.createElement("div",null,c.a.createElement("input",{type:"text",id:"city",placeholder:"CITY NAME",onChange:function(e){s(e.target.value)},onKeyPress:function(e){13===e.which&&N.get("/",{params:{CMPNM_NM:u}}).then((function(e){var t=e.data.RegionMnyFacltStus;M(t[1].row),d(t[0].head)})).catch((function(e){console.log("error"),a("")}))}}),h&&c.a.createElement(m,{row:h}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.6248d8dd.chunk.js.map