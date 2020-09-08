/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Navigation from "@material-ui/icons/NavigationRounded";
import Header from "./header";
import Footer from "./ui/footer";
import NavBar, { Socials } from "./ui/navbar";
import Drawer from "./ui/sideMenu";
import "./layout.css";
import { IconButton } from "@material-ui/core";

type Props = {
  children?: any;
  siteTitle: string;
};
const Layout = ({ children }: Props): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <NavBar />
      <Drawer />
      <MoveTop />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1260,
          padding: `0`, //1.0875 rem 1.45rem
        }}
      >
        <main>{children}</main>
      </div>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const MoveTop = () => {
  return (
    <div className="fixed z-30 right-0 ml-5 bottom-0">
      <IconButton
        onClick={() =>
          globalThis.window &&
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
      >
        <Navigation fontSize="large" htmlColor="green" />
      </IconButton>
    </div>
  );
};
export default Layout;
