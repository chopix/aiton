<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTelegram } from './services/telegram';
import { onMounted, ref } from 'vue';
import { useModalStore } from './stores/modal-store';
import { storeToRefs } from 'pinia';


const modalStore = useModalStore()
const { modal } = storeToRefs(modalStore)

const isMobile = ref(false)

onMounted(() => {
  isMobile.value = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  console.log('isMobile:', isMobile.value)
})
</script>

<template>
  <RouterView v-if="true" />
  <div class="w-full h-screen overflow-hidden flex items-center justify-center text-[50px] text-center" v-if="false">
    Приложение доступно только с телефона.
  </div>
  <Transition v-show="modal" name="fade">
    <div v-show="modal" class="modal-wrapper z-[999999]"></div>
  </Transition>

</template>

<style scoped>
.modal-wrapper {
  position: fixed;
  background: rgba(14, 14, 15, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
