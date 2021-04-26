import React from 'react';
import '../styling/Item.css'

function Item({shoe,cart,setCart}) {


    return (
			<div className='shoe-card flip-card'>
                <div className='flip-card-inner'>
				<div className='flip-card-front'>
					<img
						className='shoe-image'
						src={shoe.image_url}
						alt={shoe.name}></img>
					<h3 className='shoe-title'>{shoe.name}</h3>
					
				</div>
				<div className='flip-card-back'>
					<h1>{shoe.name}</h1>
					<h3 className='shoe-price'>$ {shoe.price}</h3>
                    <p>{shoe.description}</p>
                    <button onClick={() => setCart([...cart,shoe])}>Add To Cart</button>
				</div>
                </div>
			</div>
		);
}

export default Item;