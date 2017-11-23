<template>
	<div class="users">
		<h1>Users</h1>
		<form v-on:submit="addUser">
			<input type="text" v-model.trim="newUser.firstName" placeholder="Enter name">
			<br>
			<input type="text" v-model.trim="newUser.lastName" placeholder="Enter last name">
			<br>
			<input type="number" v-model.number="newUser.age" placeholder="Enter age">
			<br>
			<input type="email" v-model.trim="newUser.email" placeholder="Enter email">
			<br>
			<input type="submit" value="Submit">
		</form>

		<select v-model="selected" options="myOptions"></select>

		<!-- show all users -->
		<ul>
			<li v-for="user in users">
				<input type="checkbox" class="toggle" v-model="user.contacted">
				<span :class="{contacted: user.contacted}">
					{{ user.firstName }} {{ user.lastName }}: {{ user.email }} <button v-on:click="deleteUser(user)">X</button>
			  </span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
	  name: 'users',
	  data () {
	    return {
		  	newUser: {},
		  	users: [
		  		{
		  			firstName: 'Joan',
		  			lastName: 'Doe',
		  			age: 35,
		  			email: 'john@doe.com',
		  			contacted: false
		  		},
		  		{
		  			firstName: 'Steve',
		  			lastName: 'Smith',
		  			age: 34,
		  			email: 'steve@smith.com',
		  			contacted: false
		  		},
		  		{
		  			firstName: 'Tom',
		  			lastName: 'White',
		  			age: 30,
		  			email: 'tom@white.com',
		  			contacted: false
		  		}
		  	]
		  }
	  },
	  methods: {
	  	addUser: function(e){
	  		this.users.push({
	  			firstName: this.newUser.firstName,
	  			lastName: this.newUser.lastName,
	  			email: this.newUser.email,
	  			contacted: false
	  		});
	  		e.preventDefault();
	  	},
	  	deleteUser: function(user){
	  		this.users.splice(this.users.indexOf(user), 1);
	  	}
	  }
	}
</script>

<style scoped>
	.contacted {
		text-decoration: line-through;
	}
</style>