import React from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Content from "../components/Content";
import { useNavigate, useLocation } from "react-router-dom";

const CategoryPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div >
      <div className="w-full flex justify-center items-center border-2 fixed top-0 bg-white ">
        <Header />
      </div>

      <div className=" flex justify-center items-center py-0 mt-20 mb-0 ">
        <div>
          <button
            className="rounded-md border-2 px-5 py-1"
            onClick={()=>navigate(-1)}
          >
            Back
          </button>
        </div>

        <p className="font-bold text-md px-3">
          Blogs on <span>{category}</span>
        </p>
      </div>

      <Content />

      <div className="w-full flex justify-center items-center border-2 fixed left-0 top-0 bg-white ">
        <Pagination />
      </div>
    </div>
  );
};

export default CategoryPage;
