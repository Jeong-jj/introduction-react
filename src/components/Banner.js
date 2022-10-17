import { faCakeCandles, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <div id='banner'>
      <div className='myCard'>
        <div className='picFrame'>
          <div className='myPic'></div>
        </div>

        <div className='aboutMe'>
          <div className='title'>
            <p>Front-End Developer</p>
            <p>Rookie</p>
            <p>with great potential</p>
          </div>

          <div className='desc'>
            <div className='articleTop'>
              <p className='myName'>조정준</p>
              <p className='birth'>
                <FontAwesomeIcon icon={faCakeCandles} /><span>1995. 10. 15</span>
              </p>
            </div>

            <div className='articleBottom'>
              <p>
                <FontAwesomeIcon icon={faQuoteLeft}/>
                <strong>행동한 뒤에 남은 후회는 하지 않았을 때의 후회보다 가치있다.</strong>
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
              <p>도전하는 것을 좋아하는 프로그래머</p>
              <p>맡은 일엔 끝까지 책임을 다하는 프로그래머</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;