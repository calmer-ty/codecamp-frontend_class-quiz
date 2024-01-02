// import React { useState } from "react";
// import { Modal, Rate } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

export default function App(): JSX.Element {
  const [rating, setRating] = useState(0);
  const StarPoint = [1, 2, 3, 4, 5];

  const Wrap = styled.div`
    display: flex;
  `;
  const Star = styled.div`
    width: 50px;
    height: 50px;
    background-image: url("../images/section16/star_off.png");
    /* background-position: center; */
    background-size: contain;
  `;

  return (
    <>
      <Wrap>
        {StarPoint.map((num) => {
          return <Star active />;
        })}
      </Wrap>
    </>
  );
}
