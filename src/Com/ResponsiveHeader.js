import React from "react";
import { useState } from "react";
import { Button, Drawer } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { navItems } from "./Headers";

const ResponsiveHeader = () => {
  const [openDrawer, setopenDrawer] = useState(false); 

  // Smooth scroll function for internal navigation
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setopenDrawer(false);
    }
  };
  return (
    <div>
      <IconButton
        onClick={() => setopenDrawer(!openDrawer)}
        sx={{ float: "right" }}
      >
        <MenuIcon sx={{ float: "right" }} />
      </IconButton>

      <Drawer
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        PaperProps={{
          sx: { width: "300px", bgcolor: "white" },
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
                  sx={{ textTransform: "capitalize" }}
                  onClick={() => handleScrollToSection(item.sectionId)}
                >
                  {item.label}
                </Button>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default ResponsiveHeader;