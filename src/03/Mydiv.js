import Mydiv1 from './Mydiv1';
import Mydiv2 from './Mydiv2';
import './Mydiv.css';
import { useState } from 'react';

const Mydiv = () =>{ // 함수컴퍼넌트 생성할때 리엑트에서 첫글자 대문자사용
    const rname = 'React';
    let [n, setN] = useState(1);
    const upN =() =>{
     setN(++n);
    }
    //return 필수
    return(
        <>
      <div className="content">
        <div className="header">
          <h1 onClick={upN}> 컴포넌트 예제{rname}{n}</h1>
        </div>
        <div className="main">
          <Mydiv1 user ={rname} n ={n} setN ={setN}/>
          <Mydiv2 user ={rname}n ={n} setN ={setN}/>
        </div>
      </div>
    </>
//사용자 정의 태그
    );
}

export default Mydiv ;

//외부에서 가져가씀