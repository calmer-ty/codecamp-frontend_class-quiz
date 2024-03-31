import { memo } from "react";

function MemoizationChildPage(): JSX.Element {
  console.log("자식이 랜더링 됩니다!");

  return (
    <>
      <div>=====================================</div>
      <h1>저는 자식 컴포넌트입니다!!!</h1>
      <div>=====================================</div>
    </>
  );
}

export default memo(MemoizationChildPage);
// export default MemoizationWithChildPage;
