import React from 'react'
import './css/ListBlogs.css'

function ListBlogs(props) { //I used a normal function not a arrow function 
    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {blogs.map((blog) => (//sturdy this line of code map method bwing used to display information
                <div className="blog-preview" key={blog.id}>
                    <h2 style={{ color: " #f1356d", }}>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button className='delete-blog' onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))
            }
        </div>
    )
}

export default ListBlogs
