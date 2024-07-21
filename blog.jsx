import React from 'react'

const Blog = ({blogs,handleDeleteId}) => {

  return (
    <div>
        {blogs.map((blog)=>(
      <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <h3>{blog.description}</h3>
        <button onClick={()=>handleDeleteId(blog.id)}>Delete blog</button>
        </div>
     ))}
    </div>
  )
}

export default Blog