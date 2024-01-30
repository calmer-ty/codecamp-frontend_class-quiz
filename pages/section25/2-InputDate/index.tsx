import { useState } from "react";

const getLastDate = (yyyy: string, mm: string) => {
  if (Number(mm) === 11) return new Date(Number(yyyy) + 1, 1, 0).getDate();
  return new Date(Number(yyyy), Number(mm), 0).getDate();
};

const getValidDate = (valueArr) => {
  console.log(valueArr);
  let [yyyy, mm, dd] = valueArr
    .join("")
    .split(".")
    .filter((data) => data !== "")
    .map((data) => data);
  mm = Number(mm) > 12 ? 12 : mm;
  dd = Number(dd) > getLastDate(yyyy, mm) ? getLastDate(yyyy, mm) : dd;
  return yyyy + (mm ? `.${String(mm)}` : "" + (dd ? `.${String(dd)}` : ""));
};
export default function InputDate(): JSX.Element {
  const [value, setValue] = useState("");

  const onChangeInput = (event: any) => {
    const valueArr = [];
    const nextValue = event.target.value;

    if (nextValue.length > value.length) {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data: string, index: number) => {
        valueArr.push(data);
        if (index + 1 === 4 || index + 1 === 6) valueArr.push(".");
      });
      //   setValue(valueArr.join(""));
      setValue(getValidDate(valueArr));
    }
    //
    else {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data: string, index: number) => {
        valueArr.push(data);
        if (nextPureValue.length > 6 && (index + 1 === 4 || index + 1 === 6)) {
          valueArr.push(".");
        } else if (nextPureValue.length > 4 && index + 1 === 4) {
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
        maxLength={10}
        onChange={onChangeInput}
      />
    </>
  );
}
