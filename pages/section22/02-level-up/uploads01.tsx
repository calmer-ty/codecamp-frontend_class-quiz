import { type ChangeEvent, useRef } from "react";
import { checkValidation } from "../../../src/commons/libraries/validation";
import styled from "@emotion/styled";

const UploadImg = styled.img`
  width: 150px;
  height: 150px;
`;
const UploadButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
`;
const UploadInput = styled.input`
  display: none;
`;

export default function Uploads01(props: any): JSX.Element {
  const fileRef = useRef<HTMLInputElement>(null);

  // 상위 컴포넌트에서 배열 state로 관리하기 때문에
  // 기존에 각각 url을 state로 저장해서 사용했던 부분을 주석처리합니다.
  // const [fileUrl, setFileUrl] = useState("");

  const onClickUpload = (): void => {
    fileRef.current?.click();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];

    const isValid = checkValidation(file);
    if (!isValid) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      // setFileUrl(data.target?.result as string);

      // 파일 자체, 부모에서 map으로 뿌려줄 때의 인덱스, 파일을 읽어서 얻은 미리보기 url
      props.onChangeFiles(file, props.index, data.target?.result as string);
    };

    console.log(fileReader);
  };
  const fileUrl = props.fileUrls[props.index];

  return (
    <>
      {/* // fileUrls 배열에서 해당 인덱스 위치에 값이 있다면 이미지를 보여주고 */}
      {/* // 없다면 추가 버튼을 보여주게 됩니다. */}
      {fileUrl ? (
        <UploadImg onClick={onClickUpload} src={fileUrl} />
      ) : (
        <UploadButton onClick={onClickUpload}>
          <span>+</span>
          <span>Upload</span>
        </UploadButton>
      )}
      <UploadInput type="file" ref={fileRef} onChange={onChangeFile} />
    </>
  );
}
