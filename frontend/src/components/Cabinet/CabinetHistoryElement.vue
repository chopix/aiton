<template>
  <div @click="toggleModalInfo(true)" class="flex w-full justify-between items-center cursor-pointer">
    <div>
      <p class="font-medium max-w-[150px]">{{ description }}</p>
      <p style="color: rgba(18, 23, 44, 0.5);" class="mt-1 text-[9px]">{{ createdAt }}</p>
    </div>
    <div class="flex items-center text-right gap-x-3">
      <div>
        <p class="font-medium">{{ amount }}</p>
        <div class="flex items-center gap-x-1">
          <div class="w-[4px] h-[4px] rounded-full bg-primary"></div>
          <p class="text-[9px]">Successfully completed</p>
        </div>
      </div>
      <img src="@/assets/img/cabinet/arrow-right.svg" alt="">
    </div>
  </div>
  <Modal class="bg-primary w-[330px] h-[356px] p-[16px]" v-show="isModalInfo">
    <div class="flex justify-between items-center w-full">
      <img class="cursor-pointer" @click="toggleModalInfo(false)" src="@/assets/img/cabinet/arrow-left.svg" alt="">
      <p class="font-medium text-white">Transaction information</p>
    </div>
    <p class="text-center font-semibold text-[26px] mt-[27px] text-white">{{ amount }} TON</p>
    <div class="flex justify-center items-center gap-x-2">
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.5 7C0.5 3.1402 3.63996 0 7.49986 0C11.3598 0 14.5 3.1402 14.5 7C14.5 10.8598 11.3598 14 7.49986 14C3.63996 14 0.5 10.8598 0.5 7Z"
          fill="white" />
        <path
          d="M9.93045 4.59572L6.46895 8.38273L5.0697 6.85215C4.89775 6.66424 4.6192 6.66413 4.44725 6.85226C4.27523 7.04046 4.27523 7.34525 4.44725 7.53338L6.15778 9.40456C6.24373 9.49849 6.35634 9.5455 6.46895 9.5455C6.58156 9.5455 6.69447 9.49849 6.78039 9.40441C6.78066 9.40401 6.78086 9.4036 6.7813 9.40313L10.5529 5.27673C10.7249 5.08871 10.7249 4.7837 10.5529 4.59568C10.3809 4.40755 10.1022 4.40755 9.93045 4.59572Z"
          fill="#0098EA" />
      </svg>

      <p class="font-medium text-white">{{ description }}</p>
    </div>
    <div style="background: rgba(255, 255, 255, 0.30000001192092896);"
      class="flex justify-center w-[300px] h-[1px] mt-[25px]">
    </div>
    <div class="mt-10 flex flex-col gap-y-[10px]">
      <div class="flex justify-between items-center mt-[10px]">
        <p style="color: rgba(255, 255, 255, 0.699999988079071);" class="font-medium text-[13px]">Time</p>
        <p class="font-medium text-white text-[13px]">{{ createdAt }}</p>
      </div>
      <div v-if="txHash" class="flex justify-between items-center mt-[10px] relative">
        <img @click="copyText(txHash)" class="absolute top-0 right-0 cursor-pointer" src="@/assets/img/cabinet/copy.svg"
          alt="">
        <p style="color: rgba(255, 255, 255, 0.699999988079071);" class="font-medium text-[13px]">
          Transaction hash</p>
        <p class="font-medium text-white text-[13px] break-all w-[140px] text-right mr-5">{{ txHash }}</p>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import Modal from '../UI/Modal.vue';
import { ref } from 'vue';
import { useModalStore } from '@/stores/modal-store';
import { storeToRefs } from 'pinia';

const isModalInfo = ref(false);

const modalStore = useModalStore()
const { modal } = storeToRefs(modalStore)

function copyText(text) {
  // создаём временный input
  const tempInput = document.createElement('input')
  tempInput.value = text
  document.body.appendChild(tempInput)

  // выделяем и копируем
  tempInput.select()
  tempInput.setSelectionRange(0, 99999) // для мобилок
  document.execCommand('copy')

  // удаляем input
  document.body.removeChild(tempInput)

  console.log('скопировано:', text)
}

function toggleModalInfo(state) {
  modalStore.setModal(state);
  isModalInfo.value = state;
}

const props = defineProps({
  type: String,
  amount: Number,
  createdAt: String,
  description: String,
  txHash: {
    required: false,
    type: String
  }
})
</script>

<style lang="scss" scoped></style>