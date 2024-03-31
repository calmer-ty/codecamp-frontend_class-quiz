import { useCallback, useMemo, useState } from "react";

export default function Memoization(): JSX.Element {
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // const onClickLet = (): void => {
  //   console.log(countLet);
  //   countLet = countLet + 1;
  // };

  // useMemo로 변수값 저장
  // const onClickLet = useMemo(() => {
  //   return () => {
  //     console.log(countLet);
  //     countLet = countLet + 1;
  //   };
  // }, []);

  // useCallback 사용
  const onClickLet = useCallback(() => {
    console.log(countLet);
    countLet = countLet + 1;
  }, []);

  // const onClickState = (): void => {
  //   console.log(countState);
  //   setCountState((prev) => prev + 1);
  // };

  // const onClickState = useCallback(() => {
  //   console.log(countState);
  //   setCountState((prev) => prev + 1);
  // }, []);

  // useMemo를 사용하여 State 저장
  // const onClickState = useMemo(
  //   () => () => {
  //     console.log(countState);
  //     setCountState((prev) => prev + 1);
  //   },
  //   []
  // );
  return (
    <>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickLet}>onClickLet</button>
      <div>카운트(state): {countState}</div>
      {/* <button onClick={onClickState}>onClickState</button> */}
      <button
        onClick={useMemo(
          () => () => {
            console.log(countState);
            setCountState((prev) => prev + 1);
          },
          []
        )}
      >
        onClickState
      </button>
    </>
  );
}
