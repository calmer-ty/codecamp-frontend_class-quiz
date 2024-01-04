import styled from "@emotion/styled";
import { useState } from "react";

export default function CreateRate(): JSX.Element {
  const Wrapeer = styled.div`
    display: flex;
  `;
  const Star = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${(props: { active: boolean }) =>
      props.active
        ? "../images/section16/star_on.png"
        : "../images/section16/star_off.png"});
    background-position: center;
    background-size: contain;
    cursor: pointer;
  `;
  const starPoint = [1, 2, 3, 4, 5];

  const [rating, setRating] = useState(0);

  const onClickStar = (num) => {
    setRating(num);
    console.log(num);
  };
  console.log(rating);

  return (
    <>
      <Wrapeer>
        {starPoint.map((num) => {
          return (
            <Star
              key={num}
              active={num <= rating}
              onClick={() => onClickStar(num)}
            />
          );
        })}
      </Wrapeer>
    </>
  );
}
