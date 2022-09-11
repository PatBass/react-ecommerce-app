import React from 'react';

function CartItem({value, item}) {
    const {img, title, price} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto text-center col-lg-2">
                    <img src={img} alt="Smartphone" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p>{title}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h5>{price}</h5>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h5>Quantity</h5>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h5><i className="fas fa-trash" /></h5>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h5>Total</h5>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

