import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App).use(VueGoogleMaps, {
    load: {
      key: "AIzaSyBqKuwSh-e9QRzkAtHiEwdGVIKuo81o6-4"
    }
  })
    .mount('#app')
