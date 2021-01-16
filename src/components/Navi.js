import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default function Navi(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  console.log(props.cart)
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Northwind App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Nav className="ml-auto" navbar>
        <Collapse isOpen={isOpen} navbar>
            <NavItem>
              <NavLink>
                <Link to="form1">Form Demo 1</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="form2">Form Demo 2</Link>
              </NavLink>
            </NavItem>
            <CartSummary cart={props.cart} removeFromCart={props.removeFromCart}/>
        </Collapse>
        </Nav>
      </Navbar>
    </div>
  );
};