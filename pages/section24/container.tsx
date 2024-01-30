import { useState } from "react";
import Presenter from "./presenter";

// container 부분
export default function Container(): JSX.Element {
  // 4.
  const [state, setState] = useState(0);

  const onClickCount = (): void => {
    // setState((qwer) => qwer + 1);
    setState(function (qwer) {
      return qwer + 1;
    });
  };
  return (
    // 1.
    // <>
    //   {/* <Presenter child="철수" /> */}
    //   {Presenter({ child: "영희" })}
    // </>

    // 2.
    // <>
    //   {/* <Presenter child="철수" age={13} /> */}
    //   {/* <Presenter child="철수" age={13} /> */}
    //   {Presenter({ child: "철수", age: 13 })}
    // </>

    // 3.
    // ["철수", "영희", "훈이", "맹구"].map((el, index) => {
    //   console.log(`${el}는 ${index}번째 칸에 들어있습니다.`);
    // })

    // 4.
    <>
      <div>{state}</div>
      <button onClick={onClickCount}>Count</button>
    </>
  );
}
