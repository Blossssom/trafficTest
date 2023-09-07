import React, { useState } from "react";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { webSocketState } from "../atom/atom";
import { addWebSocketConnection } from "../util/webSocketManager";
import { connectionList } from "../atom/atom";

export default function ConnectForm() {
  const [ipValue, setIpValue] = useState();
  const [portValue, setPortValue] = useState();
  const [socketName, setSocketName] = useState();
  const [, setSocket] = useRecoilState(webSocketState);
  const [, setConnection] = useRecoilState(connectionList);

  const saveButtonHandler = () => {
    addWebSocketConnection(
      socketName,
      ipValue,
      portValue,
      setSocket,
      setConnection
    );
    console.log(ipValue, portValue);
  };

  const nullCheckHandler = (ip, port, name) => {
    if (
      ip.toString().length < 1 ||
      port.toString().length < 1 ||
      name.toString().length < 1
    ) {
      return true;
    }
    return false;
  };
  return (
    <S_wrapper>
      <S_input
        placeholder="name"
        value={socketName || ""}
        onChange={(e) => setSocketName(e.target.value)}
      />
      <S_input
        placeholder="ip"
        value={ipValue || ""}
        onChange={(e) => setIpValue(e.target.value)}
      />
      <S_input
        placeholder="port"
        value={portValue || ""}
        onChange={(e) => setPortValue(e.target.value)}
      />
      <S_button onClick={saveButtonHandler}>Save</S_button>
    </S_wrapper>
  );
}

const S_wrapper = styled.article`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const S_input = styled.input``;
const S_button = styled.button`
  padding: 0;
  margin: 0;
  font-size: 0.875rem;
  background-color: #ededed;
`;
