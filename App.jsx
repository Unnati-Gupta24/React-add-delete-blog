import { useState } from 'react'
import './App.css'
import Blog from './components/blog';

function App() {
  const [blogs,setBlogs] = useState([
    {title:'My work', description:'I can play', id:'1'},
    {title:'My inspiration', description:'I can wrok', id:'2'},
    {title:'My help', description:'I can help', id:'3'}
  ]);

  const handleDeleteId = (id)=>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div>
     <Blog blogs={blogs} handleDeleteId={handleDeleteId}/>
    </div>
  );
}

export default App
