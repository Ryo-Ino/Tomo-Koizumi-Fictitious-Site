'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import Vuex from 'vuex';
import VeeValidate, { Validator } from 'vee-validate';
import ja from 'vee-validate/dist/locale/ja';

//app
import App from './App.vue';
// pages
import index from './components/pages/index.vue';
import more from './components/pages/moreproject.vue';
import about from './components/pages/about.vue';
import contact from './components/pages/contact.vue';

Vue.use(VueRouter);
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease-in",
    offset: 0,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});
Vue.use(Vuex);
Validator.localize('ja', ja);
Vue.use(VeeValidate, { locale: ja });

const router = new VueRouter({
    routes: [
        { path: '/', component: index },
        { path: '/more', component: more },
        { path: '/about', component: about },
        { path: '/contact', component: contact }
    ]
});
const store = new Vuex.Store({
    state: {
        flagOpen: false,
        flagTrans: false,
        pageMoreProject: false,
        pageProject: true,
        pageStay: true
    },
    mutations: {
        start(state) { state.flagTrans = true },
        end(state) { state.flagTrans = false }
    }
});
const globalMixIn = {
    created() {
        let { title } = this.$options
        if (title) {
            document.title = title;
        }
    }
}

Vue.mixin(globalMixIn);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');

//ローディング
let loader = document.getElementById('loader');

function opacity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success');
            loader.style.opacity = '0';
        }, 2000);
    });
}

function display() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success');
            loader.style.display = 'none';
        }, 500);
    });
}

window.onload = function() {
    opacity().then(display);
};


//ページ遷移時オーバーレイを付ける
router.beforeEach((to, from, next) => {
    store.commit('start');
    next();
});
//オーバーレイを消す
router.afterEach((to, from) => {
    setTimeout(() => {
        store.commit('end');
    }, 1200);
})