/**
 * 描述：路由文件
 */
import App from '../App';

// 404
const _404 = r => require.ensure([], () => r(require('../page/404/404')), '_404');

// 首页大图
const homeBigPage = r => require.ensure([], () => r(require('../page/main/home/homeBigPage')), 'homeBigPage');

// login
const login1 = r => require.ensure([], () => r(require('../page/login/login1')), 'login');

export default [
  // 未匹配到则404页面
  {
    path: '*',
    component: _404
  },
  {
    path: '/404',
    component: _404
  },
  {
    path: '/',
    component: App,
    children: [
       {
        path: '/homePage',
        component: homeBigPage
      },
      {
        name: '登录',
        path: 'login',
        component: login1
      },
      {
        name: '404',
        path: '404',
        component: _404
      }
    ]
  }
];
