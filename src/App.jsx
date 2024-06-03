import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCountries from "./pages/AllCountries";
import Country from "./pages/Country";
import Header from "./header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<AllCountries />} />
          <Route path=":countryName" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
