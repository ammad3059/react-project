import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./category.css";
import medical from "../images/medical.jpg";
import engg from "../images/engg.jpg";
import comm from "../images/comm.png";
import digital from "../images/download.png";
import CourseCat from "./../common/courseCat/courseCat";
const CourseCategory = () => {
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
    <div className="course-category">
      <div className="course-category-title">
        EXPLORE GIVEN COURSE CATEGORIES
      </div>
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
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-margin-20-px"
      >
        <CourseCat
          img={medical}
          title="Medical Field"
          subtitle="Doctors Choice"
        />
        <CourseCat
          img={engg}
          title="Engineering Field"
          subtitle="Doctors Choice"
        />
        <CourseCat
          img={comm}
          title="Commerce field"
          subtitle="Doctors Choice"
        />
        <CourseCat
          img={digital}
          title="Digital Science"
          subtitle="Doctors Choice"
        />
      </Carousel>
    </div>
  );
};

export default CourseCategory;
