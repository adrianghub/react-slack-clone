import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from './components/Login/Login'

import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
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
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
