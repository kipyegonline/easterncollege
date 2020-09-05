import React from "react"
import { Box, Typography } from "@material-ui/core"
import { PageProps, Link, graphql } from "gatsby"
type Props = { siteTitle: string }

const Header: React.FC<Props> = () => {
  const style = { color: "yellow" }
  return (
    <Box
      className="flex flex-row  justify-center items-center leading-none
   py-3 bg-blue-800 text-white md:flex-wrap flex-row 
   sm: flex-wrap  justify-start items-start px-0 "
    >
      <Typography
        className="px-3 border-r  mr-2 pr-2hover:text-yellow-500 border-yellow-500 sm:px-0 py-1"
        variant="body2"
      >
        <Link activeStyle={style} to={"/"}>
          E-Registrar
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
  )
}
export default Header