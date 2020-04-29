import { FETCH_WEBSITES, ADD_WEBSITE } from "./types";
import axios from "axios";

// @route   GET api/websites
// @desc    Get all users websites
// @Payload Array of websites from the api
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
      });
    });
};

// @route   POST api/websites
// @desc    Add a Website
// @Payload The added website after sending it to the API
export const addWebsite = (websiteData) => async (dispatch) => {
  axios({
    method: "post",
    url: "http://localhost:5000/api/websites",
    headers: {
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjY0MjFkZDQ4OWUxOTcyM2MwNDZjIn0sImlhdCI6MTU4ODA3MDAxNCwiZXhwIjoxNTg4NDMwMDE0fQ.X7BprTETybJBXatLkqbPj8IDUfS6XR25kBCg0wqIdHg",
      "Content-Type": "application/json",
    },
    data: JSON.stringify(websiteData),
  }).then((website) => {
    dispatch({
      type: ADD_WEBSITE,
      payload: website.data.website,
    });
  });
};
