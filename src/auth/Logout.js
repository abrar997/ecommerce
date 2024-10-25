import { useNavigate } from "react-router-dom";

export default function Logout() {
  let navigate = useNavigate();

  let name = JSON.parse(localStorage.getItem("auth"))
    ? JSON.parse(localStorage.getItem("auth")).name
    : null;

  const handleDeleteUSer = () => {
    localStorage.removeItem("auth");
    navigate("/register");
  };

  return (
    <div>
      <div className="bg-white rounded mt-20 lg:mt-32 py-12 px-6 shadow xl:w-[50%] lg:w-[60%] m-auto grid gap-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div>
            <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
              <span className="text-main">{name},</span>
              Are you sure you want to log out?
            </h1>
            <p className="text-gray-600">
              If you're sure you want to log out, click the button below.
            </p>
          </div>
          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={handleDeleteUSer}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
