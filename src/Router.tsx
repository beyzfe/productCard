import { Routes, Route } from "react-router-dom";
import Basket from "./pages/Basket";
import Main from "./pages/Main";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/category/:categoryName" element={<Main />} />
      </Routes>
    </>
  );
}
