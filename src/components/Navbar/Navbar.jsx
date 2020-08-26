import React, { Fragment } from "react";
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
  Button
} from "reactstrap";
import "../Navbar/Navbar.css";
import Medal from "../../assets/img/nav-medal-1.svg";
import Logo from "../../assets/img/nav-logo.svg";

const IndexNavbar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="lg" >
        <NavbarBrand href="/" className="nav-logotipo"><img src={Logo} alt="logotipo"/> </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >
            <NavItem className="nav-list">
              <NavLink href="/components/" className="text-uppercase text-dark"> Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle  className="text-uppercase text-dark nav-list" nav caret>
                About Us
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem  />
                <DropdownItem>
                  info
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle  className="text-uppercase text-dark nav-list" nav caret>
                Courses
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem  />
                <DropdownItem>
                  info
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle  className="text-uppercase text-dark nav-list" nav caret>
                Admission
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem  />
                <DropdownItem>
                  info
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/"  className="text-uppercase text-dark nav-list"> Feedback</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"  className="text-uppercase text-dark nav-list"> Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"  className="text-uppercase text-dark nav-list"> Contact Us</NavLink>
            </NavItem>
            <Fragment>
              <NavItem className="nav-verify">
                <NavLink>
                  <p className="text-dark">
                    <img src={Medal} width="20" height="20" style={{marginRight: "3px"}} alt="certificate"/>
                      Verify Certificate
                    </p>
                </NavLink>
              </NavItem>
              <NavItem className="nav-btn-1" >
                <Button
                  onClick={(e) => e.preventDefault()}
                  style={{ background: "linear-gradient(90deg, #3AE4DF 0%, #7A88FF 104.29%)", width: "140px",height: "40px",
                  borderRadius: "5px",color: "#ffff", borderColor: "transparent"}}
                >
                  <p>Log In</p>
                </Button>
              </NavItem>
            </Fragment>
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default IndexNavbar;