import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/stores";

export default function RecoilWriteUI(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}
