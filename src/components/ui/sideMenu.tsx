import React from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import { IconButton, Typography } from "@material-ui/core"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import MenuIcon from "@material-ui/icons/Menu"
import Home from "@material-ui/icons/Home"
import Download from "@material-ui/icons/CloudDownload"
import Close from "@material-ui/icons/Close"

const smallLogo = require("../../../public/icons/icon-72x72.png")

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

type Anchor = "top" | "left" | "bottom" | "right"

type menu = { name: string; value: string; icon: any }
const menu: menu[] = [
  { name: "home", value: "/", icon: Home },
  { name: "About Us", value: "/about-us", icon: Home },
  { name: "campus Life", value: "/campus-life", icon: Home },
  { name: "Downloads", value: "/downloads", icon: Download },
  { name: "Admissions", value: "/admissions", icon: Home },
  { name: "Schools", value: "/schools", icon: Home },
]
export default function TemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const [showing, setShowing] = React.useState(false)

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    setShowing(open)
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

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
            <Link to={text.value}>{text.name}</Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  )

  return (
    <div>
      <div
        className="fixed right-0  top-0 z-10 mr-5 
     lg:hidden md:block sm:fixed right-10 top-20 mr-1  block"
      >
        <IconButton onClick={toggleDrawer("right", true)}>
          {showing ? (
            <Close htmlColor="white" />
          ) : (
            <MenuIcon htmlColor="white" />
          )}
        </IconButton>
      </div>

      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <img src={smallLogo} width={100} className="mx-auto" height={50} />
        <Typography variant="body1" className="text-center">
          Eastern College
        </Typography>
        {list("right")}
      </Drawer>
    </div>
  )
}
