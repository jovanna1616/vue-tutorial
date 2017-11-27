<template>
  <div id="app">
    <!-- <ul>
      <li><router-link to="/">HelloWorld</router-link></li>
      <li><router-link to="/test">Test page</router-link></li>
      <li><router-link to="/users">Users</router-link></li>
      <li><router-link to="/todos">Todos</router-link></li>
      <router-view></router-view>
    </ul> -->
  </div>
</template>

<script>
import Test from './components/Test'
import Users from './components/Users'
import Todos from './components/Todos'
export default {
  name: 'app',
  components: {
    Test,
    Users,
    Todos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
