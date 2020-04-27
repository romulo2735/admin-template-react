import React from "react";
import {Navbar, NavbarBrand, NavbarToggler, Nav} from "reactstrap";

export default function Header() {
  return (
      <header>
        <Navbar color="light" light>
          <NavbarBrand href="/">
            <img src="https://via.placeholder.com/150x50" alt=""/>
          </NavbarBrand>
          <Nav className="" navbar>
            <NavbarToggler/>
          </Nav>
        </Navbar>
      </header>
  );

}