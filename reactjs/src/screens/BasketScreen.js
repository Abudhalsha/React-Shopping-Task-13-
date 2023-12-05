import React, { useEffect } from 'react';
import { addToBasket, deleteFromBasket } from '../functions/basketActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Basket(props) {
  const basket = useSelector((state) => state.basket);

  const { basketItems } = basket;

  const subtotal = basketItems.reduce((x, y) => x + y.price * y.quantaty, 0);
  const numberOfItems = basketItems.reduce((x, y) => x + y.quantaty, 0);

  const itemId = props.match.params.id;

  const quantaty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    itemId && dispatch(addToBasket(itemId, quantaty));
  }, [dispatch, itemId, quantaty]);

  const decreaseItemQuantity = (id, quantaty) =>
    quantaty !== 1 && dispatch(addToBasket(id, quantaty - 1));

  const increaseItemQuantity = (id, quantaty, stock) =>
    stock > quantaty && dispatch(addToBasket(id, quantaty + 1));

  const deleteItem = (itemId) => dispatch(deleteFromBasket(itemId));

  const checkout = () => {
    props.history.push('/');
  };

  return (
    <div className='basket'>
      <div className='basketList'>
        <ul className='basketListContainer'>
          <li className='shoppingCart'>Shopping Cart</li>
          {basketItems.length === 0 ? (
            <div className='emptyCart'>
              Your Shopping Cart is empty... <Link to='/'>Go Shopping</Link>
            </div>
          ) : (
            basketItems.map((item) => (
              <li key={item.product}>
                <div className='basketImage'>
                  <Link to={'/item/' + item.product}>
                    <img src={item.image} alt='product' />
                  </Link>
                </div>

                <div className='basketName'>
                  <Link className='itemName' to={'/item/' + item.product}>
                    {item.name}
                  </Link>
                  <div>{item.description}</div>
                </div>

                <div className='basketQuantaty '>
                  <button
                    className='quantatyButton'
                    onClick={() =>
                      decreaseItemQuantity(item.product, item.quantaty)
                    }
                  >
                    <span role='img' aria-label='-'>
                      &#x2796;
                    </span>
                  </button>
                  <p className='quantatyNumber'>{item.quantaty}</p>
                  <button
                    className='quantatyButton'
                    onClick={() =>
                      increaseItemQuantity(
                        item.product,
                        item.quantaty,
                        item.itemsNumber
                      )
                    }
                  >
                    <span role='img' aria-label='+'>
                      &#x2795;
                    </span>
                  </button>
                </div>

                <div className='basketPrice'>${item.price}</div>

                <div className='basketDelet basketButton'>
                  <button
                    type='button'
                    onClick={() => deleteItem(item.product)}
                  >
                    X
                  </button>
                </div>
              </li>
            ))
          )}
          <li>
            <div className='continueShopping'>
              <Link to='/'>&#11013;</Link>
              <Link to={'/'}>Continue Shopping</Link>
            </div>

            {basketItems.length !== 0 && (
              <div>
                <span className='subtotal'>Subtotal: </span>
                <span className='total'>${subtotal}</span>
              </div>
            )}
          </li>
        </ul>
      </div>

      <div className='basketAction'>
        <ul className='actionContainer'>
          <li>
            <b>Number of items: </b>
            {numberOfItems} items
          </li>
          <li>
            <b>Items Sub-Total: </b>
            {subtotal}
          </li>
          <li>
            <b>Shipping: </b>
            <i> FREE</i>
          </li>
          <li className='basketTotal'>
            <b>Total:</b>
            {subtotal}
          </li>
        </ul>

        <button
          disabled={basketItems.length === 0}
          onClick={checkout}
          className='checkout'
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Basket;
