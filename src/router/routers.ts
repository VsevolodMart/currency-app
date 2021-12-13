import { RawLocation, Route } from 'vue-router';
import { RouteConfig } from 'vue-router/types/router';
import LanguageViewer from '@/components/language/language.vue';
// import RouterHelper from '@/router/middleware';

const routers: RouteConfig[] = [
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
        component: (): Promise<object> => import('@/components/home-page/home-page.vue'),
      },
      {
        path: 'auth',
        name: 'auth-page',
        component: (): Promise<object> => import('@/components/auth-page/auth-page.vue'),
      },
    ],
  },
];

export default routers;
