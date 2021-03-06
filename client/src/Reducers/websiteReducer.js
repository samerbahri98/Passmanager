import { FETCH_WEBSITES, ADD_WEBSITE, DELETE_WEBSITE ,MODIFY_WEBSITE } from "../Actions/types";
import encryption from "../lock/encryption";

const initialState = {
  websitesList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEBSITES:
      let load = action.payload;
      let key= window.sessionStorage.getItem("key")
      if (load) {
        load.forEach((elem) => {
          elem.WebsiteName=encryption.decrypt(elem.WebsiteName,key)
          elem.WebsiteUrl=encryption.decrypt(elem.WebsiteUrl,key)
          elem.Username=encryption.decrypt(elem.Username,key)
          elem.Email=encryption.decrypt(elem.Email,key)
          elem.logoUrl=encryption.decrypt(elem.logoUrl,key)
          elem.Notes=encryption.decrypt(elem.Notes,key)
          elem.Password=encryption.decrypt(elem.Password,key)
        });
      }
      return { ...state, websitesList: load };

    case ADD_WEBSITE: {
      return { ...state, website: action.payload };
    }
    case DELETE_WEBSITE: {
      console.log(action.payload);
    }
    case MODIFY_WEBSITE:{
      console.log(action.payload)
    }
    default:
      return state;
  }
};
