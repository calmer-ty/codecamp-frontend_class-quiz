// import { useState } from "react";

export default function ClassQuiz02() {
  // 1 - let
  let count = 0;

  // 2 state
  // const [ count, setCount] = useState(0);

  function onClickCountUp() {
    // 1 - document
    // const count = Number(document.getElementById("num").innerText) + 1;
    // document.getElementById('num').innerText = count;

    // // 1 - let 
    count += 1;

    // 2 - state
    // setCount( count + 1 );

  }
  
  return (
    <div>
      <div id="num">{count}</div>
      <button onClick={onClickCountUp}>카운트증가~</button>
    </div>
  );
}