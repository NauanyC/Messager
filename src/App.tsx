import * as React from "react";
import GlobalStyles from "./styles/global";

// pages
import Home from "./pages/Home";

// layout
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
