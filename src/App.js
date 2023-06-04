import { useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from "./context/AppContext";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from './Pages/Home';
import CategoryPage from './Pages/CategoryPage';
import Tags from './Pages/Tags';
import Blogs from './Pages/Blogs';

export default function App() {

  const { fetchPostData } = useContext(AppContext);

  const [searchParams,setSearchParam] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      console.log("useEffect, tags: ", tag , "number: " , Number(page))
      fetchPostData(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      console.log("useEffect, category: ", category , "number: " , Number(page))
      fetchPostData(Number(page), null, category);
    }
    else {
      fetchPostData(Number(page));
    }
  }, [location.pathname, location.search])

  return (

    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tags/:tag' element={<Tags />} />
        <Route path='/categories/:category' element={<CategoryPage />} />
        <Route path='/blog/:blogId' element={<Blogs />} />

      </Routes>


    </div>);
}
