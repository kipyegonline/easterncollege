import React from "react"
import { Link } from "gatsby"
import { fade, makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import Badge from "@material-ui/core/Badge"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MailIcon from "@material-ui/icons/Mail"
import NotificationsIcon from "@material-ui/icons/Notifications"
import MoreIcon from "@material-ui/icons/MoreVert"
import { List, ListItem } from "@material-ui/core"

const logo = require("../../../public/icons/icon-72x72.png")
const smallLogo = require("../../../public/icons/icon-48x48.png")

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
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
)

export default function PrimarySearchAppBar() {
  const classes = useStyles()
  const w: number = globalThis.window && document.documentElement.clientWidth
  const activeStyle = {
    color: "green",
    marginBottom: ".35rem",
    borderBottom: "1px solid yellow",
    padding: ".25rem",
    transition: "all .5s ease-in .5s ",
  }

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
  )

  return (
    <div className={classes.grow}>
      <AppBar position="relative" className="h-12 " color="transparent">
        <List className="lg:flex flex-row justify-space-evenly  items-start block md:block sm:hidden  ">
          <ListItem dense className="px-2">
            <div
              style={{ height: 40, width: 200 }}
              className="ml-10 my-0 pb-1 absolute  "
            >
              {" "}
              <img
                src={w >= 768 ? smallLogo : smallLogo}
                className="pt-0 mt-2  "
                height={40}
              />
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
          <ListItem dense className="px-2">
            <Link
              activeStyle={activeStyle}
              to="/schools"
              className="transition duration-500 ease-linear hover:text-green-500  "
            >
              Schools
            </Link>{" "}
          </ListItem>
        </List>
      </AppBar>
    </div>
  )
}

/*
<!-- MOBILE MENU -->
  <section><div class="ed-mob-menu">
            <div class="ed-mob-menu-con">
                <div class="ed-mm-left">
                    <div class="wed-logo">
                        <a href="/"> <img style="max-height:55px; max-width:50px" src="images/theme-tum-logo.png" alt="logo"> </a>
                    </div>
                </div>
                <div class="ed-mm-right">
                    <div class="ed-mm-menu">
                        <a href="#!" class="ed-micon"><i class="fa fa-bars"></i></a>
                        <div class="ed-mm-inn">
                            <a href="#!" class="ed-mi-close"><i class="fa fa-times"></i></a>
                            <ul><li><a href="/">Home</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/index/courses">Courses</a></li>
                                <li><a href="/index/campus-life?d=communicationsdesk">Campus Life</a></li>
                                <li><a href="/login">E-Registrar</a></li>
                                <li><a href="https://portal.easterncollege.so">Portal</a></li>
                                <li><a href="/index/downloads">Downloads</a></li>
                            </ul></div>
                    </div>
                </div>
            </div>
        </div>
    </section><!--HEADER SECTION-->
    <section class='mb-n3'><div class="ed-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="ed-com-t1-left">
                            <ul><li>
                                    <ul id="menu"><li><a href="#">E-Registrar</a>
                                          <ul class="menus"><li><a href="/login">Local </a></li>
                                          </ul></li>
                                    </ul></li>
                                <li><a href="/index/tenders">Tenders</a></li>
                                <li><a href="/index/vacancies">Job Vacancies</a></li>
                                <li><a href="/index/apply-online">Apply Online</a></li>
                                
                                 <li>
                                    <ul id="menu">
                                        <li><a href="#">Portals</a>
                                          <ul class="menus">
                                              <li><a href="https://portal.easterncollege.so">Students  </a></li>
                                            <li><a href="https://portal.easterncollege.so">Staff  </a></li>
                                          </ul>
                                        </li>
                                    </ul></li>
                                <li><a href="/contact-us">Get In Touch</a></li>
                            </ul></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- LOGO AND MENU SECTION -->
        <div class="top-logo" data-spy="affix" data-offset-top="250">
            <div class="container">
                <div class="row">
                        
                    <div class="col-md-12">
                        <div class="logo_fixed" id="logo_wrap" style="background-image:url(/views/assets/uploads/ico.png);"></div>

                        <div class="main-menu" >
                            <ul>
                                <li><a href="/">Home</a></li>                                 
                                <li><a href="/about-us">About Us</a></li>
                                    
                                </li>                            
                                <li><a href="/index/campus-life?d=communicationsdesk">Campus Life</a> </li>
                                <li><a href="/index/admissions">Admissions</a> </li>
                                <li><a href="/index/downloads">Downloads</a></li>
                                <li>
                                    <ul id="menu">
                                        <li><a href="#">Our School</a> 
                                          <ul class="menus">
                                              <li><a href="/index/courses">Courses  </a></li>
                                          </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="all-drop-down-menu">

                    </div>

                </div>
            </div>
        </div>
            </section><!--END HEADER SECTION--><!-- SLIDER -->

            */
