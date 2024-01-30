import { useEffect } from "react";
import RecoilWrite from "../../../../src/components/units/recoil/write/RecoilWrite.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/components/commons/stores";

export default function RecoilEdit(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);
  return (
    <>
      <RecoilWrite />
    </>
  );
}
