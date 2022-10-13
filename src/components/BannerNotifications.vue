<script setup>
import { useNotificationStore } from "../stores/NotificationStore";
import BannerNotificationSingle from "./BannerNotificationSingle.vue";

let n = useNotificationStore();

// console.log(n.activeBanners);
</script>
<template>
  <div class="p-2">
    <BannerNotificationSingle
      v-for="i in n.banners"
      :item="i"
      v-show="i.active"
      @dismiss="i.active = !i.active"
    />
  </div>
</template>
