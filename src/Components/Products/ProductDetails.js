import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../store/actions/product-actions";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector((state) => state.product);
  const product = products.find((item) => item.id === parseInt(productId));
  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [productId, dispatch]);

  return (
    <div className="p-12">
      {product ? (
        <div className="border bg-white my-6 shadow p-12 flex flex-col lg:w-[60%] lg:m-auto">
          <div className="flex flex-col items-start justify-start">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p>{product.description}</p>
            </div>
            <img
              src={product.image}
              className="rounded mt-4 w-screen  grayscale-0  hover:grayscale-1 transition-all duration-300"
            />
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}
