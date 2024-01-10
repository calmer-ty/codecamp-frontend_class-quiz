import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";
import { useState, type MouseEvent } from "react";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardsCount
  }
`;

interface IPageBtnProps {
  onDisable: boolean;
}

export default function Pagination(): JSX.Element {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  console.log(lastPage);
  console.log(startPage);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };
  const onClickPrevPage = (): void => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    console.log(startPage);
    void refetch({ page: startPage - 10 });
  };
  const onClickNextPage = (): void => {
    if (lastPage - startPage < 10) return;
    setStartPage((prev) => prev + 10);
    console.log(startPage);
    void refetch({ page: startPage + 10 });
  };
  const PageBtn = styled.button`
    opacity: ${(props: IPageBtnProps) => (props.onDisable ? "0" : "1")};
  `;

  return (
    <>
      {data?.fetchBoards.map((el, _) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}

      <PageBtn onClick={onClickPrevPage} onDisable={startPage <= 1}>
        {"<"}
      </PageBtn>
      {new Array(10)
        .fill(1)
        .filter((_, index) => {
          const currentPage = startPage + index;
          return currentPage <= lastPage;
        })
        .map(
          (_, index) => (
            // startPage + index <= lastPage && (
            <button
              key={startPage + index}
              id={String(startPage + index)}
              onClick={onClickPage}
            >
              {startPage + index}
            </button>
          )
          // )
        )}
      <PageBtn onClick={onClickNextPage} onDisable={lastPage - startPage < 10}>
        {">"}
      </PageBtn>
    </>
  );
}
