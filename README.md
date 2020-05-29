

<h1>🛒지역화폐사용처 안내앱🛒</h1>


![Group 5 (1)](https://user-images.githubusercontent.com/61695175/83236488-8e3e3d80-a1ce-11ea-97d3-340a5bdf528c.png)

## 



## Getting Started


### ✔Prerequisites
yarn global add create-react-app yarn을 사용해 리액트 프로젝트 앱 생성하기<br/>
AJAX통신을 용이하게 도와줄 axios라이브러리 사용<br/>
https://openapi.gg.go.kr/RegionMnyFacltStus 회원가입후 개인 apikey 생성<br/>
//dapi.kakao.com/ 카카오맵을 사용할 예정이므로, 카카오개발자페이지 가입 후 , <br/>api생성후 플랫폼에 url등록 테스트용이라면 => ex)localhost:3000 <br/>
### ✔Installing
react환경구축 (yarn 사용해보기)
패키지 매니저인 yarn 과 npm 마치 티몬과 쿠팡의 비교대상인마냥 큰 차이는 없는데요, <br/>
사용빈도로 본다면 npm이 yarn보다 2배정도 더 사용되고 있다고하네요 ^^ 한때,,
npm의 속도가 비교적 느렸던 그..때, npm을 보완하고자 만든게 facebook의 yarn패키지 툴이라고 하는데요, <br/>
npm과 yarn의 속도 측면에서는 ..아주 미세한 차이로 yarn의 설치속도가 더 빨랐다고 합니다,
하지만 이는 아주 미세한 차이이며 npm이 점점 그 간격을 좁히고 있따고하니.. 결론

아무거나 쓰자.
npm만 줄곧 써오던 저지만 이번 프로젝트는 yarn 패키지 매니저를 사용해 보았는데요, <br/>

https://classic.yarnpkg.com/en/ yarn installer을 설치해주면 끝,

yarn버전은 npm과 다르게 라이브러리 설치 시 add를 사용합니다
yarn add "dependencies's name"


yarn start 


## ✔KAKAO MAP, 공공API long, lat 연동하기, axios.create시도
코드에서 axios get(url)을 통해 키워드 데이터를 추출할 수도 있지만.
<pre><code>
 const api = axios.create({
    baseURL: "https://openapi.gg.go.kr/RegionMnyFacltStus",
    params: {
      KEY: "MY_API_KEY",
      Type: "json",
    },
    cancelToken: new axios.CancelToken((c) => (cancel = c)),
  });
</pre></code>
앞서 api 안에서 url, params들을 미리 정리해두어 데이터를 받는 함수를 간추려 표현할 수 있다.

<pre><code>
  function handleKeyPress(event) {
    event.preventDefault();
    api
      .get("/", {
        params: {
          CMPNM_NM: input,
        },
      })
      </pre></code>
이처럼 미리 선언한 api를 이용해 편리하게 데이터를 얻음,
<pre><code>
 .then((data) => {
        const contents = data.data.RegionMnyFacltStus;
        setRow(contents[1].row);
        setHead(contents[0].head[0]);
      })
</pre></code>
데이터 부분은 전체검색결과(건수) 를불러오는 contents[0].head[0] 부분은 Head State로 <br/>
나머지 모든 데이터(상호명, 주소, 업로드날짜 등등..) 은 setRow State에 보관하였다. 


react-kakao-map npm 설치
yarn add react-kakao-map
실제 카카오 개발자 홈페이지 카카오맵사용 명세에는 javascript만 명시되어있을뿐, react관련 사용법은 잘 나와있지 않았다,<br/>
하지만. 몇번의 구글링으로,, 이미 많은 분들이 react사용에 간편한 npm들을 미리 배포중이셨다  😍😍

사용법은 정말 간단했다 라이브러리설치후, 문서에 나온 방법처럼, 

<KakaoMap//제공된 kakaomapcomponent<br/>
id={item.SIGUN_CD}  apiUrl={url} width="240px"height="240px" level={2} lat={item.REFINE_WGS84_LAT}lng={item.REFINE_WGS84_LOGT}>
<br/> <Marker/제공된 kakaomap marker component  lat={item.REFINE_WGS84_LAT}  lng={item.REFINE_WGS84_LOGT}  ></Marker> </KakaoMap>

지도를 표현하는 kakaoMap 컴포넌트와  주소(지점)에 MARK해주는 MARK(gps아이콘같이 생긴..)가 지원되었고<br/>
내가 원하는 기능이 ..이미 다 구현되었다. lat, lng props에는 미리 받아두었던 공공 api 에서 가져온 lat, lng값을 각각 주었다. 

💢💢주의사항 1시간동안 찾아해맸던 ,, 버그아닌 버그...
사실 이 프로젝트는 간단한 사이드프젝임에도 불구하고, 평소와 다를바 없이 작동은 순탄하게 진행되지 않았고,, <br/>
npm를 지웠다가 설치를 반복,, 다른 script도 많이 부쳤다 떼어냈었다.
하지만 react-kakao-map 라이브러리가 작동안된 이유는 바로,, index.html에 

 <script
      type="text/javascript"
      src="//dapi.kakao.com/v2/maps/sdk.js?appkey="MY_KEY""
    ></script>
이 스크립트가 항상  <div id="root"></div> 내 app컴포넌트 위에 위치하여야 데이터를 받을 수가 있었던것이었다. <br/>
혹시 .. 작동이 되지 않는다면 이부분도 체크해보길 바란다. 
또한 카카오 개발자 웹사이트 플랫폼 url등록도 꼭 확인! 💦💦
## And coding style tests
styled-components 적용
아무리 작은 프로젝트라 하더라도 이쪽에서 변경한 h2이 저쪽에서 적용이 되고, 각 컴포넌트의 title인 h1의 클라스 이름을
무한대로 지을수는 없는 법이다.<br/>
처음 사용은 무지 헷갈리고 css를 js처럼 이용한다는 면에서 복잡하게 느껴졌지만 한두번 사용 후엔 ,, scss css 는 더이상 사용하지 않게 되었다.<br/>
익혀두면 너무너무 편리한 styled-components 라이브러리<br/>
import { 이름 } from "./card.styled";

import styled from "styled-components";

export const Citystyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  p {
    text-align: right;
  }
`;



## ✔Deployment
"homepage": https://sunhwa508.github.io/ggdata/

   "predeploy": "npm run-script build",
    "deploy": "gh-pages -d build"

yarn add gh-pages 설치 후
package.json에 위와같이 홈페이지와 ""scripts" 의 predeploy, deploy 설정 후
yarn deploy를 통해 deploy해준다. 
//yarn 과 npm의 차이 npm 은 npm run deploy 처럼 run을 해주는 반면 yarn은 deploy만 해주면 된다.


## ✔Built With
*  "react-kakao-map", - Kakao map npm 라이브러리 
*  const apiurl = "https://openapi.gg.go.kr/RegionMnyFacltStus","; - The API was provided
* (https://sunhwa508.github.io/ggdata/) - Used to generate RSS Feeds


## ✔Versioning
<ul>
 <li>   "axios": "0.18.0",</li>
  <li>  "gh-pages": "^2.2.0",</li>
   <li> "react": "^16.13.1",</li>
    <li>"react-dom": "^16.13.1",</li>
    <li>"react-kakao-maps": "^0.0.13",</li>
    <li>"react-kakaomap-api": "^0.1.19",</li>
    <li>"react-scripts": "3.4.1",</li>
    <li> "reactstrap": "^8.4.1"</li>
</ul>


## ✔Acknowledgments
지금껏 했던 사이드프로젝트중 실생활에서 사용할수있는 앱을 구현해보았고, 리액트네이티브는 아니지만 모바일에서도 모바일앱처럼<br/>
보여질수 있게끔 반응형 디자인을 하여 제대로된 웹앱을 만들어보았다.
kakao map을 연동하는 과정에서 살짝,, 혼돈이 있었지만 그리 오래 끌지 않고 바로 해결되어 만족스러운 프로젝트 결과를 얻을 수 있었다 

