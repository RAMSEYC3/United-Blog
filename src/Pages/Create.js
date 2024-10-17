import React, { useState } from 'react'
import '../css/Create.css'

function Create() {
    const  [title, setTitle] = useState(" ");

    return (
        <div className='create'>
            <h2>Add new blog </h2>
            <form>
                <label>blog title:</label>
                <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>blog body :</label>
                < textarea required />
                <label>blog anthor:</label>
                <select>
                    <option value="Mario">Mario</option>
                    <option value="Ramsey">Ramsey</option>
                </select>
            </form>
            <button>Add blog</button>
        </div>
    )
}

export default Create
