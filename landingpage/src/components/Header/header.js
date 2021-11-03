import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
    return (
      <Card sx={{ maxWidth: 1920 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="34"
            image="../../../assets/img/meliuz-logo"
            alt="meliuz-logo"
          />
           <CardMedia
            component="img"
            height="34"
            image="../../../assets/img/logo-fr.png"
            alt="fotoregistro-logo"
          />
        </CardActionArea>
      </Card>
    );
  }