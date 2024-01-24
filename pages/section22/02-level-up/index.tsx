import { type ChangeEvent, useRef, useState } from "react";
import { checkValidation } from "../../../src/commons/libraries/validation";
import { gql, useMutation } from "@apollo/client";
import UploadItem from "./uploadItem";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function LevelUpPage(): JSX.Element {
  const [createBoard] = useMutation(CREATE_BOARD);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [imageUrl, setImageUrl] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];

    const isValid = checkValidation(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    setImageUrl(result.data?.uploadFile.url ?? "");

    console.log(imageUrl);
    setIsUpload(true);
  };
  // Ref

  const onClickSubmit = async (): Promise<void> => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };
  return (
    <div style={{ display: "flex" }}>
      {new Array(3).fill(1).map((index) => (
        <UploadItem key={index} />
      ))}

      <button onClick={onClickSubmit} onChangeFile={onChangeFile}>
        GRAPHQL-API 요청하기
      </button>
    </div>
  );
}
