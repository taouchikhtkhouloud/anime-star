import React from 'react'
import AnimeCard from './AnimeCard';
import StarIcon from '@mui/icons-material/Star';
function MainContent(props) {
	return (
		<main>
			<div className="main-head">
			<header>
			<h1>Find your <strong>Favorite</strong> anime in <strong>Anime--<StarIcon sx={{  fontSize: 40 }}/></strong></h1>
		</header>
				<form 
					className="search-box"
					onSubmit={props.HandleSearch}>
					<input 
						type="search"
						placeholder="Search for an anime..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)}/>
				</form>
			</div>
			<div className="anime-list">
				{props.animeList.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
				))}
			</div>
		</main>
	)
}

export default MainContent
