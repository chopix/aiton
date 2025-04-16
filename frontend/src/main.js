import './assets/css/null.css'
import './assets/css/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from "vue-i18n";
import ru from './locales/ru.json'
import en from './locales/en.json'
import App from './App.vue'
import router from './router'
import { TonConnectUIPlugin, THEME } from '@townsquarelabs/ui-vue';
import { VueTelegramPlugin } from 'vue-tg'
import axios from 'axios';
import Cookies from 'js-cookie';

const options = {
  manifestUrl:
    "https://aiton.bot/tonconnect-manifest.json",
  uiPreferences: { theme: THEME.LIGHT },
  walletsListConfiguration: {
    includeWallets: [
      {
        appName: "safepalwallet",
        name: "SafePal",
        imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
        tondns: "",
        aboutUrl: "https://www.safepal.com",
        universalLink: "https://link.safepal.io/ton-connect",
        jsBridgeKey: "safepalwallet",
        bridgeUrl: "https://ton-bridge.safepal.com/tonbridge/v1/bridge",
        platforms: ["ios", "android", "chrome", "firefox"],
      },
      {
        appName: "tonwallet",
        name: "TON Wallet",
        imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
        aboutUrl:
          "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
        universalLink: "https://wallet.ton.org/ton-connect",
        jsBridgeKey: "tonwallet",
        bridgeUrl: "https://bridge.tonapi.io/bridge",
        platforms: ["chrome", "android"],
      },
    ],
  },
  actionsConfiguration: {
    twaReturnUrl: "https://t.me/DemoDappWithTonConnectBot/demo",
  },
};

const app = createApp(App)



app.use(createPinia())
app.use(router)

const messages = {
  ru,
  en,
}
const i18n = createI18n({
  legacy: false, // Используем Composition API
  locale: 'en', // Язык по умолчанию
  fallbackLocale: 'en', // Запасной язык
  messages,
});
app.use(i18n)
app.use(TonConnectUIPlugin , options)
app.use(VueTelegramPlugin)

// async function test() {
//   const response = await axios.post('http://185.237.206.119:8080/api/v1/users')

//   console.log(response)
// }

// test()

axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.headers['Accept'] = 'application/json'

if (window.Telegram?.WebApp) {
    window.Telegram.WebApp.ready();  // Сообщаем, что WebApp готов
    window.Telegram.WebApp.expand(); // Делаем окно по всей высоте
    console.log(window.Telegram.WebApp)
    if(window.Telegram.WebApp.initDataUnsafe.start_param) {
      Cookies.set('referal_id', window.Telegram.WebApp.initDataUnsafe.start_param, { expires: 3 })
    }
}

app.mount('#app')
