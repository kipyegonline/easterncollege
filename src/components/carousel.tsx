import React from "react";
import Carousel from "nuka-carousel";
import { makeStyles } from "@material-ui/styles";
import { Typography, IconButton, Box } from "@material-ui/core";
import ArrowRight from "@material-ui/icons/NavigateNext";
import ArrowLeft from "@material-ui/icons/NavigateBefore";
import Arrow from "@material-ui/icons/Navigation";
import Slider from "react-slick";

const slide1 = require("../images/slide1.jpg");
const slide2 = require("../images/slide3.jpg");
const slide3 = require("../images/slide4.jpg");
const slide4 = require("../images/slide5.jpg");
const slide5 = require("../images/slide2.jpg");
//const slide6 = require("../images/slide6.JPG");
const slides = [
  { pic: slide1, caption: "Eastern College students", id: 1 },
  { pic: slide2, caption: "Eastern College ", id: 2 },
  { pic: slide3, caption: "Eastern College ", id: 3 },
  { pic: slide4, caption: "Eastern College ", id: 4 },
  { pic: slide5, caption: "Eastern  College", id: 5 },
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
      className="text-base p-2 mx-0 px-0 w-screen relative overflow-hidden text-center text-white bg-opacity-50 bg-gray-900 
      hover:bg-opacity-75 md:block py-1 sm:hidden  sm:py-1 sm:text-sm"
    >
      {!!slides[current] ? slides[current].caption : "Eastern College"}
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
        renderBottomCenterControls={Caption}
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

export  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    cssEase: "linear",
    accessibility: true,
    arrows: true,
    swipe: true,
    adaptiveHeight: true,
    className: "relative",
  };
export const ReactCarousel = () => {
 
  return (
    <Slider {...settings}>
      {slides.map(slide => (
        <Box key={slide.id}>
          <img
            className="w-full"
            style={{ width: 1260 }}
            src={slide.pic}
            alt={slide.caption}
          />
          <Typography
            variant="h6"
            align="center"
            className="absolute bottom-0 left-0 mx-auto z-10"
          >
            {slide.caption}
          </Typography>
        </Box>
      ))}
    </Slider>
  );
};
