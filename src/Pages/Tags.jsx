import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Content from "../components/Content";

const Tags = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    
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
          Blogs Tagged on <span>{tag}</span>
        </p>
      </div>

  <div>
  <Content />
  </div>
   
   
      

      <div className="w-full flex justify-center items-center border-2 fixed left-0 top-0 bg-white ">
        <Pagination />
      </div>
    </div>
  )
}

export default Tags
