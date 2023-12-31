import * as S from "./ProductWrite.styles";

export default function ProductWriteUI(props) {
  return (
    <S.Wrapper>
      <div>
        <S.Title>seller:</S.Title>
        <input
          type="text"
          onChange={props.onChangeSeller}
          defaultValue={props.data?.fetchProduct?.seller}
          disabled={props.isEdit ? true : false}
        />
      </div>
      <div>
        <S.Title>name:</S.Title>
        <input
          type="text"
          onChange={props.onChangeName}
          defaultValue={props.data?.fetchProduct?.name}
        />
      </div>
      <div>
        <S.Title>detail:</S.Title>
        <input
          type="text"
          onChange={props.onChangeDetail}
          defaultValue={props.data?.fetchProduct?.detail}
        />
      </div>
      <div>
        <S.Title>price:</S.Title>
        <input
          type="text"
          onChange={props.onChangePrice}
          defaultValue={props.data?.fetchProduct?.price}
        />
      </div>
      <button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
        제품 {props.isEdit ? "수정" : "등록"}
      </button>
    </S.Wrapper>
  );
}
