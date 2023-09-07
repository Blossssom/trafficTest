import { styled } from "styled-components";
import Sidebar from "../component/Sidebar";

export default function MainPage() {
  return (
    <S_mainWrapper>
      <h1>Main</h1>
    </S_mainWrapper>
  );
}

const S_mainWrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
`;
