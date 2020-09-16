import React from "react";
import {
  Box,
  Typography,
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
type Props = { siteTitle: string };
type Search = {
  handleSearch: (text: string) => void;
};
const Header: React.FC<Props> = () => {
  const style = { color: "yellow" };

  const handleSearch = (text: string): void => {
    if (!text) return;

    alert("No search results found for: " + text);
  };
  return (
    <Box
      className=" relative  py-3 px-2 bg-blue-800 text-white 
      sm: flex flex-wrap justify-start items-start m-0 pr-10 pl-0 ml-0 pr-2   leading-none
       md:flex flex-wrap items-center
      lg:flex flex-row flex-wrap  justify-center items-center
      
       
   "
    >
      <Typography
        className=" border-r hover:text-yellow-500 border-yellow-500 sm:px-0 md:px-3"
        variant="body2"
        align="left"
      >
        <Link to={"/login"} style={{ marginRight: "1rem" }} activeStyle={style}>
          <HowToReg className="mr-0 pb-1" /> E-Registar
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500 sm:px-0"
        variant="body2"
      >
        <Link to={"/tenders"} style={{ margin: "0 1rem" }} activeStyle={style}>
          <BusinessCenter className="mr-0 pb-1" fontSize="small" />
          Tenders
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500 sm:px-0"
        variant="body2"
      >
        <Link to={"/courses"} style={{ margin: "0 1rem" }} activeStyle={style}>
          <School className="mr-0 pb-1" fontSize="small" />
          Courses
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r my-auto hover:text-yellow-500 border-yellow-500"
        variant="body2"
      >
        <Link activeStyle={style} className="my-auto" to={"/vacancies"}>
          <Work className="mr-0 pb-1" fontSize="small" />
          Careers
        </Link>
      </Typography>
      <Typography
        className="px-3 border-r my-auto hover:text-yellow-500 border-yellow-500"
        variant="body2"
      >
        <Link activeStyle={style} className="my-auto" to={"/post"}>
          <Announcement className="mr-0 pb-1" fontSize="small" />
          News
        </Link>
      </Typography>

      <Typography
        className="px-3 text-white  border-r my-auto hover:text-yellow-500 border-yellow-500"
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
        className="px-3 border-r text-white my-auto hover:text-yellow-500 border-yellow-500"
        variant="body2"
      >
        <MLink
          href="https://portal.easterncollege.so/"
          target="_blank"
          style={{ color: "white" }}
          className="my-auto text-white"
        >
          <SupervisedUserCircleIcon className="mr-0 pb-1" fontSize="small" />
          Staff portal
        </MLink>
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500 sm:hidden md:hidden"
        variant="body2"
      >
        <Chip
          label="Apply online"
          className="p-2 block hover:bg-yellow-500 sm:hidden"
          component="a"
          size="small"
          href="/apply-online"
          clickable
        />
      </Typography>
      <Typography
        className="px-3 border-r hover:text-yellow-500 border-yellow-500"
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
        width: focus ? 150 : 100,
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
