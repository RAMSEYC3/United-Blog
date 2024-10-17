import React, { useState } from 'react'
import '../css/Create.css'

function Create() {
    const [title, setTitle] = useState(" ");
    const [body, setbody] = useState(" ");
    const [author, setauthor] = useState(" ");

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
        })
    }

    return (
        <div className='create'>
            <h2>Add new blog </h2>
            <form onSubmit={handleSubmit}>
                <label>blog title:</label>
                <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>blog body :</label>
                < textarea required value={body} onChange={(e) => setbody(e.target.value)} />
                <label>blog anthor:</label>
                <input type='text' required value={author} onChange={(e) => setauthor(e.target.value)} />
                {/* <select value={author} onChange={(e) => setauthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Ramsey">Ramsey</option>
                </select> */}
                <button>Add blog</button>
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
    )
}

export default Create
