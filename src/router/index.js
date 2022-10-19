// Import router
import { createRouter, createWebHistory } from "vue-router";
// Define Route Components
import { defineStore } from "pinia";
import MenuHelpComponent from "../components/MenuHelpComponent.vue";
import ScreenDashboard from "../components/ScreenDashboard.vue";
import ScreenCourse from "../components/ScreenCourse.vue";
import MenuHowToUseComponent from "../components/MenuHowToUseComponent.vue";
import MenuStudentsOnline from "../components/MenuStudentsOnline.vue";
import MenuNotificationComponent from "../components/MenuNotificationComponent.vue";
import MenuSettingsComponent from "../components/MenuSettingsComponent.vue";
import MenuProfileComponent from "../components/MenuProfileComponent.vue";
import DashboardIcon from "../assets/icons/Dashboard_v3.svg";
import CourseIcon from "../assets/icons/Courses_v3.svg";
import CalendarIcon from "../assets/icons/Calendar_v3.svg";
import GroupClassIcon from "../assets/icons/Group Classes_v3.svg";
import HelpIcon from "../assets/icons/Help_v3.svg";
import SettingsIcon from "../assets/icons/Settings_v3.svg";
import NotificationIcon from "../assets/icons/Notifications_v3.svg";
import ProgressIcon from "../assets/icons/Progress_v3.svg";
import UpgradeIcon from "../assets/icons/Add_courses_v3.svg";
import ShopIcon from "../assets/icons/Add_to_Cart_v3.svg";

// Routes:
export const routes = [
  { path: "/", alias: "/Dashboard", component: ScreenDashboard },
  {
    path: "/Course",
    component: () => import("../components/ScreenCourse.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
