import { useRecoilState } from "recoil";
import { webSocketState } from "../atom/atom";

export const addWebSocketConnection = (name, ip, port, setter, connectSet) => {
  const address = `ws://${ip}:${port}`;
  const ws = new WebSocket(address);

  ws.onopen = () => {
    // 첫 연결 시 캐싱 데이터(state) 저장
    console.log(`Connect on : ${address}`);
    ws.send(
      JSON.stringify({
        event: "events",
        data: "test",
      })
    );
    const socketConfig = {
      ip: ip,
      port: port,
      name: name,
    };

    connectSet((prev) => [...prev, socketConfig]);
  };

  ws.onmessage = (event) => {
    console.log(event.data);
  };

  setter((prev) => ({
    ...prev,
    [address]: ws,
  }));
};
