import {
  FETCH_WEBSITES,
  ADD_WEBSITE,
  DELETE_WEBSITE,
  MODIFY_WEBSITE,
} from "./types";
import encryption from "../lock/encryption";
import axios from "axios";

const token = localStorage.getItem("token");

// @route   GET api/websites
// @desc    Get all users websites
// @Payload Array of websites from the api
export const fetchWebsites = () => async (dispatch) => {
  axios({
    url: "http://localhost:5000/api/websites/",
    method: "GET",
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
  }).then((websites) => {
    console.log(websites);
    dispatch({
      type: FETCH_WEBSITES,
      payload: websites.data.websites,
    });
  });
};

// @route   POST api/websites
// @desc    Add a Website
// @Payload The added website after sending it to the API
export const addWebsite = (websiteData) => async (dispatch) => {
  Object.keys(websiteData).forEach(
    (item) =>
      (websiteData[item] = encryption.encrypt(websiteData[item], "samer"))
  );
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
    let code = encryption.encrypt(website.data.website.Password, "samer");
    console.log(code);
    let recode = encryption.decrypt(code, "samer");
    console.log(recode);
    console.log(typeof recode);
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
  });
};

// @route   PUT api/websites
// @desc    UPDATE Website
// @Payload The added website after sending it to the API
export const modifyWebsite = (id, websiteData) => async (dispatch) => {
  Object.keys(websiteData).forEach(
    (item) =>
      (websiteData[item] = encryption.encrypt(websiteData[item], "samer"))
  );
  console.log({ id: id, data: websiteData });
  axios({
    method: "put",
    url: `http://localhost:5000/api/websites/${id}`,
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(websiteData),
  }).then((website) => {
    dispatch({
      type: MODIFY_WEBSITE,
    });
  });
};
