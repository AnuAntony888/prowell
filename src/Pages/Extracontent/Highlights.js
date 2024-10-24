import React from 'react'
import { containerStyles4 } from '../Home/Home3'
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import { Buttons, TypographyText } from '../../Reuse/Reuse'
import { useNavigate } from 'react-router'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Highlights = () => {
    const theme = useTheme(); // Get the theme object
    const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
    const navigate = useNavigate();
    const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <Box sx={containerStyles4}>
              <Grid container spacing={2}>
                  <Grid xs={12}>
                  <TypographyText
                    Typography={"Highlights of AMC:"}
                    fontSize={"2rem"}
                    textAlign="center"
                    color="white"
                  />
                  </Grid>
          <Grid item xs={12} lg={6} md={6} sm={12}>
      <img src='' alt='' width={'100%'} />
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: "auto" }}>
          {Accordn.map((data, index) => (
                <>
                  <Accordion
                    defaultExpanded={index === 0 ? true : false}
                    sx={{
                      boxShadow: "none",
                      backgroundColor:'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <TypographyText
                        Typography={data.text1}
                     
                        color="#D66A3A"
                        fontSize="1.2rem"
                        textAlign="left"
                      />
                    </AccordionSummary>
                    <AccordionDetails>
                      <TypographyText
                        Typography={data.text2}
                        color="white"
                        fontSize="15px"
                        textAlign={!isSmallScreen ? "left" : "centre"}
                      />
                      <Buttons
                        Buttonname={'Read More'}
                        color="white"
                        textAlign='left'
                        onClick={() => navigate(data.onClick)} 
                      />
                      
                    </AccordionDetails>
                  </Accordion>
                </>
              ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Highlights
const Accordn = [
    {onClick:'/vaha',
      text1:
        "Detailed Inspections and Adjustments ",
      text2:
        "An interactive fitness mirror that transforms any room into a personal gym, offering live and on-demand classes. Perfect for personalized fitness routines, with real-time feedback and 1:1 training sessions.",
    },
    {onClick:'/pent.',
      text1: 'PENT',
      text2:'Luxury meets functionality with handcrafted fitness equipment. Customizable designs ensure seamless integration into unique fitness spaces, combining exclusivity and top-notch performance.'
    },
    {onClick:'/well',
      text1: 'Wellsystem',
      text2:'Provides Hydrojet dry water massage systems and DAYON red light therapy, which offer non-contact full-body massages and regeneration benefits. Ideal for fitness centers, spas, and wellness facilities.'
    
    },
    {onClick:'/movement',
      text1: 'Movement',
      text2:'Known for their innovative EDGE and NEXT lines, Movement offers sleek cardio, strength, and functional fitness equipment. Their award-winning designs maximize space while delivering top durability and performance, widely used in commercial, boutique, and residential gyms.'}]