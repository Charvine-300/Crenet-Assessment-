import Comics from './Comics';
import Intro from './Intro';
import News from './News';
import MarvelHQ from './MarvelHQ';


function Homepage() {
  return (
    <div className='homepage-wrapper'>
      <Intro />
      <News  />
      <Comics />
      <MarvelHQ />
    </div>
  );
}

export default Homepage;