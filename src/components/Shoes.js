import {React, useEffect, useState} from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import '../styling/Shoes.css'
import Item from './Item'


function Shoes(props) {
    const [nike, setNike] = useState([])
    const [jordan, setJordan] = useState([])
    const [puma, setPuma] = useState([])
    const [key, setKey] = useState('jordan')
    const axios = require('axios')


    useEffect(() => {
        axios.get('https://protected-garden-44970.herokuapp.com/jordan/')
            .then(res => setJordan(res.data))

        axios.get('https://protected-garden-44970.herokuapp.com/nike/')
            .then(res => setNike(res.data))

        axios.get('https://protected-garden-44970.herokuapp.com/puma/')
            .then(res => setPuma(res.data))
    }, [axios])

    return (
			<div className='shoes-comp'>
				<Tabs
					mountOnEnter='true'
					unmountOnExit='true'
					className='shoes-tab'
					defaultActiveKey={key}
					onSelect={(k) => setKey(k)}>
					<Tab className='nike-tab tab' eventKey='nike' title='Nike'>
						{nike.map((shoe) => (
							<Item shoe={shoe}/>
						))}
					</Tab>

					<Tab className='jordan-tab tab' eventKey='jordan' title='Jordan'>
						{jordan.map((shoe) => (
							<Item shoe={shoe}/>
						))}
					</Tab>

					<Tab className='puma-tab tab' eventKey='puma' title='Puma'>
						{puma.map((shoe) => (
							<Item shoe={shoe}/>
						))}
					</Tab>
				</Tabs>
			</div>
		);
}

export default Shoes;