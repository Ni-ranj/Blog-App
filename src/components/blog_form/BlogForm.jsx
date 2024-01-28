import React from 'react';
import { Box, Typography, Card,CardContent, Stack, Input, InputLabel, TextareaAutosize, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20vh' }}>
      <Card sx={{ backgroundColor: 'skyblue', padding: '3vh 3vw', width: '25vw', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <CardContent>
          <Typography variant='h3' sx={{ textAlign: 'center', marginBottom: '2vh' }}>Add Blog</Typography>
          <Stack spacing={2}>
            <InputLabel htmlFor="blogName">Blog Name:</InputLabel>
            <Input variant='outlined' type="text" id="blogName" name="blogName" fullWidth />

            <InputLabel htmlFor="authorName">Author Name:</InputLabel>
            <Input variant='outlined' type="text" id="authorName" name="authorName" fullWidth />

            <InputLabel htmlFor="description">Description:</InputLabel>
            <TextareaAutosize variant='outlined' id="description" name="description" minRows={5} fullWidth />

            <Button variant='contained' onClick={() => { navigate('/home') }} type="submit">Submit Blog</Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogForm;
