import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import {ProductConsumer} from "../context";


class Product extends Component {

    render() {

        const {id, img, price, inCart, title} = this.props.product;



        return (

            <ProductConsumer>
            {value => {
                return (
                    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 mb-3 mr-3">
                        <div className="card">
                            <div
                                className="img-container py-5"
                                onClick={() => console.log("You clicked on the image container")}
                            >
                                <Link to="/details">
                                    <img src={img} alt="phone" className="card-img-top" />
                                </Link>
                                <button
                                    className="cart-btn"
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                    disabled={!!inCart}
                                >
                                    {inCart?
                                        (<p>In Cart</p>):
                                        (<i className="fas fa-cart-plus" />)
                                    }
                                </button>
                            </div>

                        </div>
                        {/* Card footer */}
                        <div className="card-footer justify-content-between d-flex">
                            <p className="align-self-center">{title}</p>
                            <h5 className="text-blue font-italic">
                                <span className="mr-1">$</span>
                                {price}
                            </h5>
                        </div>
                    </ProductWrapper>
                );
            }}
            </ProductConsumer>
        );
    }
}

export default Product;

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        inCart: PropTypes.bool,
        price: PropTypes.number,
        img: PropTypes.string
    }).isRequired
}

const ProductWrapper = styled.div`
  .img-container {
    position: relative;
    overflow: hidden;
    border-color: transparent!important;
    border: 0!important;
    &:hover {
      .cart-btn {
        transform: translate(0, 0);
      }
    }
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container {
    border-color: transparent;
    border: 0!important;
  }
  .img-container:hover {
    .card-img-top {
      transform: scale(1.1);
    }
    & .card-footer {
      background: transparent;
    }
  }
  .cart-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 2rem;
    padding: 0 1rem 0 1rem;
    border: transparent;
    border-radius: 0.5rem 0 0 0;
    color: var(--mainWhite);
    background: var(--lightBlue);
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .card-footer {
    background: white;
    border-top: transparent;
    transition: all 2s ease-in-out;
  }
`;