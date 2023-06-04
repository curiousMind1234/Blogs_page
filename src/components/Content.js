import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import ContentDetails from './ContentDetails';
import Spinner from './Spinner';

const Content = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[350px] mb-[300px] 
     justify-center items-center '>
      {
        loading ?
          (<Spinner/>):
          (
            posts.length === 0 ?
            (<div>
               <p>No Data Found...</p>
            </div>) : 
            (
              posts.map((post)=>(
                  <ContentDetails key={post.id} post={post}/>
              ))
            )
          )
      }

    </div>
  )
}

export default Content
