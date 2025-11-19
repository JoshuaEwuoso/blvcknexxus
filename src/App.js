import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import AeonByte from './pages/AeonByte';
import Thrud4Front from './pages/Thrud4Front';
import TerraKulture from './pages/TerraKulture';
import About from './pages/About';

function App() {
	useEffect(() => {
		const setTitle = () => {
			document.title = getPageTitle();
		};
		const getPageTitle = () => {
			const currentPath = window.location.pathname;

			switch (currentPath) {
				case '/4FrontTV':
					return '4FrontTV';
				case '/AeonByte':
					return 'AeonByte';
				case '/TerraKulture':
					return 'TerraKulture';
				default:
					return 'BlvckNexxus';
			}
		};
		setTitle();
	});

	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/TerraKulture' element={<TerraKulture />} />
					<Route path='/AeonByte' element={<AeonByte />} />
					<Route path='/4FrontTV' element={<Thrud4Front />} />
					<Route path='/About' element={<About />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
