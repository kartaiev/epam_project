import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuBtns.scss';

export const MenuBtns = () => {
  const [btnActiveState, setBtnActiveState] = useState({
    on: false,
    activeClass: 'active'
  });

  const { on, activeClass } = btnActiveState;

  const addActiveClass = () => {
    setBtnActiveState({
      on: !on
    })
  };

  return (
    <div className="btns">
      <div className="btns__wrap">
        <Link className="btns__link" to="/menu">
          <button
            className={`btns__link-btn ${on ? 'active' : ''}`}
            onClick={addActiveClass}
          >
            Food
          </button>
        </Link>

        <Link className="btns__link" to="/menu/drinks">
          <button
            className={`btns__link-btn ${on ? '' : 'active'}`}
            onClick={addActiveClass}
          >
            Drinks
          </button>
        </Link>
      </div>
    </div>
  );
};
