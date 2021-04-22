import React from 'react'
import '../styling/Home.css'
import HomeShoe from '../styling/HomePageShoe.png'
import red12s from '../styling/red shoe home.png'
import handShoe from '../styling/handshoe.png'
import airmax from '../styling/neonAirMax.png'
import Carousel from './Carousel';

export default function Home() {
    return (
			<div>
				<img className='big-shoe' src={HomeShoe} alt='HomeShoe' />
				<img className='red-12s' src={red12s} alt='red12s' />
				<img className='hand-shoe' src={handShoe} alt='handshoe' />
				<img className='airmax' src={airmax} alt='airmax' />
				<div className='text-container'>
					<div className='text'>
						Welcome to JJ's shoes, home of all the high-end shoes you could ask
						for. Upgrade your shoe game with our new releases and more.
					</div>
					<div className='text'>
						Click on the "Shoes" tab to get started on your shoe journey!
					</div>
				</div>
				<Carousel/>
			</div>
		);
}
