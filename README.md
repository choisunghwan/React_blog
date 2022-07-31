리액트 기초 : 블로그 프로젝트 

1. 리액트 프로젝트 생성은 터미널을 열고 'npx create-react-app 프로젝트명' 입력
* npx: 라이브러리 설치 도와주는 명령어 (nodejs 설치 잘되어 있어야 이용 가능)

Q 리액트 사용하는데 nodejs 설치하는 이유?
A create-react-app 라이브러리 설치하기 위해서. 
nodejs 설치하면 npm 이라는 툴을 이용가능해서.

2. App.js 는 메인페이지에 들어갈 HTML 짜는곳.
public/index.html 이 메인페이지.

=> app.js 파일을 index.html 파일에다가 넣어주는 것.
index.js가 넣어주는걸 도와준다.

3. public : static 파일 보관함.(이미지,favicon 같은거)

4. src : 소스코드 보관함.

5. package.json : 설치한 라이브러리 목록


---

리액트 사용하는 이유
1. 리액트에서 데이터바인딩이 쉽기 때문.(데이터바인딩: 데이터를 html에 꽂아넣는것.)

데이터는 1. 변수에 넣거나 2. state에 넣거나
*state : 
1. 변수 대신 쓰는 데이터 저장 공간.
2. useState()를 이용해 만들어야함. [state데이터, state데이터 변경함수]
3. 문자, 숫자, array, object 다 저장가능

state에 데이터 저장해놓는 이유?
1. 웹이 App처럼 동작하게 만들고 싶어서
2. state는 변경되면 html이 자동으로 재렌더링이 된다.(새로고침 x)
3. 자주 바뀌는 중요한 데이터는 그래서 변수 말고 state로 저장해서 쓰기!

---
array, object state 데이터 수정방법
1. 일단 변경함수 써야함
2. 변경함수(대체할 데이터)
3. state는 직접 건들면 안됨
4. deep copy해서 그걸 건들어야 함.

=>
1. 일단 기존 state 카피본 만들고
2. 카피본에 수정사항 반영하고
3. 변경함수()에 집어넣기.

---
html 을 줄여서 쓸 수 있는 방법
1. 리액트의 component 문법

component 만드는 법
1. 함수 만들고 이름 짓고
2. 축약을 원하는 html 넣고
3. 원하는곳에서 <함수명/>

Component 유의사항
1. 이름은 대문자
2. return()안에 있는건 태그하나로 묶어야함


참고: https://www.youtube.com/playlist?list=PLfLgtT94nNq1e6tr4sm2eH6ZZC2jcqGOy
![image](https://user-images.githubusercontent.com/33335762/182030720-33893221-fd2f-4978-9a3f-f9995616480c.png)

