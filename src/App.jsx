import React from "react";
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';

const App = () => {
  return (
    <div className="app">
      <Router>
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        <Switch>
        {/* React-Router Chat */}
        <Route path="/room/:roomId">
          <Chat />
        </Route>
        <Route path="/">
          <h1>Dzien dobry!</h1>
        </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
};

export default App;
