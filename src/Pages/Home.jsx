import React from 'react'
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import Content from '../components/Content';

const Home = () => {
  return (
    <div>
        <div className='w-full flex justify-center items-center border-2 fixed top-0 bg-white '>
        <Header/>
        </div>
        
        <Content/>

        <div className='w-full flex justify-center items-center border-2 fixed left-0 top-0 bg-white ' >
        <Pagination/>
        </div>
        
      
    </div>
  )
}

export default Home
