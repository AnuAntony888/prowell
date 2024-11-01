// import React from 'react'

// const Foter = () => {
//   return (
//     <div>Foter</div>
//   )
// }

// export default Foter
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../Assets/Logo-01-9.jpg";

import { InstagramIcon, TwitterIcon, SocialIcon } from "../Reuse/Icons";
import { Link, useLocation } from "react-router-dom";
import { TypographyText } from "../Reuse/Reuse";
const Foter = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const Data = [
    {
      Typography: "About Us",
      Scocialmedia: [
        {
          Typography: (
            <>
              Designing inspiring fitness spaces that blend innovative solutions
              with a commitment to wellness, empowering individuals and
              organizations to embrace a healthier lifestyle.
              <br />
              <br/>
              <img src={logo} alt  width={'100px'}/>
            </>
          ),
        },
      ],
    },
    {
      Typography: "Social Media",
      Scocialmedia: [
        {
          SocialIcon: SocialIcon,
          link: "https://www.facebook.com/MyFamFitness/",
          socaltxt: "Facebook",
        },
        {
          SocialIcon: TwitterIcon,
          link: "https://twitter.com/myfamfitness/",
          socaltxt: "Twitter",
        },
        {
          SocialIcon: InstagramIcon,
          link: "https://www.instagram.com/prowell.life",
          socaltxt: "Instagram",
        },
      ],
    },

    {
      Typography: "Important Links",
      Scocialmedia: [
        {

          link: "/",
          socaltxt: "Home"
        },
        {

          link: "/aboutus",
          socaltxt: "About Us"
        },
        {
          link: "/contact",
          socaltxt: "Contact Us"
}
        , {
          link: '/annualmaintenance'
  ,socaltxt:' Maintenance'
}
        ,
        
        
      ]
    },
    {
      Typography: "Brands",
      Scocialmedia: [
        {  socaltxt: <Link to="/vaha">Vaha</Link> },
        { socaltxt: <Link to="/movement">Movement</Link> },
        { socaltxt: <Link to="/pent.">Pent</Link> },
        { socaltxt: <Link to="/well">Well</Link> },
      ],
      
    },
    {
      Typography: "Contact Us",
      Scocialmedia: [
        {
          Typography: (<>
            <span style={{fontWeight:'bold'}}>Customer Support:</span><br/>
            support@myfamilyfitness.com<br/>
            +971 56 4127900 / 800-326459 (Toll Free)<br/>
            <span style={{fontWeight:'bold'}}>   Sales/Service Enquiry:</span><br/>
            sales@myfamilyfitness.com<br/>
            +971 4 548 1159 / 800-326459 (Toll Free)
         </> )
        }
      ],
      
    },

  ];

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#2D2D2D",
          pl: "3%",
          pr: "3%",
          paddingTop: "20px",
          pb: "2%",
          textAlign: "left",
        }}
      >
        {/**************888second section***********/}
        {Data.map((item, index) => (
          <Grid item lg={index === 4 || index===0? 3.6 : index===2?1.7:
            1.55} md={3} sm={4} xs={ index=== 0? 12 :index===3?4:index===4?8:
              6} sx={{ height: "100%" }}>
            <List>
              <ListItem sx={{ pl: 0 }}>
                <TypographyText
                  Typography={item.Typography}
                  // Typography={'Social'}
                  fontFamily="Khand"
                  fontSize={"1.25rem"}
                  color="white"
                  textAlign="left"
                />
              </ListItem>

              {item.Scocialmedia.map((data) => (
                <ListItem key={data.id}>
                  {data.SocialIcon ? (
                    <>
                      <ListItemIcon
                        sx={{
                          color: "white",
                          fontFamily: "Khand",
                        }}
                      >
                        {data.SocialIcon}
                      </ListItemIcon>
                      <a
                        href={data.link}
                        className="footList"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ListItemText>
                          <span
                            style={{
                              color: "white",
                              fontFamily: "CamptonLight",
                              fontSize:'.9rem'
                            }}
                          >
                            {data.socaltxt}
                          </span>
                        </ListItemText>
                      </a>
                    </>
                  ) : (
                    <>
                        <Link to={data.link}>
                          {
                            data.Typography ?
                            <TypographyText
                              Typography={data.Typography}
                              color="white"
                              textAlign="left"
                                fontFamily="CamptonLight"
                                fontSize=".9rem"
                              />
                            :
                              <ListItemText >
                         <span style={{color: "white",
                                  fontSize:'.9rem',
                             fontFamily: "CamptonLight",}}> {data.socaltxt}</span>
                             
                          
                                </ListItemText>
  }
                      </Link>
                    </>
                  )}
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
        
       
       
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          md={12}
          sx={{ margin: "auto", textAlign: "center" }}
        >
          <hr />
          <TypographyText
            Typography="Copyright 2018-2024 © Vedaham Business Solutions Pvt Ltd."
            textAlign="centre"
            fontSize=".9rem"
            color="white"
            fontFamily="CamptonLight"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Foter;

const Address = [
  { id: "footer_myfamily_bold", addresstxt: " Customer Support:" },
  { addresstxt: "  support@myfamilyfitness.com" },
  { addresstxt: "   +971 56 4127900 / 800-326459 (Toll Free)" },
  { id: "footer_myfamily_bold", addresstxt: " Sales/Service Enquiry:" },
  { addresstxt: "    sales@myfamilyfitness.com" },
  { addresstxt: " +971 4 548 1159 / 800-326459 (Toll Free)" },
];