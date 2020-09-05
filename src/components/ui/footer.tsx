import React from "react"
import { Link } from "gatsby"
import {
  Box,
  Grid,
  List,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
} from "@material-ui/core"
import Telephone from "@material-ui/icons/PhoneCallback"
import Envelope from "@material-ui/icons/Mail"
import ArrowRight from "@material-ui/icons/ArrowRight"
import LocationPlace from "@material-ui/icons/PinDrop"
enum Color {
  secondary = "secondary",
  primary = "primary",
  inherit = "inherit",
  logo = "red",
}
const Footer: React.FC = (): JSX.Element => {
  const changeFlex = (a: string, b: string, c: string) => {
    const w: number = globalThis.window && document.documentElement.clientWidth
    if (w <= 480) {
      return a
    } else if (w <= 768) {
      return b
    }
    return c
  }
  return (
    <Box className="bg-gray-900 font-raleway  text-white lg:fixed left-0 bottom-0 w-screen md:relative  sm:relative ">
      <Grid
        container
        justify="space-around"
        className=" mt-0 pt-0"
        wrap="wrap"
        alignItems="center"
      >
        <Grid item lg={3} xs={12} md={3} className="pl-4 ml-4  ">
          <List>
            <ListItem
              dense
              divider
              className="px-1 pl-4 ml-3 mb-3 text-center lg:text-left md:text-center sm:text-center"
            >
              {" "}
              Campus Life
            </ListItem>
            <ListItem button dense alignItems="flex-start">
              <ArrowRight
                htmlColor="white"
                className="mr-0 pr-0 sm:text-center"
              />
              Communication Desk
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" className="mr-0" />
              Campus Facilities
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />
              Student Services
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />
              Community Outreach
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={3} xs={12} md={3} className="pl-4 ml-4">
          <List>
            <ListItem
              dense
              divider
              className="px-1 pl-4 ml-3 my-0 text-center lg:text-left md:text-center sm:text-center"
            >
              Study at Eastern College
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />

              <Link className="text-sm hover:underline" to="/schools">
                Faculties &amp; School
              </Link>
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />

              <Link
                className="text-sm  transition-all duration-500 ease-linear hover:underline hover:text-yellow-500"
                to="/downloads"
              >
                Downloads
              </Link>
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />

              <Link className="text-sm  hover:underline" to="/courses">
                Courses
              </Link>
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />

              <Link className=" text-sm hover:underline" to="/apply-online">
                Apply Online
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={3} xs={12} md={3} className="pl-4 ml-4">
          <List>
            <ListItem
              dense
              divider
              className="px-1  pl-4 ml-3 my-0 lg:text-left md:text-center sm:text-center"
            >
              {" "}
              Quick Links
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />

              <Link className="text-sm  hover:underline" to="/contact-us">
                Contact us
              </Link>
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />

              <Link className="text-sm  hover:underline" to="/vacancies">
                Vacancies
              </Link>
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />

              <Link className="text-sm  hover:underline" to="/tenders">
                Tender
              </Link>
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />

              <Link className="text-sm  hover:underline" to="/login">
                Portal
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={3} xs={12} md={3} className="p-4 m-3">
          <ListItem
            dense
            divider
            className="px-1 pl-4 ml-3 my-0 text-center lg:text-left md:text-center sm:text-center"
          >
            Reach Us
          </ListItem>
          <Typography variant="body2">
            <IconButton>
              <Telephone htmlColor="gray" fontSize="small" />
            </IconButton>
            +252613778899
          </Typography>
          <Typography variant="body2">
            <IconButton>
              <Envelope htmlColor="gray" fontSize="small" />
            </IconButton>{" "}
            <a
              target="_blank"
              className="text-yellow-500 "
              href="mailto:info@easterncollege.so"
            >
              info@easterncollege.so
            </a>
          </Typography>
          <Typography variant="body2" className="text-sm m-12 " align="left">
            <IconButton>
              <LocationPlace fontSize="small" htmlColor="gray" />
            </IconButton>
            Makkah Al-mukarah street, <br />
            KM5 ( Soobe), Hodan , <br /> Mogadishu, Somalia
          </Typography>
        </Grid>
      </Grid>

      <Box className="w-auto">
        <Typography
          variant="body2"
          className="text-center text-xs text-white bg-blue-900 py-2"
        >
          {" "}
          {new Date().getFullYear()} &copy; Eastern College.| All Rights
          Reserved.|{" "}
        </Typography>
      </Box>
    </Box>
  )
}
export default Footer
