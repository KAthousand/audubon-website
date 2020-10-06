import React from "react";
import { Link, Route } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav className="nav-container">
        <h2>Birds</h2>
        <Link className="link" to="/new">
          <p className="add">(Add New Bird)</p>
        </Link>
      </nav>
    </div>
  );
}
