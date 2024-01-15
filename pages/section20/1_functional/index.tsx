import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Quiz20Num1(): JSX.Element {
  const [isChange, setIsChange] = useState(0);
  const router = useRouter();

  const onClickChange = (): void => {
    setIsChange((prev) => prev + 1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  useEffect(() => {
    console.log("isChange AFTER!!");
    return () => {
      console.log("Bye!!");
    };
  }, [isChange]);

  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
