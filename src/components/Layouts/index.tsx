import React from "react";

import Navbar from "./Navbar";
import LeftSideMenu from "./LeftSideMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="Layout">
      <Navbar />
      <LeftSideMenu />
      {children}
    </div>
  );
};

export default Layout;
