# Relax Moment

Momentum 컨셉의 개인 대시보드 서비스.

사용자의 편안하고 긍정적인 기분을 고취시킴과 함께 생산성을 높일 수 있는 기능들을 제공합니다.

👉 https://itso-wavy.github.io/Relax-Moment/

**▼ 주요기능**

- 로그인
- 사전 검색
- sns 바로가기 링크
- 긍정적인 에너지를 주는 랜덤 갤러리
- 그림으로 자기 컨디션을 객관화할 수 있는 그림판
- 날씨 정보
- 아날로그 시계
- 휴식을 위한 티브레이크 타이머
- 할일 관리

| <img width=450 src='https://user-images.githubusercontent.com/108520997/224241044-5ef8a86c-f1ec-4b87-8203-1c44e7f97aa4.png'> | <img width=300 src='https://user-images.githubusercontent.com/108520997/224241052-9a19c929-e7c6-46be-969f-c3bf9a36bbe3.png'> | <img width=150 src='https://user-images.githubusercontent.com/108520997/224241053-963b8cd3-0894-4886-b8c1-4b438821d7d8.jpg'> |
| :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|                                                           데스크탑                                                           |                                                            타블렛                                                            |                                                            모바일                                                            |

**[목차]**

- [Relax Moment](#relax-moment)
  - [1. 목표](#1-목표)
  - [2. 개발 환경](#2-개발-환경)
    - [- 기간:](#--기간)
    - [- 개발 도구:](#--개발-도구)
  - [3. 기능 명세](#3-기능-명세)
    - [1) 로그인/로그아웃](#1-로그인로그아웃)
    - [2) 상단바](#2-상단바)
    - [3) 갤러리](#3-갤러리)
    - [4) 그림판](#4-그림판)
    - [5) 날씨](#5-날씨)
    - [6) 아날로그 시계](#6-아날로그-시계)
    - [7) 타이머](#7-타이머)
    - [8) 투두리스트](#8-투두리스트)
    - [9) 기타](#9-기타)
  - [4. 트러블슈팅](#4-트러블슈팅)
  - [5. 프로젝트를 통해 배운 것](#5-프로젝트를-통해-배운-것)
  - [6. 참고한 자료](#6-참고한-자료)
  - [7. 프로젝트를 마치며](#7-프로젝트를-마치며)

## 1. 목표

- 단기간의 1인 토이 프로젝트
- CSS의 grid와 flex을 적용한 반응형 레이아웃 디자인
- JS의 문법 전반을 사용한 기능 구현

## 2. 개발 환경

### - 기간:

`23/02/27(월) - 23/03/06(월)`

- 02/27(월) - 02/28(화): 기획/디자인
- 03/01(수) - 03/04(토): 기능 구현
- 03/05(일): 스타일
- 03/06(월): 추가 기능+마무리

### - 개발 도구:

![HTML5](https://img.shields.io/badge/HTML5-f16529?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-0091d5?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-f7d800?style=for-the-badge&logo=javascript&logoColor=black)

![Figma](https://img.shields.io/badge/Figma-aa67ff?style=for-the-badge&logo=figma&logoColor=white)
![Todoist](https://img.shields.io/badge/Todoist-de4537?style=for-the-badge&logo=todoist&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-efefef?style=for-the-badge&logo=notion&logoColor=black)

- Unsplash 이미지, Iconify와 직접 제작한 아이콘 사용

## 3. 기능 명세

### 1) 로그인/로그아웃

- localStorage API로 계정 정보 저장
  - 계정 정보: 유저이름, 프로필 사진, 투두리스트
  - 로그아웃시 계정 정보 삭제됨
- FileReader API로 프로필 사진 등록, 저장 가능
- 유저이름 최대 최소 글자수 제한

### 2) 상단바

- 검색어 쿼리를 이용해 네이버 어학사전 검색 결과로 이동
  - 검색어가 없을 시 네이버 어학사전 메인 화면으로 이동
- 트위터/티스토리/깃헙 바로가기 링크

### 3) 갤러리

- 새로고침시 랜덤한 이미지와 인용문이 제공됨
- 변경 버튼을 눌러 직접 변경 가능

### 4) 그림판

- Canvas API로 그림판 구현
- 새 캔버스/지우기/채우기/그리기 기능
  - 채우기 상태로 컬러 선택하고 그림판 드래그시 전체 색상 채우기
  - 버튼 클릭시 채우기(Fill)와 그리기(Draw) 토글
  - 지우기(Erase) 클릭시 그리기(Draw) 토글
- 선의 굵기, 색상 변경 가능
- 그림판 위에서 마우스 모양 변경

### 5) 날씨

- OpenWeatherMap API를 이용한 날씨 정보 제공
- 국가, 지역명 표시. 지역에 따른 현재 기온/체감 기온, 일출/일몰 시간 정보 제공
- API 응답 데이터를 switch문으로 분류하여 날씨 아이콘과 텍스트로 표기
- 위치 확인 불가할 경우 물음표 아이콘과 확인 불가 알림

### 6) 아날로그 시계

- Date 객체를 사용하여 아날로그 형태의 시계 구현
- CSS transform 속성에서 rotate 값으로 표현함

### 7) 타이머

- 아날로그 시계 화면에서 양옆 화살표 버튼 클릭시 드러남
- 짧은 휴식을 위해 3가지 옵션 제공
- 시간 종료 후 깜빡거리는 애니메이션으로 알림
- setTimeout, setInterval, clearInterval 메서드 사용

### 8) 투두리스트

- 등록된 투두 개수 표시
- 투두 완료/미완료/삭제 기능
- 투두 최대 최소 글자수 제한

### 9) 기타

- HTML Validation 통과
- 시멘틱한 마크업 작성

## 4. 트러블슈팅

**1. 프로필 사진을 등록했으나 새로고침 후 사진이 불러지지 않음**

```js
imgInput.addEventListener("change", (e) => {
  localStorage.setItem("profileIMG", e.target.files[0]);
  const image = localStorage.getItem("profileIMG");
  const src = URL.createObjectURL(image);
  profileImg.src = src;
});
```

- 원인 추론: `const src = URL.createObjectURL(image);`에서 이미지의 URL이 저장되지 않아 발생하는 문제로 예상

> [MDN](https://developer.mozilla.org/ko/docs/Web/API/URL/createObjectURL): URL.createObjectURL() 정적 메서드는 주어진 객체를 가리키는 URL을 DOMString으로 반환합니다. 해당 URL은 자신을 생성한 창의 document가 사라지면 함께 무효화됩니다.

- 해결 가설: 이미지 파일을 문자열로 변형하여 localStorage에 저장하고 불러올 수 있으면서도 재랜더링시 사라지지 않는 방법을 검색. FileReader API의 readAsDataURL() 메서드를 사용

- 결과: 생각한대로 작동함. 문제 해결

**2. 컨테이너의 높이값을 화면 크기만큼 지정했는데 스크롤바가 생김**

- 원인 추론: grid-template에 열을 fr 단위로 지정했는데 동일한 크기만큼 적용되지 않는 듯 함

- 해결 가설: 사이즈가 오버된 구획을 찾아내어 크기 수정. 아날로그 시계 구현시 임의로 px 사이즈가 적용되어 있었음

- 결과: 세로 스크롤바 사라지고 화면 크기와 상관없이 전체 화면을 차지하게 됨

## 5. 프로젝트를 통해 배운 것

- [FileReader API](https://itsowavy.tistory.com/308)
- [JS 이벤트](https://itsowavy.tistory.com/309)
- [Date 객체](https://itsowavy.tistory.com/310)
- [DOM 텍스트 노드 조작](https://itsowavy.tistory.com/311)
- [window.navigator](https://itsowavy.tistory.com/313)
- [localStorage](https://itsowavy.tistory.com/319)
- [CSS grid layout](https://itsowavy.tistory.com/315)
- [CSS box-shadow](https://itsowavy.tistory.com/322)
- [CSS animation](https://itsowavy.tistory.com/312)
- [CSS 텍스트가 넘칠 때](https://itsowavy.tistory.com/316)
- [접근성](https://itsowavy.tistory.com/314)
- [시멘틱 태그](https://itsowavy.tistory.com/317)
- 페이지 이동: `location.href = link;`
- svg 파일 조작법 일부, 피그마 아이콘 제작
- README에 뱃지 다는 법😝

## 6. 참고한 자료

- 👨🏻‍🏫 노마드코더 JS 과정
  - 바닐라 JS로 크롬 앱 만들기: [투두리스트](https://nomadcoders.co/javascript-for-beginners?gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbhacypt2aHYaPC44uETBssbStGnlI0evtY61-vjTUFtt9Ie_hhcwFUaAjCWEALw_wcB)
  - 바닐라 JS로 그림 앱 만들기: [Canvas API](https://nomadcoders.co/javascript-for-beginners-2)
- 📑 제로초 블로그: [File API](https://www.zerocho.com/category/HTML&DOM/post/592827558653d6001804a0a5)
- 📗 반응형 웹디자인(이단 마콧, 2017): 초기 반응형 웹의 기본 원리와 개념이 설명되어 있다. 다만 최신 레이아웃에 적용하기에는 실전 스킬 측면이 아쉬웠다.
- 📗 Do it! 반응형 웹 페이지 만들기(김운아, 2021)

## 7. 프로젝트를 마치며

- 프로필 사진 input에서 `<input type="file" accept="image/*">`으로 업로드 파일 유형을 제한하려고 했으나 유효성 검사를 통과하지 못하여 accept 속성을 삭제했다. 마크업이 아닌 다른 방법으로 유형을 검사하는 방법을 찾아 적용하는 게 좋겠다.

- 현대적이고 실전적인 반응형 스타일링 기술을 익혀서 능숙하게 적용하고 싶다.

- JS의 전반적인 문법을 다뤄보았다. 다음번엔 비교적 실무적인 컨셉의 프로젝트에서 CRUD, API 사용, 에러 처리 혹은 새로운 프레임워크 적용 등을 공부해보려 한다.
