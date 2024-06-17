import React from "react";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
