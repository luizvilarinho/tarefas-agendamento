import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';


const initialState = {
  newValue: 'Atualizado via Redux!',
  zubumafu:"zubuzando por aqui"
};

export const clickReducer = (state = initialState, action) => {
   
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue,
        zubumafu: action.zubumafu
      };
    default:
      return state;
  }
};