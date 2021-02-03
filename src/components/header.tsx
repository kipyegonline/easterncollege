import React from "react";
import {
  Box,
  Typography,
  AppBar,
  Chip,
  Input,
  InputAdornment,
  Backdrop,
  IconButton,
  Link as MLink,
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import Work from "@material-ui/icons/Work";
import { HowToReg, Announcement } from "@material-ui/icons";
import School from "@material-ui/icons/School";
import People from "@material-ui/icons/People";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { PageProps, Link, graphql } from "gatsby";
import { Socials } from "./ui/navbar";
const logo = require("../images/logoA.png");
type Props = { siteTitle: string; classes: string };
type Search = {
  handleSearch: (text: string) => void;
};
const Header: React.FC<Props> = ({ classes }) => {
  const style = { color: "yellow" };

  const handleSearch = (text: string): void => {
    if (!text) return;

    alert("No search results found for: " + text);
  };
  return (
    <Box className={classes}>
      <Typography
        className=" border-r hover:text-yellow-500 border-yellow-500 sm:px-2 border-none md:px-3"
        variant="body2"
        align="left"
      >
        <Link to={"/login"} style={{ marginRight: "1rem" }} activeStyle={style}>
          <HowToReg className="mr-0 pb-1" /> E-Registar
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500 sm:px-2 border-none"
        variant="body2"
      >
        <Link to={"/tenders"} className="mx-4 sm:mx-2" activeStyle={style}>
          <BusinessCenter className="mr-0 pb-1" fontSize="small" />
          Tenders
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500 sm:px-2 border-none"
        variant="body2"
      >
        <Link to={"/courses"} className="mx-4 sm:mx-2" activeStyle={style}>
          <School className="mr-0 pb-1" fontSize="small" />
          Courses
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r my-auto hover:text-yellow-500 border-yellow-500 sm:border-none"
        variant="body2"
      >
        <Link activeStyle={style} className="my-auto" to={"/vacancies"}>
          <Work className="mr-0 pb-1" fontSize="small" />
          Careers
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r my-auto hover:text-yellow-500 border-yellow-500 sm:border-none"
        variant="body2"
      >
        <Link activeStyle={style} className="my-auto" to={"/post"}>
          <Announcement className="mr-0 pb-1" fontSize="small" />
          News
        </Link>
      </Typography>

      <Typography
        className="px-3 text-white  border-r my-auto hover:text-yellow-500 border-yellow-500 sm:border-none"
        variant="body2"
      >
        <MLink
          className="my-auto text-white hover:text-yellow-500 "
          target="_blank"
          style={{ color: "white" }}
          href="https://portal.easterncollege.so/"
        >
          <People className="mr-0 pb-1" fontSize="small" />
          Student Portal
        </MLink>
      </Typography>
      <Typography
        className="px-3 border-r text-white my-auto hover:text-yellow-500 border-yellow-500 sm:border-none"
        variant="body2"
      >
        <MLink
          href="https://lms.easterncollege.so/"
          target="_blank"
          style={{ color: "white" }}
          className="my-auto text-white sm:text-black"
        >
          <SupervisedUserCircleIcon className="mr-0 pb-1" fontSize="small" />
          LMS
        </MLink>
      </Typography>
      <Typography
        className="px-3 border-r hidden hover:text-yellow-500 border-yellow-500 md:block lg:block sm:text-black border-none"
        variant="body2"
      >
        <Link to="/apply-online">
          {" "}
          <Chip label="Apply online" clickable />
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500 sm:border-none"
        variant="body2"
      >
        <SearchHeader handleSearch={handleSearch} />
      </Typography>
    </Box>
  );
};
export default Header;

const SearchHeader = ({ handleSearch }: Search) => {
  const [text, setText] = React.useState("");
  const [focus, setFocus] = React.useState(false);
  const search = React.useRef<HTMLInputElement | null>(null!);

  const handleChange = () => {
    handleSearch(text);
    setText("");
    setFocus(false);
    if (search.current) search.current.value = "";
  };
  return (
    <Input
      type="search"
      className="w-50 my-auto py-auto transition-all 1s ease-in-out"
      style={{
        width: focus ? 150 : 110,
        padding: "0 .5rem",
        color: "white",
        height: 20,
      }}
      placeholder="search..."
      ref={search}
      value={text}
      onFocus={() => setFocus(true)}
      onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
        e.key === "Enter" ? handleChange() : null
      }
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setText((e.target as HTMLInputElement).value)
      }
      endAdornment={
        <InputAdornment position="end" variant="filled">
          <Search
            className="cursor-pointer"
            htmlColor="white"
            fontSize="small"
            onClick={handleChange}
          />
        </InputAdornment>
      }
    />
  );
};

export const MobileHeader = (): JSX.Element => {
  return (
    <div className="block lg:hidden">
      <AppBar
        position="static"
        color="transparent"
        className=" py-2 my-0 "
        style={{
          zIndex: 10,
          height: 80,
          paddingRight: 20,

          margin: "0 16",
        }}
      >
        <div>
          <Link to="/">
            {" "}
            <img
              src={logo}
              className=" py-0 my-0 mx-auto sm:ml-0 md:mx-auto  "
              width={300}
              height={70}
              alt="Eastern College"
            />
          </Link>
        </div>
      </AppBar>
    </div>
  );
};
