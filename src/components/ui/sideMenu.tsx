import React from "react";
import clsx from "clsx";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { IconButton, Typography, AppBar } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Notifications from "@material-ui/icons/Notifications";
import Home from "@material-ui/icons/Home";
import Download from "@material-ui/icons/CloudDownload";
import Contacts from "@material-ui/icons/Contacts";
import Close from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  Socials,
  schools,
  aboutUs,
  campusLife,
  mediaInfo,
  AboutUs,
  Input,
} from "./navbar";
import { EasternContacts } from "../../pages/contact-us";
const smallLogo = require("../../images/icon-72x72.png");
const logosm = require("../../images/icon-48x48.png");

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

type menu = { name: string; value: string; icon: any; submenu?: Input[] };
const menu: menu[] = [
  { name: "home", value: "/", icon: Home },
  {
    name: "About Us",
    value: "/about-us",
    icon: ArrowDropDownIcon,
    submenu: aboutUs,
  },
  { name: "Academics", value: "/admissions", icon: ArrowDropDownIcon },
  {
    name: "campus Life",
    value: "/campus-life",
    icon: ArrowDropDownIcon,
    submenu: campusLife,
  },
  { name: "Media desk", value: "/notice", icon: Notifications },
  { name: "Downloads", value: "/downloads", icon: Download },

  {
    name: "Contact Us",
    value: "/contact-us",
    icon: Contacts,
    submenu: schools,
  },
];
export default function TemporaryDrawer(): JSX.Element {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [showing, setShowing] = React.useState(false);

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    setShowing(open);
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return false;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu.map((text: menu, index: number) => (
          <ListItem button key={index}>
            <ListItemIcon>{<text.icon />}</ListItemIcon>
            <Link className="font-bold" to={text.value}>
              {text.name}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className="mt-5">
        <EasternContacts />
        <Socials classes="flex flex-row justify-center " />
      </div>
    </div>
  );
  React.useEffect(() => {
    window.addEventListener("load", function () {
      toggleDrawer("right", true);

      const timer: ReturnType<typeof setTimeout> = setTimeout(
        () => toggleDrawer("right", false),
        5000
      );
      return () => clearTimeout(timer);
    });
  }, []);
  return (
    <div>
      <div className="z-10 sm:block mt-3 bg-gray-700 mr-1 md: block absolute top-0 right-0 mt-2 lg:hidden  ">
        <Button
          className=" p-0 border-2 active:bg-green-500 md:mt-4 sm:mt2"
          size="small"
          variant="outlined"
          onClick={toggleDrawer("right", true)}
        >
          <span
            style={{ transform: "rotate(90deg)", color: "#ddd" }}
            className=" block font-extrabold text-center text-lg w-full "
          >
            |||
          </span>
        </Button>
      </div>

      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <Link to="/">
          <img
            src={smallLogo}
            width={100}
            className="mx-auto  my-2"
            height={50}
            alt="Logo"
          />
        </Link>
        <Typography variant="body1" className="text-center font-bold">
          Eastern College
        </Typography>

        <Divider />
        {list("right")}
      </Drawer>
    </div>
  );
}
