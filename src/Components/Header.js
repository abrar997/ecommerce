import { BsCart, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import LinkItem from "./LinkItem";
import { IoCarSportOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector((state) => state.cart);
  const itemsLength = items.length;

  let data = JSON.parse(localStorage.getItem("auth"))
    ? JSON.parse(localStorage.getItem("auth"))
    : "";

  const style = `px-4 py-1.5 rounded font-semibold`;

  return (
    <div className="py-4 lg:py-6 lg:px-12 px-4 flex justify-between items-center">
      <Link
        style={{
          boxShadow:
            "inset 16px 16px 12px #e0e0e0,inset -16px -16px 12px #fdfdfd",
        }}
        to="/"
        className="flex rounded p-1 text-3xl items-center text-gray-900 font-medium"
      >
        <IoCarSportOutline />
      </Link>
      <div className="hidden lg:flex gap-6 w-full items-center justify-center ">
        <LinkItem href="/home" text="Home" className={style} />
        <LinkItem href="/home" text="About" className={style} />
        <LinkItem href="/home" text="Contact Us" className={style} />
      </div>

      <div className="flex items-center gap-2">
        <LinkItem
          href="/profile"
          text={
            data.image ? (
              <img
                src={data.image}
                className="rounded-full w-full h-full object-cover p-0.5 object-center"
              />
            ) : (
              <BsPerson size={20} />
            )
          }
          className="text-gray-600 lg:w-12 lg:h-12 w-10 h-10 p-1 rounded-full flex items-center justify-center"
        />

        <Link
          to="/cart"
          className="text-gray-500 relative lg:w-10 lg:h-10 w-8 h-8 p-1 rounded flex items-center justify-center"
          style={{
            boxShadow:
              "inset 16px 16px 12px #e0e0e0,inset -16px -16px 12px #fdfdfd",
          }}
        >
          <BsCart size={23} />
          <span className="absolute bg-gray-900 -top-3 -right-3 rounded-full text-white lg:w-6 lg:h-6 w-5 h-5 flex items-center justify-center">
            {itemsLength > 0 ? itemsLength : 0}
          </span>
        </Link>
      </div>
    </div>
  );
}
