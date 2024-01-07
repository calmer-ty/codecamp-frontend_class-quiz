import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
const Img = styled.img`
  width: 500px;
  height: 500px;
  background: no-repeat center/contain;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;
const Container = styled.div`
  width: 500px;
  //   height: 1000px;

  overflow: hidden;
`;
const SlideContainer = styled.div`
  display: flex;
`;
// const SlideItem = styled.div`
//   width: 500px;
//   height: 200px;
//   background-color: #f00;
//   color: #fff;
// `;
const ButtonWrap = styled.div``;
const Button = styled.button``;

export default function Carousel(): JSX.Element {
  const SlideItem = (props) => {
    return <Img src={props.img} />;
  };
  const img01 = "/images/section16/star_off.png";
  const img02 = "/images/section16/star_on.png";
  const img03 = "/images/section16/star_off.png";

  const totalSlide = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const onClickNext = (): void => {
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const onClickPrev = (): void => {
    if (currentSlide === 0) {
      setCurrentSlide(totalSlide);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <Wrapper>
      <Container>
        <SlideContainer ref={slideRef}>
          <SlideItem img={img01}>1</SlideItem>
          <SlideItem img={img02}>2</SlideItem>
          <SlideItem img={img03}>3</SlideItem>
        </SlideContainer>
        <ButtonWrap>
          <Button onClick={onClickPrev}>Prev</Button>
          <Button onClick={onClickNext}>Next</Button>
        </ButtonWrap>
      </Container>
    </Wrapper>
  );
}
