<template>
  <header class="cabinet-header mt-8">
    <div class="container flex items-center justify-between">
      <div class="cabinet-header__logo flex items-center text-black font-bold text-xl">
        <img class="mr-[5px]" src="@/assets/img/header/logo.svg" alt="">
        TON
      </div>
      <ul class="text-lg text-black font-semibold flex gap-x-7">
        <router-link to="/cabinet/trading">Ai Bot</router-link>
        <router-link to="/cabinet/affilate">{{ t('affilate') }}</router-link>
        <router-link to="/cabinet/more">{{ t('more') }}</router-link>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<style scoped></style>