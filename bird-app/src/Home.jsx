import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="header-container">
        <Link className="link" to="/">
          <h1>Audubon Society</h1>
        </Link>
      </div>
      <nav className="nav-container">
        <h2>Birds</h2>
        <Link className="link" to="/new">
          <p className="add">(Add New Bird)</p>
        </Link>
      </nav>
    </div>
  );
}
