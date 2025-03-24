<template>
  <Transition v-show="modal" name="fade">
    <div class="w-full modal-body rounded-3xl p-[20px]">
      <slot />
    </div>
  </Transition>
</template>

<script setup>
import { useModalStore } from '@/stores/modal-store';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, watch } from 'vue';

const store = useModalStore()
const { modal } = storeToRefs(store)


watch((modal), (newModal) => {
  if (newModal === true) document.body.style.overflowY = 'hidden';
  else document.body.style.overflowY = 'auto';
})


</script>

<style scoped lang="scss">
.modal-body {
  // background: rgba(14, 14, 15, 0.8);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999999999999999999999999999;
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