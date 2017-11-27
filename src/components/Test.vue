<template>
	<div class="test">
		<input type="text" v-model="title"><br>
		<span v-html="title"></span>
		<h2>{{ subtitle }}</h2>
		<p v-if="showName">{{ user.firstName }}</p>
		<p v-else="showName">Nobody</p>
		<p v-text="user.lastName"></p>
		<ul>
			<li v-for="(item, index) in items">{{ item.title }} - {{ index }}</li>
		</ul>
		<button v-on:click="greet">Say greeting</button><br>
		<button v-on:click="greeting('Hello again!')">Say greeting again</button><br>
		<input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
		<hr>
		<label for="firstName">First name </label><input type="text" v-model="user.firstName">
		<br>
		<label for="lastName">Last name </label><input type="text" v-model="user.lastName">
		<br>
		<h3>{{ fullName }}</h3>
		<h2>{{ msg }}</h2>
	</div>
</template>

<script>
	export default {
	  name: 'test',
	  props: {
  	  msg: {
  		type: String,
  		default: 'Foobar'
	  	}
	  },
	  data () {
		  return {
		  	title: 'Hello World!',
		  	subtitle: 'Subtitle example',
		  	user: {
		  		firstName: 'John',
		  		lastName: 'Doe'
		  	},
		  	showName: true,
		  	items: [
		  		{title: 'Item One'},
		  		{title: 'Item Two'},
		  		{title: 'Item three'}
		  	] 
		  }
	  },
	  methods: {
	  	greet: function() {
	  		alert('Hello!');
	  	},
	  	greeting: function(greeting) {
	  		alert(greeting);
	  	},
	  	pressKey: function(e) {
	  		console.log(e.target.value);
	  	},
	  	enterHit: function() {
	  		console.log('You hit enter');
	  	}
	  },
	  computed: {
	  	fullName: function(){
	  		return this.user.firstName + ' ' + this.user.lastName;
	  	}
	  }
	}
</script>

<style scoped>
</style>