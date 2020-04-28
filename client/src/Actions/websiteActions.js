import { FETCH_WEBSITES, ADD_WEBSITE } from "./types";
import axios from "axios"


export const fetchWebsites = () => async (dispatch) => {
  fetch("http://localhost:5000/api/websites/", {
    method: "GET",
    headers: {
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjY0MjFkZDQ4OWUxOTcyM2MwNDZjIn0sImlhdCI6MTU4ODA3MDAxNCwiZXhwIjoxNTg4NDMwMDE0fQ.X7BprTETybJBXatLkqbPj8IDUfS6XR25kBCg0wqIdHg",
      "Content-Type": "application/json",
    },
  })
    .then((websites) => websites.json())
    .then((websites) => {
      dispatch({
        type: FETCH_WEBSITES,
        payload: websites.websites,
      })
    });
};

export const addWebsite = (websiteData) => async (dispatch) => {

  axios({
    method:"post",
    url:"http://localhost:5000/api/websites",
          headers: {
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjY0MjFkZDQ4OWUxOTcyM2MwNDZjIn0sImlhdCI6MTU4ODA3MDAxNCwiZXhwIjoxNTg4NDMwMDE0fQ.X7BprTETybJBXatLkqbPj8IDUfS6XR25kBCg0wqIdHg",
      "Content-Type": "application/json",
    },
    data:JSON.stringify(websiteData)
  })
    .then((website) => {
      dispatch({
        type: ADD_WEBSITE,
        payload: website.data.website,
      });
      
    })
    
};
