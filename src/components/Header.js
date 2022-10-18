import { faGithub, faInstagram, faVimeo } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  return (
    <header id='header'>
      <div className='contact'>
        <p className='iconBox'>
          <FontAwesomeIcon icon={faEnvelope} className='sendMail'/>
          <a href="mailto:rgfdds98@gamil.com">Contact</a>
        </p>
      </div>

      <h1 className='tit'><Link to={'/'}>Daily Portfolio</Link></h1>

      <ul className='snsGroup'>
        <li>
          <FontAwesomeIcon
            icon={faGithub}
            className='sns gitLink'
            onClick={() => {window.open('https://github.com/Jeong-jj')}}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faVimeo}
            className='sns velogLink'
            onClick={() => {window.open('https://velog.io/@rgfdds98')}}
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faInstagram}
            className=' sns instaLink'
            onClick={() => {window.open('http://instagram.com/ot.zoa')}}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;