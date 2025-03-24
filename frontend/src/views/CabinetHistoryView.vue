<template>
  <section class="history">
    <CabinetHeader class="sm:hidden" />
    <div class="container ">
      <h3 class="font-medium text-primary text-2xl mt-5">Transaction history</h3>
      <div class="flex items-center gap-y-3 justify-between flex-wrap mt-[10px]">
        <p :class="{ activeTab: activeTab === 0 }" @click="setActiveTab(0)" class="cursor-pointer font-medium">All
          transactions</p>
        <p :class="{ activeTab: activeTab === 1 }" @click="setActiveTab(1)" class="cursor-pointer font-medium">Deposit
        </p>
        <p :class="{ activeTab: activeTab === 2 }" @click="setActiveTab(2)" class="cursor-pointer font-medium">
          Withdrawal
        </p>
        <p :class="{ activeTab: activeTab === 3 }" @click="setActiveTab(3)" class="cursor-pointer font-medium">
          Investment
        </p>
        <p :class="{ activeTab: activeTab === 4 }" @click="setActiveTab(4)" class="cursor-pointer font-medium">Referral
        </p>
      </div>
      <div class="flex items-center gap-x-2 mt-[15px] cursor-pointer w-fit" @click="toggleDateSort">
        <p class="font-medium text-[12px]">Date</p>
        <img class="arrow" :class="{ 'rotate-[180deg]': dateSortAscending }" src="@/assets/img/cabinet/arrow.svg"
          alt="">
      </div>
      <div class="flex flex-col mt-5 gap-y-5">
        <CabinetHistoryElement v-for="(el, key) in filteredHistory" :key="key" :type="el.type" :amount="el.amount"
          :createdAt="formatDate(el.created_at)" :tx-hash="el.extra && el.extra.tx_hash ? el.extra.tx_hash : null"
          :description="el.description" />
      </div>
    </div>
    <CabinetHeaderMobile class="sm:flex" />
  </section>
</template>

<script setup>
import { getHistory } from '@/api/history-request';
import CabinetHeader from '@/components/Cabinet/CabinetHeader.vue';
import CabinetHeaderMobile from '@/components/Cabinet/CabinetHeaderMobile.vue';
import CabinetHistoryElement from '@/components/Cabinet/CabinetHistoryElement.vue';
import { useHistoryStore } from '@/stores/history-store';
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch, computed } from 'vue';
import { useWalletStore } from '@/stores/wallet-store';

const activeTab = ref(0)
const store = useHistoryStore()
const { history } = storeToRefs(store)
const walletStore = useWalletStore()
const { wallet } = storeToRefs(walletStore);

const dateSortAscending = ref(true); // Состояние для сортировки по дате
const toggleDateSort = () => {
  dateSortAscending.value = !dateSortAscending.value;
  console.log('asdasd')
};

const setActiveTab = (state) => {
  activeTab.value = state;
}

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // Преобразуем метку времени в миллисекунды
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0, поэтому добавляем 1
  const year = String(date.getFullYear()).slice(2); // Берем последние две цифры года
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

const filteredHistory = computed(() => {
  let filtered = [];

  if (activeTab.value === 0) {
    filtered = history.value; // Все транзакции
  } else {
    const tabMapping = ['all', 'deposit', 'withdrawal', 'investment', 'referral'];
    const selectedType = tabMapping[activeTab.value];

    // Фильтруем по типу
    filtered = history.value.filter(el => el.type.toLowerCase().includes(selectedType));
  }

  // Сортировка по дате
  return filtered.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    if (dateSortAscending.value) {
      return dateA - dateB; // Сортировка по возрастанию
    } else {
      return dateB - dateA; // Сортировка по убыванию
    }
  });
});

watch(
  () => walletStore.wallet,
  async (wallet) => {
    if (wallet && wallet.account?.publicKey) {
      await getHistory(wallet.account.publicKey);
    }
  },
  { immediate: true } // Выполнит проверку сразу после монтирования
);


</script>

<style lang="scss" scoped>
.activeTab {
  @apply text-primary underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.arrow {
  transition: all 0.3s;
}
</style>