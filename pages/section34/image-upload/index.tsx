import { useState } from "react";
import type { ChangeEvent } from "react";

export default function ImageUpload(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file === undefined) return;
    console.log(file, "=> 파일까지 나옴");

    // 1. 임시 Url 생성
    const result = URL.createObjectURL(file);
    console.log(result);
  };
  return (
    <>
      작성자:
      <input type="text" />
      비밀번호:
      <input type="password" />
      제목:
      <input type="text" />
      내용:
      <input type="text" />
      이미지:
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} alt="" />
    </>
  );
}
