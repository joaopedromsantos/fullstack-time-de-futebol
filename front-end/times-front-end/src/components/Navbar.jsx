import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Logo from "../media/logo_svg.svg";
import './Navbar.css';

const drawerWidth = 250;

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#CDB380", // Use the primary color from your theme
    fontSize: "36px",
    width: drawerWidth,
    borderRadius: "10px",
    paddingLeft: "10px",
  },
  icon: {
    color: "#E0E0DE", // Use the white color from your theme
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#E0E0DE", // Customize the background color
    color: "#CDB380", // Customize the text color
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <nav id='nav-bar'>
      <div id='logo'>
        <img src={Logo} alt="Logo" id='imagem' />
      </div>
      <div id='links'>
        <h2><Link to="/" className={classes.link_}>Home</Link></h2>
        <hr className="divider" />
        <h2><Link to="/List" className={classes.link_}>Lista dos Times</Link></h2>
        <hr className="divider" />
        <h2><Link to="/Create" className={classes.link_}>Adicionar Time</Link></h2>
      </div>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} id="mobile-menu-icon">
        <MenuIcon className={classes.icon} />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
       >
        <List >
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <ListItemText className='list_style'>
              <Link to="/" className='text_list'>Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <ListItemText className='list_style'>
              <Link to="/List" className='text_list'>Lista dos Times</Link>
            </ListItemText>
          </ListItem>
          <ListItem button onClick={() => setOpenDrawer(false)}>
            <ListItemText className='list_style'>
              <Link to="/Create" className='text_list'>Adicionar Time</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
}

export default Navbar;
