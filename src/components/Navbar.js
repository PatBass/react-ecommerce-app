import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../logo.svg"
import ButtonContainer from "./ButtonContainer";
import styled from "styled-components";

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm px-sm-5">
                <Link to="/">
                    <img src={logo} alt="logo" className="navbar-brand" width="30%" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span>
                            <i className="fas fa-cart-plus mr-2"> </i>my cart
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>

        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
  background: var(--mainBlue);
`