import { Input } from "antd";

export default function Search() {
  return (
    <div>
      <div className="w-150 mx-auto ">
        <Input
          placeholder="search.."
          className="focus:border-black focus:ring-0 focus:shadow-none"
        />
      </div>
    </div>
  );
}
