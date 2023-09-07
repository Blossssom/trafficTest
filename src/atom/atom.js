import { atom } from "recoil";

export const timeState = atom({
  key: "timeState",
  default: "",
});

export const connectionList = atom({
  key: "connect",
  default: [],
});

export const webSocketState = atom({
  key: "webSocketState",
  default: {},
});
