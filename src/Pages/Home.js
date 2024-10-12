import React from 'react'
import { useState, useEffect } from 'react'
import ListBlogs from '../ListBlogs';
import usefetch from '../useFetch';

function Home() {
  const { data: blogs, isPending, error } = usefetch('http://localhost:8000/blogs')
  return (
    <div className='Home'>
      {error && <div>{error}</div>}
      {/*for line 33 loading message while data is being fetched from local database*/}
      {isPending && <div style={{ fontSize: "27px", color: "#f1356d" }}> Loading...</div>}
      {blogs && <ListBlogs blogs={blogs} title={"All blogs"} />}
    </div >
  )
}

export default Home