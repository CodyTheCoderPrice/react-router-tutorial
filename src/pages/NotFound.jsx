import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/', { state: 'Error: Not a page' });
		}, 1000);
	}, []);
	return <h1>NotFound</h1>;
}

export default NotFound;
