// components/MediaCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, textBelow, imageUrl, backgroundColor }) {
  return (
    <Card style={{ display: 'flex', maxWidth: '100%', backgroundColor }}>
      <div style={{ flex: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body1" component="div">
            <label htmlFor="campoTexto" style={{ color: 'white' }}>
              {textBelow}
            </label>
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        component="img"
        alt="Descripción de la imagen"
        image={imageUrl}
        style={{ objectFit: 'cover', maxWidth: '100px', maxHeight: '100px', marginTop: '20px' }}
      />
    </Card>
  );
}
