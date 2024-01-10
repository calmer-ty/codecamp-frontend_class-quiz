import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

// const InfiniteScroll = styled.div``;
const Wrapper = styled.div``;
const Container = styled.div``;

// type Props = {
//   onBottomeHit: () => void;
//   isLoading: boolean;
//   hasMoreData: boolean;
//   loadOnMount: boolean;
// };

// 해당 요소의 최 하단이 현재 창보다 작거나 같으면 innerHeight 스크롤의 위치가 아래에 있는것을 감지하고 데이터를 가져옴
const isBottom = (ref) => {
  if (!ref.current) {
    return false;
  }
  // console.log("현재 화면(InfiniteScroll이 적용되는 화면)", ref.current);
  // console.log("현재 스크롤바 위치", ref.current.getBoundingClientRect().bottom);
  // console.log("스크롤바 최하단 위치",window.innerHeight)

  // getBoundingClientRect() <-  해당 DOM의 width,height,left,top,right,bottom,x,y 를 알려줌
  // ref.current.getBoundingClientRect().bottom의 값이 window.innerHeight 보다 작거나 같으면 (스크롤바가 현재 창 최하단에 닿을경우) true
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
};

// 컴포넌트 안에 담기는 요소들에 대해 무한 스크롤을 적용 시켜주기 위해 따로 만들어 준다.
// 상위 컴포넌트에서 props 를 받아 호출
const InfiniteScroll = ({
  onBottomHit,
  isLoading,
  hasMoreData,
  loadOnMount,
  children,
}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  // 컴포넌트에서 특정 DOM을 선택 / 조회 / 수정
  // 대표적으로 관리할 수 있는 값으로는 setTimeout(), setInterval(), 외부 라이브러리으로 생성된 인스턴스, scroll 위치 가 있음
  const contentRef = useRef(null);

  useEffect(() => {
    // 마운트 시 초기 데이터 로드
    if (loadOnMount && initialLoad) {
      onBottomHit();
      setInitialLoad(false);
    }
  }, [onBottomHit, loadOnMount, initialLoad]);

  useEffect(() => {
    const onScroll = () => {
      // console.log("스크롤바가 현재 스크롤 최하단에 닿았는지 검증(닿으면 true)",isBottom(contentRef))
      // console.log("쓰로틀링을 통해 setTimeout 이후 데이터를 받아온 후 로딩이 끝났는지 검증(false여야 데이터 가져옴)",isLoading)
      // console.log("더 가져올 데이터가 있을때만 실행",hasMoreData)
      if (!isLoading && hasMoreData && isBottom(contentRef)) {
        // loadMoreData 실행
        onBottomHit();
      }
    };
    // scroll 이벤트를 통한 스크롤 이동 감지 후 onScroll 실행
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [onBottomHit, isLoading, hasMoreData]);

  return <div ref={contentRef}>{children}</div>;
};

export default function InfiniteScrollPage(): JSX.Element {
  // 뿌려줄 데이터
  const PAGE_NUMBER = 10;
  // 불러온 데이터를 담아주는 배열
  const [numbers, setNumbers] = useState([]);
  // 쓰로틀링을 위해 로딩을 추가
  const [loading, setLoading] = useState(false);
  // 초기 페이지를 0으로 주고 onBottomHit을 통해 1로 변경
  const [page, setPage] = useState(0);
  // 데이터의 최대치를 설정 그 이상으로는 불러올수없게 제한
  const hasMoreData = numbers.length < 1000;

  // 스크롤이 하단부에 닿았을때 실행 시켜줄 데이터 호출 로직
  const loadMoreNumbers = () => {
    setPage((page) => page + 1);
    setLoading(true);
    setTimeout(() => {
      const newNumbers = new Array(PAGE_NUMBER)
        .fill(1)
        .map((_, i) => page * PAGE_NUMBER + i);
      setNumbers((nums) => [...nums, ...newNumbers]);
      setLoading(false);
    }, 500);
  };
  return (
    <>
      <InfiniteScroll
        hasMoreData={hasMoreData}
        isLoading={loading}
        onBottomHit={loadMoreNumbers}
        loadOnMount={true}
      >
        <Wrapper>
          <Container>
            {numbers.map((num) => (
              <div key={num}>
                <div>{num}</div>
              </div>
            ))}
          </Container>
        </Wrapper>
      </InfiniteScroll>
    </>
  );
}
