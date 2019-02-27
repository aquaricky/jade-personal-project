import React, { Component } from 'react';
import './SiteBannerComponent.css';
import {NavLink,Link} from 'react-router-dom';
import { Collapse,Navbar,NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink as Reactstraplink } from 'reactstrap';

class SiteBannerComponent extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (

      <Navbar color="light" light expand="md">
        <NavbarBrand> <Link className="navbar-brand" to="/"><h3>Jade Miller</h3></Link> </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>

            <NavItem>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="nav-link" to="/Resume">Resume</NavLink>
            </NavItem>

            {/*<NavItem>
              <NavLink className="nav-link" to="/ContactMe">Contact Me</NavLink>
            </NavItem>

            <NavItem>
               <NavLink className="nav-link" to="/Projects">Projects</NavLink>
            </NavItem>*/}

            <NavItem>
              <Reactstraplink target="_blank" href="https://github.com/aquaricky"> GitHub </Reactstraplink>
            </NavItem>

          </Nav>
        </Collapse>
    </Navbar>
    );
  }
}

export default SiteBannerComponent;



{/**Might have to remove entire page!! Apply the NAVBAR section of Bootstrap for this and remove all these extra grid options
 */}