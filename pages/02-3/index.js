import { useState } from "react";

export default function ClassQuiz02() {
  // 2 state
  const [ num, setNum] = useState('000000');

  function onClickCountUp() {
    // const token = String( Math.floor(Math.random() * 1000000) ).padStart(6,"0");

    // 1
    // document.getElementById('num').innerText = String( Math.floor(Math.random() * 1000000) ).padStart(6,"0");


    // 2 - state
    
    setNum( String( Math.floor(Math.random() * 1000000) ).padStart(6,"0") );

  }
  
  return (
    <div>
      <div id="num">{num}</div>
      <button onClick={onClickCountUp}>인증번호 전송</button>
    </div>
  );
}