import { type ChangeEvent, useRef } from "react";
import Uploads01UI from "./Uploads01.presenter";
import { checkValidation } from "../../../src/commons/libraries/validation";
import type { IUploads01Props } from "./types";

export default function Uploads01(props: IUploads01Props): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);
  // 상위 컴포넌트에서 배열 state로 관리하기 때문에
  // 기존에 각각 url을 state로 저장해서 사용했던 부분을 주석처리합니다.
  // const [fileUrl, setFileUrl] = useState("");

  function onClickUpload(): void {
    fileRef.current?.click();
  }

  async function onChangeFile(
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> {
    const file: any = event.target.files?.[0];
    if (!checkValidation(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      // setFileUrl(data.target?.result as string);

      // 파일 자체, 부모에서 map으로 뿌려줄 때의 인덱스, 파일을 읽어서 얻은 미리보기 url
      props.onChangeFiles(file, props.index, data.target?.result as string);
    };
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      // 미리보기 url이 담겨있는 배열에서 해당 위치의 값을 보내줍니다.
      fileUrl={props.fileUrls[props.index]}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
