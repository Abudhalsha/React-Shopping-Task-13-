import axios from 'axios';
import Cookie from 'js-cookie';

const addToBasket = (ItemId, quantaty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get('/api/items/' + ItemId);
    dispatch({
      type: 'PASKET_ADD_ITEM',
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        description: data.description,
        itemsNumber: data.itemsNumber,
        quantaty,
      },
    });

    const {
      basket: { basketItems },
    } = getState();
    Cookie.set('cartItems', JSON.stringify(basketItems));
  } catch (err) {
    console.log(err);
  }
};

const deleteFromBasket = (ItemId) => (dispatch, getState) => {
  dispatch({ type: 'BASKET_DELETE_ITEM', payload: ItemId });

  const {
    basket: { basketItems },
  } = getState();
  Cookie.set('cartItems', JSON.stringify(basketItems));
};

export { addToBasket, deleteFromBasket };
