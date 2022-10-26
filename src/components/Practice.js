import React from 'react';
import './Practice.css'
import GitHubCalendar from 'react-github-calendar';

const Practice = () => {
  return (
    <section id='git-calendar'>
      <h1 className='practice-tit'>More harder, More greener</h1>

      <GitHubCalendar
        username='jeong-jj'
        blockSize={16}
      />
    </section>
  );
};

export default Practice;