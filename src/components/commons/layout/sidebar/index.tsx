import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 30%;
  height: 500px;
  background-color: darkcyan;
`;

export default function LayoutSidebar(): JSX.Element {
  return (
    <>
      <Wrapper>여기는 사이드바입니다</Wrapper>
    </>
  );
}
