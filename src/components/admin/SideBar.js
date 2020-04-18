import React from "react";
import {Navbar, NavbarBrand, NavbarToggler} from "reactstrap";

export default function SideBar(props) {
  return (
      <aside id="sidebar">
        <div className="sidebar-title">React Admin</div>
        <div className="list-group">
          <a className="list-group-item" href="">Link</a>
        </div>
      </aside>
  );
}

