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
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
            <img width={133} height={122} src='' />
            <h5>Кроссовки мужские Nike</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12999 р</b>
              </div>
              <button className="button">
                <img width={11} height={11} src={btnplus} />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={122} src="/img/sneakers/1.jpg" />
            <h5>Кроссовки мужские Nike</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12999 р</b>
              </div>
              <button className="button">
                <img width={11} height={11} src={btnplus} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
