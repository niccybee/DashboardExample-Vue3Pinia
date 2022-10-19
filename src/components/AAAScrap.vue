// //
<MenuItem v-for="item in menu.menu" @click="menu.setActive(item)" :item="item">
//   <div v-html="item.body"></div>
//   <!-- <img v-if="item.icon" :src="item.icon" class="w-6" alt="" /> -->
//   <component :is="item.icon" class="fill-white w-4 icon-fix" />
//   <span class="uppercase text-white">{{ item.text }}</span>
// </MenuItem>
