/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import {
  REDUCE_QUANTITY_IN_BAG,
  REMOVE_FROM_BAG,
  ADD_TO_BAG,
} from "../actions/types/bagTypes";

const initialState = {
  cart: [],
};

export default (state = initialState, action) => {
  const { type, id, releases, actionSize } = action;
  switch (type) {
    case ADD_TO_BAG:
      const itemToAdd = releases[0].find(({ _id }) => _id === id);
      const isInCart = state.cart.find(
        ({ _id, size }) => (_id === id && size === actionSize)
      );
      if (isInCart) {
        itemToAdd.quantity += 1;
        return {
          ...state,
        };
      }
      itemToAdd.quantity = 1;
      itemToAdd.size = actionSize;
      return {
        ...state,
        cart: [...state.cart, itemToAdd],
      };
    case REDUCE_QUANTITY_IN_BAG:
      const toReduce = state.cart.find(
        ({ _id, size }) => _id === id && size === actionSize
      );
      toReduce.quantity -= 1;
      return {
        ...state,
      };
    case REMOVE_FROM_BAG:
      const newCart = state.cart.filter(
        ({ _id, size }) => _id !== id && size !== actionSize
      );
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};
