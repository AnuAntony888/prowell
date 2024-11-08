import React from "react";
import { useState } from "react";
import { Button, Drawer, Menu, MenuItem } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { dropdown, navItems } from "./Headers";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const ResponsiveHeader = () => {
  const [openDrawer, setopenDrawer] = useState(false); 

  // Smooth scroll function for internal navigation
  const handleScrollToSection = () => {
  
      setopenDrawer(false);
   
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={() => setopenDrawer(!openDrawer)}
        sx={{ float: "right" ,color:'white'}}
      >
        <MenuIcon sx={{ float: "right" }} />
      </IconButton>

      <Drawer
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        PaperProps={{
          sx: { width: "300px", bgcolor: "#2D2D2D", color:'white' },
        }}
      >
        <List>
          <CloseIcon
            onClick={() => setopenDrawer(false)}
            sx={{ float: "right", marginRight: "10px" }}
          ></CloseIcon>

          {navItems.map((item, index) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "left" }}>
                <Button
                  key={index}
                  sx={{
                  
                    textTransform: "capitalize", color: "white" 
                    , fontFamily:"Khand"
                     ,fontSize:'1.2rem',
                  }}
                  onClick={() => handleScrollToSection()}
                >
               <Link to={item.link}>{item.label}</Link>   
                </Button>
  
              </ListItemButton>
            </ListItem>
       
               
          
          ))}
          <ListItem>
          <Button
    id="basic-button"
    aria-controls={open ? "basic-menu" : undefined}
    aria-haspopup="true"
    aria-expanded={open ? "true" : undefined}
    onMouseEnter={handleClick} // Open on hover
    sx={{
      fontWeight: "500",
      fontFamily: "Khand",
      fontSize: '1.2rem',
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
      onMouseLeave: handleClose,
      sx: { paddingTop: '0', paddingBottom: '0' } // Apply padding styles here
    }}
                  onMouseLeave={handleClose} // Close on mouse
                  sx={{paddingTop:'0',paddingBottom:'0'}}
             >
    {dropdown.map((data, index) => (<>
      <MenuItem
        onClick={() => {
          handleClose();
          // navigate(data.link);
        }}
        key={index}
        sx={{
          minWidth: "200px",
          fontFamily: "Khand",
          backgroundColor: 'black',
          color: 'white',
          fontSize: '1.2rem',
          textAlign:'center',
          padding:'5%',
          '&.Mui-selected': {
            backgroundColor: 'black', // Background for selected item
            color: 'white', // Optional: Ensures text is visible on black background
          },
          '&:hover': {
            color: 'orange',
            backgroundColor: 'black', // Slight blur effect
            // backdropFilter: 'blur(5px)' // Applies a blur effect
          }
        }}
      >
        {data.name}
      </MenuItem>
      <hr style={{color:'orange',backgroundColor:'black',margin:'0'}}/>
 </>   ))}
  </Menu>
          {/* <Button
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
                    onClick={() => handleScrollToSection()}
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
                </Menu> */}
        </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default ResponsiveHeader;