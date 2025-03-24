<template>
  <section class="trading sm:pb-[90px]">
    <CabinetHeader class="sm:hidden" />
    <div class="container">
      <div class="trading-wrapper w-full mt-[15px] rounded-3xl relative flex lg:flex-col">
        <div class="trading-left p-[30px] sm:p-[15px]">
          <div class="lg:flex lg:justify-between lg:items-center">
            <div>
              <img class="trading-left__avatar w-[120px] h-[120px] rounded-[18px]"
                :src="user && user.photo_url ? user.photo_url : '@/assets/img/cabinet/list.png'" alt="">
              <p class="trading-left__nick text-white text-xl mt-[30px] font-light">
                {{ user?.first_name ? user.first_name + ' ' + user.last_name : 'asd' }}
              </p>
            </div>
            <div>
              <p class="trading-left__balance text-white font-medium text-[40px] mt-[5px] sm:text-[30px]"
                v-if="trading && trading.balance">{{ trading.balance }} TON</p>
              <p class="trading-left__balance text-white font-medium text-[40px] mt-[5px] sm:text-[30px]" v-else>0 TON
              </p>
              <p class="trading-left__trade text-white text-[20px] font-light mt-[40px] lg:mt-[20px] sm:text-[15px]">{{
                t('trade') }}:
                {{ tradeAmount }} TON</p>
              <p class="trading-left__payout text-white text-[20px] font-light sm:text-[15px]">{{ t('payout') }}: 2390$
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-start mt-10 lg:flex-row lg:justify-center lg:gap-x-12">
            <button @click="modalStore.setModal(1)"
              class="bg-white w-[238px] h-[48px] rounded-2xl flex items-center justify-center text-primary text-xl font-semibold gap-x-3">
              <svg class="mr" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.08601 0.800049H14.7V11.4141H13.3733V3.06496L1.23821 15.2L0.300049 14.2619L12.4351 2.1268H4.08601V0.800049Z"
                  fill="#0098EA" />
              </svg>
              {{ t('withdraw') }}
            </button>
            <router-link to="/cabinet/history"
              class="bg-white w-[238px] h-[48px] rounded-2xl flex items-center justify-center text-primary text-xl font-semibold gap-x-3 mt-3 lg:mt-0">
              <svg class="mr" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2305_2846)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5 0L9.5 5.00619L8.48776 6.0276L5.69893 2.92507V18H4.30107V2.92507L1.51224 6.0276L0.5 5.00619L5 0Z"
                    fill="#0098EA" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14 18L18.5 12.9938L17.4878 11.9724L14.6989 15.0749V0H13.3011V15.0749L10.5122 11.9724L9.5 12.9938L14 18Z"
                    fill="#0098EA" />
                </g>
                <defs>
                  <clipPath id="clip0_2305_2846">
                    <rect width="18" height="18" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              {{ t('history') }}
            </router-link>
          </div>
        </div>
        <div class="trading-right p-[30px] w-full flex flex-col gap-y-5">
          <CabinetPlan name="bronze" :min="10" profit="1-2%" :is-active="checkPlanActive('bronze').value" />
          <CabinetPlan name="silver" :min="100" profit="3-5%" :is-active="checkPlanActive('silver').value" />
          <CabinetPlan name="gold" :min="250" profit="6-10%" :is-active="checkPlanActive('gold').value" />
          <CabinetPlan name="black" :min="500" profit="11-15%" :is-active="checkPlanActive('black').value" />
        </div>
        <img class="absolute shape bottom-0 md:hidden md:top-0 md:right-0" src="@/assets/img/cabinet/shape.png" alt="">
        <img class="absolute shape bottom-0 hidden md:block md:top-0 md:right-0"
          src="@/assets/img/cabinet/shape-mobile.png" alt="">
      </div>
    </div>
    <CabinetHeaderMobile class="sm:flex" />
  </section>
  <Modal v-if="modal === 1" class="w-full h-full bg-white">
    <div class="flex items-center justify-between">
      <p class="text-primary text-[24px] font-medium">Withdraw TON</p>
      <svg @click="modalStore.setModal(0)" class="cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="18" fill="white" />
        <rect x="0.760417" y="0.760417" width="34.4792" height="34.4792" rx="17.2396" stroke-width="1.52083" />
        <path d="M10.6353 11.9272L12.2547 10.3078L26.0197 24.0728L24.4003 25.6922L10.6353 11.9272Z" fill="#000" />
        <path d="M12.2547 25.6922L10.6353 24.0728L24.4003 10.3078L26.0197 11.9272L12.2547 25.6922Z" fill="#000" />
      </svg>
    </div>

    <p class="text-[#12172c] opacity-70 font-medium text-[10px] mt-[20px] mb-[5px]">Coin</p>
    <div class="w-full h-[38px] rounded-[10px] px-[10px] bg-[#f7f9fb] flex items-center">
      <img src="@/assets/img/cabinet/ton.svg" alt="">
      <p class="text-[12px] ml-[10px]">TON</p>
    </div>

    <!-- <p class="text-[#12172c] opacity-70 font-medium text-[10px] mt-[20px] mb-[5px]">Address</p>
    <div :class="[
      'w-full h-[38px] rounded-[10px] px-[10px] flex items-center',
      errors.address ? 'border border-red-500 bg-[#f7f9fb]' : 'bg-[#f7f9fb]'
    ]">
      <input v-model.trim="form.address" placeholder="Necessary"
        class="w-full h-full text-[12px] outline-none bg-transparent" @input="onInput('address')" />
    </div>
    <p v-if="errors.address" class="text-red-500 text-[10px] mt-[5px]">{{ errors.address }}</p> -->

    <p class="text-[#12172c] opacity-70 font-medium text-[10px] mt-[20px] mb-[5px]">Tag / Memo (Comment, note, remark)
    </p>
    <div class="w-full h-[38px] rounded-[10px] px-[10px] bg-[#f7f9fb] flex items-center">
      <input v-model.trim="form.memo" placeholder="Optional"
        class="w-full h-full text-[12px] outline-none bg-transparent" />
    </div>

    <p class="text-[#12172c] opacity-70 font-medium text-[10px] mt-[20px] mb-[5px]">Amount (TON)</p>
    <div :class="[
      'relative w-full h-[38px] rounded-[10px] px-[10px] flex items-center',
      errors.amount ? 'border border-red-500 bg-[#f7f9fb]' : 'bg-[#f7f9fb]'
    ]">
      <input v-model.number="form.amount" placeholder="Min. amount 1 TON" type="number"
        class="w-full h-full text-[12px] outline-none bg-transparent" @input="onInput('amount')" />
      <p class="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-primary text-[12px] cursor-pointer"
        @click="setMaxAmount">Max</p>
    </div>
    <p v-if="errors.amount" class="text-red-500 text-[10px] mt-[5px]">{{ errors.amount }}</p>

    <div class="flex items-center justify-between mt-[5px]">
      <p class="text-[10px] text-[#12172c] opacity-50">Available</p>
      <p v-if="trading && trading.balance" class="text-[10px] text-[#12172c] opacity-50">{{ trading.balance }}</p>
    </div>

    <button :disabled="!isFormValid" :class="[
      'w-full h-[50px] rounded-xl font-medium text-[16px] mt-[20px] text-white transition-all duration-200',
      isFormValid ? 'bg-[#0098ea]' : 'bg-[#0098ea] opacity-70 cursor-not-allowed'
    ]" @click="handleSubmit">
      Withdrawal
    </button>
    <transition name="fade">
      <div v-if="isSuccess"
        class="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[20px] z-50">
        <div class="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-green-500 animate-scaleIn">
          <svg class="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" stroke-width="3"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p class="mt-5 text-[18px] font-medium text-[#12172c]">Успешный вывод</p>
      </div>
    </transition>
  </Modal>
