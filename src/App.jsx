import * as React from "react";
import "./style.scss";

export default function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина{" "}
            <img
              className="cu-p"
              src="/img/btn-remove.svg"
              width={40}
              height={40}
              alt="Remove item"
            />
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{
                  backgroundImage:
                    "url(https://raw.githubusercontent.com/Archakov06/react-sneakers/master/public/img/sneakers/1.jpg)",
                }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
                <b>12 999 руб</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                width={40}
                height={40}
                alt="Remove item"
              />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ</button>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <div className="favorite">
            <img src="/img/logo.svg" width={40} height={40} />
          </div>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" width={18} height={18} />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" width={18} height={18} />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск" type="text" />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <img src="/img/unliked.svg" alt="unliked" />
            <img
              width={133}
              height={122}
              title="my-img"
              src="https://raw.githubusercontent.com/Archakov06/react-sneakers/master/public/img/sneakers/1.jpg"
              alt="my-img"
            />
            <h5>Мужские кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12999 р</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/btn-plus.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
