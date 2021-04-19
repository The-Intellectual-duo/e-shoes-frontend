import './styling/App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Route} from 'react-router-dom'
import About from './components/About'

function App() {
  return (
		<div className='main'>
			<Navbar />

			<Route path='/' exact>
				<Home />
			</Route>

      <Route path='/shoes'>
        shoes
      </Route>

      <Route path='/about'>
        <About/>
      </Route>
		</div>
	);
}

export default App;
