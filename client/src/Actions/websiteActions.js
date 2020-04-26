import { FETCH_WEBSITES } from "./types";
export const fetchWebsites = () => (dispatch) => {
  fetch("http://localhost:5000/api/websites/", {
    method: "GET",
    headers: {
      "x-auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjY0MjFkZDQ4OWUxOTcyM2MwNDZjIn0sImlhdCI6MTU4NzcwNDUzOCwiZXhwIjoxNTg4MDY0NTM4fQ.AIz5t9mExp1z735KionvcwdFs-CnrSES98A0s52fBI0",
      "Content-Type": "application/json",
    },
  })
    .then((websites) => websites.json())
    .then((websites) => {
      dispatch({
        type: FETCH_WEBSITES,
        payload: websites,
      });
    });
};
