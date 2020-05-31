import { FETCH_WEBSITES, ADD_WEBSITE, DELETE_WEBSITE } from "./types";
import axios from "axios";
import Hash from "../Hash";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU3ODExZjcyMjM2YWIzODllNzYwYWEyIn0sImlhdCI6MTU5MDc4Mzc3MiwiZXhwIjoxNTkxMTQzNzcyfQ.R0caTaQmdMd_1Hb2qHYtZn9LoUucQdH5FYht5BnM_ec";

// @route   GET api/websites
// @desc    Get all users websites
// @Payload Array of websites from the api
export const fetchWebsites = () => async (dispatch) => {
  fetch("http://localhost:5000/api/websites/", {
    method: "GET",
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
  })
    .then((websites) => websites.json())
    .then((websites) => {
      // for( const property in websites.websites){
      //   websites.websites.property=Hash.decrypt(websites.websites.property)
      // }
      if (websites.websites.size !== 0) {
        websites.websites.Username = Hash.decrypt(websites.websites.Username);
        websites.websites.Email = Hash.decrypt(websites.websites.Email);
        websites.websites.Password = Hash.decrypt(websites.websites.Password);
        websites.websites.Notes = Hash.decrypt(websites.websites.Notes);
      }
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
      "x-auth-token": token,
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

// @route   DELETE api/websites
// @desc    Add a Website
// @Payload The added website after sending it to the API
export const deleteWebsite = (id) => async (dispatch) => {
  axios({
    method: "delete",
    url: `http://localhost:5000/api/websites/${id}`,
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
  }).then((website) => {
    dispatch({
      type: DELETE_WEBSITE,
    });
    console.log(website);
  });
};
