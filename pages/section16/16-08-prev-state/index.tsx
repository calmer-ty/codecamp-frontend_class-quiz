import { useState } from "react";

export default function CounterLetDocumentPage(): JSX.Element {
  // let count = 0 // let은 리액트 전용 html에서 변경을 감지하지 못함(따라서, state 써야 됨)
  const [count, setCount] = useState(0);

  function onClickSum(): void {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 2);
    setCount((prev) => prev + 3);
    setCount((prev) => prev + 4);
  }

  return (
    <div>
      <div>결과는: {count}</div>
      <button onClick={onClickSum}>카운트 올리기!!!</button>
    </div>
  );
}
