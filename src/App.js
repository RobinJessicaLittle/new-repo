// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
// 	const [characters, setCharacters] = useState([]);
// 	const [error, setError] = useState(null);

// 	useEffect(() => {
// 		const fetchCharacters = async () => {
// 			try {
// 				const response = await fetch(
// 					'https://www.breakingbadapi.com/api/characters?limit=10&offset=10',
// 				);
// 				if (!response.ok) {
// 					throw new Error(response.statusText);
// 				}

// 				const data = await response.json();
// 				setCharacters(data);
// 			} catch (err) {
// 				setError('Could not fetch data');
// 				console.log(err.message);
// 			}
// 		};
// 		fetchCharacters();
// 	}, []);

// 	return (
// 		<div className="App">
// 			{characters.map((character, index) => (
// 				<div key={index}>
// 					{error && <p>{error}</p>}
// 					<h1>{character.name}</h1>
// 					<img src={character.img} alt="breaking bad" />
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// export default App;

import { useEffect, useState } from 'react';
import './App.css';


function App() {
	const [chucknorris, setChucknorris] = useState([]);
	const [error, setError] = useState(null);

    useEffect(() => {
		const fetchChuck = async () => {
            try {
				const response = await fetch(
					'http://api.icndb.com/jokes/random');
                if (!response.ok) {
					throw new Error(response.statusText);
				}
        console.log (chucknorris)
				const data = await response.json();
				setChucknorris(data);
            } catch (err) {
				setError('Could not fetch data');
				console.log(err.message);
			}
        };
		fetchChuck();
	}, []);

    return (
		<div className="App">
			{chucknorris.map((chucknorris, index) => (
				<div key={index}>
					{error && <p>{error}</p>}
					<h1>{chucknorris.jokes}</h1>
				</div>
			))}
		</div>
	);
}

export default App;