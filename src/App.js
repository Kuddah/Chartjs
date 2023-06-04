import { Route, Switch, useLocation } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';
import {React, useState } from 'react';
import Sidebar from "./Sidebar";
import Components from "./pages/Components";
import chart from "./pages/chart";
import UploadButton from './Upload';
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";


const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

  function App(setChartConfigs) {
  const [data, setData] = useState([]);
  const location = useLocation();

  const handleFileUpload = (data, headers) => {
    setData(data);
    if (headers.length >= 2) {
      // Use the first two headers as the initial x and y columns
      setChartConfigs([{ xColumn: headers[0], yColumn: headers[1], color: "#93c47d" }]);
    }
  };
  return (
    <Router>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
        <Router>
          <Switch location={location} key={location.pathname}>
            <UploadButton onFileUpload={handleFileUpload} data={data}/>
            <Route exact path="/" component={chart} />
            <Route path="/Components" component={Components} />
            <Route path="/chart" component={chart} data={data}/>
            <Route path="/Profile" component={Profile} />
            <Route path="/NotFound" component={NotFound} />
          </Switch>
          </Router>
        </AnimatePresence>
      </Pages>
      </Router>
  );
  }
  export default App;

