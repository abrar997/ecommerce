import background from "../../images/bg.jpg";
export default function First() {
  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/creative-wallpaper-with-grey-cubes_23-2148811493.jpg?t=st=1729813546~exp=1729817146~hmac=6086abd42072a574f921432a3d3ee90c983642808c2750d52f6e37bc6b9e268f&w=996`,
      }}
      className="bg-fixed bg-cover relative bg-no-repeat h-[550px]"
    >
      <div className="absolute inset-0 bg-[#eeeeeed4] grid items-center justify-center">
        <div className="grid gap-4 items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-bold capitalize">
              White and black Cars gallery
            </h1>
          </div>
          <p className="w-[60%] m-auto text-gray-600">
            We help you discover the car of your dreams. Whether you're looking
            for a family SUV, a sporty sedan, or a reliable truck, we have a
            wide range of vehicles to suit every need and budget.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button className="bg-black hover:bg-opacity-80 text-white rounded px-4 py-2">
              start shopping
            </button>
            <button className="bg-black hover:bg-opacity-80 text-white rounded px-4 py-2">
              contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
