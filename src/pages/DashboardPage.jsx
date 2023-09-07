import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

export default function DashboardPage() {
  const [wsValue, setWsValue] = useState();
  const [timeValue, setTimeValue] = useRecoilState(timeState);
  const [eventName, setEventName] = useState();
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
      const jsonValue = JSON.parse(event.data);
      setWsValue(event.data);
      setTimeValue(jsonValue.data);
      // setEventName(jsonValue.event);
      console.log(`get message ${jsonValue.data}`);
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
        <div></div>
        <p>{wsValue}</p>
        <p>{timeValue}</p>
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
    background-color: #ededed;
  }
`;
