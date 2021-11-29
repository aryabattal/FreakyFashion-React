import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";

const App =() => (
    <main>
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="products/:urlSlug" element={<ProductDetailsPage />} />
      {/* <Route path="search" element={<SearchResultPage />} /> */}
    </Routes>
  </main>
)

export default App;