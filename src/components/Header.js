import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MyLogo from "../assets/salus_enterprise.png";
import { Link } from "react-router-dom";
const drawerWidth = 240;
const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div style={{ fontSize: "30px" }}>Salus</div>
        <div style={{ fontSize: "15px" }}>Enterprise Limited</div>
      </Typography>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton href={item.link} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        color: "#540B0D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar
        component="nav"
        elevation={0}
        style={{ color: "#fff2c0", backgroundColor: "#490841" }}
      >
        <Toolbar logo={MyLogo}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexDirection: 1, display: { xs: 'none', sm: 'block' } }}
          ><div style={{display:'flex'}}>
          <div style={{marginLeft:'auto',marginRight:'auto', color:'#fff2c0'}}>
            <div style={{fontSize:'30px'}}>Salus</div>
            <div style={{fontSize:'15px'}}>Enterprise Limited</div>
            </div></div>
          </Typography> */}
          <Link to="/">
            <img
              src={MyLogo}
              style={{ width: "120px", height: "auto" }}
              alt="Logo"
            />
          </Link>

          <Box
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: "auto" }}
          >
            {navItems.map((item) => (
              <Button
                href={item.link}
                key={item.name}
                sx={{
                  color: "#e1d6a9",
                  ":hover": { color: "#fff0b7" },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
