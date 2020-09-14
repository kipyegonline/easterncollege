import React from "react";
import { Box, Typography } from "@material-ui/core";
import { PageProps, Link, graphql } from "gatsby";
import { Socials } from "./ui/navbar";
type Props = { siteTitle: string };

const Header: React.FC<Props> = () => {
  const style = { color: "yellow" };
  return (
    <Box
      className="
      lg:flex flex-row flex-wrap  justify-center items-center
       md:flex flex-wrap items-center
       sm:flex-wrap justify-start items-center pl-4  leading-none
   py-3 px-2 bg-blue-800 text-white  "
    >
      <Typography
        className="px-3  border-r hover:text-yellow-500 border-yellow-500 sm:px-0"
        variant="body2"
        align="left"
      >
        <Link to={"/"} activeStyle={style}>
          E-Registar
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500 sm:px-0"
        variant="body2"
      >
        <Link to={"/tenders"} activeStyle={style}>
          Tenders
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500"
        variant="body2"
      >
        <Link activeStyle={style} to={"/vacancies"}>
          Job vacancies
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500"
        variant="body2"
      >
        <Link activeStyle={style} to={"/apply-online"}>
          Apply Online
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500"
        variant="body2"
      >
        <Link activeStyle={style} to={"/login"}>
          Portal
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500"
        variant="body2"
      >
        <Link activeStyle={style} to={"/contact-us"}>
          Get in touch
        </Link>
      </Typography>
    </Box>
  );
};
export default Header;
