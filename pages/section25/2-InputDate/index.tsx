import { type ChangeEvent, useState } from "react";

const getLastDate = (yyyy, mm) => {
  if (Number(mm) === 11) return new Date(Number(yyyy) + 1, 1, 0).getDate();
  return new Date(Number(yyyy), Number(mm), 0).getDate();
};

const getValidDate = (valueArr): void => {
  let [yyyy, mm, dd] = valueArr
    .join("")
    .split(".")
    .filter((data) => data !== "")
    .map((data) => data);

  console.log(valueArr);
  mm = mm > 12 ? 12 : mm;
  dd = dd > getLastDate(yyyy, mm) ? getLastDate(yyyy, mm) : dd;
  return yyyy + (mm ? `.${mm}` : "") + (dd ? `.${dd}` : "");
};

export default function InputDate(): JSX.Element {
  const [value, setValue] = useState("");
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const valueArr: string[] = [];
    const inputValue = event.target.value;

    if (inputValue.length > value.length) {
      const eachValue = inputValue.replaceAll(".", "").split("");
      eachValue.forEach((data: string, index: number) => {
        valueArr.push(data);
        if (index + 1 === 4 || index + 1 === 6) valueArr.push(".");
      });

      //   setValue(valueArr.join(""));
      setValue(getValidDate(valueArr));
    } else {
      const eachValue = inputValue.replaceAll(".", "").split("");
      eachValue.forEach((data: string, index: number) => {
        valueArr.push(data);
        if (eachValue.length > 6 && (index + 1 === 4 || index + 1 === 6))
          valueArr.push(".");
        else if (eachValue.length > 4 && index + 1 === 4) valueArr.push(".");
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
