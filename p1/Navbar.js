import React from "react";

function Navbar(props) {
  return (
    <>
      <nav className="nav">
        <a className="nav-link active" href="/">
          {props.title}
        </a>
        <a className="nav-link" href="/">
          Link
        </a>
        <a className="nav-link" href="/">
          Link
        </a>
        <a
          className="nav-link disabled"
          href="/"
          tabindex="-1"
          aria-disabled="true"
        >
          Disabled
        </a>
      </nav>
    </>
  );
}

export default Navbar;
