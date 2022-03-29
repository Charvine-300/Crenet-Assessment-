import '../styles/comics.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 


function Comics() {
  var [comicsList, setComicsList] = useState([]);
  
  //Fetching list of comics with Captain Marvel (Carol Danvers) included
  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters/1010338/comics?format=comic&formatType=comic&orderBy=onsaleDate&limit=100&apikey=6a0aed02118dd66ab8ad0e1241cad82c&ts=1564731162583&hash=77c4376248bb36ff830753ef996ace60')
    .then(comics =>{ 
      console.log(comics);
      setComicsList(comics.data.data.results);
    })
  }, []);

  console.log(comicsList);

  return (
    <div id='marvel-comics'>
      <div id='stroke'>
        <h2> captain marvel comics </h2>
      </div>
      <div className='comics-slider'>
        {comicsList.map(comic => (
          <Link to={`/details/${comic.id}`} key={comic.id}>
            <div className='comic-info'>
              <div>
                <LazyLoadImage 
                  width={216}
                  height={324}
                  effect='blur'
                  delayTime={500}
                  alt={comic.title}
                  delayMethod='debounce'
                  src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`} 
                />
              </div>
              <h3> {comic.title} </h3>
              <p> <strong> Release Date </strong> <br/> {comic.dates[0].date} </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default trackWindowScroll(Comics);