import React from "react";
import { Link, navigate } from "gatsby";
import { Grid, List, ListItem, ListItemIcon, Paper } from "@material-ui/core";
import Layout from "../../components/layout";
import { ArrowRightAlt, ExitToApp, Home } from "@material-ui/icons";

export default function AdminLayout({ children }: { children: any }) {
  const [active, setActive] = React.useState(0);
  const items = [
    "News",
    "Careers",
    "Courses",
    "Events",
    "Notices",
    "Downloads",
  ];
  return (
    <Layout siteTitle="Eastern Admin">
      <Grid container className="p-2 my-2">
        <Grid item xs={12} md={2} lg={2} className="p-2">
          <Paper>
            <List>
              <ListItem divider button onClick={() => navigate("/admin/")}>
                <ListItemIcon onClick={() => navigate("/admin/")}>
                  <Home />
                </ListItemIcon>
              </ListItem>
              {items.map((item, i) => (
                <ListItem
                  key={i}
                  divider
                  selected={i === active}
                  onClick={() => setActive(i)}
                  button
                >
                  <ListItemIcon onClick={() => setActive(i)}>
                    <ArrowRightAlt />
                  </ListItemIcon>
                  <Link
                    onClick={() => setActive(i)}
                    to={`/admin/${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </ListItem>
              ))}

              <ListItem divider button>
                <ListItemIcon>
                  {" "}
                  <ExitToApp />
                </ListItemIcon>
                Log out
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={10} lg={10} className="px-4">
          {children}
        </Grid>
      </Grid>
    </Layout>
  );
}
