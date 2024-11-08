import { Button, Grid, useMediaQuery } from '@mui/material';
import React, { useRef } from 'react'
import { useTheme } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TypographyText } from '../../Reuse/Reuse';
import img1 from '../../Assets/Movement_mfp-430.jpg'
import zIndex from '@mui/material/styles/zIndex';
const ContForm = () => {
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
            "service_0auaq0i",
            "template_ewhgn0a",
            form.current,
            "IkNjveX3-qfxw3Pw4"
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
               <Grid
            container
              spacing={2}
              sx={{
                  padding: '5%',
                  
        backgroundColor:'black'
         
              }}
          >
              <Grid item lg={6} md={6} xs={12} sm={12}
              sx={{zIndex:1,margin:'auto'}}>
               <Grid container sx={{}}>
               <Grid item xs={12}>
         

               <TypographyText
                Typography={<>Drop Us
                  <span style={{color:'#D66A3A'}}> a Line</span></>}
                color="white"
                fontSize="2rem"
                     fontFamily="Khand"
              />
              </Grid>
              <Grid item xs={12}>
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
                     fontFamily:'CamptonLight',
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
                            color:'white',
                          fontFamily:'CamptonLight',
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
                        fontFamily:"Khand",
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
              <Grid item lg={6} md={6} xs={12} sm={12}
                  sx={{ zIndex: 1 ,}}>
                  <img src={img1} alt='' width={'100%'}
                      style={{borderRadius:"20px"}} />
              </Grid>
              </Grid>
    </div>
  )
}

export default ContForm
