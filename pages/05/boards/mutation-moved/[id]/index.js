import { useQuery, gql } from "@apollo/client"
import { useRouter } from 'next/router'

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId: $productId){
            _id
            seller
            name
            detail
            price
        }
    }
`

export default function ClassQuiz_05_Moved() {
    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_PRODUCT,{
        variables: {productId: (router.query.id)}
    })

    console.log(data)

    return (
        <div>
            <div>{data?.fetchProduct._id}___페이지</div>
            <div>코드네임: {data ? data.fetchProduct?._id : "로딩 중 입니다."}</div>
            <div>판매자: {data ? data.fetchProduct?.seller : "로딩 중 입니다."}</div>
            <div>제품 이름: {data ? data.fetchProduct?.name : "로딩 중 입니다."}</div>
            <div>제품 상세: {data ? data.fetchProduct?.detail : "로딩 중 입니다."}</div>
            <div>제품 가격: {data ? data.fetchProduct?.price : "로딩 중 입니다."}</div>
        </div>
    )
}