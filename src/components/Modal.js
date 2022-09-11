import React, {Component} from 'react';
import styled from "styled-components";
import {ProductConsumer} from "../context";
import ButtonContainer from "./ButtonContainer";
import {Link} from "react-router-dom";

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">

                                        <div id="modal" className="col-8 mx-auto text-center col-md-6 col-lg-4 text-capitalize p-5">
                                            <h5>added to cart</h5>
                                            <img src={img} alt="Product" className="img-fluid"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">Price: $ {price}</h5>
                                            <Link to="/">
                                                <ButtonContainer
                                                    onClick={()=>closeModal()}
                                                >
                                                    Store
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer
                                                    cart
                                                    onClick={()=>value.closeModal()}
                                                >
                                                    Go to cart
                                                </ButtonContainer>
                                            </Link>

                                        </div>

                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }

                }}
            </ProductConsumer>

        );
    }
}

export default Modal;

const ModalContainer = styled.div`
  background-color: rgba(0,0,0,0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  #modal {
    background-color: var(--mainWhite);
  }
`