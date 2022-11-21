import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function HeaderComponent(args) {
  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="">
        <NavbarBrand href="/Home">Expense Tracking Site</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/register">SignUp</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">
                Login
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="me-auto" navbar>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;
