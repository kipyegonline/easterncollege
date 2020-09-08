import React from "react";
import { Link } from "gatsby";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Twitter from "@material-ui/icons/Twitter";
import Facebook from "@material-ui/icons/Facebook";
import Linkedin from "@material-ui/icons/LinkedIn";
import WhatsApp from "@material-ui/icons/WhatsApp";

import { List, ListItem, ListItemIcon } from "@material-ui/core";

const logo = require("../../../public/icons/icon-72x72.png");
const smallLogo = require("../../../public/icons/icon-48x48.png");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
      "@media (max-width:480px)": {
        display: "none",
      },
      "@media (max-width:768px)": {
        display: "none",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },

    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

export default function PrimarySearchAppBar() {
  const [pos, setPos] = React.useState(false);
  const classes = useStyles();
  const w: number = globalThis.window && document.documentElement.clientWidth;

  const activeStyle = {
    color: "green",
    marginBottom: ".35rem",
    borderBottom: "1px solid yellow",
    padding: ".25rem",
    transition: "all .5s ease-in .5s ",
  };
  const handleScroll = () => {
    const scrollH = window.scrollY;
    scrollH >= 100 ? setPos(true) : setPos(false);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const searchBar = (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position={pos ? "fixed" : "relative"}
        className="h-12 mb-3 transition-all duration-500 ease-linear delay-500 "
        color={pos ? "primary" : "transparent"}
      >
        <List className={`lg:flex  flex-row justify-space-evenly items-start`}>
          <ListItem dense className="px-2">
            <div
              style={{ height: 40, width: 200 }}
              className="ml-10 my-0 pb-1 absolute  "
            >
              {" "}
              <Link to={"/"}>
                <img
                  src={w >= 768 ? smallLogo : smallLogo}
                  className="pt-0 mt-2  "
                  height={40}
                  alt="Logo"
                />
              </Link>
            </div>
          </ListItem>
          <ListItem dense className="px-2">
            <Link
              activeStyle={activeStyle}
              to="/"
              className="transition duration-500 ease-linear hover:text-green-600 "
            >
              Home
            </Link>
          </ListItem>
          <ListItem dense className="px-2">
            <Link
              activeStyle={activeStyle}
              to="/about-us"
              className="transition duration-500 ease-linear hover:text-green-500 "
            >
              About Us
            </Link>
          </ListItem>
          <ListItem dense className="px-2 ">
            <Link
              activeStyle={activeStyle}
              to="/campus-life"
              className="transition duration-500 ease-linear hover:text-green-500 "
            >
              Campus Life
            </Link>
          </ListItem>
          <ListItem dense className="px-2">
            <Link
              activeStyle={activeStyle}
              to="/downloads"
              className="transition duration-500 ease-linear hover:text-green-500 "
            >
              Downloads
            </Link>
          </ListItem>
          <ListItem dense className="px-2">
            <Link
              activeStyle={activeStyle}
              to="/admissions"
              className="transition duration-500 ease-linear hover:text-green-500 "
            >
              Admissions
            </Link>
          </ListItem>
          <ListItem dense className="px-2 ">
            <Link
              activeStyle={activeStyle}
              to="/schools"
              className="transition duration-500 ease-linear hover:text-green-500  "
            >
              Schools
            </Link>{" "}
          </ListItem>
          <ListItem dense className="px-2 pt-10">
            <Socials
              color={pos ? "#fff" : "#333"}
              classes="flex flex-row top-10 pt-0 my-auto justify-start "
            />
          </ListItem>
        </List>
      </AppBar>
    </div>
  );
}
type Socials = { classes: string; color?: string };
export const Socials = ({ classes = "", color = "#333" }): JSX.Element => (
  <List className={classes}>
    <li>
      <ListItemIcon>
        <Facebook className="cursor-pointer" htmlColor={color} />
      </ListItemIcon>
    </li>
    <li>
      <ListItemIcon>
        <Twitter className="cursor-pointer" htmlColor={color} />
      </ListItemIcon>
    </li>
    <li>
      <ListItemIcon>
        <Linkedin className="cursor-pointer" htmlColor={color} />
      </ListItemIcon>
    </li>
    <li>
      <ListItemIcon>
        <WhatsApp className="cursor-pointer" htmlColor={color} />
      </ListItemIcon>
    </li>
  </List>
);
