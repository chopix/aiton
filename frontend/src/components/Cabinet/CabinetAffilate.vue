<template>
  <div class="referal w-full bg-white h-[82px] rounded-2xl flex items-center justify-between p-6 xl:p-3">
    <div class="flex items-center">
      <img class="w-[50px] h-[50px] rounded-full sm:h-[35px] sm:w-[35px]" :src="avatar" alt="">
      <div class="ml-3">
        <p class="font-medium text-primary text-2xl truncate max-w-[120px] xl:text-xl">{{ nick }}</p>
        <p class="text-[12px] mt-[-5px]" style="color: rgba(0, 0, 0, 0.5);">+{{ profit }} TON / {{ profitUsdt }}$</p>
      </div>
    </div>
    <button @click="modalStore.setModal(4)"
      class="bg-primary w-[180px] h-[44px] rounded-[37px] text-white text-lg font-medium xl:text-base xl:w-[100px] xl:h-[30px]">Больше</button>
  </div>
  <Modal class="w-full bg-white h-[370px] py-[20px] px-[15px]" v-if="modal === 4">
    <div class="flex justify-between">
      <div class="flex items-center gap-x-4">
        <img class="w-[50px] h-[50px] rounded-full sm:h-[35px] sm:w-[35px]" :src="avatar" alt="">
        <p class="font-medium text-primary text-2xl xl:text-xl">{{ nick }}</p>
      </div>
      <svg class="cursor-pointer" @click="modalStore.setModal(0)" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
        <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" stroke="#0098EA" />
        <path d="M6.99307 8.00693L8.05789 6.94211L17.1089 15.9931L16.044 17.0579L6.99307 8.00693Z" fill="#0098EA" />
        <path d="M8.05789 17.0579L6.99307 15.9931L16.044 6.94211L17.1089 8.00693L8.05789 17.0579Z" fill="#0098EA" />
      </svg>
    </div>
    <div class="flex gap-[7px] mt-[20px] flex-wrap justify-center">
      <div class="py-[8px] px-[10px] w-[160px] h-[80px] bg-[#f7f9fb] rounded-xl flex flex-col justify-between">
        <div>
          <p class="font-semibold text-xl">{{ levelOne }} TON</p>
          <p style="color: rgba(4, 6, 11, 0.5);" class="font-medium text-[9px]">{{ levelOneUsdt }}$</p>
        </div>
        <p class="text-[9px] font-medium">Level 1 profit</p>
      </div>
      <div class="py-[8px] px-[10px] w-[160px] h-[80px] bg-[#f7f9fb] rounded-xl flex flex-col justify-between">
        <div>
          <p class="font-semibold text-xl">{{ levelTwo }} TON</p>
          <p style="color: rgba(4, 6, 11, 0.5);" class="font-medium text-[9px]">{{ levelTwoUsdt }}$</p>
        </div>
        <p class="text-[9px] font-medium">Level 2 profit</p>
      </div>
      <div class="py-[8px] px-[10px] w-[160px] h-[80px] bg-[#f7f9fb] rounded-xl flex flex-col justify-between">
        <div>
          <p class="font-semibold text-xl">{{ levelThree }} TON</p>
          <p style="color: rgba(4, 6, 11, 0.5);" class="font-medium text-[9px]">{{ levelThreeUsdt }}$</p>
        </div>
        <p class="text-[9px] font-medium">Level 3 profit</p>
      </div>
      <div class="py-[8px] px-[10px] w-[160px] h-[80px] bg-[#f7f9fb] rounded-xl flex flex-col justify-between">
        <div>
          <p class="font-semibold text-xl">{{ profit }} TON</p>
          <p style="color: rgba(4, 6, 11, 0.5);" class="font-medium text-[9px]">{{ profitUsdt }}$</p>
        </div>
        <p class="text-[9px] font-medium">All time profit</p>
      </div>
      <div class="py-[8px] px-[10px] w-[160px] h-[80px] bg-[#f7f9fb] rounded-xl flex flex-col justify-between">
        <div>
          <p class="font-semibold text-xl">{{ Math.floor(days / 864000000)
          }} days</p>
        </div>
        <p class="text-[9px] font-medium">Active days</p>
      </div>
      <div class="py-[8px] px-[10px] w-[160px] h-[80px] bg-[#f7f9fb] rounded-xl flex flex-col justify-between">
        <div>
          <p class="font-semibold text-xl">{{ invest }} TON</p>
          <p style="color: rgba(4, 6, 11, 0.5);" class="font-medium text-[9px]">{{ investUsdt }}$</p>
        </div>
        <p class="text-[9px] font-medium">Invested</p>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal-store';
import Modal from '../UI/Modal.vue';
import { storeToRefs } from 'pinia';
import { useTelegram } from '@/services/telegram';

const { user } = useTelegram()
const modalStore = useModalStore()
const { modal } = storeToRefs(modalStore)

const props = defineProps({
  nick: String,
  avatar: String,
  levelOne: Number,
  levelOneUsdt: Number,
  levelTwo: Number,
  levelTwoUsdt: Number,
  levelThree: Number,
  levelThreeUsdt: Number,
  invest: Number,
  investUsdt: Number,
  profit: Number,
  profitUsdt: Number,
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