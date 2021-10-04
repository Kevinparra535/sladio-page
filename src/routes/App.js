import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../containers/Home.jsx";
import Docs from "../containers/Docs";
import Demos from "../containers/Demos";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/docs" component={Docs} />
          <Route exact path="/demos" component={Demos} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
