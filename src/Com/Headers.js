import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ResponsiveHeader from "./ResponsiveHeader";
import { TypographyText } from "../Reuse/Reuse";
import img1 from "../Assets/Logo_01_page-0001-removebg-preview (1).png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Menu, MenuItem } from "@mui/material";
import avatarImage from '../Assets/Logo-01-9.jpg'
import { FloatingWhatsApp } from "react-floating-whatsapp";
const Headers = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(matches, "matches");

  function refreshPage() {
    window.location.href = "/";
  }

  const [navactive, setNavactive] = useState("#");

  // Smooth scroll function for internal navigation
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#2D2D2D", 
          marginBottom: "80px",
          width: "100%",
          justifyContent: "space-between",
          color: "wheat",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {matches ? (
            <>
              {/* <TypographyText
                Typography={"Logo"}
                color="#2F6C6D"
                fontSize="1.5rem"
                fontWeight="600"
              /> */}
              <Link to='/'>
              <img src={img1} alt="" width="150px" /></Link>
        
              <Box>
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    sx={{
                      textTransform: "capitalize", color: "white" 
                     , fontFamily:"Khand"
                      ,fontSize:'1.2rem',
                    }}
                    
                  >
                    <Link to={item.link}>                    {item.label}</Link>

                  </Button>
                ))}


                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    fontWeight: "500",
                       fontFamily:"Khand"
                   ,fontSize:'1.2rem',
                    textTransform: "capitalize",
                    minWidth: "120px",
                    color: "white",
                  }}
                >
                  Brands &nbsp;&nbsp; <ArrowDropDownIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {dropdown.map((data, index) => (
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        // navigate(data.link);
                      }}
                      key={index}
                      sx={{
                        minWidth: "200px" ,
                     fontFamily:'CamptonLight'
                        ,
                      }}
                    >
                      {" "}
                      {data.name}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <img src={img1} alt="" width="200px" />
              <ResponsiveHeader />
            </>
          )}
        </Toolbar>
      </AppBar>
      <FloatingWhatsApp
        phoneNumber="+971 56 412 7900"
        accountName="prowell.life"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar={avatarImage}
        statusMessage="Available for queries"
     
      />
    </>
  );
};

export default Headers;
export const navItems = [{
  label: 'Home',
  link:'/'
},
  {
    label: 'About Us',
    link: '/aboutus'

  },
  {
    label: 'Contact',
    link: '/contact'
  },
//   {
//     label: 'LifeCube',
//     link:'/lifecube'
//   }
//   ,
//   { link: "/nootrie", label: "Nootrie" },
//   {
//     link: '/Turtlegym',
//     label:'Turtle Gym'
//   },
//   {
//     link: '/Motioncare',
//     label:'Motioncare'
//   }
//   ,
//   {
//     link: '/PlayPark',
//   label:'PlayPark'
  // }
]


export const dropdown = [
  { link: "/vaha", name: <Link to="/vaha">Vaha</Link> },
  { link: "/movement", name: <Link to="/movement">Movement</Link> },
  { link: "/pent", name: <Link to="/pent.">Pent</Link> },
  { link: "/well", name: <Link to="/well">Well</Link> },
];

