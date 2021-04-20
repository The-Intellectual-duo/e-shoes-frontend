import React from 'react';
import '../styling/Item.css'

function Item({shoe}) {
    console.log(shoe);

    return (
        <div className='shoe-card'>
            <img className='shoe-image' src={shoe.image_url} alt={shoe.name}></img>
            <h3 className='shoe-title'>{shoe.name}</h3>
            <p className='shoe-price'>$ {shoe.price}</p>
        </div>
    );
}

export default Item;