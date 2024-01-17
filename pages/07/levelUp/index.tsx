import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;
export default function levelUp(): JSX.Element {
  const { data } = useQuery(FETCH_BOARDS);

  // const onCheckedItemAll = () => {
  //   setIsChecked((prev) => !prev);
  // };
  // const onCheckedItem = (event) => {
  //   console.log(event.target.id);
  //   setCheckList((prev) => [...prev, event.target.id]);
  // };

  // const [isChecked, setIsChecked] = useState(false);
  // const [checkList, setCheckList] = useState([]);

  const [checkList, setCheckList] = useState([]);

  const isChecked = (list) => {
    return checkList.some((cur) => cur.id === list.id);
  };

  const onClickCheckAll = () => {
    console.log("받아오는 데이터의 길이", data?.fetchBoards.length);
    console.log("현재 체크리스트에 들어있는 데이터의 길이", checkList.length);
    if (checkList.length !== data?.fetchBoards.length) {
      setCheckList(data?.fetchBoards);
    } else {
      setCheckList([]);
    }
  };

  const onCheckedItem = (list) => {
    console.log("내가 누른 체크리스트가 뭔가?", list);
    if (checkList.every((cur) => cur.id !== list.id)) {
      setCheckList([...checkList, list]);
    } else {
      const result = checkList.filter((cur) => cur.id !== list.id);
      setCheckList(result);
    }
  };

  console.log(checkList);

  return (
    <>
      <div>
        <span>
          <input
            type="checkbox"
            onClick={onClickCheckAll}
            checked={checkList.length === data?.fetchBoards.length}
          />
        </span>
        <span>번호</span>
        <span>제목</span>
        <span>작성자</span>
      </div>
      {data?.fetchBoards.map((el: any, index: any, list: any) => (
        <div key={el._id}>
          <span>
            <input
              type="checkbox"
              // id={el._id}
              onChange={() => onCheckedItem(list)}
              checked={isChecked(list)}
              style={{ marginTop: "5px" }}
            />
          </span>
          {/* <span style={{ margin: "10px" }}>{el._id}</span> */}
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            <button>삭제</button>
          </span>
        </div>
      ))}
      <button>선택해제</button>
    </>
  );
}
