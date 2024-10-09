import React from 'react'
import './css/ListBlogs.css'//importing my css file from css folder 

const ListBlogs = ({ blogs, title }) => {
    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {blogs.map((blog) => (//sturdy this line of code map method bwing used to display information
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))
            }
        </div>
    )
}

export default ListBlogs
