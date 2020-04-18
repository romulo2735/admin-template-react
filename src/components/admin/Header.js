import React from "react";
import {Navbar, NavbarBrand, NavbarToggler} from "reactstrap";

export default function Header() {
  return (
      <header>
        <Navbar color="light">
          <NavbarBrand href="/">
            <img src="https://via.placeholder.com/150x50" alt=""/>
          </NavbarBrand>
          <NavbarToggler />
        </Navbar>
      </header>
  );

}