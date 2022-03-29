import Comics from './Comics';
import Intro from './Intro';
import News from './News';


function Homepage() {
  return (
    <div className='homepage-wrapper'>
      <Intro />
      <News  />
      <Comics />
    </div>
  );
}

export default Homepage;