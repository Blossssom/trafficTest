import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { connectionList } from "../atom/atom";

export default function Sidebar() {
  const [connect, _] = useRecoilState(connectionList);
  console.log(connect);
  return (
    <S_sidebarWrapper>
      {connect.map((v) => (
        <S_linkWrapper key={`${v.ip}${v.port}`}>
          <S_navLinks to={"/"}>{v.name}</S_navLinks>
          <p>ip: {v.ip}</p>
          <p>port: {v.port}</p>
        </S_linkWrapper>
      ))}
    </S_sidebarWrapper>
  );
}

const S_sidebarWrapper = styled.nav`
  width: 20%;
  border-right: 1px solid #ededed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    padding: 0;
    margin: 0;
  }
`;

const S_linkWrapper = styled.div`
  height: 120px;
  width: 100%;
  background-color: beige;
`;

const S_navLinks = styled(NavLink)`
  width: 100%;

  display: block;
  font-size: 2rem;
`;
