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
  const [keyword, setKeyword] = useState("");

  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState(0);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ search, page: Number(event.currentTarget.id) });
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  const getDebounce = (data: string): void => {
    if (debounce) window.clearTimeout(debounce);

    const time = window.setTimeout(() => {
      console.log("start");
      void refetch({ search: data });
      setSearch(data);
    }, 500);
    setDebounce(time);
    setKeyword(data);
  };

  return (
    <>
      <input type="text" onChange={onChangeSearch} />
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
