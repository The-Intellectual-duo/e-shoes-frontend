import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Checkout.css'

function Checkout({setShowNav,cart}) {
    console.log(cart);
    return (
        <div className='checkout'>

            <Link>
            <button onClick={() => setShowNav(true)}>Return to home page</button>
            </Link>

            
            <div className='sum-prices'>
                {cart.map(shoe => {
                    return(
                    <>
                    <img src={shoe.image_url} alt={shoe.name} className="item-checkout-image"></img>
                    <h4>{shoe.name}</h4>
                    <p>$ {shoe.price}</p>
                    </>)
                })}
            </div>
        </div>
    );
    }

export default Checkout;