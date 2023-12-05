import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listItems } from '../functions/itemsFunctions';
import { useSelector, useDispatch } from 'react-redux';

// Spinner on loading
import Spinner from '../components/Spinner';

function HomeScreen(props) {
  const itemList = useSelector((state) => state.itemList);
  const { items, loading, error } = itemList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listItems());
  }, [dispatch]);

  const addToBasket = (id) => {
    props.history.push('/basket/' + id + '?quantaty=' + 1);
  };

  return loading ? (
    <Spinner />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className='items'>
      {items.map((item) => (
        <li key={item._id}>
          <div className='item'>
            <Link to={'/item/' + item._id}>
              <img className='itemImage' src={item.image} alt='product'></img>
            </Link>
            <div className='productName'>
              <Link to={'/item/' + item._id}>{item.name}</Link>
            </div>
            <div className='itemDescription'>{item.description}</div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div className='itemPrice'>{item.price}$</div>
              <div
                className='addToBasket'
                onClick={() => addToBasket(item._id)}
              >
                Add{' '}
                <span role='img' aria-label='cart'>
                  &#128722;
                </span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HomeScreen;
