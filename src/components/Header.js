import React from "react";
import { text } from "../utils";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">
                {text.header}
              </Link>
            </div>
        </div>
    </nav>
  );
};

export default Header;
