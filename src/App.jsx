import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ConnectForm from "./component/ConnectForm";
import Sidebar from "./component/Sidebar";
import { styled } from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <ConnectForm />
      <S_mainWrapper>
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </S_mainWrapper>
    </BrowserRouter>
  );
}

const S_mainWrapper = styled.div`
  display: flex;
`;

export default App;
