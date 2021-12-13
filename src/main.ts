import Vue from 'vue';
import './main.init';
import { VNode } from 'vue/types/vnode';
import { CreateElement } from 'vue/types/vue';
import { RenderContext } from 'vue/types/options';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/styles/main.scss';

Vue.config.productionTip = false;

Vue.component('VNode', {
  functional: true,
  render(h: CreateElement, context: RenderContext): VNode {
    return context.props.node;
  }
});

new Vue({
  router,
  store,
  render: (h): VNode => h(App),
}).$mount('#app');
