
import * as React from 'react';

import Sidebar from '../components/Sidebar';
import { useState, useEffect } from 'react';
import SelectCard from '../components/selectCard';

function Recommandation() {
  
    const [topAnime, SetTopAnime] = useState([]);
	

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		SetTopAnime(temp.top.slice(0, 5));
	}
  useEffect(() => {
		GetTopAnime();
	}, []);

  return (
    <div className="content-wrap">
        
    <Sidebar 
					topAnime={topAnime} />
    <SelectCard/>
    
    </div>
  )
}

export default Recommandation