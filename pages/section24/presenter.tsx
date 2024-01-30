// presenter 부분
export default function Presenter(props: any): JSX.Element {
  // 1.
  // return <div>{props.child}</div>;

  // 2.
  return (
    <div>
      {props.child}는 {props.age}살 입니다.
    </div>
  );
}
