import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="shadow fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-[1500px] mx-auto py-5 flex items-center justify-between">
        <Link to="/">Shopping Web Site</Link>
        <Link to="/basket">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
}
