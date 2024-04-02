import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUpload(): JSX.Element {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
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

  const onClickSubmit = async (): Promise<void> => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목",
          contents: "내용",
          images: [url],
        },
      },
    });
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
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
