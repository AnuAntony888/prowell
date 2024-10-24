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
import logo from '../Assets/Logo-01-9.jpg'

  
  import { Link, useLocation } from "react-router-dom";
import { TypographyText } from "../Reuse/Reuse";
  const Foter = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const location = useLocation();
    const footerlink = [
      {
        txt: <>About Us</>,
        data: [
          {
            text1: (
              <>
                <br />
                Designing inspiring fitness spaces that blend innovative solutions with a commitment to wellness, empowering individuals and organizations to embrace a healthier lifestyle.


                <br />
                <br />
              </>
            ),
          },
        ],
      },
      {
        txt: <>Important Links</>,
        data: [
          {
            text1: (
              <>
                <br /> <Link to="/">Home</Link>
              </>
            ),
          },
          { text1: <Link to={"/aboutus"}>About Us</Link> },

          {
            text1: (
              <>
                {" "}
                <Link to={"/contact"}>Contact Us</Link>
                <br /> <br /> <br />
              </>
            ),
          },
        ],
      },
      {
        txt: <>Brands</>,
        data: [
            { text1: <Link to="/vaha">Vaha</Link> },
            { text1: <Link to="/movement">Movement</Link> },
            { text1: <Link to="/pent.">Pent</Link> },
            {text1: <Link to="/well">Well</Link> },
         
        
        ],
      },
      {
        txt: <>Contact Us</>,
        data: [
          {
            text1: (
              <>

                
                <ListItem sx={{ paddingLeft: 0 }}>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAPFBMVEX/AAAAAAD///8Acy8SeDfz+vbz8/MSEhKlAAClSx8AdjD/paWnTiQAezn5oqDy//v5nZ3y+PinDAwAFBSHu7fkAAABZklEQVR4nO3Qx1EEQBAAsfPeAfnnSgxXPb+VQtBmM+t6269keE+fvi/oS/Ql+hJ9ib5EX6Iv0ZfoS/Ql+hJ9ib5EX6Iv0ZfoS/Ql+hJ9ib5EX6Iv0ZfoS/Ql+hJ9ib5EX6Iv0ZfoS/Ql+hJ9ib5EX6Iv0ZfoS/Ql+hJ9ib5EX6Iv0ZfoS6b7Hs/DSqb7Xu/jSqb77rul6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JfoSfYm+RF+iL9GX6Ev0JdN9n5/TSqb7fv/OK5nuu2yXoi/Rl+hL9CX6En2JvkRfoi/Rl+hL9CX6En2JvkRfoi/Rl+hL9CX6En2JvkRfoi/Rl+hL9CX6En2JvkRfoi/Rl+hL9CX6En2JvkRfoi/Rl+hL9CX6En2JvkRfoi/Rl+hL/gFvdjwv8Db2UAAAAABJRU5ErkJggg=="
                    alt=""
                    width={25}
                    height={18}
                  />
                </ListItem>
                {/* <ListItem sx={{ paddingLeft: 0 }}>
                  Office 215, B62, Riggat Al Buteen,
                  <br />
                  Deira, Dubai ,United Arab Emirates
                  <br /> +971 58 567 2042
                </ListItem> */}
                <br />
              </>
            ),
          },
        ],
      },
    ];
  
    return (
        <Box 
            sx={{marginTop:'50px'}}
        >
        <Grid
          container spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
  
    backgroundColor:'#2D2D2D'  ,   
            pl: "8%",
            pr: "8%",
        paddingTop:'50px',
            pb: "2%",
            textAlign: "left",
           
          }}
        >

<Grid
              item
              lg={2} // Set lg to 4 for index 1, otherwise 2.6
              md={3}
              sm={6}
              xs={12}
             
          >
            <List>
              <ListItem sx={{ pl: 0 }}>
              <TypographyText
                Typography={'Social'}
          
                fontSize={"1.25rem"}
                color= "white"
                textAlign="left"
              />
                {/* <h5 className="footheader">Social</h5> */}
              </ListItem>

              {Scocialmedia.map((data) => (
                <ListItem key={data.id}>
                  <ListItemIcon >
                    {data.SocialIcon}
                  </ListItemIcon>
                  <a
                    href={data.link}
                    className="footList"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ListItemText >
                      <span >{data.socaltxt}</span>
                    </ListItemText>
                  </a>
                </ListItem>
              ))}
            </List>
          </Grid>
          
          {/**************888second section***********/}
            <Grid
              item
              lg={2} // Set lg to 4 for index 1, otherwise 2.6
              md={3}
              sm={6}
              xs={12}
             
          >
            <List>
              <ListItem sx={{ pl: 0 }}>
              <TypographyText
                Typography={'Social'}
          
                fontSize={"1.25rem"}
                color= "white"
                textAlign="left"
              />
                {/* <h5 className="footheader">Social</h5> */}
              </ListItem>

              {Scocialmedia.map((data) => (
                <ListItem key={data.id}>
                  <ListItemIcon >
                    {data.SocialIcon}
                  </ListItemIcon>
                  <a
                    href={data.link}
                    className="footList"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ListItemText >
                      <span >{data.socaltxt}</span>
                    </ListItemText>
                  </a>
                </ListItem>
              ))}
            </List>
            </Grid>
          {footerlink.map((post, index) => (
            <Grid
              item
              lg={2} // Set lg to 4 for index 1, otherwise 2.6
              md={3}
              sm={6}
              xs={12}
              sx={{ alignSelf: "flex-start" }}
            >
              <TypographyText
                Typography={post.txt}
                // fontWeight="600"
                fontSize={"1.25rem"}
                color= "white"
                textAlign="left"
              />
              <List sx={{ textAlign: "left" }}>
                {post.data.map((datas, indexs) => (
                  <ListItem
                    sx={{ textAlign: "left", padding: "0 !important" }}
                    key={indexs}
                  >
                    <ListItemText sx={{ textAlign: "left", padding: "0" }}>
                      <TypographyText
                        Typography={datas.text1}
                                fontSize='.9rem'
                                color= "white"

                      />
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
              {index === 0 ? (
                <img
                  src={location.pathname === "/" ? logo : logo}
                  width={120}
                  height={"auto"}
                />
              ) : (
                ""
              )}
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
                        fontSize='.9rem'
              color="white"
                 fontFamily='CamptonLight'

            />
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Foter;
  const Scocialmedia = [
    {
      SocialIcon: '',
      link: "https://www.facebook.com/MyFamFitness/",
      socaltxt: "Facebook",
    },
    {
      SocialIcon: '',
      link: "https://twitter.com/myfamfitness/",
      socaltxt: "Twitter",
    },
    {
      SocialIcon: '',
      link: "https://www.instagram.com/myfamilyfitness/?utm_medium=copy_link",
      socaltxt: "Instagram",
    },
  ];