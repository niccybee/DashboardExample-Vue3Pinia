<script setup>
import BannerNotifications from "./BannerNotifications.vue";
import ScreenDashboard from "./ScreenDashboard.vue";
import SubMenuTop from "./SubMenuTop.vue";

const screens = [ScreenDashboard];

let activeScreen = screens[0];
</script>
<template>
  <div class="w-full h-full pt-16 flex flex-col">
    <SubMenuTop />
    <BannerNotifications />
    <component :is="activeScreen"></component>
  </div>
</template>
