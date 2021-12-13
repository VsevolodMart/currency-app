import Vue from 'vue';
import './main.init';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
Vue.config.productionTip = false;
Vue.component('VNode', {
    functional: true,
    render(h, context) {
        return context.props.node;
    }
});
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map