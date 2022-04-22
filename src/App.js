import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
function App() {
	return (
		<div className='app'>
			{/* Home --> Header, Banner + Search Dates + Cards + Footer */}
			{/* Header */}
			{/* Banner + Search Dates */}
			{/* Cards */}
			{/* Footer */}
			{/* Search Page */}
			{/* Header */}

			<Router>
				<Header />
				<Switch>
					<Route path='/search'>
						<SearchPage />
					</Route>
					<Route path='/' exact>
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
