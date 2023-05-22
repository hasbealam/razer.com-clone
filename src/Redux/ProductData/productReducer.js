const initial = {
  data: [],
  isAuth: false,
};
const initialcart = {
  cart: [],
};

export const productReducer = (state = initial, action) => {
  if (action.type === "data") {
    return { ...state, data: action.payload };
  } else if (action.type === "isAuth") {
    return {
      ...state,
      isAuth: action.payload,
    };
  } else if (action.type === "isAuthfalse") {
    return {
      ...state,
      isAuth: action.payload,
    };
  }
  return state;
};

export const cartReducer = (state = initialcart, action) => {
  if (action.type === "cart") {
    return { ...state, cart: action.payload };
  }
  return state;
};
