import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
// import "./root.component.css";

export default function Root(props) {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/marvel" className="link">
          Marvelous
        </Link>
        <Link to="/pokemon" className="link">
          Pokemon
        </Link>
      </nav>
    </BrowserRouter>
  )
}
