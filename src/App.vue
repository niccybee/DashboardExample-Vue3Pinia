<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
// import MenuList from './components/MenuList.vue';
import MenuTopBanner from './components/MenuTopBanner.vue';
import NavSideMenu from './components/NavSideMenu.vue';
import Screen from './components/Screen.vue';
import Action from './components/Action.vue';
</script>
<template>
  <MenuTopBanner />
  <!-- <div class="h-16 w-full bg-green"></div> -->
  <div id="app-body" class="flex w-full h-full bg-red-100">
    <NavSideMenu />
    <Screen />
    <Action />
  </div>
</template>
<style>
#app,
#app-body {
  height: 100%;

  /* ui-01 */
  background: #f2f4f5;
  /* inner-ui-bg */
  box-shadow: inset 0px 2px 20px 21px rgba(218, 218, 218, 0.2);
}
</style>
