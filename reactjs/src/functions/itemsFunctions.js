import axios from "axios";

const listItems = () => async (dispatch) => {
  try {
    dispatch({ type: "ITEM_LIST_REQUEST" });
    const { data } = await axios.get("/api/items/");
    dispatch({
      type: "ITEM_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({ type: "ITEM_LIST_FAIL", payload: err.message });
  }
};

const detailsItem = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: "ITEM_DETAILS_REQUEST", payload: itemId });
    const { data } = await axios.get("/api/items/" + itemId);
    dispatch({
      type: "ITEM_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({ type: "ITEM_DETAILS_FAIL", payload: err.message });
  }
};

export { listItems, detailsItem };
