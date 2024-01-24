import type { ChangeEvent, RefObject } from "react";

export interface IBoardWriteUI {
  onChangeFiles: (file: File, index: number, url: string) => void;
  fileUrls: string[];
}
export interface IUploads01Props {
  index: number;
  onChangeFiles: any;
  fileUrls: any;
}
export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
