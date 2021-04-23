import './styling/App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Checkout from './components/Checkout'
import {Route, Link} from 'react-router-dom'
import About from './components/About'
import Shoes from './components/Shoes'
import { useState, useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


function App() {
  const [cart, setCart] = useState([])
  const [showNav, setShowNav] = useState(true)
  useEffect(() => {

  }, [showNav])


  return (
		<div className='main'>


      <Link to='/checkout' onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faShoppingCart} className='cart-icon'/>
      </Link>

      <Route path='/checkout'>
        <Checkout setShowNav={setShowNav} cart={cart}/>
      </Route>

			{showNav && <Navbar />}

			<Route path='/' exact>
				<Home />
			</Route>

      <Route path='/shoes'>
        <Shoes cart={cart} setCart={setCart}/>
      </Route>

      <Route path='/about'>
        <About/>
      </Route>
		</div>
	);
}

export default App;
