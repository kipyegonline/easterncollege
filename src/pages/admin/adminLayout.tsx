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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
} from "@material-ui/core";
import Layout from "../../components/layout";
import Login from "./login";
import {
  ArrowRightAlt,
  Close,
  ExitToApp,
  Face,
  Home,
} from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";

export default function AdminLayout({ children }: { children: any }) {
  const [active, setActive] = React.useState(-1);
  const luser =
    globalThis.window &&
    JSON.parse(localStorage.getItem("eastern-user") as any);
  const [user, setUser] = React.useState(luser);
  const [coords, setCoords] = React.useState<{
    width: number;
    height: number;
  } | null>(null);

  const items = [
    "News",
    "Careers",
    "Courses",
    "Events",
    "Website-Forms",
    "Notices",
    "Tenders",
    "Downloads",
  ];
  const handleLogout = () => {
    window.localStorage.removeItem("eastern-user");
    window.location.pathname = "/admin/login";
    console.log("redirected");
  };
  const handleActive = (active: number) => {
    setActive(active);
  };
  const handleNav = () => {
    setActive(0);
    navigate("/admin/");
  };

  const admin = (
    <Layout siteTitle="Eastern Admin">
      <Grid
        container
        className=" p-2 my-2"
        justify="space-evenly"
        alignItems="flex-start"
      >
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
                <Chip
                  label={user?.username}
                  variant="outlined"
                  color="primary"
                  onClick={handleNav}
                  size="small"
                  icon={<Face />}
                />
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
  return user?.altId ? admin : <Login />;
}

type SchoolsProps = { id: number; school: string };
interface SchoolList {
  sendValue: (f: number) => void;
  schools: SchoolsProps[];
  school: number;
}
export const SchoolList = ({
  schools = [],
  school,
  sendValue = (f: number) => f,
}: SchoolList) => {
  const [selected, setSelected] = React.useState(school);
  React.useEffect(() => {
    setSelected(school);
  }, [school]);

  const handleChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setSelected(+(e.target as HTMLSelectElement).value);
    sendValue(+(e.target as HTMLSelectElement).value);
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

export const UseModal = ({ title, children, handleClick, open }) => (
  <Dialog open={open} onClose={handleClick}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      <Button
        color="primary"
        variant="contained"
        size="small"
        onClick={handleClick}
        startIcon={<Close />}
      >
        Close
      </Button>
    </DialogActions>
  </Dialog>
);
