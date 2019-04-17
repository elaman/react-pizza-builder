const initialState = {
  ingredients: {
    tomato: 0,
    salami: 0,
    blackOlive: 0,
    greenOlive: 0,
    redPepper: 0,
    yellowPepper: 0,
  },
  price: 200,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1
        },
        price: state.price + action.information[action.ingredient].price
      };

    case 'REMOVE_INGREDIENT':
      const newState = { ...state };
      newState.ingredients = { ...state.ingredients };
      newState.ingredients[action.ingredient] = state.ingredients[action.ingredient] - 1;
      newState.price = state.price - action.information[action.ingredient].price;

      return newState;

    default:
      return { ...state };
  }
}

export default reducer;