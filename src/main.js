import Vue from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase';
import store from './store'

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyB7VMmPQU70MBUSwye8LIiKISzBAUDaxmU",
  authDomain: "loginpage-a0b10.firebaseapp.com",
  databaseURL: "https://loginpage-a0b10.firebaseio.com",
  projectId: "loginpage-a0b10",
  storageBucket: "loginpage-a0b10.appspot.com",
  messagingSenderId: "36787860726",
  appId: "1:36787860726:web:27d2779b4a9dc323bb68d7",
  measurementId: "G-RJZG2R3DMH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
