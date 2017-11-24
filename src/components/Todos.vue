<template>
	<div class="users">
		<h1>Todos:</h1>
		<form v-on:submit="addTodo">
			<input type="text" v-model.trim="newTodo.title" placeholder="Enter new todo">
			<br>
			<input type="submit" value="Submit">
		</form>
		<ul>
			<li v-for="todo in todos">



				<input type="checkbox" v-model="todo.completed">
				<!-- show on page load -->
				<span :class="{completed: todo.completed}" v-on:click="clicked" v-show="!inEditMode">
					{{ todo.title }}
			  </span>

			  <!-- show if editing todo -->
			  <input v-on:keyup.enter="saved" v-model="todo.title" v-show="inEditMode">

			  <button v-on:click="deleteTodo(todo)">X</button>


			  <select v-model="priority">
      			<option v-for="option in options" v-bind:value="option.value">
        			{{ option.text }}
      			</option>
  			</select>
  			<span>Priority: {{ priority }}</span>
  			<br>

			  

			  
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
	  name: 'todos',
	  data () {
		  return {
		  	inEditMode: false,
		  	newTodo: {},
		  	todos: [],
		  	priority: '',
	      options: [
	        { text: '1', value: 'Top priority' },
	        { text: '2', value: 'Priority level 2' },
	        { text: '3', value: 'Priority level 3' },
	        { text: '4', value: 'Priority level 4' },
	        { text: '5', value: 'Priority level 5' }
	      ]
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
	  	clicked: function(){
	  		this.inEditMode = true;
	  	},
	  	saved: function(){
	  		this.inEditMode = false;
	  	}
	  },
	  created: function(){
	  	this.$http.get('https://jsonplaceholder.typicode.com/todos')
	  	.then(function(response){
	  		console.log(response.data);
	  		this.todos = response.data;
	  	});
	  }
	}
</script>

<style scoped>
	.completed {
		text-decoration: line-through;
	}
	ul li {list-style-type: none}
</style>