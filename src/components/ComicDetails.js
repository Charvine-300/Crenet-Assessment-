import '../styles/details.scss';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ComicDetails() {
  const { id } = useParams();
  const [comicDetails, setComicDetails] = useState([]);

  //Accessing data of chosen Comic to display certain detail
  useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=6a0aed02118dd66ab8ad0e1241cad82c&ts=1564731162583&hash=77c4376248bb36ff830753ef996ace60`)
    .then(comic =>{ 
      setComicDetails(comic.data.data.results);
      console.log(comicDetails);
    })
  }, []);


  return (
    <div className='details-wrapper'>
      {comicDetails.map(comic => (
        <div className='comic-details' key={comic.id}>
          <div className='comic-thumbnail'>
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
          <div className='content'>
            <h1> {comic.title} </h1>
            <p> {comic.description} </p>
            <h2> Series </h2>
            <p> {comic.series.name} </p>
            <h2 > Image(s) </h2>
            <div id='image-slider'>
              {comic.images.map(image => (
                <div className='comic-images'>
                  <LazyLoadImage 
                    width={100}
                    height={150}
                    effect='blur'
                    delayTime={500}
                    alt={comic.title}
                    delayMethod='debounce'
                    src={`${image.path}/portrait_medium.${image.extension}`} 
                    />
                </div>
              ))}
            </div>
            <div id='table'>
              <div>
                <h2> Characters: </h2>
                <ul>
                  {comic.characters.items.map (character => (
                    <li key={character.name}> {character.name} </li>
                    ))}
                </ul>
              </div>
              <div>
                <h2> Creators: </h2>
                <ul>
                  {comic.creators.items.map (creator => (
                    <li key={creator.name}> <strong>{creator.name}</strong> - {creator.role} </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button> 
        <Link to='/'> Back To Comics </Link>
      </button>
    </div>
  );
}

export default ComicDetails;