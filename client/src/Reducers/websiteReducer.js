import { FETCH_WEBSITES } from "../Actions/types";

const initialState = {
  websites: [],
  website: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEBSITES:
      return { ...state, websites: action.payload };

    default:
      return state;
  }
};
