import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
`;
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--main-blue);
  height: 65px;
  padding: 20px;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  svg {
    vertical-align: bottom;
    margin-right: 3px;
  }
`;

export const LeftSideMenu = styled.ul`

  width: 90px;

  border 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
