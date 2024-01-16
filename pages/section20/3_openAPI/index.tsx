import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenAPI(): JSX.Element {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const randomDogImage = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDog(result.data.message);
    };
    void randomDogImage();
  }, []);

  return (
    <>
      <img src={dog} alt="" />
    </>
  );
}
