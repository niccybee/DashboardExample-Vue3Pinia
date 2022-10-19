import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notifications", {
  state: () => ({
    banners: [
      {
        text: 'Please verify your email within 7 days of sign-up to continue to receive access to your account. <a href="https://app.e2language.com/Student/Home/SendActivationEmail"> Re-send Email</a>',
        link: "https://google.com",
        active: true,
        dismissable: true,
      },
      {
        text: 'I am a banner notification <a href="google.com">Google</a>',
        link: "https://google.com",
        active: true,
        dismissable: true,
      },
    ],
    notifications: [
      {
        heading: "Notification 1",
        body: "I am a notification about something...",
        link: "http://google.com",
        active: true,
      },
      {
        heading: "Notification Number 2",
        body: "Another notification about something...",
        link: "http://yahoo.com",
        active: true,
      },
      {
        heading: "Notification 3",
        body: "I am a different notification about something...",
        link: "http://google.com",
        active: true,
      },
      {
        heading: "Notification Number 4",
        body: "Another notification about something else...",
        link: "http://yahoo.com",
        active: true,
      },
    ],
  }),
  getters: {
    activeBanners() {
      return banners.filter((x) => x.active);
    },
  },
});
