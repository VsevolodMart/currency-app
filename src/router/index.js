import VueRouter from 'vue-router';
import routes from '@/router/routers';
import Vue from 'vue';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
export default router;
//# sourceMappingURL=index.js.map