import styled from "@emotion/styled";
import { useState } from "react";

export default function ClassQuiz02() {

  // style
  const ErrorMessage = styled.div`
  height: 30px;
    color: red;
  `;

  // 
  // 이메일과 비밀번호 입력창, 비밀번호확인 입력창, 가입하기 버튼 총 4개를 각각 만들어 주세요

  //   4-1) state를 사용해 주세요.
  // 4-2) 가입하기 버튼을 누르면 조건문을 활용하여 에러를 검증해 주세요.
  //           ⇒ 조건1) 이메일에 @가 없으면 에러입니다.
  //           ⇒ 조건2) 비밀번호와 비밀번호확인이 다르면 에러입니다.
  //           ⇒ 조건3) 에러가 없는 입력에 해당하는 state는 에러를 제거(빈값으로 변경) 합니다.
  // 4-3) 발생한 에러를 빨간색으로 입력창 하단에 표기해 주세요.
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [passwordError, setPasswordError] = useState('');



  function onChangeEmail (event) {
    setEmail(event.target.value)
  }
  function onChangePassword (event) {
    setPassword(event.target.value)
  }
  function onChangePassword2 (event) {
    setPassword2(event.target.value)
  }



  function onClickSignUp(event) {
    console.log(password)
    console.log(password2)

    if(password !== password2) {
      setPasswordError("비밀번호가 일치X");
    } else {
      setPasswordError("");
    }

    if(!email.includes('@')) {
      setEmailError("이메일 @가 없습니다");
    } else {
      setEmailError("");
    }

  }

  return (
    <div>
      <div>이메일<input type="text" /></div>
      <ErrorMessage>{emailError}</ErrorMessage>
      <div>비밀번호<input type="password" onChange={onChangePassword} /></div>
      <div>비밀번호 확인<input  type="password" onChange={onChangePassword2} /></div>
      <ErrorMessage>{passwordError}</ErrorMessage>
      <div><button onClick={onClickSignUp}>가입하기</button></div>
      
    </div>
  );
}