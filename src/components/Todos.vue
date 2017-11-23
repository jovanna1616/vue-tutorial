<template>
	<div class="users">
		<h1>Todos:</h1>
		<form v-on:submit="addTodo">
			<input type="text" v-model="newTodo.title" placeholder="Enter new todo">
			<br>
			<input type="submit" value="Submit">
		</form>
		<ul>
				<li v-for="todo in todos">
					<input type="checkbox" class="toggle" v-model="todo.completed">
					<span :class="{completed: todo.completed}">
						{{ todo.title }}
						<button v-on:click="deleteTodo(todo)">X</button>
						<button v-on:click="editTodo(todo)">edit</button>
				  </span>
				</li>
		</ul>
	</div>
</template>

<script>
	export default {
	  name: 'todos',
	  data () {
		  return {
		  	newTodo: {},
		  	todos: []
		  }
	  },
	  methods: {
	  	addTodo: function(e){
	  		this.todos.push({
	  			title: this.newTodo.title,
	  			completed: false
	  		});
	  		e.preventDefault();
	  	},
	  	deleteTodo: function(todo){
	  		this.todos.splice(this.todos.indexOf(todo), 1);
	  	},
	  	editTodo: function(){}
	  },
	  created: function(){
	  	this.$http.get('https://jsonplaceholder.typicode.com/todos')
	  	.then(function(response){
	  		// console.log(response.data);
	  		this.todos = response.data;
	  	});
	  }
	}
</script>

<style scoped>
	.completed {
		text-decoration: line-through;
	}
</style>