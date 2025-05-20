import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function CategoryProducts() {
  const { categoryName } = useParams<{ categoryName: string }>();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 capitalize">{categoryName}</h2>
      <ProductCard selectedCategory={categoryName} />
    </div>
  );
}
