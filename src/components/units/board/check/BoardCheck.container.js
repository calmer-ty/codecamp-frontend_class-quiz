import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { FETCH_PRODUCT } from './BoardCheck.queries'
import BoardCheckUI from './BoardCheck.presenter'


export default function BoardCheck() {
    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_PRODUCT,{
        variables: {productId: (router.query.id)}
    })

    console.log(data)

  return (
    <BoardCheckUI
      data={data}
    />
  )
}