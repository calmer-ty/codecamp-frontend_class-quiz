import styled from "@emotion/styled";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

// slick
const Wrapper = styled.div`
  height: 400px;
`;
const Slider = styled.div``;
const SliderItem = styled.div`
  display: none;
  width: 100%;
  height: 350px;
  margin: auto;
`;
const SlideBtnPrev = styled.button``;
const SlideBtnNext = styled.button``;

export default function LayoutBanner(): JSX.Element {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  // let slideCount = 0;

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlide = 2;

  const onClickNext = (): void => {
    if (currentSlide >= totalSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
    console.log(currentSlide);
  };
  return (
    <>
      {/* slick */}
      <Wrapper>
        {/* <Slider {...settings}> */}
        <Slider>
          <SliderItem>
            <h3>1</h3>
          </SliderItem>
          <SliderItem>
            <h3>2</h3>
          </SliderItem>
          <SliderItem>
            <h3>3</h3>
          </SliderItem>
          <SliderItem>
            <h3>4</h3>
          </SliderItem>
          <SliderItem>
            <h3>5</h3>
          </SliderItem>
          <SliderItem>
            <h3>6</h3>
          </SliderItem>
        </Slider>
        <SlideBtnPrev>Prev</SlideBtnPrev>
        <SlideBtnNext onClick={onClickNext}>Next</SlideBtnNext>
      </Wrapper>
    </>
  );
}
