import React from 'react';

function Title({name, title}) {

    return (
        <div className="row text-title">
            <div className="mx-auto col-10 mb-5 text-center mt-5">
                <h1 className="">
                    {name}
                    <span className="text-blue"> {title}</span>
                </h1>
            </div>
        </div>
    );
}

export default Title;