import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import ProductPage from "./Components/ProductPage";
import TopSellers from "./Components/TopSellers";
import PopularBlogs from "./Components/PopularBlogs";
export default function App() {
  return (  
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="rounded w-full flex justify-center flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>

          <div>

          <TopSellers/>
          <PopularBlogs/>

          </div>

        </div>
      </div>
    </Router>
  );
}
