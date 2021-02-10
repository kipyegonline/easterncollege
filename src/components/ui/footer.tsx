import React from "react";
import { Link } from "gatsby";
import {
  Box,
  Grid,
  Link as MLink,
  List,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
} from "@material-ui/core";
import Telephone from "@material-ui/icons/PhoneCallback";
import Envelope from "@material-ui/icons/Mail";
import ArrowRight from "@material-ui/icons/ArrowRight";
import LocationPlace from "@material-ui/icons/PinDrop";
import { Socials } from "./navbar";
import { EasternContacts } from "../../pages/contact-us";
const Footer: React.FC = (): JSX.Element => {
  const changeFlex = (a: string, b: string, c: string) => {
    const w: number = globalThis.window && document.documentElement.clientWidth;
    if (w <= 480) {
      return a;
    } else if (w <= 768) {
      return b;
    }
    return c;
  };
  return (
    <Box className=" relative bg-gray-900 font-raleway mt-10 text-white lg:relative z-auto left-0 bottom-0 w-full md:relative  sm:relative mx-1">
      <Grid
        container
        justify="space-around"
        className=" mt-0 pt-0"
        wrap="wrap"
        alignItems="center"
      >
        <Socials classes="absolute flex  flex-end flex-row z-100 px-auto mx-auto bottom-0 left-0" />
        <Grid item lg={3} xs={12} md={3} className="pl-4 ml-4  ">
          <List>
            <ListItem
              dense
              divider
              className="px-1 pl-4 ml-3 mb-3 text-center border-b border-green-500 lg:text-left md:text-center sm:text-center"
            >
              {" "}
              Campus Life
            </ListItem>
            <ListItem button dense alignItems="flex-start">
              <ArrowRight
                htmlColor="white"
                className="mr-0 pr-0 sm:text-center"
              />
              <Link
                className="text-sm  hover:underline"
                to="/campus-life#communication-desk"
              >
                Communication Desk
              </Link>
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" className="mr-0" />
              <Link
                className="text-sm  hover:underline"
                to="/campus-life#campus-facilities"
              >
                {" "}
                Campus Facilities
              </Link>
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />
              <Link
                className="text-sm  hover:underline"
                to="/campus-life#student-services"
              >
                Student Services
              </Link>
            </ListItem>
            <ListItem button dense>
              <ArrowRight htmlColor="white" />
              <Link
                className="text-sm  hover:underline"
                to="/campus-life#community-outreach"
              >
                Community Outreach
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={3} xs={12} md={3} className="pl-4 ml-4">
          <List>
            <ListItem
              dense
              divider
              className="px-1 pl-4 ml-3 my-0 text-center border-b border-green-500  lg:text-left md:text-center sm:text-center"
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

              <MLink
                className="text-sm  hover:underline"
                href="https://easterncollege.school-network.net/"
                target="_blank"
                style={{ color: "white" }}
              >
                Student Portal (LMS)
              </MLink>
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

              <Link className="text-sm  hover:underline" to="/admin">
                staff
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={3} xs={12} md={3} className="p-4 m-3">
          <List>
            <ListItem
              dense
              divider
              className="px-1 pl-4 underline ml-3 my-0 text-center  border-b-2 border-green-500 lg:text-left md:text-center sm:text-center"
            >
              Reach Us
            </ListItem>
            <Divider variant="middle" light />
            <Typography variant="body2">
              <IconButton>
                <Telephone htmlColor="gray" fontSize="small" />
              </IconButton>
              +252-613-778-899
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
          </List>
        </Grid>
      </Grid>

      <Box className="w-auto   ">
        <Typography
          variant="body2"
          className="text-center text-xs text-white bg-blue-900 py-4"
        >
          {" "}
          &copy; Eastern College. {new Date().getFullYear()} | All Rights
          Reserved.|{" "}
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
