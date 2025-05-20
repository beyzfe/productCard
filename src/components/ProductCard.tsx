import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { getProducts } from "../api/get";
import { useCartStore } from "../store/useCartStore";
import { message } from "antd";

interface ProductCardProps {
  selectedCategory?: string;
}

export default function ProductCard({ selectedCategory }: ProductCardProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Ürünler alınırken hata oluştu", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 ">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="w-60 h-80 rounded-xl shadow bg-white flex flex-col justify-between p-3"
        >
          <div className="shadow w-40 h-40 mx-auto rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain h-full"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-sm">
              <div className="font-semibold truncate w-32">{product.title}</div>
              <div className="text-gray-600">${product.price}</div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                size="small"
                onClick={() => {
                  addToCart(product);
                  message.success(`${product.title} sepetinize eklendi!`);
                }}
              >
                ADD
              </Button>
              <Button size="small" icon={<PlusOutlined />}  />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
