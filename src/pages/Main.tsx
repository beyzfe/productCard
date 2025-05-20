import { useParams } from "react-router";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";

export default function Main() {
  const { categoryName } = useParams();
  return (
    <div className="bg-gray-200 mt-15">
      <div className="text-center py-5 text-2xl font-semibold">
        Everything You Need, Just a Click Away!
      </div>
      <div className="text-center my-3 text-sm text-gray-400 font-semibold">
        Experience shopping the easy and joyful way.
      </div>
      <Search />
      <Categories />
      <ProductCard selectedCategory={categoryName} />
    </div>
  );
}
