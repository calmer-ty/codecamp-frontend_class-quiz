// import { useRecoilState } from "recoil";
// import { isEditState } from "../../../commons/stores";
import RecoilWriteUI from "./RecoilWrite.presenter";

export default function RecoilWrite(): JSX.Element {
  // const [isEdit, setIsEdit] = useRecoilState(isEditState);
  return (
    <>
      {/* <RecoilWriteUI isEdit={isEdit} /> */}
      <RecoilWriteUI />
    </>
  );
}
