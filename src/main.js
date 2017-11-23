// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template:
   `
	<div id="app">
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/test">Test page</router-link></li>
			<li><router-link to="/users">Users</router-link></li>
			<li><router-link to="/todos">Todos</router-link></li>

			<router-view></router-view>
		</ul>
	</div>
	`,
}).$mount('#app')
