import { FETCH_WEBSITES, ADD_WEBSITE } from "../Actions/types";

const initialState = {
  websitesList:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEBSITES:
      return { ...state, websitesList: action.payload };

    case ADD_WEBSITE: {
      return { ...state, website: action.payload };
    }

    default:
      return state;
  }
};
