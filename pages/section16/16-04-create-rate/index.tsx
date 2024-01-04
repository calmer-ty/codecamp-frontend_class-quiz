import styled from "@emotion/styled";
import { useState } from "react";

export default function CreateRate(): JSX.Element {
  const Wrapeer = styled.div`
    display: flex;
  `;
  const Star = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${(props) =>
      props.active
        ? "/images/section16/star_on.png"
        : "/images/section16/star_off.png"});
    background-position: center;
    background-size: contain;
    cursor: pointer;
    // background-color: #f00;
  `;
  const starPoint = [1, 2, 3, 4, 5];

  const [isActive, setIsActive] = useState(false);

  const onClickStarPoint = (num) => {
    setIsActive(num);
  };
  console.log(isActive);
  return (
    <>
      <Wrapeer>
        {starPoint.map((num) => {
          return (
            <Star
              key={num}
              active={num <= isActive}
              onClick={() => onClickStarPoint(num)}
            />
          );
        })}
      </Wrapeer>
    </>
  );
}
