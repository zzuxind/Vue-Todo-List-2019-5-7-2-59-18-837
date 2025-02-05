import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToDoList from '@/components/ToDoList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDoList',
      component: ToDoList
    }
  ]
})
