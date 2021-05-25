import React from "react";

import { Container, LeftSideMenu, Navbar } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Navbar> Hey I am a navbar</Navbar>
      <LeftSideMenu> I am a left side menu! </LeftSideMenu>
      {children}
    </Container>
  );
};

export default Layout;
