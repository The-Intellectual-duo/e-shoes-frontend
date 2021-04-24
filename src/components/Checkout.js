import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../styling/Checkout.css'


function Checkout({setShowNav,cart}) {
    const [purchased, setPurchased] = useState(false)
    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        address:'',
        cardNumber:''
    })

    useEffect(() => {
    }, [])

    function handleChange(e){
        setData({...data,[e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        setPurchased(true)
        //axios.post()
        console.log(data);
    }

    return (
			<div className='checkout'>
				<Link
					to='/'
					onClick={() => {
						setShowNav(true);
						setPurchased(false);
					}}>
					<h2 className='return-button'>Return to home page</h2>
				</Link>
				{!purchased && (
					<>
						<div className='sum-prices'>
							{cart.map((shoe) => {
								return (
									<>
										<img
											src={shoe.image_url}
											alt={shoe.name}
											className='item-checkout-image'></img>
										<h4>{shoe.name}</h4>
										<p>$ {shoe.price}</p>
									</>
								);
							})}
							<div>
								<h2>
									Total :{' '}
									{cart.reduce((sum, curr) => {
										return (sum += parseInt(curr.price));
									}, 0.0)}
								</h2>
							</div>
						</div>
						<form className='form' onSubmit={handleSubmit}>
							<div>
								<h3>First Name</h3>
								<input
									required
									placeholder='John'
									name='firstName'
									value={data.firstName}
									onChange={handleChange}
								/>
							</div>
							<div>
								<h3>Last Name</h3>
								<input
									required
									placeholder='Doe'
									value={data.lastName}
									name='lastName'
									onChange={handleChange}
								/>
							</div>
							<div>
								<h3>Address</h3>
								<input
									required
									placeholder='1234 General Assembly Drive'
									name='address'
									value={data.address}
									onChange={handleChange}
								/>
							</div>
							<div>
								<h3>Card Number</h3>
								<input
									required
									placeholder='1234-8008-4200-6900'
									name='cardNumber'
									value={data.cardNumber}
									onChange={handleChange}
									type='password'
								/>
							</div>
							<p className='disclaimer'>
								Disclaimer: Please do not put your actual card number as we will
								splurge on your card
							</p>
							<button type='submit' value='Submit'>
								Submit
							</button>
						</form>
					</>
				)}
				{purchased && (
					<div className='purchased'>
						<h1>Thank You for shopping on JJ's Shoes</h1>
						<h3>
							Checkout our Github Repo{' '}
							<a href='https://github.com/The-Intellectual-duo'>here</a>
						</h3>
					</div>
				)}
			</div>
		);
    }

export default Checkout;
