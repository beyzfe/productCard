import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { getCategories } from "../api/get";
import { Link } from "react-router";

export default function Categories() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) return <Spin tip="Yükleniyor..." />;
  if (isError) return <p>Bir hata oluştu.</p>;

  return (
    <div className="flex gap my-4 mx-auto w-fit gap-3 ">
      {categories?.map((category, index) => (
        <Link
          to={`/category/${category}`}
          className="shadow p-2 bg-gray-100 rounded-sm"
          key={index}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
