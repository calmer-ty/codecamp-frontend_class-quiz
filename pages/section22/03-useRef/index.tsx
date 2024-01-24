import { useEffect, useRef } from "react";

export default function useRefQuiz(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onFocusInput = (): void => {
      inputRef.current?.focus();
    };
    onFocusInput();
  });

  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
}
