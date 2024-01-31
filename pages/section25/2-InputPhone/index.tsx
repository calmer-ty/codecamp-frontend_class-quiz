import { type ChangeEvent, useState } from "react";

const getLastNumber = (valueArr) => {
  // if (Number(mm) === 11) return new Date(Number(yyyy) + 1, 1, 0).getDate();
  // return new Date(Number(yyyy), Number(mm), 0).getDate();
  console.log(valueArr);
};

// const getValidNumber = (valueArr): void => {
//   let [yyyy, mm, dd] = valueArr
//     .join("")
//     .split("-")
//     .filter((data) => data !== "")
//     .map((data) => data);

//   console.log(valueArr);
//   mm = mm > 12 ? 12 : mm;
//   dd = dd > getLastNumber(yyyy, mm) ? getLastNumber(yyyy, mm) : dd;
//   return yyyy + (mm ? `${mm}` : "") + (dd ? `${dd}` : "");
// };

export default function InputDate(): JSX.Element {
  const [value, setValue] = useState("");
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const valueArr: string[] = [];
    const inputValue = event.target.value;

    if (inputValue.length > value.length) {
      const eachValue = inputValue.replaceAll("-", "").split("");
      eachValue.forEach((data: string, index: number) => {
        valueArr.push(data);
        if (index + 1 === 3 || index + 1 === 7) valueArr.push("-");
      });

      setValue(valueArr.join(""));

      setValue(getLastNumber(valueArr));
    } else {
      const eachValue = inputValue.replaceAll("-", "").split("");
      eachValue.forEach((data: string, index: number) => {
        valueArr.push(data);
        if (eachValue.length > 7 && (index + 1 === 3 || index + 1 === 7))
          valueArr.push("-");
        else if (eachValue.length > 3 && index + 1 === 3) valueArr.push("-");
      });
      setValue(valueArr.join(""));
    }
  };

  return (
    <>
      <input type="text" onChange={onChangeInput} value={value} />
    </>
  );
}
