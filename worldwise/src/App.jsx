import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import "./index.css";
import AppLayout from "./pages/AppLayout";
import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import City from "./Components/City";
import { useState } from "react";
import { Form } from "react-router-dom";
const BaseUrl = "http://localhost:9000";
export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(function () {
    async function FetchCities() {
      try {
        setLoading(true);
        const res = await fetch(`${BaseUrl}/cities`);
        const data = await res.json();
        console.log(data);
        setCities(data);
      } catch {
        alert("there was an error while fteching");
      } finally {
        setLoading(false);
      }
    }
    FetchCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountryList />}
            cities={cities}
            isLoading={isLoading}
          />
          <Route path="form" element={<p>form </p>} />
        </Route>
        <Route path="form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useEffect } from "react";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";
// import CityList from "./Components/CityList";
// import { useState } from "react";

// const BaseUrl = "http://localhost:9000";

// export default function App() {
//   const [cities, setCities] = useState([]);
//   const [isLoading, setLoading] = useState(false);

//   useEffect(function () {
//     async function FetchCities() {
//       try {
//         setLoading(true);
//         const res = await fetch(`${BaseUrl}/cities`);
//         const data = await res.json();
//         console.log(data);
//         setCities(data);
//       } catch {
//         alert("there was an error while fetching");
//       } finally {
//         setLoading(false);
//       }
//     }
//     FetchCities();
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="pricing" element={<Pricing />} />
//         <Route path="product" element={<Product />} />
//         <Route path="app" element={<AppLayout />}>
//           <Route
//             index
//             element={<CityList cities={cities} isLoading={isLoading} />}
//           />
//           <Route
//             path="cities"
//             element={<CityList cities={cities} isLoading={isLoading} />}
//           />
//           <Route path="countries" element={<p>Countries</p>} />
//           <Route path="form" element={<p>Form</p>} />
//         </Route>
//         <Route path="/login" element={<Login />} />
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
