import React from "react";

import { HiUserCircle } from "react-icons/hi";
import { GiStoneBlock } from "react-icons/gi";

import { Container, Content, LeftSideMenu, Navbar } from "./styles";

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
      <Content>
        <LeftSideMenu>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </LeftSideMenu>
        {children}
      </Content>
    </Container>
  );
};

export default Layout;
