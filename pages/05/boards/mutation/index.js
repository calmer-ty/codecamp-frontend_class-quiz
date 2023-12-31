import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT = gql`
    mutation createProduct(
        $seller: String
        $createProductInput: CreateProductInput!
    ){
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`
export default function ClassQuiz_05() {
    const router = useRouter();
    const [seller, setSeller] = useState();
    const [name, setName] = useState();
    const [detail, setDetail] = useState();
    const [price, setPrice] = useState();

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        try {
            const result = await createProduct({
                variables: {
                    seller: seller,
                    createProductInput: {
                        name: name,
                        detail: detail,
                        price: Number(price)
                    }
                }
            })
            console.log(result)
            console.log(result.data.createProduct._id)
            router.push(`/05/boards/mutation-moved/${result.data.createProduct._id}`)
        } catch (error) {
            alert(error.message)
        }
        <img src="" alt="" />
    }

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
        <div>
            판매자: <input type="text" onChange={onChangeSeller} />
            제품 이름: <input type="text" onChange={onChangeName} />
            제품 설명: <input type="text" onChange={onChangeDetail} />
            제품 가격: <input type="text" onChange={onChangePrice} />

            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>

        </div>
    );
}