import Comics from './Comics';
import Intro from './Intro';
import News from './News';
import MarvelHQ from './MarvelHQ';
import Footer from './Footer';


function Homepage() {
  return (
    <div className='homepage-wrapper'>
      <Intro />
      <News  />
      <Comics />
      <MarvelHQ />
      <Footer />
    </div>
  );
}

export default Homepage;