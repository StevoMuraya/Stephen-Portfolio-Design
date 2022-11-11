import AboutPage from "../pages/AboutPage";
import LandingPage from "../pages/LandingPage";
import Error404 from "./../pages/Error404";
import ExperiencePage from "./../pages/ExperiencePage";
import ProjectsPage from "./../pages/ProjectsPage";
import ContactPage from "./../pages/ContactPage";

export default [
  {
    path: "/",
    page: LandingPage,
  },
  {
    path: "/about",
    page: AboutPage,
  },
  {
    path: "experience",
    page: ExperiencePage,
  },
  {
    path: "projects",
    page: ProjectsPage,
  },
  {
    path: "/contact",
    page: ContactPage,
  },
  {
    path: "*",
    page: Error404,
  },
];
