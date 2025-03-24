<template>
  <div class="referal w-full bg-white h-[82px] rounded-2xl flex items-center justify-between p-6 xl:p-3">
    <div class="flex items-center">
      <img class="w-[50px] h-[50px] rounded-full sm:h-[35px] sm:w-[35px]" :src="avatar" alt="">
      <p class="font-medium text-primary text-2xl ml-3 xl:text-xl">{{ nick }}</p>
    </div>
    <button
      class="bg-primary w-[180px] h-[44px] rounded-[37px] text-white text-lg font-medium xl:text-base xl:w-[100px] xl:h-[30px]">Больше</button>
  </div>
  <!-- <Modal>asdasd</Modal> -->
</template>

<script setup lang="ts">
import Modal from '../UI/Modal.vue';

const props = defineProps({
  nick: String,
  avatar: String,
  friends: Number,
  invest: Number,
  profit: Number,
  days: Number
})
</script>

<style scoped lang="scss">
button {
  &:hover {
    filter: brightness(0.7);
  }

  transition: all 0.3s linear;
}
</style>