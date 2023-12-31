import { RedInput, BlueBtn } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      <div>@@@@@@@@@@ 여기는 프리젠터 입니다 @@@@@@@@@@</div>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} />
      제목: <input type="text" onChange={props.onChangeTitle} />
      내용: <input type="text" onChange={props.onChangeContents} />
      <BlueBtn onClick={props.onClickSubmit} isActive={props.isActive}>
        GRAPHQL-API 요청하기
      </BlueBtn>
      <div>@@@@@@@@@@ 여기는 프리젠터 입니다 @@@@@@@@@@</div>
    </div>
  );
}
