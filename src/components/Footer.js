import '../styles/footer.scss';
import Logo from '../img/marvel.svg';
import Insider from '../img/marvel_insider.png';
import Blue from '../img/marvel_blue.png';
import Facebook from '../img/social-facebook.svg';
import Twitter from '../img/social-twitter.svg';
import Instagram from '../img/social-instagram.svg';
import Tumblr from '../img/social-tumblr.svg';
import Youtube from '../img/social-youtube.svg';
import Snapchat from '../img/social-snapchat.svg';
import Pinterest from '../img/social-pinterest.svg';

const Footer = () => {

  //Details for each icon in the social media section
  const socialMedia = [
    {id: 1, title: 'facebook', icon: Facebook, link: 'http://facebook.com/marvel'}, 
    {id: 2, title: 'twitter', icon: Twitter, link: 'http://twitter.com/marvel'}, 
    {id: 3, title: 'instagram', icon: Instagram, link: 'http://instagram.com/marvel'}, 
    {id: 4, title: 'tumblr', icon: Tumblr, link: 'http://marvelentertainment.tumblr.com'}, 
    {id: 5, title: 'youtube', icon: Youtube, link: 'http://youtube.com/marvel'}, 
    {id: 6, title: 'snapchat', icon: Snapchat, link: 'https://www.snapchat.com/add/marvelhq'}, 
    {id: 7, title: 'pinterest', icon: Pinterest, link: 'https://www.pinterest.com/marvelofficial'}
  ]


  return (  
    <footer>
      <img id='footer-logo' src={Logo} alt='Marvel Logo' />
      <div className='footer-info'>
        <ul>
          <li> about marvel </li>
          <li> help/faqs </li>
          <li> careers </li>
          <li> internships </li>
        </ul>
        <ul>
          <li> advertising </li>
          <li> disney+ </li>
          <li> marvelhq.com </li>
          <li> redeem digital comics </li>
        </ul>
      </div>
      <div className='footer-info' id='insider'>
        <div className='image-words'>  
          <img src={Insider} alt='Marvel Insider' />
          <div>
            <h2> marvel insider </h2>
            <p> Get Rewarded for Being a Marvel Fan </p>
          </div>
        </div>
        <div className='image-words'>
          <img src={Blue} alt='Marvel Blue' />
          <div>
            <h2> marvel unlimited </h2>
            <p> Access Over 29,000+ Digital Comics </p>
          </div>
        </div>
      </div>
      <div className='footer-info images'>
        <h2> follow marvel </h2>
        <ul id='social-links'>
         {socialMedia.map(icon => (
           <li key={icon.id}>
             <a href={icon.link} target='_blank' rel='noreferrer'>
               <img src={icon.icon} alt={icon.title} title={icon.link} />
             </a>
           </li>
         ))}
        </ul>
      </div>
      <ul id='others'>
        <li> Terms of Use </li>
        <li> Privacy Policy </li>
        <li> Your California Privacy Rights </li>
        <li> Do Not Sell My Personal Information </li>
        <li> Children's Online Privacy Policy </li>
        <li> License Agreement </li>
        <li> Interest-Based Ads </li>
        <li> Marvel Insider Term </li>
        <li> &copy;2022 MARVEL </li>
      </ul>
    </footer>
  );
}
  
export default Footer;