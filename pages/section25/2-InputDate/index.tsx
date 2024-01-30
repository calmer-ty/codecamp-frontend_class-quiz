import { useState } from "react";

export default function InputDate(): JSX.Element {
  const [value, setValue] = useState("");

  const getLastDate = (yyyy, mm) => {
    if (Number(mm) === 11) return new Date(Number(yyyy) + 1, 1, 0).getDate();
    return new Date(yyyy, Number(mm), 0).getDate();
  };

  const getValidDate = (valueArr) => {
    let [yyyy, mm, dd] = valueArr
      .join("")
      .split(".")
      .filter((data) => data !== "")
      .map((data) => data);
    mm = Number(mm) > 12 ? 12 : mm;
    dd = Number(dd) > getLastDate(yyyy, mm) ? getLastDate(yyyy, mm) : dd;
    return yyyy + (mm ? `.${String(mm)}` : "" + (dd ? `.${String(dd)}` : ""));
  };

  const onChangeInput = (event: any) => {
    // const dottedValue = [];
    const valueArr = [];
    const inputValue = event.target.value;

    if (inputValue.length > value.length) {
      const inputPureValue = inputValue.replaceAll(".", "").split("");
      inputPureValue.forEach((data: string, index: number) => {
        valueArr.push(data);
        if (index + 1 === 4 || index + 1 === 6) valueArr.push(".");
      });
      setValue(getValidDate(valueArr));
    }
    //
    else {
      const inputPureValue = inputValue.replaceAll(".", "").split("");
      inputPureValue.forEach((data: string, index: number) => {
        valueArr.push(data);
        if (inputPureValue.length > 6 && (index + 1 === 4 || index + 1 === 6)) {
          valueArr.push(".");
          console.log(inputPureValue.length);
          console.log(valueArr);
        } else if (inputPureValue.length > 4 && index + 1 === 4) {
          valueArr.push(".");
        }
      });
      setValue(valueArr.join(""));
    }
  };

  return (
    <>
      <input
        type="text"
        value={value}
        placeholder="YYYY.MM.DD"
        onChange={onChangeInput}
      />
    </>
  );
}
