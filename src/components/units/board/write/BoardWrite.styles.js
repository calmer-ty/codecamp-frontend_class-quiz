import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;
export const BlueBtn = styled.button`
  /* background-color: ${(props) =>
    props.isActive === true ? "yellow" : ""}; */
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;
