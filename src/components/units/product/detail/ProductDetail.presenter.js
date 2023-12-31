import * as S from "./ProductDetail.styles";

export default function ProductDetailUI(props) {
  return (
    <S.Wrapper>
      <div>
        <S.Title>seller:</S.Title>
        {props.data?.fetchProduct?.seller}
      </div>
      <div>
        <S.Title>name:</S.Title>
        {props.data?.fetchProduct?.name}
      </div>
      <div>
        <S.Title>detail:</S.Title>
        {props.data?.fetchProduct?.detail}
      </div>
      <div>
        <S.Title>price:</S.Title>
        {props.data?.fetchProduct?.price}
      </div>
      <button onClick={props.onClickMoveToProductEdit}>수정하러가기</button>
    </S.Wrapper>
  );
}
