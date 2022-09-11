import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import ButtonContainer from "./ButtonContainer";
import {Link} from "react-router-dom";

class Details extends Component {
    render() {

        return (
            <ProductConsumer>
                {value => {
                    const {id, inCart, title, img, company, price, info} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center">
                                    {title}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6">
                                    <img src={img} alt="Phone" className="img-fluid" />
                                </div>
                                <div className="col-10 mx-auto col-md-6">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-muted text-title">made by: {company}</h4>
                                    <h4>
                                        Price: $ {price}
                                    </h4>
                                    <p className="text-muted">{info}</p>
                                    <Link to="/">
                                        <ButtonContainer>
                                            Back to products
                                        </ButtonContainer>
                                    </Link>{<i>&nbsp;&nbsp;</i>}
                                    <ButtonContainer
                                        cart
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                    >
                                        {inCart? "In Cart": "Add to Cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;