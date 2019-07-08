import Vue from 'vue'
import VueRouter from 'vue-router'
import { Application } from 'suckless-serverless'
import App from './App.vue'
import Home from './components/Pages/Home.vue'
import About from './components/Pages/About.vue'
import News from './components/Pages/News.vue'
import Contacts from './components/Pages/Contacts.vue'

Vue.use(VueRouter)

export default class VueApplication extends Application {
  handle (root) {
    const routes = [
      { path: '/', component: Home },
      { path: '/home', component: Home },
      { path: '/news', component: News },
      { path: '/contacts', component: Contacts },
      { path: '/about', component: About }
    ]

    const router = new VueRouter({
      routes // short for `routes: routes`
    })
    return new Promise((resolve, reject) => {
      new Vue({
        router,
        render: h => h(App)
      }).$mount('#' + root)
    })
  }
}
