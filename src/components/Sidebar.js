import React from 'react'

function Sidebar({ topAnime }) {
	return (
		<aside className='aside'>
			<nav>
				<h3>Top Anime</h3>
				{topAnime.map(anime => (
					<a 
						href={anime.url} 
						target="_blank"
						key={anime.mal_id} 
						rel="noreferrer">
							<img 
						src={anime.image_url} 
						alt="Anime Image" className='topanimeimage' />
						{ anime.title }
					</a>
				))}
			</nav>
		</aside>
	)
}

export default Sidebar
