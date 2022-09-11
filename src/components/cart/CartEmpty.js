import React from 'react';

function CartEmpty()  {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-title text-center mt-5">
                    <h2 className="text-title">
                        This cart is empty
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default CartEmpty;