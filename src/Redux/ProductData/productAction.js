import axios from "axios";
const SERVER_URL = process.env.REACT_APP_URL;
export const loginSucess = (email, password) => {
  return (dispatch) => {
    fetch(`${SERVER_URL}users/`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        response.map((ele, i) => {
          if (ele.email === email && ele.password === password) {
            dispatch({ type: "isAuth", payload: true });
          }
        });
      });
  };
};
export const logoutSucess = () => {
  return (dispatch) => {
    dispatch({ type: "isAuthfalse", payload: false });
  };
};

export const productAction = (sort, filter) => {
  let url = `${SERVER_URL}data?`;
  if (sort) {
    url += `&_sort=price&_order=${sort}`;
  }
  if (filter) {
    url += `&specifications.screen=${filter}`;
  }

  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: "data", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addToCart = (object) => {
  return (dispatch) => {
    axios.post(`${SERVER_URL}cart`, object).then((res) => {});
    axios.get(`${SERVER_URL}cart`).then((res) => {
      dispatch({ type: "cart", payload: res.data });
    });
  };
};
