<template>
  <header class="mobile-header hidden bg-primary w-full h-[77px] items-center fixed bottom-0 left-0">
    <div class="container">
      <ul class="flex items-center justify-between">
        <router-link to="/cabinet/affilate" tag="li" class="flex flex-col items-center text-white">
          <img src="@/assets/img/cabinet/affilate.svg" alt="">
          Рефералы
        </router-link>
        <router-link to="/cabinet/trading" tag="li" class="flex flex-col items-center text-white">
          <img src="@/assets/img/cabinet/bot.svg" alt="">
          Ai Bot
        </router-link>
        <router-link to="/cabinet/more" tag="li" class="flex flex-col items-center text-white">
          <img class="h-[24px] w-[24px]" src="@/assets/img/cabinet/more.svg" alt="">
          Больше
        </router-link>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped></style>