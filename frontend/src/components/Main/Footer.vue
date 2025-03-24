<template>
  <footer class="footer flex justify-center items-center py-6 text-white font-medium text-base">
    {{ t('footer') }} AI TON BOT.
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(103.55deg, #7dd8fd 37.95%, #458cfe 62.05%);
}
</style>