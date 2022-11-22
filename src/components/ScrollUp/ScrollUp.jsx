import React, { useState } from 'react';

import './ScrollUp.css';

const ScrollUp = () => {
  const [hidden, setHidden] = useState(true);
  const fireClick = () => {
    window.scrollTo(0, 0);
  };

  const createScrollEvent = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100 && hidden === true) {
        setHidden(false);
      } else if (window.scrollY < 100 && hidden === false) {
        setHidden(true);
      }
    });
  };

  createScrollEvent();

  return (
    <>
      {!hidden && (
        <div className="app__scrollUp" onClick={fireClick}>
          ^
        </div>
      )}
    </>
  );
};

export default ScrollUp;
