import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TypographyText, useScreenSize } from "../../Reuse/Reuse";
import {
  Box,
  Button,
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = (props) => {
  const matches2 = useScreenSize();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const contactform = [
    { placeholder: "Name", name: "from_name", type: "text" },
    { placeholder: "Email Address", name: "email", type: "email" },

    { placeholder: "Message", name: "message", type: "text" },
    { placeholder: "Phone Number", name: "phone", type: "text" },
  ];
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_euk05dp",
        "template_ctedpxi",
        form.current,
        "-ER35YKpfAl5T5gD8"
      )
      .then(
        (result) => {
          toast.success("Thank you for contact us", {
            position: "top-right",
            autoClose: 3000, // Duration in milliseconds
          });
        },
        (error) => {
          toast.error("hai", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
          });
          console.log(error.text);
        }
      );
    // Clear the form fields after submission
    form.current.reset();
  };
  return (
    <div>
      <React.Fragment>
        <Grid
          container
          spacing={2}
          id="home"
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: isSmallScreen ? "12%" : "100px",
            paddingLeft: "5%",
            paddingRight: "5%",

            backgroundImage: `url(https://img.freepik.com/premium-photo/row-dumbbells-with-sun-setting-them_1254193-1411.jpg?w=1060)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: 0,
            height: "100vh",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Black background with slight transparency
              zIndex: 1,
            }}
          />

          <Grid
            item
            xs={12}
            lg={12}
            md={12}
            sm={12}
            sx={{
              zIndex: 2,
              margin: "auto",
            }}
          >
            <div data-aos="fade-up">
              <TypographyText
                Typography={<>Contact Us</>}
                color="white"
                variant={matches2 ? "h3" : "h4"}
                // fontWeight="600"
              />
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
      {/*******second content*****************/}
      <Grid
        container
        spacing={5}
        sx={{
          p: "6%",
          // bgcolor:'rgba(0, 0, 0, 0.)'
        }}
      >


        
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Grid container sx={{}}>
            <Grid item xs={12}>
         

<TypographyText
                Typography={<>Get in<span
                  style={{color:'#D66A3A'}}>Touch</span> </>}
          color="#04336C"
          fontSize="2rem"
          textAlign={!isSmallScreen ? "left" : "centre"}
         
        />
            </Grid>

            <Grid item xs={12}>
              <br />
              <TypographyText
                Typography={
                  <>
                    Get in touch with ProWell to begin creating a tailored
                    wellness experience for your space. Our team is available
                    24/7 at 800-326459 for consultations and support.
                  </>
                }
                // color="#6A7C92"
                textAlign="left"
              />
              <br />
            </Grid>

            <Grid item xs={12}>
              {Listcontent.map((data, index) => (
                <ListItem disablePadding>
                  <ListItemButton
                    style={{ backgroundColor: "transparent" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <ListItemIcon sx={{ color: "#04336C" }}>
                      {data.listimg}
                    </ListItemIcon>
                    <ListItemText
                      primary={data.listtxt}
                      sx={{
                        color: "#04336C",
                        fontSize: ".9rem",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} xs={12} sm={12}>
          <Grid
            container
            spacing={2}
            sx={{
              padding: "3%",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              borderRadius: "10px",
            }}
          >
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <TypographyText
                Typography={<>Drop Us
                  <span style={{color:'#D66A3A'}}> a Line</span></>}
                color="white"
                fontSize="2rem"
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <form action="" ref={form} onSubmit={sendEmail}>
                <Grid container>
                  {contactform.map((data, index) => (
                    <Grid
                      item
                      xs={12}
                      lg={12}
                      md={12}
                      sx={{ pr: "16px", pb: "16px" }}
                    >
                      {index === 2 ? (
                        <textarea
                          fullWidth
                          type={data.type}
                          name={data.name}
                          placeholder={data.placeholder}
                          required
                          style={{
                            height: "150px",
                            width: "100%",
                            border: "none",
                            fontFamily: "'Poppins', sans-serif",
                       color:'white',
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          }}
                        />
                      ) : (
                        <input
                          fullWidth
                          type={data.type}
                          name={data.name}
                          placeholder={data.placeholder}
                          required
                          style={{
                            height: "40px",
                            width: "100%",
                            border: "none",
                            fontFamily: "'Poppins', sans-serif",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          }}
                        />
                      )}
                    </Grid>
                  ))}
                  <Grid item xs={12} sx={{ pr: "16px", pb: "16px" }}>
                    <Button
                      variant="contained"
                      type="submit"
                      className="button1"
                      sx={{
                         bgcolor: " rgba(255, 255, 255, 0.1)",
                        color: "white",
                        textAlign: "left",
                        textTransform: "capitalize",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Contact;

const Listcontent = [
  {
    listimg: <LocationOnIcon />,
    listtxt: <></>,
  },
  {
    listimg: <EmailIcon />,
    listtxt: <></>,
  },
  {
    listimg: <LocalPhoneIcon />,

    listtxt: (
      <>
        Toll-Free Number: 800-326459
        <br />
        Available 24/7 for consultations and service
      </>
    ),
  },
  {
    listimg: <LanguageIcon />,

    listtxt: <>www.prowell.life</>,
  },
];