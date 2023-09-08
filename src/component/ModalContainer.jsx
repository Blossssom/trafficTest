import { createPortal } from "react-dom";
import { styled } from "styled-components";

export default function ModalContainer({ children }) {
  return (
    <>{createPortal(<S_backDrop>{children}</S_backDrop>, document.body)}</>
  );
}

const S_backDrop = styled.section`
  width: 100%;
  height: 100%;
  background-color: #ededed;
`;
