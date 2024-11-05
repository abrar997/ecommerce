import { createContext, useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "First car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1661355300902-36e9148281c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    title: "Second car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1685933198220-9961c323e68b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "First car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1685052189022-63e69ec3370e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  },
  {
    id: 4,
    title: "Second car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1685240496122-3180dcaa976c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  },
  {
    id: 5,
    title: "First car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1567863786964-9d65fa4469ed?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Second car",
    price: 220000,
    description: "Lorem ipsum dolor sit amet.",
    image:
      "https://images.unsplash.com/photo-1612071078206-bc912b559e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
];

export const ContextProduct = createContext();
export default function ProductsContextProvider(props) {
  const [products, setProducts] = useState(data);
  //   const getAllData = async () => {
  //     await fetch("data.json")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   };

  //   useEffect(() => {
  //     getAllData();
  //   }, []);

  return (
    <ContextProduct.Provider value={products}>
      {props.children}
    </ContextProduct.Provider>
  );
}
