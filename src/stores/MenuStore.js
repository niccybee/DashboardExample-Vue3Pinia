import { defineStore } from 'pinia';
import MenuHelpComponent from '../components/MenuHelpComponent.vue';
import MenuHowToUseComponent from '../components/MenuHowToUseComponent.vue';
import MenuStudentsOnline from '../components/MenuStudentsOnline.vue';
import MenuNotificationComponent from '../components/MenuNotificationComponent.vue';
import MenuSettingsComponent from '../components/MenuSettingsComponent.vue';
import MenuProfileComponent from '../components/MenuProfileComponent.vue';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    activeItem: '',
    activeScreen: {
      component: 'Dashboard',
      textID: 'Dashboard',
    },
    nav: [
      { text: 'Dashboard', body: '', link: '/', component: 'ScreenDashboard' },
      {
        text: 'Course',
        body: '',
        link: '/Course',
        component: 'ScreenCourseMaterial',
      },
      {
        text: 'Calendar',
        body: '',
        link: '/Calendar',
        component: 'ScreenCalendar',
      },
      {
        text: 'Group Classes',
        body: '',
        link: '/Calendar',
        component: 'ScreenCalendar',
      },
      {
        text: 'Announcements',
        body: '',
        link: '/Announcements',
        component: 'ScreenCalendar',
      },
    ],

    menu: [
      { text: '', body: '', link: 'https://google.com', component: '' },
      {
        text: '',
        active: false,
        menuClass: 'w-screen poop',
        body: `<div
          class="outline-red-500 bg-blue-500 text-white flex items-center justify-center
            px-8
            py-2
            rounded-md
            h-8
            hover:text-white hover:bg-blue-600 hover:text-gray-100
          "
          >Upgrade Account</div
        >`,
        link: 'https://google.com',
        component: 'MenuUpgradeComponent',
      },
      {
        text: 'Students Online',
        active: false,
        body: `<span class="
        border-solid
        rounded-md
        border-1
        border-blue-800 
        p-1
        bg-blue-100
        text-blue-800
        border-right border-white
        mx-2
        "
        >36</span
        >`,
        link: 'https://google.com',
        component: MenuStudentsOnline,
      },
      {
        text: 'How to use',
        active: false,
        body: '',
        link: 'https://google.com',
        component: MenuHowToUseComponent,
      },
      {
        text: '❓',
        active: false,
        body: '',
        link: 'https://google.com',
        component: MenuHelpComponent,
      },
      {
        text: '⚙️',
        active: false,
        body: '',
        link: 'https://google.com',
        component: MenuSettingsComponent,
      },
      {
        text: '🔔',
        active: false,
        body: '',
        link: 'https://google.com',
        component: MenuNotificationComponent,
      },
      {
        text: '🙋',
        active: false,
        body: '',
        link: 'https://google.com',
        component: MenuProfileComponent,
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
      console.log('set-active', item);
      this.activeItem = item;
    },
    clearActive(item) {
      item.active = false;
      console.log('clear', item);
      this.activeItem = '';
      console.log(this.activeItem);
    },
  },
});
3;
