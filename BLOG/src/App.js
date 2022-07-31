import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학','여자 코트 추천']);
  let [따봉,따봉변경] = useState(0);

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button>  <span onClick={()=>{글제목변경(글제목[3])}}>버튼</span> </button>

      <div className="list">
        <h3> {글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h3>
        <p>7월 31일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>7월 31일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>7월 31일 발행</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;
