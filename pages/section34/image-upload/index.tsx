import { useState } from "react";
import type { ChangeEvent } from "react";

export default function ImageUpload(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>();

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file === undefined) return;
    console.log(file, "=> 파일까지 나옴");

    // 1. 임시 Url 생성 내 브라우저만 가능 - 가짜
    const result = URL.createObjectURL(file);
    console.log(result);

    // 2. 임시 Url 생성 다른 브라우저 접근 가능 - 진짜
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event.target?.result);
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target?.result);
        setFile(file);
      }
    };
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
      <img src={imageUrl} />
      {/* <button onClick={onClickSubmit}>등록하기</button> */}
    </>
  );
}
