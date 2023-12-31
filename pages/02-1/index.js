export default function ClassQuiz02() {

  const [hello, setHello] = useState("안녕하세요")

  function onClickHello() {
    // 1
    //   const hello = document.getElementById("hello");
    //   let  helloText = "안녕하세요"
    //   helloText = "반갑습니다"

    // 2
    setHello("반갑습니다")
  }

  return (
    <div>
      <div id="hello">{helloText}</div>
      <button onClick={onClickHello}>버튼</button>
    </div>
  );
}