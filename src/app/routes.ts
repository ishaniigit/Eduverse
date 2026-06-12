import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { StudentDashboard } from "./pages/StudentDashboard";
import { SkillTree } from "./pages/SkillTree";
import { AIMentor } from "./pages/AIMentor";
import { CareerRoadmap } from "./pages/CareerRoadmap";
import { TeacherAnalytics } from "./pages/TeacherAnalytics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/dashboard",
    Component: StudentDashboard,
  },
  {
    path: "/skill-tree",
    Component: SkillTree,
  },
  {
    path: "/mentor",
    Component: AIMentor,
  },
  {
    path: "/roadmap",
    Component: CareerRoadmap,
  },
  {
    path: "/analytics",
    Component: TeacherAnalytics,
  },
]);
