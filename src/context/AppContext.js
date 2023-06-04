import {createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../baseUrl';

export const AppContext = createContext();

export default function AppcontextProvider({children}) {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState("false");
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    async function fetchPostData(page = 1, tag=null, category) {
        setLoading(true);
        let url  =  `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try {          
            
            const res = await fetch(url);
            console.log("URL in context",url)
            const data = await res.json();
            if(!data.posts || data.posts.length === 0){
                throw new Error("Something Went Wrong")
            }
            console.log("API data", data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)            
        } catch (error) {
            console.log("Error fetching the data", error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePagination(page){
        navigate( { search: `?page=${page}`});
        setPage(page);    
    }

    const value = {
        page,
        setPage,
        loading,
        setLoading,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        fetchPostData,
        handlePagination
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}