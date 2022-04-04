import React from "react";
import "./root.component.css";

export default function Root(props) {
  return (
    <>
    <h1>This is a marvelous app</h1>
      <nav className="nav">
        <a href="/marvel" className="link">
          Marvelous
        </a>
        <a href="/pokemon" className="link">
          Pokemon
        </a>
      </nav>
    </>)
}
