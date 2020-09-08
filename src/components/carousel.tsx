import React from "react";
import Carousel from "nuka-carousel";
import { makeStyles } from "@material-ui/styles";
import { Typography, IconButton } from "@material-ui/core";
import ArrowRight from "@material-ui/icons/NavigateNext";
import ArrowLeft from "@material-ui/icons/NavigateBefore";
import Arrow from "@material-ui/icons/Navigation";

const slide1 = require("../../public/images/8197EC_slider_1596227339.jpeg");
const slide2 = require("../../public/images/3305EC_slider_1598126235.jpeg");
import slide3 from "../../public/images/9683EC_slider_1598823318.jpeg";
import slide4 from "../../public/images/3265EC_slider_1598126279.jpeg";
const slide5 = require("../../public/images/ec_random_1596306732.jpeg");
//const slide6 = require("../../public/images/slide6.JPG");
const slides = [
  { pic: slide1, caption: "Eastern College 1", id: 1 },
  { pic: slide2, caption: "Eastern College 2", id: 2 },
  { pic: slide3, caption: "Eastern College 3", id: 3 },
  { pic: slide4, caption: "Eastern College 4", id: 4 },
  { pic: slide5, caption: "Eastern  5", id: 5 },
];
const useStyles = makeStyles({
  wrapper: {
    height: 320,

    "@media (max-width:768px)": {
      height: 200,
    },
    "@media (max-width:480px)": {
      height: 150,
    },
  },
});

export default function CarouselSlider(): JSX.Element {
  const [current, setCurrent] = React.useState(0);
  const classes = useStyles();
  const Caption = () => (
    <Typography
      variant="body1"
      className="text-base p-2 w-screen text-center  mx-auto text-white bg-opacity-50 bg-gray-900 
      hover:bg-opacity-75 md:block py-1 sm:hidden  py-1 text-sm"
    >
      {!!slides[current] ? slides[current].caption : "Eastern College repp"}
    </Typography>
  );
  const Previous = () => (
    <IconButton
      onClick={() =>
        current < 1 ? setCurrent(0) : setCurrent(locked => locked - 1)
      }
      disabled={current < 1 ? true : false}
    >
      <ArrowLeft
        fontSize="large"
        htmlColor={current < 1 ? "gray " : "white"}
        className="text-4xl bg-opacity-75"
      />
    </IconButton>
  );
  const next = () => (
    <IconButton
      onClick={() =>
        current >= slides.length
          ? setCurrent(0)
          : setCurrent(locked => locked + 1)
      }
      disabled={current >= slides.length ? true : false}
    >
      <ArrowRight
        fontSize="large"
        htmlColor={current >= slides.length ? "gray" : "white"}
        className="text-3xl bg-opacity-75"
      />
    </IconButton>
  );

  return (
    <div className={classes.wrapper}>
      <Carousel
        autoplay
        autoplayInterval={3000}
        speed={1000}
        wrapAround
        cellAlign="center"
        withoutControls={false}
        slidesToShow={1}
        scrollMode="page"
        transitionMode="fade"
        initialSlideHeight={300}
        renderBottomLeftControls={Caption}
        renderCenterLeftControls={Previous}
        renderCenterRightControls={next}
        slideIndex={current}
        afterSlide={slideIndex => setCurrent(locked => slideIndex)}
      >
        {slides.map(slide => (
          <img
            key={slide.id}
            className="w-full"
            style={{ width: 1260 }}
            src={slide.pic}
            alt={slide.caption}
          />
        ))}
      </Carousel>
    </div>
  );
}
