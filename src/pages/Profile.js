import { useEffect, useRef, useState } from "react";
import Header from "../Components/Header";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Profile() {
  const [image, setImage] = useState();
  const imageRef = useRef();
  const userData = JSON.parse(localStorage.getItem("auth")) || {};

  const handleChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    userData.image = imageUrl;
    localStorage.setItem("auth", JSON.stringify(userData));
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("auth")) || {};
    const userImage = userData.image;
    if (userImage) setImage(userImage);
  }, []);

  const handleImageClick = () => {
    imageRef.current.click();
  };
  return (
    <div>
      <Header />

      <div className="grid bg-white w-[50%] shadow m-auto gap-3 justify-center items-center mt-12 py-10">
        <h1 className="text-gray-500 text-center py-4 text-2xl font-bold">
          User Information
        </h1>
        <div onClick={handleImageClick} className="m-auto w-36 h-36">
          <input
            type="file"
            ref={imageRef}
            className="hidden"
            accept="images/"
            onChange={handleChange}
          />
          {image ? (
            <img
              src={image}
              alt=""
              className="h-full object-cover object-center w-full rounded-full cursor-pointer border flex items-center justify-center"
            />
          ) : (
            <div className="w-36 h-36 rounded-full cursor-pointer border bg-back flex items-center justify-center ">
              <BsPerson size={50} className="text-gray-400" />
            </div>
          )}
        </div>
        <div>
          <h2 className="text-lg flex gap-2 justify-center font-semibold">
            <span className="text-gray-600"> Name:</span>
            <span className="text-main">{userData.name}</span>
          </h2>
          <p className="flex gap-2 text-gray-600">
            <span>If u want delete your account</span>
            <Link to="/logout" className="text-gray-900 hover:text-gray-400">
              click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
