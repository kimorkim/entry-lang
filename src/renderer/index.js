import Vue from 'vue';
import Main from './renderer/index.vue';

const app = new Vue(Main).$mount('#app');

app.text = "Elec12js!";