import React from "react";
import { CircularProgress, Paper, Typography } from "@material-ui/core";
import Layout from "../components/layout";

function Schools(): React.ReactNode {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  });
  return (
    <Layout siteTitle="Schools">
      <Paper className="mx-3 p-2 my-3 md:mx-10 p-3 lg:mx-20 p-4">
        {loaded ? (
          <div className="text-center p-4 my-3">
            <Typography>
              Schools are currently unavailable. Kindly check back soon.
            </Typography>
          </div>
        ) : (
          <div className="text-center p-4 my-3">
            <CircularProgress size="3rem" />
            <Typography>Setting up schools..</Typography>
          </div>
        )}
      </Paper>
    </Layout>
  );
}
export default Schools;

const courses = [
  {
    school: "The School of Languages",
    des:
      "The School of Languages is the founding faculty of the college, starting its operations in 2018 when the college opened. Over the last two years, the faculty has grown to increase the number of courses offered by the college as of today. Additionally, the faculties offered in the college have also increased to include School of Hospitality and Tourism & School of Business and Economics.\
All the course offered currently are of Diploma and Certificate levels only. The diploma and certificate levels take 18 months and 4 months respectively to complete.\
",
    courses: [
      {
        course: "English as Second Language (ESL)",
        id: 1,
        level: "Diploma",
        des:
          "It is designed to provide communicative grammar and speaking skills of General English language to learners in six different levels, namely: Elementary, Pre-Intermediate, Intermediate, Intermediate Plus, Upper Intermediate and Advanced. There is also an extra level (Advanced Plus).\
This course is offered to post-secondary school graduates. ",
      },
      {
        course: "Business English",
        id: 2,
        level: "Certificate",
        des:
          "It is a tailor-made course to help prospective business men and women to overcome the communicative hurdles they face in their day to day business communications. The course is built around some of the most basic needs of transacting day to day business and is flanked with a number of clear illustrations, to help in mastery of content.\
Marine English ",
      },
      {
        course: "Marine English ",
        id: 3,
        level: "diploma",
        des:
          "Somalia has one of the largest coastal lines in the world. This has presented the community with a lot of social and economic activities. However, with the world coming to be a global village, there is need to empower the locals to be able to share their prowess in maritime operations and business with the rest of the world. One of the best for this is by building the linguistic capacity of the locals.\
The course offers the learner basic maritime English language and vocabulary to use while onboard, at port or to any professional in the Maritime industry.\
School of Business and Economics ",
      },
    ],
  },
  {
    school: "School of Business and Economics",
    des: "",
    courses: [
      {
        course: "Certificate in Business & Entrepreneurship through English",
        id: 1,
        level: "Certificate",
        des:
          "This course is designed to teach non-native English speakers about doing business and entrepreneurship through English. In this course you'll learn about entrepreneurship, identifying business opportunities, conducting market research, creating business plans, and a range of other important skills through readings and video lectures to help you achieve your English language and business goals.",
      },
    ],
  },
  {
    school: "School of Hospitality Management",
    des: "",
    courses: [
      {
        course: "Diploma in Hospitality Management with English Studies.",
        id: 1,
        level: "Diploma",
        des:
          "Hospitality management with the English language diploma provides an introduction to anyone with an interest to enter the hospitality industry, in a multilingual sector where English use is key. You will not only learn about the best practices of hospitality, but crucial vocabulary and grammar for using English at your workplace. At the end of this course, you'll be able to converse with English speaking customers, guests, and co-workers with ease.",
      },
      {
        course: "Diploma in International Tourism with English Studies.",
        id: 2,
        level: "Diploma",
        des:
          "International tourism diploma course teaches you about English language use in international tourism, and a range of useful English language phrases and vocabulary for speaking English in a tourist environment. This course will teach you the vocabulary required to work in hotels, restaurants, and tourist information centers as well as about the language used in business and destination marketing and sales",
      },
    ],
  },
  {
    school: "School of Humanities and Social Sciences",
    des: "",
    courses: [],
  },
];
console.log(courses);
