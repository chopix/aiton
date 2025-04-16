<template>
  <div :style="{ background: gradient, }" class="w-full h-[192px] rounded-3xl flex items-center pl-4 md:h-[100px]">
    <div class="h-[70px] w-[60px] flex items-center justify-center md:w-[30px] sm:w-[10px]">
      <p class="name text-white text-2xl font-semibold uppercase just md:text-base md:mr-3 sm:mr-3 sm:text-sm">
        {{ name }}
      </p>
    </div>
    <div class="line"></div>
    <div class="flex flex-col w-full">
      <div
        class="flex items-center justify-between plan-top font-medium text-2xl text-white p-5 md:text-base md:px-5 md:py-2 sm:px-2">
        <div class="flex items-center md:mt-3">
          <img class="mr-[10px]" src="@/assets/img/cabinet/plan.svg" alt="">
          Ai Ton Bot
        </div>
        <div v-if="isActive"
          class="bg-primary w-[103px] h-[33px] flex items-center justify-center rounded-[32px] text-base font-medium gap-x-2 md:w-[75px] md:h-[20px] md:text-sm md:mt-3">
          <div class="dot w-[7px] h-[7px] bg-white rounded-full md:w-[4px] md:h-[4px]"></div>
          {{ t('active') }}
        </div>
      </div>
      <div class="flex items-center p-5 justify-between mt-3 md:mt-[-5px] sm:px-2">
        <div class="flex flex-col">
          <p class="text-white text-xl md:text-sm">{{ t('min') }}</p>
          <div class="flex items-center">
            <p class="font-medium text-[28px] text-white md:text-[16px] sm:text-[12px]">{{ min }} TON</p>
            <img class="w-[22px] h-[22px] ml-3 sm:hidden" src="@/assets/img/header/logo.svg" alt="" />
          </div>
        </div>
        <div class="flex flex-col">
          <p class="text-white text-xl md:text-sm">{{ t('profit') }}</p>
          <div class="flex items-center">
            <p class="font-medium text-[28px] text-white md:text-[16px] sm:text-[12px]">{{ profit }}</p>
          </div>
        </div>
        <button @click="modalStore.setModal(2, props.name)" :style="{ color: color }"
          class="uppercase w-[145px] h-[49px] bg-white rounded-[45px] font-semibold text-2xl md:text-lg md:w-[80px] md:h-[30px] sm:w-[50px] sm:h-[20px] sm:text-[10px]">Trade</button>
      </div>
    </div>
  </div>
  <Modal v-show="modal === 2" :style="{ background: getModalBg(selectedPlan) }"
    class="max-w-[340px] w-full h-[250px] p-[15px] text-white">
    <div class="modal-top flex w-full justify-between items-center pb-[30px] ">
      <div class="flex items-center gap-x-2 text-3xl font-semibold uppercase">
        <img src="@/assets/img/cabinet/plan.svg" alt="" />
        {{ selectedPlan }}
      </div>
      <svg @click="modalStore.setModal(0)" class="cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="18" fill="white" />
        <rect x="0.760417" y="0.760417" width="34.4792" height="34.4792" rx="17.2396" stroke-width="1.52083" />
        <path d="M10.6353 11.9272L12.2547 10.3078L26.0197 24.0728L24.4003 25.6922L10.6353 11.9272Z" :fill="color" />
        <path d="M12.2547 25.6922L10.6353 24.0728L24.4003 10.3078L26.0197 11.9272L12.2547 25.6922Z" :fill="color" />
      </svg>
    </div>
    <div class="modal-input w-full px-4 flex items-center justify-center bg-white h-[32px] rounded-lg mt-5 text-xl">
      <input :style="{ color: getColor(selectedPlan) }" v-model="amount" :placeholder="t('modal_amount')"
        class="w-full bg-none text-black" type="number" />
    </div>
    <button @click="createInvestment" :style="{ color: getColor(selectedPlan) }"
      class="w-full h-[36px] bg-white text-base font-bold rounded-xl mt-3">{{ t('modal_invest') }}</button>
    <p class="text-center text-sm mt-3">{{ t('modal_withdrawal') }}</p>
  </Modal>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal-store';
