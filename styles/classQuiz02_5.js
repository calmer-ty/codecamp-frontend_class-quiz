import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 640px;
  padding: 0 50px 83px;
  background: url("images/02/bg.png");
`;
export const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  height: 582px;
`;
export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;
export const LogoTitle = styled.span`
  font-size: 60px;
  font-weight: 700;
  color: #FFFFFF;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
  padding: 7px 0;
  border-bottom: 1px solid #7D7D7D;
`;
export const EmailInput = styled.input`
  font-size: 24px;
  color: #FFFFFF;
  background-color: transparent;
`;
export const PasswordInput = styled.input`
  font-size: 24px;
  color: #FFFFFF;
  background-color: transparent;
`;
export const InputRemoveBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: url("images/02/btn_close.png") no-repeat center/contain;
`;

export const EmailError = styled.div`
  height: 23px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #FF1B6D;
`;
export const PasswordError = styled.div`
  height: 23px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #FF1B6D;
`;

// 
export const LoginBtn = styled.button`
  width: 540px;
  height: 76px;
  border-radius: 38px;
  background-color: rgba(255,27,109, 0.6);
  font-size: 26px;
  font-weight: 700;
  color: #FFFFFF;
`;

// 
export const AccountOption = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 38px 58px 58px;
`;
export const AccountItem = styled.div`
font-size: 20px;
font-weight: 700;
  color: #FFFFFF;
`;

// 
export const SocialLoginBtn = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 76px;
padding: 0 127px 0 129px;
border-radius: 38px;
  border: 2px solid #FAE100;
  background-color: transparent;
`;
export const SocialLoginImg = styled.div`
width: 33px;
height: 30px;
  background: url("images/02/icon_social_login.png") no-repeat center/contain;
`;
export const SocialLoginTitle = styled.div`
font-size: 26px;
font-weight: 700;
  color: #FFE100;
`;