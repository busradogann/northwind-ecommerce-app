import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Cart from "./cart";
import { Link } from "react-router-dom";
import { NaviProps } from "../types/models";

export default function Navi(props: NaviProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar 
      color="white" 
      light 
      expand="md" 
      className="shadow-sm mb-4 rounded"
      style={{ border: '1px solid #e9ecef' }}
    >
      <NavbarBrand href="/" className="fw-bold text-primary">
        Northwind App
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/" className="text-decoration-none">
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/cart" className="text-decoration-none">
              Cart
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/form1" className="text-decoration-none">
              Form Demo 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/form2" className="text-decoration-none">
              Form Demo 2
            </NavLink>
          </NavItem>
          <NavItem>
            <Cart cart={props.cart} removeFromCart={props.removeFromCart}/>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};