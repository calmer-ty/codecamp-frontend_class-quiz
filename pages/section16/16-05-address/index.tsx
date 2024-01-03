import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const handleComplete = (data: Address): void => {
    console.log(data);
  };
  return (
    <>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </>
  );
}
