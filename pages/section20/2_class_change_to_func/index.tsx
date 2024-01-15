import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MyComponent(): JSX.Element {
  //   state = {
  //     count: 0,
  //   };
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componentDidMount() {
  //   console.log("컴포넌트가 마운트됐습니다~");
  // }

  // componentDidUpdate() {
  //   console.log("컴포넌트가 변경됐습니다~");
  // }

  // componentWillUnmount() {
  //   alert("컴포넌트가 제거됩니다~");
  // }

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  }, [count]);

  useEffect(() => {
    return () => {
      alert("컴포넌트가 제거됩니다~");
    };
  }, []);

  const onClickCounter = (): void => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  // render() {
  return (
    <>
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
  // }
}