</template>

<script setup lang="ts">
import CabinetHeader from '@/components/Cabinet/CabinetHeader.vue';
import { nextTick, onMounted, ref, watch, computed, reactive } from 'vue';
import { useMiniApp } from 'vue-tg';
import { useTelegram } from '@/services/telegram';
import CabinetPlan from '@/components/Cabinet/CabinetPlan.vue';
import { useI18n } from 'vue-i18n';
import { getTrading } from '@/api/trading-request';
import { useTradingStore } from '@/stores/trading-store';
import { storeToRefs } from 'pinia';
import { useWalletStore } from '@/stores/wallet-store';
import CabinetHeaderMobile from '@/components/Cabinet/CabinetHeaderMobile.vue';
import Modal from '@/components/UI/Modal.vue';
import { useModalStore } from '@/stores/modal-store';
import axios from 'axios';

const { user } = useTelegram()
const { t } = useI18n()
const store = useTradingStore()
const { trading, tradeAmount } = storeToRefs(store)
const walletStore = useWalletStore();
const { wallet } = storeToRefs(walletStore)
const isModalWithdraw = ref(false)
const isSuccess = ref(false)

const form = reactive({
  address: '',
  memo: '',
  amount: null
})

// ошибки
const errors = reactive({
  address: '',
  amount: ''
})

