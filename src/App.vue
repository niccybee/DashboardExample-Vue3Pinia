<script setup>
import MenuTopBanner from "./components/MenuTopBanner.vue";
import NavSideMenu from "./components/NavSideMenu.vue";
import Screen from "./components/Screen.vue";
import Action from "./components/Action.vue";
</script>

<template>
  <div id="app" class="text-darkblue-900">
    <MenuTopBanner />
    <div id="app-body" class="flex w-full h-full">
      <NavSideMenu />
      <Screen />
      <Action />
    </div>
  </div>
</template>

<style>
#app,
#app-body {
  height: 100%;
  /* ui-01 */
  background: #f6f7f7;
  /* inner-ui-bg */
  box-shadow: inset 0px 2px 20px 21px rgba(218, 218, 218, 0.2);
}
a {
  color: var(--blue-900);
}
</style>
