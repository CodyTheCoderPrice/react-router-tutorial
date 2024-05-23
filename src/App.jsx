import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import BookRoutes from './pages/BookRoutes';
import NotFound from './pages/NotFound';

function App() {
	const location = useLocation();
	return (
		<>
			<Routes>
				<Route path='/books' element={<h1>Extra Content</h1>} />
			</Routes>
			<nav>
				<ul>
					<li>
						<NavLink
							to='/'
							style={({ isActive }) => {
								return isActive ? { color: 'red' } : {};
							}}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/books'>Books</NavLink>
					</li>
				</ul>
			</nav>
			{location.state}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/books/*' element={<BookRoutes />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
