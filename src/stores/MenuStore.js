import { defineStore } from "pinia";
import MenuHelpComponent from "../components/MenuHelpComponent.vue";
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

export const useMenuStore = defineStore("menu", {
  state: () => ({
    showAction: false,
    activeItem: "",
    activeScreen: {
      component: "Dashboard",
      textID: "Dashboard",
    },
    nav: [
      {
        text: "Dashboard",
        body: "",
        link: "/",
        icon: DashboardIcon,
        component: "ScreenDashboard",
        subItems: [
          { title: "Home", link: "/one" },
          { title: "Progress", link: "/two" },
          { title: "Resources", link: "/three" },
          { title: "Shop", link: "/three" },
        ],
      },
      {
        text: "Course",
        body: "",
        link: "/Course",
        icon: CourseIcon,
        component: "ScreenCourseMaterial",
        subItems: [
          { title: "Course One", link: "/one" },
          { title: "Course Two", link: "/two" },
          { title: "Course Three", link: "/three" },
        ],
      },
      {
        text: "Calendar",
        body: "@/src/assets/icons/Calendar_v3.svg",
        link: "/Calendar",
        icon: CalendarIcon,
        component: "ScreenCalendar",
        subItems: [
          { title: "Calendar One", link: "/one" },
          { title: "Calendar Two", link: "/two" },
          { title: "Calendar Three", link: "/three" },
        ],
      },
      {
        text: "Group Classes",
        body: "@/src/assets/icons/Group Classes_v3.svg",
        link: "/Group_Classes",
        icon: GroupClassIcon,
        component: "ScreenGroupClassIcon",
      },
      {
        text: "Upgrade Package",
        body: "@/src/assets/icons/Group Classes_v3.svg",
        link: "/Shop/Packages",
        icon: UpgradeIcon,
        component: "ScreenShop",
      },
      {
        text: "Shop",
        body: "@/src/assets/icons/Group Classes_v3.svg",
        link: "/Shop/Packages",
        icon: ShopIcon,
        component: "ScreenShop",
      },
    ],

    menu: [
      // { text: "", body: "", link: "https://google.com", component: "" },
      // {
      //   text: "",
      //   active: false,
      //   menuClass: "w-screen poop",
      //   body: `<div
      //     class="outline-red-500 bg-blue-500 text-white flex items-center justify-center
      //       px-8
      //       py-2
      //       rounded-md
      //       h-8
      //       hover:text-white hover:bg-blue-600 hover:text-gray-100
      //     "
      //     >Upgrade Account</div
      //   >`,
      //   link: "https://google.com",
      //   component: "MenuUpgradeComponent",
      // },
      // {
      //   text: "Students Online",
      //   active: false,
      //   body: `<span class="
      //   border-solid
      //   rounded-md
      //   border-1
      //   border-blue-800
      //   p-1
      //   bg-blue-100
      //   text-blue-800
      //   border-right border-white
      //   mx-2
      //   "
      //   >36</span
      //   >`,
      //   link: "https://google.com",
      //   component: MenuStudentsOnline,
      //   icon: "",
      // },

      {
        text: "",
        active: false,
        body: "",
        link: "https://google.com",
        component: MenuHelpComponent,
        icon: HelpIcon,
      },
      {
        text: "",
        active: false,
        body: "",
        link: "https://google.com",
        component: MenuSettingsComponent,
        icon: SettingsIcon,
      },
      {
        text: "",
        active: false,
        body: "<div class='bg-red-700 rounded-full w-2 h-2 p-2 top-2 absolute animate-ping'></div>",
        link: "https://google.com",
        component: MenuNotificationComponent,
        icon: NotificationIcon,
      },
      {
        text: "",
        active: false,
        body: "",
        link: "https://google.com",
        component: MenuProfileComponent,
        icon: ProgressIcon,
      },
    ],
  }),
  getters: {
    activeMenu() {
      return this.menu.filter((x) => x.active);
    },
  },
  actions: {
    setActive(item) {
      item.active = true;
      console.log("set-active", item);
      this.activeItem = item;
      this.showAction = true;
    },
    clearActive(item) {
      item.active = false;
      console.log("clear", item);
      this.activeItem = "";
      console.log(this.activeItem);
    },
  },
});
3;
