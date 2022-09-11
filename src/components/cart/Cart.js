import React, {Component} from 'react';
import Title from "../Title";
import {ProductConsumer} from "../../context";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";
import CartColumns from "./CartColumns";

class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        console.log("value in Cart.js: "+value)
                        const {cart} = value;

                        if (cart.length > 0) {
                            console.log("value in Cart.js: "+value)
                            return (
                                <section>
                                    <React.Fragment>
                                        <Title name="your" title="cart" />
                                        <CartColumns />
                                        <CartList />
                                    </React.Fragment>

                                </section>
                            );
                        } else {
                            return (
                                <CartEmpty/>
                            )
                        }

                    }
                }
            </ProductConsumer>
        );
    }
}

export default Cart;