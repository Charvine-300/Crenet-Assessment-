import '../styles/intro.scss';
import Facebook from '../img/social-facebook.svg';
import Twitter from '../img/social-twitter.svg';



function Intro() {
  return (
    <div className='profile-wrapper'>
      <section>
        <div className='intro-image'></div>
        <div className='info'>
          <div id='desktop'>
            <div> <h3> carol danvers </h3> </div>
            <h1> captain marvel </h1>
            <p>
              Carol Danvers became one of the universe's most 
              powerful heroes when Earth is caught in the middle
              of a galactic war between two alien races.
            </p>
          </div>
        </div>
      </section>
      <div id='socials'>
        <h3> follow </h3>
        <div> 
          <a href='http://facebook.com/marvel'>
            <img src={Facebook} alt='Facebook Icon' />
          </a>
          <a href='http://twitter.com/marvel'>
            <img src={Twitter} alt='Twitter Icon' />
          </a>
        </div>
      </div>
      <div id='bottom-menu'>
        <article>
          <p> overview </p>
        </article>
        <article>
          <p> in comics profile </p>
        </article>
        <article>
          <p> in comics full profile </p>
        </article>
      </div>
    </div>
  );
}

export default Intro;