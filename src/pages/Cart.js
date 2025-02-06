import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import { clearCart, deleteItem } from "../rtk/slice/slice-cart";
import { useEffect } from "react";

export default function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      {items.length > 0 ? (
        <div className="gap-4 mt-8 flex flex-col lg:w-[60%] lg:m-auto">
          <button
            className="bg-gray-700 px-2 py-1 text-white mx-12"
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
          {items.map((item) => (
            <div
              key={item.id}
              className="h-32 p-4 border bg-white shadow flex items-center gap-4"
            >
              <img src={item.image} className="h-full" />
              <h1 className="text-lg font-semibold text-gray-500">
                {item.title}
              </h1>
              <button
                className="bg-red-500 px-2 py-1 text-white"
                onClick={() => dispatch(deleteItem(item))}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-3xl font-semibold mt-12">
          start add items
        </p>
      )}
    </div>
  );
}
