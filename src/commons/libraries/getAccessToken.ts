import { GraphQLClient, gql } from "graphql-request";
import type { IMutation } from "../types/generated/types";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async (): Promise<string | undefined> => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",
      {
        credentials: "include",
      }
    );
    const result =
      await graphQLClient.request<Pick<IMutation, "restoreAccessToken">>(
        RESTORE_ACCESS_TOKEN
      );
    // RESTORE_ACCESS_TOKEN이라는 gql을 요청한 뒤 반환되는 결과값을 result에 담는다.
    const newAccessToken = result?.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
