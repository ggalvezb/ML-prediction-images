import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'
import router from './router/index'


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA6HhGTVbtXr1BxCHY2sYddG9YD9x060xc",
  authDomain: "fabrica-memes-fe1cf.firebaseapp.com",
  projectId: "fabrica-memes-fe1cf",
  storageBucket: "fabrica-memes-fe1cf.appspot.com",
  messagingSenderId: "96594550217",
  appId: "1:96594550217:web:49450c44ae803e9e9ddc18",
  measurementId: "G-ERVF8MV5GX"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebaseApp.firestore()
export const storage = firebase.storage().ref('/images')

Vue.use(firestorePlugin)

new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
