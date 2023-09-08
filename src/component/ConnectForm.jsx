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
  const [jsonValue, setJsonValue] = useState();
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

  const readJsonFileHandler = (jsonFile) => {
    if (jsonFile) {
      const readFileInstance = new FileReader();
      readFileInstance.onload = (e) => {
        const readValue = e.target.result;
        try {
          const jsonValue = JSON.parse(readValue);
          setJsonValue(jsonValue);
        } catch (e) {
          console.log("file read Error");
        }
      };
      readFileInstance.readAsText(jsonFile[0]);
    }
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
    <>
      <button>on</button>
      <S_wrapper>
        <S_input
          placeholder="name"
          type="text"
          value={socketName || ""}
          onChange={(e) => setSocketName(e.target.value)}
        />
        <S_input
          type="text"
          placeholder="ip"
          value={ipValue || ""}
          onChange={(e) => setIpValue(e.target.value)}
        />
        <S_input
          placeholder="port"
          type="text"
          value={portValue || ""}
          onChange={(e) => setPortValue(e.target.value)}
        />
        <S_input
          placeholder="json file"
          type="file"
          accept=".json"
          onChange={(e) => readJsonFileHandler(e.target.files)}
        />
        <S_button onClick={saveButtonHandler}>Save</S_button>
      </S_wrapper>
    </>
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
