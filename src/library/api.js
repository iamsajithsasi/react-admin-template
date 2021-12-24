import { baseUrl } from "./constant";
import axios from "axios";

// api calls
export const getMethod = async (url) => {
  const token = localStorage.getItem("token") || "";
  try {
    axios
      .get(baseUrl + url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postMethod = async (url, data) => {
  const token = localStorage.getItem("token") || "";
  try {
    axios
      .post(baseUrl + url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        data,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const putMethod = async (url) => {
  const token = localStorage.getItem("token") || "";
  try {
    axios
      .put(baseUrl + url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteMethod = async (url, data) => {
  const token = localStorage.getItem("token") || "";
  try {
    axios
      .delete(baseUrl + url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        data,
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  } catch (error) {
    console.log(error);
    return error;
  }
};