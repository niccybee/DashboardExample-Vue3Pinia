import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notifications', {
  state: () => ({
    banners: [
      {
        text: 'I am a banner notification <a href="google.com">Google</a>',
        link: 'https://google.com',
        active: true,
      },
      {
        text: 'I am a banner notification <a href="google.com">Google</a>',
        link: 'https://google.com',
        active: true,
      },
    ],
    notifications: [
      {
        heading: 'Notification 1',
        body: 'I am a notification about something...',
        link: 'http://google.com',
      },
      {
        heading: 'Notification Number 2',
        body: 'Another notification about something...',
        link: 'http://yahoo.com',
      },
    ],
  }),
  getters: {
    activeBanners() {
      return banners.filter((x) => x.active);
    },
  },
});
