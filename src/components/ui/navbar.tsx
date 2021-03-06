import React from "react";
import { Link } from "gatsby";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Contacts from "@material-ui/icons/Contacts";
import Downloads from "@material-ui/icons/CloudDownload";
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
import Home from "@material-ui/icons/Home";

import { List, ListItem, ListItemIcon, Fab } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";

const logo = require("../../images/icon-72x72.png");
const smallLogo = require("../../images/icon-48x48.png");
const mlogo = require("../../images/logoB.png");
export type Input = { name: string; value: string };

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
  let yellow = "rgba( 236,201,71,1)";
  const blue = "#3c5382";
  const activeStyle = {
    marginBottom: ".35rem",
    color: pos ? yellow : blue,
    top: -10,
    borderBottom: "2px solid " + yellow,
    padding: "0rem",
    transition: "all 1s ease-in-out .5s ",
  };
  let navH = 0;
  let later = 0;
  const handleScroll = () => {
    const scrollH = window.scrollY;
    const device = document.documentElement.clientWidth;

    if (scrollH >= 100 && device > 768) {
      setPos(true);
      /*const now = scrollH;
      if (now < later && later - now > 5) {
        console.log("now is less than laterrr");
        setTimeout(() => setPos(!true), 500);
      }
      console.log("Diff", now, later);
      later = now;
      */
    } else {
      setPos(false);
    }
    if (pos) {
      document.body.classList.add("fixed-nav");
      document.body.style.paddingTop = navH + "px";
    } else {
      document.body.style.paddingTop = 0 + "px";
      document.body.classList.remove("fixed-nav");
    }
  };
  React.useEffect(() => {
    const nav = document.getElementById("navbar") as HTMLElement;
    navH = nav.getBoundingClientRect().height;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //2a4365
  const styleIcon = {
    top: 2,
    left: 0,
    position: "absolute",
    color: pos ? "white" : null,
  };
  return (
    <div className={classes.grow} id="navbar">
      <AppBar
        position={pos ? "fixed" : "relative"}
        className=" bg-blue-900  h-12 mb-0 py-auto leading-tight transition duration-500 ease-linear delay-500 "
        style={{
          borderBottom: "1px solid #ddd",
          color: pos ? "#fff" : "#2d3748",

          background: pos ? "#2a4365" : "transparent",
        }}
      >
        <List
          className={`main-menu lg:flex  flex-row justify-space-evenly  items-start py-4`}
        >
          <ListItem dense className="px-1 ">
            <div
              style={{ height: 40, width: 200 }}
              className="ml-0 my-0 pb-0 absolute  "
            >
              {" "}
              <Link to={"/"}>
                <img
                  src={!pos ? mlogo : logo}
                  className="pt-0 mt-3  "
                  height={40}
                  alt="Logo"
                />
              </Link>
            </div>
          </ListItem>
          <ListItem dense className="px-1 mx-1 ">
            <Link
              activeStyle={activeStyle}
              to="/"
              className="font-bold block transition duration-500 ease-linear hover:text-yellow-500 "
            >
              <IconButton>
                {" "}
                <Home style={styleIcon} />
              </IconButton>
            </Link>
          </ListItem>
          <ListItem
            dense
            className=" top-menu px-1  mx-1 relative transition duration-500 ease-linear hover:text-yellow-500"
          >
            <Link
              activeStyle={activeStyle}
              to="/about-us"
              className=" font-bold text-sm block transition duration-500 ease-linear "
            >
              About Us{" "}
              <IconButton>
                <ArrowDropDownIcon className="icon" style={styleIcon} />
              </IconButton>
            </Link>
            <AboutUs input={aboutUs} />
          </ListItem>

          <ListItem
            dense
            className="top-menu px-1  mx-1 relative transition duration-500 ease-linear hover:text-yellow-500 "
          >
            <Link
              activeStyle={activeStyle}
              to="/admissions"
              className="font-bold text-sm block transition duration-500 ease-linear  "
            >
              Academics
              <IconButton>
                <ArrowDropDownIcon className="icon" style={styleIcon} />
              </IconButton>
            </Link>
            <AboutUs input={schools} />
          </ListItem>
          <ListItem dense className="top-menu px-1  mx-1  ">
            <Link
              activeStyle={activeStyle}
              to="/campus-life"
              className="font-bold text-sm  block transition duration-500 ease-linear  "
            >
              Campus Life{" "}
              <IconButton>
                <ArrowDropDownIcon className="icon" style={styleIcon} />
              </IconButton>
            </Link>{" "}
            <AboutUs input={campusLife} />
          </ListItem>
          <ListItem dense className="top-menu px-1  mx-1   ">
            <Link
              activeStyle={activeStyle}
              to="/notice"
              className="font-bold block text-sm transition t duration-500 ease-linear   "
            >
              Media Desk{" "}
              <IconButton edge="end">
                <ArrowDropDownIcon className="icon " style={styleIcon} />
              </IconButton>
            </Link>{" "}
            <AboutUs input={mediaInfo} />
          </ListItem>

          <ListItem dense className="px-1  mx-1 ">
            <Link
              activeStyle={activeStyle}
              to="/downloads"
              className="font-bold block transition duration-500 ease-linear hover:text-yellow-600 "
            >
              <Downloads className="pr-2" />
              Downloads
            </Link>
          </ListItem>

          <ListItem dense className="px-1  mx-1  ">
            <Link
              activeStyle={activeStyle}
              to="/contact-us"
              className="font-bold text-sm block transition duration-500 ease-linear hover:text-yellow-600 "
            >
              <Contacts className="pr-2" />
              Contact Us
            </Link>
          </ListItem>
        </List>
      </AppBar>
      <style jsx={true}>{`
        .top-menu:hover .dropdown, .top-menu:active .dropdown, .top-menu:focus-within .dropdown  {
        visibility:visible;
        display:block;
        opacity:1;
     
        }
        .dropdown {
         visibility:hidden,
       
         opacity:0;
         transition:all 1s ease;
         display:none;
        }
        .top-menu:hover .icon{
          transform:rotate(180deg);
          transition:transform .25s ease;
        }
      `}</style>
    </div>
  );
}
type Socials = { classes: string; color?: string };
type Styles = { top?: string; left?: string };
export const Socials = ({
  classes = "",
  color = "",
}: Socials & Styles): JSX.Element => (
  <ul className={classes}>
    <li className="py-0 my-0">
      <ListItemIcon className="py-0 my-0">
        <Fab size="small" color="inherit" className="my-auto py-0 w-2/5">
          <Facebook
            className="cursor-pointer "
            fontSize="small"
            htmlColor={!!color ? color : "#3b5998"}
            onClick={() =>
              window.open("https://www.facebook.com/easterncollegesomalia")
            }
          />
        </Fab>
      </ListItemIcon>
    </li>
    <li className="py-0 my-0">
      <ListItemIcon>
        <Fab size="small">
          {" "}
          <Twitter
            className="cursor-pointer"
            fontSize="small"
            htmlColor={!!color ? color : "#1DA1F2"}
            onClick={() => window.open("https://twitter.com/Easternsomalia")}
          />
        </Fab>
      </ListItemIcon>
    </li>
    <li className="py-0 my-0">
      <ListItemIcon>
        <Fab size="small">
          <Linkedin
            className="cursor-pointer"
            fontSize="small"
            htmlColor={!!color ? color : "#0e76a8"}
          />
        </Fab>
      </ListItemIcon>
    </li>{" "}
    {/*
    <li className="py-0 my-0">
      <ListItemIcon>
        <Fab size="small">
          <WhatsApp
            className="cursor-pointer"
            fontSize="small"
            htmlColor={!!color ? color : "#075e54"}
          />
        </Fab>
      </ListItemIcon>
    </li> */}
  </ul>
);

export const AboutUs: React.FC<{ input: Input[]; display: boolean }> = ({
  display,
  input = [],
}) => {
  return (
    <List
      className=" dropdown mt-10 mx-3 px-2 border-t-2 text-gray-700 border-blue-700 bg-white z-100 transition-all duration-100 ease-linear"
      style={{
        width: 150,
        marginTop: 0,
        position: "absolute",
        top: 30,
        left: 0,
        minWidth: "100%",
        transition: "all .5s linear ",
      }}
    >
      {input.map((item, index) => (
        <ListItem
          key={index}
          dense
          className=" dropdown-menu my-0 z-30 py-1 text-sm"
        >
          <ArrowRight fontSize="small" />
          <Link
            to={item.value}
            className="font-normal py-1 hover:text-blue-700"
          >
            {item.name}
          </Link>{" "}
        </ListItem>
      ))}
      <style>{`
      .dropdown-menu:hover{
        color:white;
        transition:all .25s ease;
        border-bottom:2px solid  blue;
      }
     `}</style>
    </List>
  );
};

export const aboutUs: Input[] = [
  { name: "Background", value: "/about-us#background" },
  { name: "Vision  & Mission", value: "/about-us#vision-mission" },
  { name: "Core values", value: "/about-us#values" },
  { name: " Quality Policy Statement", value: "/about-us#policy-statement" },
];
export const schools: Input[] = [
  { name: "Schools", value: "/schools" },
  { name: "Admissions", value: "/admissions" },

  { name: " Apply online", value: "/apply-online" },
  { name: "Research", value: "/research-and-development" },
];

export const campusLife: Input[] = [
  { name: "Communication desk", value: "/campus-life" },
  { name: "Campus Facilities", value: "/campus-life" },
  { name: " Student tales", value: "/content#student-tales" },

  { name: " Student Services", value: "/campus-life" },
  { name: "Community Outreach", value: "/campus-life" },
];
export const mediaInfo: Input[] = [
  { name: "Latest news", value: "/post" },
  { name: "Events", value: "/events" },

  { name: "Notices", value: "/notice" },
];
