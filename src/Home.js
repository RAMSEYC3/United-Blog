import React from 'react'
import { useState } from 'react'
import ListBlogs from './ListBlogs';

function Home() {
  const [blogs, setblogs] = useState([
    { title: "My new website", body: "Lorem ipsum...", author: "Mario", id: 1 },
    { title: "Welcome party", body: "Lorem ipsum...", author: "Ramsey", id: 2 },
    { title: "Web dev top tips ", body: "Lorem ipsum...", author: "Mario", id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id); //does not change orignal data 
    //using the filter method to filter out all the blogs that are not written by mario 
    setblogs(newBlogs)
  }

  return (
    <div className='Home'>
      <ListBlogs blogs={blogs} title={"All blogs"} handleDelete={handleDelete} />
    </div >
  )
}

export default Home















