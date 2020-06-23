import { FETCH_WEBSITES, ADD_WEBSITE, DELETE_WEBSITE } from "../Actions/types";
import encryption from "../lock/encryption";

const initialState = {
  websitesList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEBSITES:
      let load = action.payload;
      let salt = "samer"
      if (load) {
        load.forEach((elem) => {
          elem.WebsiteName=encryption.decrypt(elem.WebsiteName,salt)
          elem.WebsiteUrl=encryption.decrypt(elem.WebsiteUrl,salt)
          elem.Username=encryption.decrypt(elem.Username,salt)
          elem.Email=encryption.decrypt(elem.Email,salt)
          elem.logoUrl=encryption.decrypt(elem.logoUrl,salt)
          elem.Notes=encryption.decrypt(elem.Notes,salt)
          elem.Password=encryption.decrypt(elem.Password,salt)

          // Object.keys(elem).forEach((item) => {
          //   // if(typeof elem[item]!=="string")
          //   // elem[item]=encryption.decrypt(elem[item],"samer")
          // });
        });
      }
      return { ...state, websitesList: load };

    case ADD_WEBSITE: {
      return { ...state, website: action.payload };
    }
    case DELETE_WEBSITE: {
      console.log(action.payload);
    }
    default:
      return state;
  }
};
