import { useQuery, gql } from "@apollo/client";
import type { IQuery } from "../../../src/commons/types/generated/types";
import { useState } from "react";
import type { ChangeEvent, MouseEvent } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function SearchQuiz01(): JSX.Element {
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);
  //   const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  //   1. 검색버튼 클릭 방식
  //   const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
  //     setSearch(event.currentTarget.value);
  //   };

  //   const onClickSearch = (): void => {
  //     void refetch({ search, page: 1 });
  //   };

  //   2. 검색 시 자동 방식
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  const getDebounce = _.debounce((value: string) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  });

  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el, _) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>
            {el.title
              .replace(keyword, `!@#${keyword}!@#`)
              .split("!@#")
              .map((el) => {
                console.log(el);
                return (
                  <span
                    key={uuidv4()}
                    style={{ color: el === keyword ? "red" : "" }}
                  >
                    {el}
                  </span>
                );
              })}
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            <button>삭제</button>
          </span>
        </div>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
