import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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
import logo from "../Assets/logo.png";
import { Link } from "react-scroll";

const drawerWidth = 240;
const navItems = [
  { _id: 1, menu: "Home", url: "/" },
  { _id: 2, menu: "Our Mission", url: "mission" },
  { _id: 3, menu: "About Us", url: "about" },
  { _id: 4, menu: "Innovations", url: "innovations" },
  { _id: 5, menu: "Testimonials", url: "testimonials" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item._id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.menu} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          padding: "20px 100px",
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
          border: "1px solid #F8F8F8",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img className="w-48" src={logo} alt="" />
          <Box sx={{ display: { xs: "none", sm: "block" }, margin: "0 80px" }}>
            {navItems.map((item) => (
              <Link
                to={item.url}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={item._id}
              >
                <Button key={item} sx={{ color: "#000", margin: "0 10px" }}>
                  {item.menu}
                </Button>
              </Link>
            ))}
            <button className="bg-[#D0011C] hover-effect px-4 py-3 text-[#fff] font-bold hover:bg-[#fff] hover:border-2 border-[#D0011C] hover:text-[#D0011C] ml-10">
              REQUEST A QUOTE
            </button>
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
