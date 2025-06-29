import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt={`${name} logo`} />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol.toUpperCase()}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>₹{price.toLocaleString()}</p>
          <p className='coin-volume'>Volume: ₹{volume.toLocaleString()}</p>

          <p className={`coin-percent ${priceChange < 0 ? 'red' : 'green'}`}>
            {priceChange.toFixed(2)}%
          </p>

          <p className='coin-marketcap'>
            Mkt Cap: ₹{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
