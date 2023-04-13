import * as React from "react";
import "./style.scss";

import logo from "./img/logo.svg";
import cart from "./img/cart.svg";
import user from "./img/user.svg";
import btnplus from "./img/btn-plus.svg";
import search from "./img/search.svg";
import unliked from "./img/unliked.svg";
import one from "./img/sneakers/1.jpg";

export default function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer"></div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <div className="favorite">
            <img src={logo} width={40} height={40} />
          </div>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
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
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src={search} alt="search" />
            <input placeholder="Поиск" type="text" />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <img src={unliked} alt="unliked" />
            <img width={133} height={122} src={one} />
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
