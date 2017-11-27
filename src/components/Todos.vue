<template>
	<div>
		<h1>Todos:</h1>
		<form v-on:submit.prevent="addTodo">
			<input type="text" v-model.trim="newTodo.title" placeholder="Enter new todo" required>
			<small>set priority level:</small>
			<select v-model="newTodo.priority" required>
  			<option v-for="option in options" :value="option.value">
    			{{ option.text }}
  			</option>
			</select>
			<br>
			<input type="submit" value="Submit">
		</form>
		<ul>
			<li v-for="todo in reverseTodos">
				<input type="checkbox" v-model="todo.completed" v-show="inEditMode">
				<!-- show todo on page load -->
				<span :class="{completed: todo.completed}" v-show="!inEditMode">
				{{ todo.title }}
					<!-- <a v-bind:href="'/todos/'+ todo.id">{{ todo.title }}</a> -->
			  </span>
			  <!-- show input only if editing todo -->
			  <input v-model="todo.title" v-show="inEditMode">
			  <br>
			  <select v-model="todo.priority" v-show="inEditMode">
    			<option v-for="option in options" :value="option.value">
      			{{ option.text }}
    			</option>
  			</select>
  			<span>Priority: {{ todo.priority }}</span>
  			<button @click="deleteTodo(todo)">delete</button>
  			<button @click="editTodo(todo)" v-show="!inEditMode">edit</button>
  			<button @click="saveEditedTodo(todo)" v-show="inEditMode">save</button>
  			<br>
  			<hr>
			</li>
		</ul>
	</div>
</template>

<script>
	import { TodoService } from '../service/todo-service'
	export default {
	  name: 'todos',
	  data () {
		  return {
		  	inEditMode: false,
		  	newTodo: {},
	  		editedTodo: {}, 
		  	todos: [],
		  	priority: '',
	      options: [
	        { text: 'Top priority', value: '1' },
	        { text: 'Priority level 2', value: '2' },
	        { text: 'Priority level 3', value: '3' },
	        { text: 'Priority level 4', value: '4' },
	        { text: 'Priority level 5', value: '5' }
	      ],
	  	}
	  },
	  methods: {
	  	fetchAllTodos(){
	  		this.restResourceService = new TodoService();
	  		return this.restResourceService.getAllTodos()
	  		.then(function(response){
  				this.todos = response.data;
  			}).catch(function (error) {
      		console.log(error);
  			})
	  	},
	  	deleteTodo(todo){
	  		this.restResourceService.deleteTodo(todo)
	  	},
	  	saveEditedTodo(todo){
	  		this.restResourceService.saveEditedTodo(todo)
	  	},
	  	editTodo(todo){
	  		this.restResourceService.editTodo(todo)
	  	}
	  },
	  created: function() {
	  	this.restResourceService = new TodoService();
	  	this.fetchAllTodos();
	  },
	  computed: {
    	reverseTodos() {
      	return this.todos.slice().reverse();
      }    	
    }
	}
</script>

<style scoped>
	.completed {
		text-decoration: line-through;
	}
	ul li {list-style-type: none}
	button {margin-left: 50px;}
</style>