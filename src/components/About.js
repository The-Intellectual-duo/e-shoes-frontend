import React from 'react';
import '../styling/About.css'
import Card from 'react-bootstrap/Card'

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
						src='https://media-exp1.licdn.com/dms/image/C5635AQG9PR9QIrGstA/profile-framedphoto-shrink_400_400/0/1615484186792?e=1619528400&v=beta&t=7OmyTs1_Gd4caIqPQDX3-HgHxd9LAJ074d0yPl-o1J8'
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