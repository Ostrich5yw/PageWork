import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import store from "../store";

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  { path: '/', redirect: '/Login' },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/StuHome',
    name:"StuHome",
    component: () => import(/* webpackChunkName: "home" */ '../views/StuHome'),
    meta: { title: '自述文件' },
    children: [
      { path: '/', redirect: '/dashboard' },
      {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
        meta: { title: '系统首页' }
      },
      {
        path: '/icon',
        component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
        meta: { title: '自定义图标' }
      },
      {
        path: '/table',
        component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
        meta: { title: '基础表格' }
      },
      {
        path: '/tabs',
        component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
        meta: { title: 'tab选项卡' }
      },
      {
        path: '/form',
        component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
        meta: { title: '基本表单' }
      },
      {
        // 富文本编辑器组件
        path: '/editor',
        component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
        meta: { title: '富文本编辑器' }
      },
      {
        // markdown组件
        path: '/markdown',
        component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
        meta: { title: 'markdown编辑器' }
      },
      {
        // 图片上传组件
        path: '/upload',
        component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
        meta: { title: '文件上传' }
      },
      {
        // vue-schart组件
        path: '/charts',
        component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
        meta: { title: 'schart图表' }
      },
      {
        // 拖拽列表组件
        path: '/drag',
        component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
        meta: { title: '拖拽列表' }
      },
      {
        // 拖拽Dialog组件
        path: '/dialog',
        component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
        meta: { title: '拖拽弹框' }
      },
      {
        // 国际化组件
        path: '/i18n',
        component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
        meta: { title: '国际化' }
      },
      {
        // 权限页面
        path: '/permission',
        component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
        meta: { title: '权限测试', permission: true }
      },
      {
        path: '/404',
        component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
        meta: { title: '404' }
      },
      {
        path: '/403',
        component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
        meta: { title: '403' }
      },
      {
        path: '/PersonalInformation',
        component: () => import(/* webpackChunkName: "PersonalInformation" */ '../components/page/PersonalInformation.vue'),
        meta: { title: '个人信息' }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(function (to, from, next) {
  if (to.path === "/dashboard" && store.state.StudentBean.stu_name === '')
    router.push({path:'/Login'});
  next();
});
export default router
