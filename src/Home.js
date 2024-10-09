import React from 'react'
import { useState, useEffect } from 'react'
import ListBlogs from './ListBlogs';

function Home() {
  const [blogs, setblogs] = useState(null)
  const [isPending, setIsPending] = useState(true) //from here
  const [error, setError] = useState(null)

  //fetching the data from the local database which is db.json 
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogswww')
        .then(res => {
          if (!res.ok) {
            throw Error("Could not connect to database try later")
          }
          return res.json()
        })
        .then(data => {
          setblogs(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          setIsPending(false)
          setError(err.message);
        })
    }, 1000)//set the time for loading while fetching data from databse 
  }, []);

  return (
    <div className='Home'>
      {  error && <div>{error}</div> }
      {/*for line 33 loading message while data is being fetched from local database*/}
      {isPending && <div style={{ fontSize: "27px", color: "#f1356d" }}> Loading...</div>}
      {blogs && <ListBlogs blogs={blogs} title={"All blogs"} />}
    </div >
  )
}

export default Home