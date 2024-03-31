import { useState } from "react";

export default function Memoization(): JSX.Element {
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const onClickLet = (): void => {
    console.log(countLet);
    countLet = countLet + 1;
  };
  const onClickState = (): void => {
    console.log(countState);
    setCountState((prev) => prev + 1);
  };
  return (
    <>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickLet}>onClickLet</button>
      <div>카운트(state): {countState}</div>
      <button onClick={onClickState}>onClickState</button>
    </>
  );
}
