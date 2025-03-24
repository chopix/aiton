<template>
  <header :class="{ scrolled: isScrolled }" class="header w-full py-4 fixed">
    <div class="container flex justify-between items-center">
      <ul class="header-list w-full flex justify-between items-center">
        <div @click="scrollToTop" class="header-logo flex items-center">
          <img src="@/assets/img/header/logo.svg" alt="">
          <p :class="{ white: isScrolled || isActive }" class="ml-1 text-black font-bold text-xl">TON</p>
        </div>
        <li :class="{ white: isScrolled }" @click="scrollToWelcome"
          class="text-black text-base font-semibold sm:hidden">{{ t('header_first') }}</li>
        <li :class="{ white: isScrolled }" @click="scrollToKnow" class="text-black text-base font-semibold sm:hidden">
          {{ t('header_second') }}
        </li>
        <li @click="scrollToReviews" :class="{ white: isScrolled }"
          class="text-black text-base font-semibold sm:hidden">{{ t('header_third') }}</li>
        <div @click="isActive = !isActive" :class="{ active: isActive }" class="hidden burger sm:block">
          <span :class="{ whiteBg: isScrolled && !isActive }"></span>
        </div>
      </ul>
    </div>

    <!-- Выпадающее меню -->
    <div v-if="isActive"
      class="mobile-menu fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center overflow-hidden">
      <ul class="menu-list text-center space-y-4">
        <li :class="{ white: isActive }" @click="scrollToWelcome; isActive = false"
          class="text-xl font-bold text-gray-700">{{ t('header_first') }}</li>
        <li :class="{ white: isActive }" @click="scrollToKnow; isActive = false"
          class="text-xl font-bold text-gray-700">
          {{ t('header_second') }}</li>
        <li :class="{ white: isActive }" @click="scrollToReviews; isActive = false"
          class="text-xl font-bold text-gray-700">{{ t('header_third') }}</li>
      </ul>
    </div>
  </header>
</template>


<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';


const { t } = useI18n();

const isScrolled = ref(false);
const isActive = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10; // Фон добавляется после 10px прокрутки
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
function scrollToWelcome() {
  let el = document.querySelector('.welcome');
  el.scrollIntoView({ block: 'start', behavior: 'smooth' });
}
function scrollToKnow() {
  let el = document.querySelector('.know');
  el.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

function scrollToTop() {
  let el = document.querySelector('.main');
  el.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

function scrollToReviews() {
  let el = document.querySelector('.reviews');
  el.scrollIntoView({ block: 'center', behavior: 'smooth' });
}

watch(isActive, (newVal) => {
  if (newVal) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});
</script>

<style lang="scss" scoped>
.mobile-menu {
  background: linear-gradient(to right, #2a82ea 0%, #1cc1fe 100%);
  transition: opacity 0.3s ease-in-out;
  animation: growDown 500ms ease-in-out both;
  animation-direction: alternate;
  //animation-iteration-count: infinite;
  transform-origin: top center;
}

@keyframes growDown {
  from {
    transform: scaleY(0)
  }

  to {
    transform: scaleY(1)
  }
}

.menu-list li {
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #c5c5c5;
  }
}



.header-logo {
  transition: all 0.2s linear;
  cursor: pointer;
  position: relative;
  z-index: 20000000000000000000000000000000000000000000000000000000000000000000000000000000000;

  p {
    transition: all 0.2s linear;
  }

  &:hover {
    transform: scale(1.05);
  }
}

ul li {
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    color: #919191;
  }

  &:active {
    color: #cf3d3d;
  }
}

.header {
  transition: all 0.3s linear;
  z-index: 999999999999999999999999999999999999;
}

header.scrolled {
  background: linear-gradient(to right, #2a82ea 0%, #1cc1fe 100%) !important;
  box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5) !important;
}


.white {
  color: white;
}

.burger {
  position: absolute;
  width: 32px;
  height: 24px;
  cursor: pointer;
  right: 2rem;
  top: 2rem;
  z-index: 20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
}

.whiteBg,
.whiteBg span,
.whiteBg::before,
.whiteBg::after {
  background-color: white !important;
  transition: all 0.2s linear !important;
}


.transition {
  transition: color 0.5s ease-in-out;

}

.burger span {
  width: 100%;
  height: 4px;
  background-color: black;
  border-radius: 12px;
  display: block;
  transition: background-color 0.5s ease-in-out;
}

.burger span::before,
.burger span::after {
  content: "";
  width: 100%;
  background-color: black;
  display: block;
  transition: all 0.5s ease-in-out;
  border-radius: 12px;
  height: 4px;
}

.burger span::before {
  transform: translateY(-10px);

}

.burger span::after {
  transform: translateY(10px);
  margin-top: -4px;
}


.burger.active span {
  background-color: transparent;
}

.burger.active span::before {
  transform: rotateZ(45deg) translateY(0);
  background-color: white !important;

}

.burger.active span::after {
  transform: rotateZ(-45deg) translateY(0);

  background-color: white !important;
}


@media screen and (max-width: 479.98px) {
  .header-logo {
    transition: all 0.5s ease-in-out !important;
  }
}
</style>