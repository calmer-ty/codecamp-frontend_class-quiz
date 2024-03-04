import axios from "axios";
import { useState } from "react";

export default function AsyncJS() {
  const [list, setList] = useState();
  const myCallback = (): void => {
    const randomNum = new XMLHttpRequest();
    randomNum.open("get", "http://numbersapi.com/random?min=1&max=200");
    randomNum.send();
    randomNum.addEventListener("load", (res): void => {
      const num = res.target?.response.split(" ")[0];
      const page = new XMLHttpRequest();
      page.open("get", `https://koreanjson.com/posts/${num}`);
      page.send();
      page.addEventListener("load", (res) => {
        const userId = JSON.parse(res.target?.response).UserId;

        const userPage = new XMLHttpRequest();
        userPage.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        userPage.send();
        userPage.addEventListener("load", (res) => {
          const list = JSON.parse(res.target?.response);

          list.map((el: any): void => {
            setList(el);
          });
        });
      });
    });
  };

  // new Promise((resolve, reject): Promise<void> => {
  //   try {
  //     // const response = "http://numbersapi.com/random?min=1&max=200";
  //     resolve(response);
  //     console.log("성공했습니다");
  //   } catch (error) {
  //     reject("실패했습니다");
  //   }
  // });

  // const myPromise = (): void => {
  //   axios.get(`http://numbersapi.com/random?min=1&max=200`).then((res) => {
  //     const num = res.data.split(" ")[0];
  //     axios.get(`https://koreanjson.com/posts/${num}`).then((res) => {
  //       const userId = res.data.UserId;
  //       axios
  //         .get(`https://koreanjson.com/posts?userId=${userId}`)
  //         .then((res) => {
  //           console.log(res);
  //         });
  //     });
  //   });
  // };

  const myPromise = (): void => {
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        const userId = res.data.UserId;
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        const list = res?.data;

        console.log(list);

        list.map((el: any): void => {
          setList(el);
        });
      });
  };

  const myAsyncAwait = async (): Promise<void> => {
    const randomNum = await axios.get(
      `http://numbersapi.com/random?min=1&max=200`
    );
    const page = await axios.get(
      `https://koreanjson.com/posts/${randomNum.data.split(" ")[0]}`
    );
    console.log(page.data.UserId);
    const userPage = await axios.get(
      `https://koreanjson.com/posts?userId=${page.data.UserId}`
    );
    userPage.data.map((el: any) => {
      setList(el);
    });
  };

  return (
    <>
      {JSON.stringify(list)}
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <button onClick={myCallback}>Callback</button>
      <button onClick={myPromise}>Promise</button>
      <button onClick={myAsyncAwait}>Async/Await</button>
    </>
  );
}
