import React from "react";
import { Link, navigate } from "gatsby";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import Layout from "../../components/layout";
import { ArrowRightAlt, ExitToApp, Home } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";

export default function AdminLayout({ children }: { children: any }) {
  const [active, setActive] = React.useState(-1);
  const [coords, setCoords] = React.useState<{
    width: number;
    height: number;
  } | null>(null);
  const [isLogged, setLogged] = React.useState<boolean | undefined>(undefined);
  const items = [
    "News",
    "Careers",
    "Courses",
    "Events",
    "Notices",
    "Tenders",
    "Downloads",
  ];
  const handleLogout = () => {
    window.location.pathname = "/admin/login";
  };
  const handleActive = (active: number) => {
    setActive(active);
  };
  const handleNav = () => {
    setActive(0);
    navigate("/admin/");
  };

  React.useLayoutEffect(() => {
    setCoords({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);

  const SkeletonWrapper = (
    <Skeleton
      animation="wave"
      width={coords?.width - 300}
      height={coords?.height}
    ></Skeleton>
  );

  return (
    <Layout siteTitle="Eastern Admin">
      <Grid container className=" p-2 my-2">
        <Grid item xs={12} md={3} lg={3} className="p-2">
          <Paper>
            <List>
              <ListItem
                divider
                button
                onClick={handleNav}
                selected={active === -1}
              >
                <ListItemIcon onClick={handleNav}>
                  <Home />
                </ListItemIcon>
              </ListItem>
              {items.map((item, i) => (
                <ListItem
                  key={i}
                  divider
                  selected={i === active}
                  onClick={() => handleActive(i)}
                  button
                >
                  <ListItemIcon onClick={() => handleActive(i)}>
                    <ArrowRightAlt />
                  </ListItemIcon>
                  <Link
                    activeClassName="text-red-500"
                    onClick={() => handleActive(i)}
                    to={`/admin/${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </ListItem>
              ))}

              <ListItem divider button onClick={handleLogout}>
                <ListItemIcon>
                  {" "}
                  <ExitToApp />
                </ListItemIcon>
                Log out
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9} lg={9} className="px-4" id="wrapper">
          {children}
        </Grid>
      </Grid>
    </Layout>
  );
}

type SchoolsProps = { id: number; school: string };
interface SchoolList {
  sendValue: (f: string) => void;
  schools: SchoolsProps[];
}
export const SchoolList = ({
  schools = [],
  sendValue = (f: string) => f,
}: SchoolList) => {
  const [selected, setSelected] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setSelected((e.target as HTMLSelectElement).value);
    sendValue((e.target as HTMLSelectElement).value);
  };

  return (
    <FormControl>
      <InputLabel>Select School</InputLabel>
      <Select
        value={selected}
        autoWidth
        onChange={handleChange}
        style={{ minWidth: 120 }}
      >
        {schools.map((school: SchoolsProps) => (
          <MenuItem key={school.id} value={school.id}>
            {school.school}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
