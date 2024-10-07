import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './Add.css';

const Add = () => {
  const [formData, setFormData] = useState({
    title: '',
    image: null,
    rating: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    const formSubmissionData = new FormData();
    formSubmissionData.append('title', formData.title);
    formSubmissionData.append('image', formData.image);
    formSubmissionData.append('rating', formData.rating);
    formSubmissionData.append('price', formData.price);

    console.log('FormData for submission:', formSubmissionData);
  };

  return (
    <>
      {/* Heading for the form */}
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Add a product
      </Typography>

      {/* Form container */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 400,
          margin: 'auto',
          mt: 4
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Image"
          name="image"
          type="file"
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Rating"
          name="rating"
          type="number"
          value={formData.rating}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Add;
