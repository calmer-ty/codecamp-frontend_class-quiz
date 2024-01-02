import React, { useState } from "react";
import { Modal, Rate } from "antd";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  // ===1step
  const onChange = (value: number): void => {
    setValue(value);
    onToggleModal();
  };

  return (
    <>
      <Rate onChange={onChange} value={value} />
      <span>{value}점</span>
      <Modal
        title="Basic Modal"
        open={isOpen}
        onOk={onToggleModal}
        onCancel={onToggleModal}
      >
        <p>{value}</p>
      </Modal>
    </>
  );
}
