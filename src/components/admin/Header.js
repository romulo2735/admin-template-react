import React from "react";
import {Navbar, NavbarBrand, NavbarToggler, Nav} from "reactstrap";

export default function Header() {
  function handleClickToSidebar(e) {
    e.preventDefault();
    document.getElementById('main-wrapper').classList.toggle('toggled');
  }

  return (
      <header>
        <Navbar color="light" light>
          <NavbarBrand href="/">
            <img src="https://via.placeholder.com/150x50" alt=""/>
          </NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavbarToggler onClick={handleClickToSidebar}/>
          </Nav>
        </Navbar>
      </header>
  );

}