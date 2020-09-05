import React from "react"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"
import { Typography, AppBar } from "@material-ui/core"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch({ type: "ADD_USER", payload: "Vince" })
    dispatch({ type: "ADD_USER", payload: "Jules" })
  }, [])
  return (
    <Layout siteTitle="Home">
      <SEO lang="en" meta="Home" title="Home" />
      <AppBar position="relative" className="mt-4">
        <Typography variant="h5" className=" text-white  text-center">
          Welcome to Eastern College, Somalia
        </Typography>
      </AppBar>
    </Layout>
  )
}

export default IndexPage
