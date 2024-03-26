import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../../src/commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);

  const onClickLogin = async (): Promise<void> => {
    try {
      // 1. 로그인 뮤테이션 날려서 accessToken 받아오기
      const result = await loginUserExample({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;
      console.log(accessToken);

      // 2. 받아온 accessToken을 globalState에 저장하기
      if (accessToken === undefined) {
        alert("로그인에 실패했습니다. 다시 시도해주세요!");
        return;
      }
      setAccessToken(accessToken);

      // 3. 로그인 성공 페이지로 이동하기
      void router.push("/section30/30-01-login-refreshToken-success");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
