import { type ChangeEvent, useState, useRef } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { gql, useMutation } from "@apollo/client";
import { checkValidation } from "../../../src/commons/libraries/validation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function UploadItem(): JSX.Element {
  const [isUpload, setIsUpload] = useState(false);

  const onClickImage = (): void => {
    fileRef.current?.click();
  };

  return (
    <>
      <div style={{ width: "150px", height: "150px" }}>
        {!isUpload && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "10px",
              width: "150px",
              height: "150px",
              backgroundColor: "#ccc",
              cursor: "pointer",
            }}
            onClick={onClickImage}
          >
            <div>upload</div>
            <div>+</div>
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
              onChange={onChangeFile}
            />
          </div>
        )}
        {/* 덮어 씌워지는 IMG */}
        {isUpload && (
          <img
            style={{ width: "150px", height: "150px" }}
            src={`http://storage.googleapis.com/${imageUrl}`}
          />
        )}
      </div>
    </>
  );
}
