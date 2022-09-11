import React from 'react';
import CartItem from "./CartItem";
import {ProductConsumer} from "../../context"

function CartList() {
    return (
        <ProductConsumer>
            {
                value => {
                    const {cart} = value;
                    return (
                        <div>
                            {cart.map(item => {
                                return <CartItem item={item} />
                            })}
                        </div>
                    );
                }
            }
        </ProductConsumer>
    );


}

export default CartList();