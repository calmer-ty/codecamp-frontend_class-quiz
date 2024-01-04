import styled from "@emotion/styled";
import { useState } from "react";

export default function CreateModal() {
  const Modal = styled.div`
    width: 500px;
    height: 400px;
    background-color: #ccc;
  `;

  const [isOpen, setIsOpen] = useState(false);

  const onClickIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <button onClick={onClickIsOpen}>모달 버튼</button>
      {isOpen && (
        <Modal>
          Modal
          <button>Cencel</button>
          <button>Ok</button>
        </Modal>
      )}
    </>
  );
}
