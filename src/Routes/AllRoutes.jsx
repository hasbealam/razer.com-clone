import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Components/Homepage/HomePage";
import ProductPage from "../Components/Products/ProductPage";
import Pc from "../Components/Products/Pc";
import { Cart } from "../Components/Cart/Cart";
import Bothnavs from "../Components/Navbar/Bothnavs";
import { Payments } from "../Components/Payment/Payments";
import { SucessPage } from "../Components/Payment/SucessPage";
import ProductsDetails from "../Components/ProductsDetails/ProductsDetails";
import { Signin } from "../Components/SignUp_SignIn/Signin";
import { Signup } from "../Components/SignUp_SignIn/Signup";
import { Footer } from "../Components/Footer/Footer";
export function AllRoutes() {
  return (
    <>
      <Bothnavs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<ProductPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/laptops" element={<Pc />} />
        <Route path="/productDetails/:id" element={<ProductsDetails />} />
        <Route path="/payment" element={<Payments />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/successfulPayment" element={<SucessPage />} />
      </Routes>
      <Footer />
    </>
  );
}
