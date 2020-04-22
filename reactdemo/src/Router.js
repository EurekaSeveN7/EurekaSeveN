import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import LoginControl from "./components/LoginControl";
import Article from "./components/Article";
import Homepage from "./components/Homepage";
import Author from "./components/Author";
import Footer from "./components/Footer";
import Clock from "./components/Clock";
import Content from "./components/Content";
import Calculater from "./components/Calculater";
const Router = (props) => {
  return (
    <BrowserRouter>
      {/* react路由 */}

      <Route path="/" component={Homepage} />
      <Route path="/LoginControl" component={LoginControl} />
      <Route path="/Article" component={Article} />
      <Route path="/Footer" component={Footer} />
      <Route path="/Author" component={Author} />
      <Route path="/Clock" component={Clock} />
      <Route path="/Article/Content" component={Content} />
      <Route path="/Calculater" component={Calculater} />
    </BrowserRouter>
  );
};
export default Router;