import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue-900 text-white py-4 lg:py-6 px-12 flex justify-between items-center">
      <div>Logo</div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Market</Link>
        <Link to="/">Contact us</Link>
      </div>
      <div className="flex gap-x-4">
        <Link to="" className="bg-slate-50 rounded px-3 py-1 text-blue-900">
          Logout
        </Link>
        <Link
          to=""
          className="bg-slate-50 w-9 h-9 rounded-full flex  items-center justify-center text-blue-900"
        >
          <BsPerson size={20} />
        </Link>
      </div>
    </div>
  );
}
