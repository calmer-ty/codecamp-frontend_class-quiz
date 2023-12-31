import axios from "axios";

export default function ClassQuiz04_1 () {
  const onClickAsync = () => {
    const result = axios.get("https://koreanjson.com/users")
    console.log(result)
  }
  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/users")
    console.log(result)
  }

  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기)</button>
      <button onClick={onClickSync}>REST-API(동기)</button>
    </div>
  )
}