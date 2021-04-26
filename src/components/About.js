import React from 'react';
import '../styling/About.css'
import Card from 'react-bootstrap/Card'
import Jalen from '../styling/Jalen Pic.png'

function About() {
    return (
			<div className='about'>
				<p className='about-desc'>
					JJ's Shoes is inspired by two young aspirping software engineers that
					hope one day they'll have everything they've deserved
				</p>
				<Card style={{ width: '18rem' }} className='josmar-card'>
					<Card.Img
						variant='top'
						src='https://media-exp1.licdn.com/dms/image/C4E03AQHU_VkExdprZQ/profile-displayphoto-shrink_400_400/0/1618871357288?e=1624492800&v=beta&t=zZmXTIdwY0or0y7QEq4QiWPish_G9N0-afT4yN_Idss'
						className='card-img'
					/>
					<Card.Body className='card-body'>
						<Card.Title className='card-title'>Josmar Morales</Card.Title>
						<Card.Text className='card-text'>
							Junior Full-Stack Engineer, located in Norcross, GA
						</Card.Text>
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }} className='jalen-card'>
					<Card.Img
						variant='top'
						src={Jalen}
						className='card-img'
					/>
					<Card.Body className='card-body'>
						<Card.Title className='card-title'>Jalen Foreman</Card.Title>
						<Card.Text className='card-text'>
							Junior Full-Stack Engineer, located in Lithonia, GA
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
}

export default About;