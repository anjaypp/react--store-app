import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import './Home.css';

export default function Home() {
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3} justifyContent="center" className="card-container">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className="card">
              <CardMedia
                component="img"
                style={{ objectFit: 'contain', maxHeight: '200px' }} // Adjusted for uniform image sizes
                image={product.image}
                alt={product.title}
                className="card-image"
              />
              <CardContent className="card-content">
                <Typography variant="h6" component="div" className="card-title">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="card-rating">
                  Rating: {product.rating.rate}
                </Typography>
                <Typography variant="h6" component="div" className="card-price">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
