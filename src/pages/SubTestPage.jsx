import React, { useEffect } from "react";

export default function SubTestPage() {
  useEffect(() => {
    const _socket = new WebSocket("ws://localhost:8082");

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
  return <div>SubTestPage</div>;
}
