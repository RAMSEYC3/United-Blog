import React from 'react'

function ListBlogs(props) {
    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {blogs.map((blog) => (//sturdy this line of code map method bwing used to display information //
                <div className="blog-preview" style={{
                    padding: "10px 16px",
                    margin: "20px 0",
                    borderBottom: "1px solid #fafafa",
                }} key={blog.id}>
                    <h2 style={{ color: " #f1356d", }}>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))
            }
        </div>
    )
}

export default ListBlogs
