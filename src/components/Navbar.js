import 'animate.css';
import '../index.css';
import '../styles/navbar.scss';
import { useState }  from 'react';
import { Link } from 'react-router-dom';
import Menu from '../img/menu.svg';
import CloseIcon from '../img/close.svg';
import Logo from '../img/header_logo.svg'
import Search from '../img/search.png';
import Arrow from '../img/arrow.png';
import Facebook from '../img/social-facebook.svg';
import Twitter from '../img/social-twitter.svg';
import Instagram from '../img/social-instagram.svg';
import Tumblr from '../img/social-tumblr.svg';
import Youtube from '../img/social-youtube.svg';
import Snapchat from '../img/social-snapchat.svg';
import Pinterest from '../img/social-pinterest.svg';
import MarvelRed from '../img/red_universe.png';
import SignIn from '../img/sign-in.svg';

function Navbar() {
  const CloseButton = {
    'width': '30px', 
    'height': '30px', 
    'display': 'block', 
    'marginRight': 'auto'
  };

  const [open, setOpen] = useState('close');
  const [slide, setSlide] = useState('');
  const menuItems =[
    {id: 1, name: 'Videos'}, 
    {id: 2, name: 'Characters'}, 
    {id: 3, name: 'Comics'}, 
    {id: 4, name: 'Movies'}, 
    {id: 5, name: 'TV Shows'}, 
    {id: 6, name: 'Games'}, 
    {id: 7, name: 'News'}, 
    {id: 8, name: 'More' }
  ];
  const socialMedia = [
    {id: 1, icon: Facebook, link: 'http://facebook.com/marvel'}, 
    {id: 2, icon: Twitter, link: 'http://twitter.com/marvel'}, 
    {id: 3, icon: Instagram, link: 'http://instagram.com/marvel'}, 
    {id: 4, icon: Tumblr, link: 'http://marvelentertainment.tumblr.com'}, 
    {id: 5, icon: Youtube, link: 'http://youtube.com/marvel'}, 
    {id: 6, icon: Snapchat, link: 'https://www.snapchat.com/add/marvelhq'}, 
    {id: 7, icon: Pinterest, link: 'https://www.pinterest.com/marvelofficial'}
  ]

  function openMenu() {
    if(open === 'close') {
      setSlide('InLeft');
      setOpen('');
    }

    else if (open !== 'close') {
      setSlide('OutLeft');
      setOpen('close');
    }
  }
  
  return (
    <header>
      <div className='icon-wrapper'>
        <img src={Menu} alt='Menu Icon' className='icons remove' onClick={openMenu} />
        <div className='desktop'> 
          <li> 
          <img src={SignIn} alt='Sign In Icon' className='icons' />
            sign in 
          </li> 
        </div>
        <Link to='/' id='align'> <img src={Logo} alt='Marvel Logo' /> </Link>
        <div className='desktop'> 
          <li> 
            <img src={MarvelRed} alt='Marvel Universe' className='icons' />
            marvel unlimited <br/> subscribe
          </li>
        </div>
        <a href='https://www.marvel.com/search'> 
          <img src={Search} alt='Search Icon' className='icons remove' /> 
        </a>
      </div>
      <div className={`menu animate__animated animate__slide${slide}`} id={open}>
        <div className='menu-items'>
          <img src={CloseIcon} alt='Close Icon' className='remove' style={CloseButton} onClick={openMenu}  />
          <ul id='menu'>
            {menuItems.map(item => (
              <li key={item.id}> 
              {item.name}
              <img src={Arrow} alt='Arrow icon' className='icons remove' />
            </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='profile-details'>
            <h2> Marvel Insider </h2>
            <li style={{'width': '90%', 'margin': '0% auto'}}>
              chidera
              <img src={Arrow} alt='Arrow Icon' className='icons remove' />
            </li>
          </div>
          <div id='social-media'>
            {socialMedia.map(social => (
              <a href={social.link} key={social.id}>
                <img  src={social.icon} alt='Social Icon' className='remove' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;