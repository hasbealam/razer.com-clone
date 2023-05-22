import { GET_DATA } from "./actionType";
import axios from "axios";
const SERVER_URL = process.env.REACT_APP_URL;

const handlegetData = () => {
  return (dispatch) => {
    axios.get(`${SERVER_URL}data`).then((res) => {
      dispatch({
        type: GET_DATA,
        payload: res.data,
      });
    });
  };
};

const addToCart = (object) => {
  return (dispatch) => {
    axios.post(`${SERVER_URL}cart`, object).then((res) => {});
    axios.get(`${SERVER_URL}cart`).then((res) => {
      dispatch({ type: "cart", payload: res.data });
    });
  };
};
export { handlegetData, addToCart };
