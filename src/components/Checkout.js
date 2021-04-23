import React from 'react';

function Checkout({setShowNav,cart}) {
    console.log(cart);
    return (
        <div className='checkout'>
            <button onClick={() => setShowNav(true)}>Return to home page</button>
            <div className='sum-prices'>
                {cart.map(shoe => {
                    return(
                    <>
                    <h4>{shoe.name}</h4>
                    <p>{shoe.price}</p>
                    </>)
                })}
            </div>
        </div>
    );
    }

export default Checkout;