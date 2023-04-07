import * as React from 'react';
import './style.scss';
import logo from './img/logo.svg';
import cart from './img/cart.svg';
import user from './img/user.svg';
import btnplus from './img/btn-plus.svg';

export default function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src={logo} width={40} height={40} />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src={cart} width={18} height={18} />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src={user} width={18} height={18} />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Все кроссовки</h1>
        <div className="Card">
          <img src="./img/sneakers/1.jpg" alt="" width={130} height={122}/>
          <p></p>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column">
              <p>Цена</p>
              <b>12999 р</b>
            </div>
            <button>
              <img src={btnplus} width={11} height={11} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
