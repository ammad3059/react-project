import NavBar from "./components/navbar/navbar";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import BottomLink from "./components/bottomLinks/bottomLink";
import Resource from "./components/resources/resource";
import DegreeProgram from "./components/degree/degree";
import Subscribe from "./components/subscribe/subscribe";
import Courses from "./components/courses/courses";
import Service from "./components/services/service";
import CourseCategory from "./components/courseCategory/category";
import Partner from "./components/partners/partner";
import RateCourse from "./components/rateCourses/rateCourse";
import StudentSuccess from "./components/studentSuccess/studentSuccess";
import Question from "./components/question/question";
import Label from "./components/common/label/label";
import UniTopics from "./components/university/uniTopics";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Menu />
      <Label />
      <DegreeProgram />
      <Label />
      <Courses />
      <Label />
      <UniTopics />
      <Label />
      <CourseCategory />
      <Label />
      <RateCourse />
      <Label />
      <Service />
      <Label />
      <Resource />
      <Label />
      <StudentSuccess />
      <Question />
      <Label />
      <Partner />
      <Subscribe />
      <BottomLink />
      <Footer />
    </div>
  );
}

export default App;
