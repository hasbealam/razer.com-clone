import {Routes, Route} from 'react-router-dom';
import { HomePage } from "../Components/Homepage/HomePage";
import ProductPage from "../Components/Products/ProductPage";
import Pc from "../Components/Products/Pc";
export function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<Pc />} /> */}
      </Routes>
    );
}