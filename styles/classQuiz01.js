import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 1138px;
`;
export const MobileMenu = styled.div`
  height: 43px;
  background-color: #cacaca;
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 101px;
`;
export const SearchItem = styled.div`
  width: 23px;
  height: 23px;
  background-color: red;
  margin: 42px 0 36px 0;
  background: url("images/01/search.png") no-repeat center/contain;
  cursor: pointer;
`;
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 0 56px;
  border-bottom: 1px solid #cacaca;
`;
export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 58px;
`;
export const MenuTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
`;

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 50%;
  background: url("images/01/profile.png") no-repeat center/contain;
`;
export const ProfileName = styled.span`
display: flex;
align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  cursor: pointer;
`;

export const MenuTabWrap = styled.div`
  display: block;
`;
export const MenuTab = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const MenuTabList = styled.li`
  font-size: 30px;
  font-weight: 700;
  color: #cacaca;
  cursor: pointer;
`;

export const ContentsContainer = styled.div``;
export const ContentsWrap = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 64px 0 50px;
`;
export const ContentsList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 135px; */
  margin-bottom: 44px;
`;

export const ContentsTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentsNumber = styled.span`
  margin-bottom: 5px;
  font-size: 18px;
  color: #adadad;
`;
export const ContentsTitle = styled.div`
  font-size: 24px;
`;
export const MoreViewBtn = styled.div`
  width: 23px;
  height: 23px;
  background: url("images/01/arrow_bottom.png") no-repeat center/contain;
`;

export const MyMenuContainer = styled.div`
  margin: 10px 76px 0;
`;
export const MyMenu = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const MyMenuList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
export const MyMenuImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51px;
  height: 51px;
  margin-bottom: 5px;
`;
export const MyMenuText = styled.div`
    font-size: 16px;
    color: #ADADAD;
`;
