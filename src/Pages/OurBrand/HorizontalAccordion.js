import React from 'react';
import { Grid, Container } from '@mui/material';
import './Accordion.css'; // Keep this for custom styles that we retain

const accordionItems = [
  {
    onClick: '/vaha',
    text1: 'Vaha',
    text2:
      'An interactive fitness mirror that transforms any room into a personal gym, offering live and on-demand classes. Perfect for personalized fitness routines, with real-time feedback and 1:1 training sessions.',
    imgSrc: 'https://source.unsplash.com/1000x800',
  },
  {
    onClick: '/pent',
    text1: 'PENT',
    text2:
      'Luxury meets functionality with handcrafted fitness equipment. Customizable designs ensure seamless integration into unique fitness spaces, combining exclusivity and top-notch performance.',
    imgSrc: 'https://source.unsplash.com/1000x802',
  },
  {
    onClick: '/well',
    text1: 'Wellsystem',
    text2:
      'Provides Hydrojet dry water massage systems and DAYON red light therapy, which offer non-contact full-body massages and regeneration benefits. Ideal for fitness centers, spas, and wellness facilities.',
    imgSrc: 'https://source.unsplash.com/1000x804',
  },
  {
    onClick: '/movement',
    text1: 'Movement',
    text2:
      'Known for their innovative EDGE and NEXT lines, Movement offers sleek cardio, strength, and functional fitness equipment. Their award-winning designs maximize space while delivering top durability and performance, widely used in commercial, boutique, and residential gyms.',
    imgSrc: 'https://source.unsplash.com/1000x806',
  },
];

const HorizontalAccordion = () => {
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        {accordionItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div className="box">
 
              <span>{item.text1}</span>
              <p>{item.text2}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HorizontalAccordion;
