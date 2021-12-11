import React from "react";
import "./rateCourse.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import menu from "../images/menu.jpeg";
import google from "../images/google.png";
import RatedCard from "./../common/ratedCard/rated";
const RateCourse = () => {
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
    <div className="rateCourse">
      <div className="rateCourse-title">TOP RATED COURSES</div>
      <Carousel
        arrows={false}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <RatedCard
          img={menu}
          title="Course-1"
          subtitle="course-1 subtitle"
          amount="50"
          discount="15%"
          icon={google}
        />
        <RatedCard
          img={menu}
          title="Course-2"
          subtitle="course-2 subtitle"
          amount="1500"
          discount="15%"
          icon={google}
        />
        <RatedCard
          img={menu}
          title="Course-3"
          subtitle="course-3 subtitle"
          amount="1560"
          discount="15%"
          icon={google}
        />
        <RatedCard
          img={menu}
          title="Course-4"
          subtitle="course-4 subtitle"
          amount="1560"
          discount="15%"
          icon={google}
        />
      </Carousel>
    </div>
  );
};

export default RateCourse;
