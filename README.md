# web-main-page
This is an improved version of project created while taking the VanillaJS Basic class by Nomad Coder.  

## sample
<image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcfFjxz%2Fbtq42zrUuu0%2FkPCaVwakpjXIGfA2deU2O1%2Fimg.png"/>

## 당부의 말씀
https://realcrystal.github.io/web-main-page/ 에서 레포지토리 페이지를 확인할 수 있습니다.
개인 api 키 공개 우려로 깃허브에 올려진 프로젝트에는 api 키가 제외되어 있습니다.  
따라서 **웹페이지 배경과 날씨 정보**를 불러올 수 없는 문제가 발생하며  
이 문제는 아래와 같은 방법으로 로컬에서 소스코드를 수정하여 바로잡을 수 있습니다.
1. 프로젝트 파일을 다운로드 하세요.
2. config.js 파일을 열고 수정하세요.
```javascript
//this is web-main-page/config.js
const config = {
  WT_API_KEY: 'your openweathermap api key',
  BG_API_KEY: 'your unsplash api key'
};
```
각 api키는 아래의 사이트에서 발급받을 수 있습니다.  
https://openweathermap.org/  
https://unsplash.com/developers
  
감사합니다 :)
