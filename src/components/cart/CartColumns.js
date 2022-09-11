import React from 'react';

function CartColumns () {
    return (
        <div className="container-fluid mt-3 d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto text-center col-lg-2">
                    <h5>Product</h5>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h5>Product Name</h5>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h5>Price</h5>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h5>Quantity</h5>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h5>Remove</h5>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h5>Total</h5>
                </div>
            </div>

        </div>
    );
}

export default CartColumns;