import {
  Box,
  CircularProgress,
  Paper,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@material-ui/core";
import { Error } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState, fetchData } from "../redux/reducer";
import * as actions from "../redux/updatesReducer/actions";
import Layout from "../components/layout";

function Event(): React.ReactNode {
  const [spinner, setSpinner] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [current, setCurrent] = React.useState(0);

  const eventsurl = "../server/index.php?fetchevents=true";

  const dispatch = useDispatch();
  const { events } = useSelector((state: rootState) => ({
    events: state.updates.events,
  }));

  React.useEffect(() => {
    //dispatch(actions.addEvents(faker));
    if (!!!events.length) {
      fetchData(eventsurl, dispatch, setSpinner, setErr, actions.addEvents);
    }
  }, []);

  return (
    <Layout siteTitle="Events">
      <Paper className="sm:mx-2 p-2 my-2 md: mx-10 p-4 my-3 lg:mx-20 p-4 my-4">
        {!!events.length ? (
          <EventsTable events={events} />
        ) : spinner ? (
          <div className="p-4 text-center my-4">
            <CircularProgress size="3rem" />
            <Typography>Loading events....</Typography>
          </div>
        ) : (
          <Box>
            <Typography align="center">
              <Error color="secondary" />{" "}
              {err ? err : `There no events at the moment.. check back soon.`}
              back soon.
            </Typography>
          </Box>
        )}
      </Paper>
    </Layout>
  );
}
export default Event;

const EventsTable: React.FC<{ events: Events[] }> = ({ events = [] }) => {
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell> Event</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>Date</TableCell>

              <TableCell>Added on</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {events.map((item, i) => (
              <NewsTable key={item.id} {...item} index={i} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
type Index = { index: number };
const NewsTable: React.FC<Events & Index> = ({
  index,
  eventname,
  details,
  venue,
  startdate,
  addedon,
}) => {
  return (
    <TableRow>
      <TableCell>{index + 1}.</TableCell>
      <TableCell>{eventname}</TableCell>
      <TableCell>{details}</TableCell>
      <TableCell>{venue}</TableCell>
      <TableCell>
        {
          <Chip
            color={new Date(startdate) >= new Date() ? "primary" : "secondary"}
            label={new Date(startdate).toDateString()}
          />
        }
      </TableCell>
      <TableCell>{new Date(addedon).toDateString()}</TableCell>
    </TableRow>
  );
};

type Events = {
  id: number;
  altId: string;
  eventname: string;
  details: string;
  startdate: string;
  enddate: string;
  venue: string;
  addedon: string;
};

const faker = [...Array(23)].map((item, i) => ({
  id: i + 1,
  altId: "gdff",

  eventname: "Coachella festival",
  details: "Desert festival...",
  startdate: i % 2 === 0 ? "2021/02/21" : "2021/02/11",
  enddate: "28/02/2021",
  venue: "COlorado",
  addedon: "2021/02/16",
}));
/*

< !DOCTYPE html > 
<html class="no-js">
    <head>
       <?php require getenv("DOCUMENT_ROOT") . "/views/includes/header.inc.php";?> 
       <style>
           .fa-list-ul, .fa-calendar, .fa-user {
               font-weight: 900;
               font-size: 20px;
               font-style: italic;
           }
       </style>
    </head>
    <body>
    <!-------------------------header----------------------------->
    <header>
        <?php require getenv("DOCUMENT_ROOT") . "/views/includes/navbar.inc.php"; ?>
    </header>
    <!-------------------------body----------------------------->    
    <!-----------------------about------------------------------->
    <section class="container-fluid card"> 
    <div class="containers">
        <div class="row">
        <div class="col-md-2"> </div> 
            <div class="col-md-8">          
                <div class="card mt-3 mb-1 card-team">
                    <h5 class="alert alert-primary text-center"> <?php echo ucfirst($this->loadPost['e_title']); ?></h5>                
                    <div class=" ml-3 mr-2 " >
                        <div class="alert"> 
                            <?php
                            

                               $file = $this->loadPost['e_file'];
                               $path = getenv('DOCUMENT_ROOT') . '/views/assets/uploads/';
                               if (!file_exists($path . $file))                               
                                    $file = 'diris.png';
                               
                            ?>
                            <img src="/views/assets/uploads/<?php echo $file; ?>" alt="alt" class="card-img-top img-responsive" style="max-height: 350px;"> 
                            <div class="card-body">
                                <b>Theme: <?php echo $this->loadPost['e_theme']; ?></b>
                            </div>                                    
                        </div>
                    </div>                   
                    </div>  
                </div>
                <div class="col-md-2">
                    
                </div>
            </div>
        </div>  
    </section>

</body>
   
    <footer class="footer">
        <?php require getenv("DOCUMENT_ROOT") . "/views/includes/footer.inc.php";?> 
    </footer>     
</html>
<script src='/views/assets/about.js'></script>
<script>
    $(function(){


        $('.blog_current').css("color", "white");
    })

</script>
*/
