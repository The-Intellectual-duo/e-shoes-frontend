import React from 'react'
import {Link} from 'react-router-dom'
import '../styling/Navbar.css'

export default function Navbar() {
    return (
			<div className='navbar'>
				<Link className='home-navbar' to='/'>
					Home
				</Link>
				<Link className='shoes-navbar' to='/shoes'>
					Shoes
				</Link>
				<Link className='about-navbar' to='/about'>
					About
				</Link>
			</div>
		);
}
