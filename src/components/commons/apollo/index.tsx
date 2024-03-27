import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";

interface IApolloSetting {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSetting): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    // const result = localStorage.getItem("accessToken");
    // setAccessToken(result ?? "");
    void aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2. 리프레시 토큰으로 accessToken 재발급 받기
        }
      }
    }
    // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
  });

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
