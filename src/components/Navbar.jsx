import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = ({ onClic1, onClic2, onClic3, onClic4 }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobileView = useMediaQuery('(max-width: 600px)');

  const trigger = useScrollTrigger({
    threshold: 50,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      ((event.key === 'Tab' || event.key === 'Shift'))
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const navLinks = [
    { text: 'HOME', path: '/', onClick: onClic1 },
    { text: 'EVENTS', path: '/schedule', onClick: onClic2 },
    { text: 'GALLERY', path: '/events', onClick: onClic3 },
    { text: 'ADMINISTRATION', path: '/admin', onClick: onClic4 },
  ];

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: trigger ? 'transparent' : 'grey',
          transition: 'background-color 0.5s ease',
          boxShadow: 'none',
          backdropFilter: trigger ? 'blur(5px)' : 'none', 
        }}
      >
        <Toolbar sx={{ justifyContent:"space-between" }}>
         <Typography sx={{color:"black", fontWeight:"bold"}}>ICE-CREAMS</Typography>
          {isMobileView ? (
            <IconButton
              size="large"
              aria-label="menu"
              sx={{ color: trigger ? 'orange' : 'white' }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <List sx={{ display: 'flex', gap: '25px', color: trigger ? 'white' : 'orange' }}>
              {navLinks.map((link) => (
                <ListItem button key={link.text} onClick={link.onClick}>
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
            </List>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.text} onClick={link.onClick}>
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
