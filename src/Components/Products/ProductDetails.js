import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllProducts } from "../../rtk/slice/slice-product";
import { addItem } from "../../rtk/slice/slice-cart";
import Header from "../Header";
// import { getSingleProduct } from "../../store/actions/product-actions";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((item) => item.id === parseInt(productId));

  useEffect(() => {
    dispatch(fetchAllProducts(productId));
  }, [productId, dispatch]);

  return (
    <>
      <Header />
      <div>
        {product ? (
          <div className="border bg-white shadow p-12 flex flex-col lg:w-[60%] lg:m-auto">
            <div className="flex flex-col items-start gap-4 justify-start">
              <div>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p>{product.description}</p>
              </div>
              <button
                className="bg-black px-4 py-2 text-white rounded hover:bg-opacity-85"
                onClick={() => dispatch(addItem(product))}
              >
                Add to cart
              </button>
              <img
                src={product.image}
                className="rounded mt-4 w-screen  grayscale-0  hover:grayscale-1 transition-all duration-300 h-[350px] object-cover object-top"
              />
            </div>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </>
  );
}
