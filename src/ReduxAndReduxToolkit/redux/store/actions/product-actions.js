export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SINGLE_PRODUCTS = "SINGLE_PRODUCTS";
export const ADD_PRODUCTS = "ADD_PRODUCTS";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};
export const getSingleProduct = (product) => {
  return {
    type: SINGLE_PRODUCTS,
    payload: product,
  };
};
export const getProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
};

export const fetchAllProducts = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    dispatch(getProducts(data));
  };
};
export const singleProducts = (params) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params}`
    );
    const data = await res.json();
    dispatch(getSingleProduct(data));
  };
};
