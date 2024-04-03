import { useEffect, useState } from "react";
// const divStyle = {
//   width: "500px",
//   height: "400px",
//   backgroundColor: "blue",
// };
// const imgStyle = {
//   height: "400px",
// };

const qqq = [];

export default function Preload(): JSX.Element {
  // 버튼이 클릭되었는지 여부를 추적하기 위한 상태 선언
  const [isVisible, setIsVisible] = useState(false);

  // 버튼 클릭 핸들러 함수 정의
  const handleClick = (): void => {
    // isVisible 상태를 토글하여 요소를 보이거나 숨김
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/%22A_message_from_God.%22_Washington%2C_D.C.%2C_March_12._The_Chairman_of_the_Senate_Judiciary_Committee_Henry_F._Ashurst%2C_was_a_bit_surprised_today_that_even_the_Lord_was_interested_in_the_LCCN2016871343.tif/lossy-page1-1024px-thumbnail.tif.jpg";
    img.onload = () => {
      qqq.push(img);
    };
  });
  return (
    <>
      <button onClick={handleClick}>이미지 보여주기</button>
      {isVisible && (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/%22A_message_from_God.%22_Washington%2C_D.C.%2C_March_12._The_Chairman_of_the_Senate_Judiciary_Committee_Henry_F._Ashurst%2C_was_a_bit_surprised_today_that_even_the_Lord_was_interested_in_the_LCCN2016871343.tif/lossy-page1-1024px-thumbnail.tif.jpg" />
      )}
    </>
  );
}
