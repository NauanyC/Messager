import React from "react";

import { HiUserCircle } from "react-icons/hi";
import { GiStoneBlock } from "react-icons/gi";

import { Container, LeftSideMenu, Navbar } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Navbar>
        <h3>
          <span>
            <GiStoneBlock size={24} />
          </span>
          FaceBlooks
        </h3>
        <div>
          <p>
            <span>
              <HiUserCircle size={24} />
            </span>
            Username
          </p>
        </div>
      </Navbar>
      <LeftSideMenu> I am a left side menu! </LeftSideMenu>
      {children}
    </Container>
  );
};

export default Layout;
