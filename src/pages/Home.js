import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Customer from "../Components/Home/Customer";
import First from "../Components/Home/First";
import Services from "../Components/Home/Services";
import Slider from "../Components/Slider";
// import ProductsContextProvider from "../Components/context/ProductsContext";
// import { deposit, withdraw } from "../store/actions/bank-actions";
// import { fetchAllProducts } from "../store/actions/product-actions";
import { useEffect } from "react";
// import { deposit, withdraw } from "../rtk/slices/slice-bank";
// import {
//   addNewProduct,
//   fetchAllProducts,
//   fetchAllProductsAsync,
// } from "../rtk/slices/slice-products";
import { fetchAllProducts } from "../rtk/slice/slice-product";
function Home() {
  const dispatch = useDispatch();
  // // const state = useSelector((state) => state.bank);
  // const products = useSelector((state) => state.product);
  // console.log(products);

  // useEffect(() => {
  //   // dispatch(fetchAllProducts());
  //   dispatch(fetchAllProductsAsync());
  // }, []);

  const products = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div>
      {/* <div>
        <h1 className="flex text-3xl items-center justify-center">{state}</h1>
        <button
          onClick={() => dispatch(withdraw(100))}
          className="bg-red-600 px-4 py-2 rounded text-white"
        >
          withdraw
        </button>
        <button
          onClick={() => dispatch(deposit(100))}
          className="bg-red-600 px-4 py-2 rounded text-white"
        >
          Deposit
        </button>
      </div> */}
      <Header />
      <First />
      <div className="relative">
        <Services />
      </div>
      {/* <ProductsContextProvider>
        <Slider title="Our Unique Cars" isFirst />
        <Slider title="Trending Cars" />
      </ProductsContextProvider> */}

      <Slider title="Our Unique Cars" data={products} isFirst />
      {/* <button
        onClick={() => dispatch(addNewProduct({ id: 1, title: "new item" }))}
      >
        add new product
      </button> */}
      {/* <button
        onClick={() =>
          dispatch(
            addProduct({
              id: 1,
              title: "text",
              image:
                "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            })
          )
        }
      >
        Add product
      </button> */}
      {/* <Slider title="Our Unique Cars" data={products} /> */}
      <Customer />
    </div>
  );
}

export default Home;
