export default function BoardCheckUI(props) {
  return (
    <div>
      <div>{props.data?.fetchProduct._id}___페이지</div>
      <div>코드네임: {props.data ? props.data.fetchProduct?._id : "로딩 중 입니다."}</div>
      <div>판매자: {props.data ? props.data.fetchProduct?.seller : "로딩 중 입니다."}</div>
      <div>제품 이름: {props.data ? props.data.fetchProduct?.name : "로딩 중 입니다."}</div>
      <div>
        제품 상세: {props.data ? props.data.fetchProduct?.detail : "로딩 중 입니다."}
      </div>
      <div>
        제품 가격: {props.data ? props.data.fetchProduct?.price : "로딩 중 입니다."}
      </div>
    </div>
  );
}
