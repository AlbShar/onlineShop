import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "~/pages/home";
import { About } from "~/pages/about";
import { Admin } from "~/pages/admin";
import { Basket } from "~/pages/basket";
import { ProductItem } from "~/pages/productItem";

export const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<ProductItem />} />
      </Routes>
    </>
  );
};
