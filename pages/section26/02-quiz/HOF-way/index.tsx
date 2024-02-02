// import type { ChangeEvent } from "react";

export default function HOFWay(): JSX.Element {
  const onClickButton = (str: string) => (num: number) => () => {
    console.log(str);
    console.log(num);
  };

  // function onClickButton(str: string) {
  //   return function (num: number) {
  //     return function (event: ChangeEvent<HTMLButtonElement>) {
  //       console.log(str);
  //       console.log(num);
  //     };
  //   };
  // }

  return (
    <>
      <button onClick={onClickButton("버튼이다")(123)}>버튼</button>
    </>
  );
}
