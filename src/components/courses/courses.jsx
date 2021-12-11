import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./courses.css";
import menu from "../images/menu.jpeg";
import google from "../images/google.png";
import UniCard from "./../common/uniCard/unicard";
const Courses = () => {
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
      <div className="courses-title">TRY OUR FREE COURSES</div>
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
        <UniCard
          img={menu}
          title="Course-1"
          subtitle="course-1 subtitle"
          amount="50"
          icon={google}
        />
        <UniCard
          img={menu}
          title="Course-2"
          subtitle="course-2 subtitle"
          amount="1500"
          icon={google}
        />
        <UniCard
          img={menu}
          title="Course-3"
          subtitle="course-3 subtitle"
          amount="1560"
          icon={google}
        />
        <UniCard
          img={menu}
          title="Course-4"
          subtitle="course-4 subtitle"
          amount="1560"
          icon={google}
        />
      </Carousel>
      ;
    </div>
  );
};

export default Courses;
