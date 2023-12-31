import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  FETCH_PRODUCT,
} from "./ProductWrite.queries";
import ProductWriteUI from "./ProductWrite.presenter";

export default function ProductWrite(props) {
  // 백엔드에서 가져올 데이터 state로 정의
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();

  // Mutation API
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query._id },
  });

  // 제품 등록 버튼 이벤트
  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: name,
            detail: detail,
            price: Number(price),
          },
        },
      });
      router.push(`/08/products/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error);
    }
  };

  // 제품 수정 버튼 이벤트
  const onClickUpdate = async () => {
    // const myVariablesId = { productId : router.query._id };

    // const myVariables = { _id : router.query._id};
    const myVariables = {};

    if (name) myVariables.name = name;
    if (detail) myVariables.detail = detail;
    if (price) myVariables.price = Number(price);

    console.log(myVariables);
    // 수정
    try {
      const result = await updateProduct({
        variables: {
          productId: router.query._id,
          // productId: myVariablesId,
          updateProductInput: myVariables,
          //   {
          //   name: name,
          //   detail: detail,
          //   price: Number(price),
          // },
        },
      });
      router.push(`/08/products/${result.data.updateProduct._id}`);
      // console.log(result);
    } catch (error) {
      alert(error);
    }
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <div>========== ProductWrite Container ==========</div>
      <ProductWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        isEdit={props.isEdit}
        data={data}
      />
      <div>========== ProductWrite Container ==========</div>
    </>
  );
}