// валидация одного поля
const onInput = (field: string) => {
  validateField(field)
}

const checkPlanActive = (planType) => {
  if (trading.value && trading.value.investments) {
    return computed(() => trading.value.investments.some(investment => investment.type === planType));
  }
  return computed(() => false); // возвращаем ложное значение, если данные не загружены
};

// валидация конкретного поля
const validateField = (field: string) => {
  switch (field) {
    // case 'address':
    //   errors.address = form.address ? '' : 'Address is required'
    //   break
    case 'amount':
      if (!form.amount) {
        errors.amount = 'Amount is required'
      } else if (form.amount < 1) {
        errors.amount = 'Min. amount is 1 TON'
      } else {
        errors.amount = ''
      }
      break
  }
}



// автоматом валидируем все при изменении
watch(form, () => {
  // validateField('address')
  validateField('amount')
}, { deep: true })

// проверка всей формы
const isFormValid = computed(() => {
  const noErrors = !errors.amount
  const allFieldsFilled = form.amount !== null && form.amount >= 1
  return noErrors && allFieldsFilled
})

// сабмит
const handleSubmit = async () => {
  // Валидация перед отправкой
  validateField('amount')

  if (!isFormValid.value) return

  try {
    const response = await axios.post('users/withdraw', JSON.stringify({
      pub_key: wallet.value.account.publicKey,
      amount: form.amount
    }))

    // Обработка успешного ответа
    if (response?.data?.success) {
      showSuccess()
    } else {
      // Обработка ошибок с бэкенда
      const backendErrors = response?.data?.errors || {};
      if (backendErrors.amount) {
        errors.amount = backendErrors.amount; // Если ошибка по сумме, выводим её
      } else {
        errors.amount = '';
      }
      // Можно добавить другие поля ошибки, если они присутствуют в ответе
    }
  } catch (error) {
    console.error('Request failed', error)
    errors.amount = 'An error occurred. Please try again later.'; // Общая ошибка при сбое запроса
  }
}

const showSuccess = () => {
  isSuccess.value = true

  setTimeout(() => {
    isSuccess.value = false
    isModalWithdraw.value = false
    resetForm()
  }, 2000) // 2 секунды показываем галочку
}

const resetForm = () => {
  form.address = ''
  form.memo = ''
  form.amount = null
  // errors.address = ''
  errors.amount = ''
}

const setMaxAmount = () => {
  if (trading.value && trading.value.balance) form.amount = trading.value.balance
}

const modalStore = useModalStore()
const { modal } = storeToRefs(modalStore)


watch(
  () => walletStore.wallet,
  async (wallet) => {
    if (wallet && wallet.account?.publicKey) {
      await getTrading(wallet.account.publicKey)
    }
  },
  { immediate: true } // Выполнит проверку сразу после монтирования
);


</script>

<style scoped lang="scss">
.trading-wrapper {
  background: linear-gradient(54deg, rgba(45, 131, 236, 1) 0%, rgba(0, 212, 255, 1) 100%);
  @apply lg:h-[1200px];

  @apply md:h-[850px];

  @apply sm:h-[800px];

  &__avatar {
    border: 3px solid #ffffff;
  }
}

.trading {
  &-left {
    border-right: 1px solid rgba(225, 225, 225, 0.30000001192092896);
  }
}

button {
  transition: all 0.2s linear;

  &:hover {
    background: #d3d3d3;
  }
}
</style>