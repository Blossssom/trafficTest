import { useEffect, useRef, useState } from "react";
import reactLogo from "../assets/react.svg";
import { styled } from "styled-components";
import Sidebar from "../component/Sidebar";

export default function MainPage() {
  const [count, setCount] = useState(0);
  const [wsValue, setWsValue] = useState();
  const socket = useRef();

  useEffect(() => {
    const _socket = new WebSocket("ws://localhost:8081");

    _socket.onopen = () => {
      console.log("ws open");
      _socket.send(
        JSON.stringify({
          event: "events",
          data: "test",
        })
      );
    };

    _socket.onclose = () => {
      console.log("ws close");
    };

    _socket.onmessage = (event) => {
      setWsValue(event.data);
      console.log(`get message ${event}`);
    };
    socket.current = _socket;
    return () => {
      _socket.close();
    };
  }, []);
  return (
    <S_mainWrapper>
      <Sidebar />
      <div>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{wsValue}</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </S_mainWrapper>
  );
}

const S_mainWrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  > div {
    width: 100%;
    height: 100%;
    background-color: aqua;
  }
`;
