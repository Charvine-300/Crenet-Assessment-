import '../styles/intro.scss';
import HQ from '../img/marvel_hq.jpg';


function MarvelHQ() {
  return (
    <div className='latest-news padding'>
      <div id='marvel-hq'>
        <div id='image'>
          <img src={HQ} alt='Marvel HQ' />
        </div>
        <div>
          <h4 style={{'color': '#e62429', 'textTransform': 'uppercase', 'fontSize': '1em'}}>
            marvel hq
          </h4>
          <h2> 
            Play games and read comics on MarvelHQ.com
          </h2>
          <button>
            <a href='https://www.marvelhq.com/'> check it out </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MarvelHQ;