import { computed, onBeforeMount, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import Modal from '../UI/Modal.vue';
import axios from 'axios';
import { useWalletStore } from '@/stores/wallet-store';
import { getTrading } from '@/api/trading-request';

const { t } = useI18n()

const props = defineProps({
  name: String,
  min: Number,
  profit: String,
  isActive: {
    type: Boolean,
    default: false
  },
})
const store = useWalletStore()
const { wallet } = storeToRefs(store)

const isModalCreate = ref(false);

const modalStore = useModalStore()
const { modal, selectedPlan } = storeToRefs(modalStore)


const modalBg = ref();
const amount = ref(null)

async function createInvestment() {
  await axios.post(`users/by-pubkey/${String(wallet.value.account.publicKey)}/investments`, JSON.stringify({
    type: selectedPlan.value,
    amount: amount.value
  })).then(async res => {
    if (res.data.success) {
      modalStore.setModal(0)
      await getTrading(wallet.value.account.publicKey)
    }
  })
}

const gradient = computed(() => {
  switch (props.name) {
    case "bronze":
      return "linear-gradient(71deg, rgba(153,103,80,1) 0%, rgba(215,150,118,1) 100%)";
    case "silver":
      return "linear-gradient(71deg, rgba(145,145,151,1) 0%, rgba(210,210,210,1) 100%)";
    case "gold":
      return "linear-gradient(71deg, rgba(185,138,48,1) 0%, rgba(232,202,96,1) 100%)";
    case "black":
      return "linear-gradient(71deg, rgba(0,0,0,1) 0%, rgba(37,35,35,1) 100%)";
    default:
      return "transparent";
  }
});

const color = computed(() => {
  switch (props.name) {
    case "bronze":
      return "#a56f57";
    case "silver":
      return "#9d9da2";
    case "gold":
      return "#d6b14e";
    case "black":
      return "#000";
    default:
      return "#000"; // на случай, если name не соответствует ни одному значению
  }
});

const getModalBg = (plan: string | null) => {
  switch (plan) {
    case 'bronze':
      return 'linear-gradient(71deg, rgba(153,103,80,1) 0%, rgba(215,150,118,1) 100%)';
    case 'silver':
      return 'linear-gradient(71deg, rgba(145,145,151,1) 0%, rgba(210,210,210,1) 100%)';
    case 'gold':
      return 'linear-gradient(71deg, rgba(185,138,48,1) 0%, rgba(232,202,96,1) 100%)';
    case 'black':
      return 'linear-gradient(71deg, rgba(0,0,0,1) 0%, rgba(37,35,35,1) 100%)';
    default:
      return 'transparent';
  }
};

const getColor = (plan: string | null) => {
  switch (plan) {
    case 'bronze':
      return '#a56f57';
    case 'silver':
      return '#9d9da2';
    case 'gold':
      return '#d6b14e';
    case 'black':
      return '#000';
    default:
      return '#000';
  }
};

onBeforeMount(() => {
  modalBg.value = gradient.value
})
</script>

<style scoped lang="scss">
.name {
  transform: rotate(-90deg);
}

.line {
  @apply h-full;
  width: 2px;
  background: rgba(221, 227, 230, 0.4000000059604645);
}

.plan-top {
  border-bottom: 2px solid rgba(221, 227, 230, 0.4000000059604645);
}

.modal-top {
  border-bottom: 2px solid rgba(221, 227, 230, 0.4000000059604645);
}

button {
  transition: all 0.2s linear;
  line-height: 0.8rem;

  &:hover {
    background: #d3d3d3;
  }
}

svg {
  rect {
    transition: all 0.3s;
  }

  &:hover {
    rect {
      fill: #c0c0c0;
    }
  }
}

input {
  outline: none;
}

input::placeholder {
  color: inherit;
  /* Плейсхолдер будет наследовать цвет */
  font-size: 12px;
}
</style>
