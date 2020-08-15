import React from "react";
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* React-Router Chat */}
      </div>
    </div>
  );
};

export default App;
