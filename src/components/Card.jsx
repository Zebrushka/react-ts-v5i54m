import * as React from "react";

function Card(){
    return (
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
    );
}

export default Card