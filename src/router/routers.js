import LanguageViewer from '@/components/language/language.vue';
// import RouterHelper from '@/router/middleware';
const routers = [
    {
        path: '/',
        redirect: '/en',
    },
    {
        path: '/:lang',
        name: 'index',
        component: LanguageViewer,
        redirect: { name: 'auth' },
        children: [
            {
                path: '',
                name: 'home-page',
                component: () => import('@/components/home-page/home-page.vue'),
            },
            {
                path: 'auth',
                name: 'auth-page',
                component: () => import('@/components/auth-page/auth-page.vue'),
            },
        ],
    },
];
export default routers;
//# sourceMappingURL=routers.js.map