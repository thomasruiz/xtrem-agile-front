import Vue from 'vue'
import App from './App'
import Home from './Views/Home'
import Project from './Views/Project'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: Home
  },
  '/p/:project': {
    component: Project
  }
})

router.start(App, 'app')
