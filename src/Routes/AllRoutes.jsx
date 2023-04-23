import {Routes, Route} from 'react-router-dom';
import { HomePage } from "../Components/Homepage/HomePage";
import ProductPage from "../Components/Products/ProductPage";
import Pc from "../Components/Products/Pc";
import ProductsDetails from "../Components/ProductsDetails/ProductsDetails" 
export function AllRoutes() {
    return (
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/" element={<Pc />} /> */}
        <Route path="/" element={<ProductsDetails />}/>
      </Routes>
    );
}