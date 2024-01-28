import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, AppBar, Toolbar } from '@mui/material';
import { spacing } from '@mui/system';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  const whenClicked = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', fontFamily: 'sans-serif', fontSize: '16px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid #333', width: '25%', margin: '1%', backgroundColor: '#fff' }}>
        <Typography variant="h4" sx={{ border: '1px solid #333', width: '100%', textAlign: 'center', padding: '8px', backgroundColor: '#444', color: '#fff' }}>
          Blog Dashboard
        </Typography>
        <AppBar position="static" sx={{ backgroundColor: '#333', color: '#fff' }}>
          <Toolbar sx={{ ...spacing(2, 2) }}>
            <Link href="/home" sx={{ textDecoration: 'none', fontSize: '1.2rem', '&:hover': { backgroundColor: '#555' } }}>
              Home &nbsp;&nbsp;
            </Link>
            <Link href="/blogform" sx={{ textDecoration: 'none', fontSize: '1.2rem', '&:hover': { backgroundColor: '#555' } }}>
              Add Blog
            </Link>
          </Toolbar>
        </AppBar>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {blogs.map(blog => (
            <li key={blog.id} style={{ borderBottom: '1px solid #333', width: '100%' }}>
              <p style={{ cursor: 'pointer', padding: '8px', margin: 0, backgroundColor: '#ddd', ':hover': { backgroundColor: '#ccc' }}} onClick={() => whenClicked(blog)}>
                {blog.id}. {blog.title}
              </p>
            </li>
          ))}
        </ul>
      </Box>

      <Box sx={{ padding: '10vh 5vw', border: '2px solid #333', width: '75%', margin: '1%', marginLeft: '-0.5vw', backgroundColor: '#fff' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '24px', color: '#333' }}>
          Selected Blog
        </Typography>
        {selectedBlog && (
          <div>
            <p><strong>UserId:</strong> {selectedBlog.userId}</p>
            <p><strong>Id:</strong> {selectedBlog.id}</p>
            <p><strong>Title:</strong> {selectedBlog.title}</p>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Home;
