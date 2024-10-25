import { Link } from "react-router-dom";

export default function LinkItem({ text, href, className }) {
  return (
    <Link
      to={`${href}`}
      className={className}
      style={{
        boxShadow:
          "inset 16px 16px 12px #e0e0e0,inset -16px -16px 12px #fdfdfd",
      }}
    >
      {text}
    </Link>
  );
}
