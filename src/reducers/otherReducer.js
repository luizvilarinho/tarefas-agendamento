import { OTHER_UPDATE } from '../actions/actionTypes';


const initialState = {
  otherValue: 'Its other reducer',
};

export const otherReducer = (state = initialState, action) => {
    console.log("stateOTHERREDUCER", state)
  switch (action.type) {
    case OTHER_UPDATE:
        return {
            ...state,
            otherValue: action.otherValue
          };
    default:
      return state;
  }
};