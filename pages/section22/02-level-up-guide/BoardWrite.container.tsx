import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite(): JSX.Element {
  // File 자체를 저장하는 state
  const [files, setFiles] = useState<File[]>([]);
  // File을 읽어 미리보기 url을 저장하는 state
  const [fileUrls, setFileUrls] = useState<string[]>([]);

  function onChangeFiles(file: File, index: number, url: string): void {
    // 기존 state들을 담아줍니다.
    const newFiles = [...files];
    const newFileUrls = [...fileUrls];

    // 세개의 버튼 중 이미 사진이 들어있는 곳을 클릭했다면 덮어씌워줍니다.
    if (files[index]) {
      newFiles[index] = file;
      newFileUrls[index] = url;
    } else {
      // 빈 곳이라면 맨 뒤에 추가해줍니다.
      newFiles.push(file);
      newFileUrls.push(url);
    }

    // 변경된 배열을 state에 저장해줍니다.
    setFiles([...newFiles]);
    setFileUrls([...newFileUrls]);
  }

  return (
    <BoardWriteUI
      // ...기존 props들을 적어줍니다.
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
    />
  );
}
