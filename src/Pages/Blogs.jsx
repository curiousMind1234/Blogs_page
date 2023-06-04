import React, { useContext, useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Content from "../components/Content";
import { baseUrl } from "../baseUrl";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import ContentDetails from "../components/ContentDetails";

const Blogs = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const { loading, setLoading } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  const blogId = location.pathname.split("/").at(-1);
  console.log("blogId:", blogId)

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("URL is: ");
    console.log(url);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log("Data :", data);

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } 
    catch (error) {
      console.log("Error fetching related blogs");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);
  return (
    <div>
      <div className="w-full flex justify-center items-center border-2 fixed top-0 bg-white ">
        <Header />
      </div>

      <div className=" flex justify-center items-center py-0 mt-20 mb-0 ">
        <button  className="rounded-md border-2 px-5 py-1"
        onClick={() => navigate(-1)}>Back</button>
      </div>
      {loading ? (
        <div>
          <p> Loading</p>
        </div>
      ) : blog ? (
        <div className="w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7">
          <ContentDetails post={blog} />
          <h2 className="text-2xl font-bold uppercase">Related Blogs</h2>
          {relatedBlogs.map((data) => {         
              return <ContentDetails key={data.id} post={data} />;        
          })}
        </div>
      ) : (
        <div>
          <h2>No Data Found</h2>
        </div>
      )}

      <div className="w-full flex justify-center items-center border-2 fixed left-0 top-0 bg-white ">
        <Pagination />
      </div>
    </div>
  );
};

export default Blogs;
