import React from "react";

import { HiUserCircle } from "react-icons/hi";
import { GiStoneBlock } from "react-icons/gi";
import {
  AiOutlineBlock,
  AiOutlineUser,
  AiOutlineWallet,
  AiOutlinePlus,
} from "react-icons/ai";

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
            Nauany
          </p>
        </div>
      </Navbar>
      <Content>
        <LeftSideMenu>
          <li>
            <AiOutlineBlock size={40} />
          </li>
          <li>
            <AiOutlineUser size={40} />
          </li>
          <li>
            <AiOutlineWallet size={40} />
          </li>
          <li>
            <AiOutlinePlus size={40} />
          </li>
        </LeftSideMenu>
        {children}
      </Content>
    </Container>
  );
};

export default Layout;
