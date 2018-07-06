// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import vuefire from 'vuefire'

Vue.use(vuefire)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCxRHdWCipLNSGksdIPcpSg8b6QS8zoGJI",
  authDomain: "clinic-95f51.firebaseapp.com",
  databaseURL: "https://clinic-95f51.firebaseio.com",
  projectId: "clinic-95f51",
  storageBucket: "clinic-95f51.appspot.com",
  messagingSenderId: "817423920942"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebaseApp.database()

let ptnts = db.ref('patients')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
