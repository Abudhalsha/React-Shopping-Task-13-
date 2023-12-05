import React from 'react';

function Counter(props) {
  return (
    <div className='basketQuantaty '>
      <button
        className='quantatyButton'
        onClick={() => props.quantaty !== 1 && setQuantity(props.quantaty - 1)}
      >
        <span role='img' aria-label='+'>
          &#x2796;
        </span>
      </button>
      <p className='quantatyNumber'>{props.quantaty}</p>
      <button
        className='quantatyButton'
        onClick={() =>
          props.quantaty !== props.items && setQuantity(props.quantaty + 1)
        }
      >
        <span role='img' aria-label='-'>
          &#x2795;
        </span>
      </button>
    </div>
  );
}

export default Counter;
