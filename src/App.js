import { useState, useEffect } from 'react';

import MainContent from './components/MainContent';
import Navbar from './components/navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeList from './pages/animelist';
import Recommandation from './pages/recommandation';
function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		SetTopAnime(temp.top.slice(0, 5));
	}

	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

		SetAnimeList(temp.results);
	}

	useEffect(() => {
		GetTopAnime();
	}, []);
	
	return (
		<div className="App">
			<Navbar/>
			
				
			<BrowserRouter>
			<Routes>
			<Route path="/" element={<AnimeList />} />
			<Route path="/recommender" element={<Recommandation />} />

			</Routes>
			</BrowserRouter>
			
			
		</div>
	);
}

export default App;
