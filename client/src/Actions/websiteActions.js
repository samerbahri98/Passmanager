import { FETCH_WEBSITES, ADD_WEBSITE, DELETE_WEBSITE } from "./types";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3ODExZjcyMjM2YWIzODllNzYwYWEyIn0sImlhdCI6MTU5MDQyMzY3MSwiZXhwIjoxNTkwNzgzNjcxfQ.3zMF8TZxCzyw6Vzo-yUUZ7TDl2mqmPWHen9fltUIvRs";

// @route   GET api/websites
// @desc    Get all users websites
// @Payload Array of websites from the api
export const fetchWebsites = () => async dispatch => {
  fetch("http://localhost:5000/api/websites/", {
    method: "GET",
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json"
    }
  })
    .then(websites => websites.json())
    .then(websites => {
      dispatch({
        type: FETCH_WEBSITES,
        payload: websites.websites
      });
    });
};

// @route   POST api/websites
// @desc    Add a Website
// @Payload The added website after sending it to the API
export const addWebsite = websiteData => async dispatch => {
  axios({
    method: "post",
    url: "http://localhost:5000/api/websites",
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json"
    },
    data: JSON.stringify(websiteData)
  }).then(website => {
    dispatch({
      type: ADD_WEBSITE,
      payload: website.data.website
    });
  });
};

// @route   DELETE api/websites
// @desc    Add a Website
// @Payload The added website after sending it to the API
export const deleteWebsite = id => async dispatch => {
  axios({
    method: "delete",
    url: `http://localhost:5000/api/websites/${id}`,
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json"
    }
  }).then(website => {
    dispatch({
      type: DELETE_WEBSITE
    });
    console.log(website);
  });
};
