import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_PRODUCTS = gql`
  query {
    fetchProducts {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      message
    }
  }
`;

export default function ClassQuiz_07() {
  const { data } = useQuery(FETCH_PRODUCTS);

  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickDeleteProduct = (event) => {
    deleteProduct({
      variables: { productId: event.target.id },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
    console.log(event.target.id);
  };

  console.log(data?.fetchProducts.map((el) => el));
  return (
    <div>
      {data?.fetchProducts.map((el) => (
        <div key={el._id}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.seller}</span>
          <span style={{ margin: "10px" }}>{el.name}</span>
          <span style={{ margin: "10px" }}>{el.detail}</span>
          <span style={{ margin: "10px" }}>{el.price}</span>
          <span style={{ margin: "10px" }}>{el.createdAt}</span>
          <span>
            <button id={el._id} onClick={onClickDeleteProduct}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
