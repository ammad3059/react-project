import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./uniTopics.css";
import cardImg from "../images/subs.jpg";
import FlatCard from "./../flatcard/flatcard";
const UniTopics = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="courses">
      <div className="courses-title">OUR UNIVERSITY SESSIONS</div>
      <Carousel
        arrows={false}
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <FlatCard
          topImg={cardImg}
          title="Bachelors in Software Engineering"
          parag="4 years program"
          insideImg={cardImg}
          bottomImg={cardImg}
          insideText="coming soon!"
        />
        <FlatCard
          topImg={cardImg}
          title="Bachelors in Software Engineering"
          parag="4 years program"
          insideImg={cardImg}
          bottomImg={cardImg}
          insideText="coming soon!"
        />
        <FlatCard
          topImg={cardImg}
          title="Bachelors in Software Engineering"
          parag="4 years program"
          insideImg={cardImg}
          bottomImg={cardImg}
          insideText="coming soon!"
        />
        <FlatCard
          topImg={cardImg}
          title="Bachelors in Software Engineering"
          parag="4 years program"
          insideImg={cardImg}
          bottomImg={cardImg}
          insideText="coming soon!"
        />
        <FlatCard
          topImg={cardImg}
          title="Bachelors in Architecture Engineering"
          parag="5 years program"
          insideImg={cardImg}
          bottomImg={cardImg}
          insideText="coming soon!"
        />
        <FlatCard
          topImg={cardImg}
          title="Bachelors in Electrical Engineering"
          parag="4 years program"
          insideImg={cardImg}
          bottomImg={cardImg}
          insideText="coming soon!"
        />
        <FlatCard
          topImg={cardImg}
          title="Bachelors in Mechanical Engineering"
          parag="4 years program"
          insideImg={cardImg}
          bottomImg={cardImg}
          insideText="soon!"
        />
      </Carousel>
    </div>
  );
};

export default UniTopics;
