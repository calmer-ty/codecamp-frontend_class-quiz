import { useState } from "react";
import Uploads01 from "./uploads01";
import { Rate } from "antd";

export default function LevelUpPage(): JSX.Element {
  // File 자체를 저장하는 state
  const [files, setFiles] = useState<File[]>([]);
  // File을 읽어 미리보기 url을 저장하는 state
  const [fileUrls, setFileUrls] = useState<string[]>([]);

  const onChangeFiles = (file: File, index: number, url: string): void => {
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
  };
  // console.log([...files]);

  return (
    <>
      <div>
        <span>사진첨부</span>
      </div>
      <div style={{ display: "flex" }}>
        {/* 항상 3개의 컴포넌트가 뿌려집니다.
	      // 이미지를 보여줄지, 추가 버튼을 보여줄지는 안에서 조건부로 구분합니다. */}
        {new Array(3).fill(1).map((data, index) => (
          <Uploads01
            key={`${data}_${index}`}
            index={index}
            onChangeFiles={onChangeFiles}
            fileUrls={fileUrls}
          />
        ))}
      </div>
    </>
  );
}
