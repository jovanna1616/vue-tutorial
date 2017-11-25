import Vue from 'vue'
import vueResource from 'vue-resource'
import Router from 'vue-router'
import HelloWorld from './../components/HelloWorld'
import Test from './../components/Test'
import Users from './../components/Users'
import Todos from './../components/Todos'

Vue.use(vueResource)
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{path: '/', component: HelloWorld},
		{path: '/test', component: Test},
		{path: '/users', component: Users},
		{path: '/todos', component: Todos, props: true}
	]
})
