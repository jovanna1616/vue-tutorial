<template>
	<div>
		<h1>Todos:</h1>
		<form v-on:submit="addTodo">
			<input type="text" v-model.trim="newTodo.title" placeholder="Enter new todo" required>
			<small>set priority level:</small>
			<select v-model="newTodo.priority" required>
  			<option v-for="option in options" v-bind:value="option.value">
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
    			<option v-for="option in options" v-bind:value="option.value">
      			{{ option.text }}
    			</option>
  			</select>
  			<span>Priority: {{ todo.priority }}</span>
  			<button v-on:click="deleteTodo(todo)">delete</button>
  			<button v-on:click="editTodo(todo)" v-show="!inEditMode">edit</button>
  			<button v-on:click="saveEditedTodo(todo)" v-show="inEditMode">save</button>
  			<br>
  			<hr>
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
	  		editedTodo: {}, 
		  	todos: [],
		  	priority: '',
	      options: [
	        { text: '1', value: 'Top priority' },
	        { text: '2', value: 'Priority level 2' },
	        { text: '3', value: 'Priority level 3' },
	        { text: '4', value: 'Priority level 4' },
	        { text: '5', value: 'Priority level 5' }
	      ],
	      props: ['todo']
	  	}
	  },
	  methods: {
	  	addTodo: function(e){
	  		this.$http.post('http://localhost:8000/api/todos', {
	  			title: this.newTodo.title,
	  			completed: false,
	  			priority: this.newTodo.priority
	  		}).then(function(response){
	  		this.newTodo.id = response.data.id;
	  		this.todos.push({
	  			id: this.newTodo.id,
	  			title: this.newTodo.title,
	  			completed: false,
	  			priority: this.newTodo.priority
	  		});
	  	}).catch(function (error) {
        console.log(error);
    	});
	  		e.preventDefault();
	  	},
	  	deleteTodo: function(todo){
	  		this.$http.delete('http://localhost:8000/api/todos/' + todo.id);
	  		this.todos.splice(this.todos.indexOf(todo), 1);
	  	},
	  	saveEditedTodo: function(todo){
	  		this.$http.put('http://localhost:8000/api/todos/' + todo.id, {
	  			title: todo.title,
	  			completed: todo.completed,
	  			priority: todo.priority
	  		});
	  		this.inEditMode = false;
	  	},
	  	editTodo: function(todo){
	  		this.inEditMode = true;
	  	}
	  },
	  created: function(){
	  	this.$http.get('http://localhost:8000/api/todos')
	  	.then(function(response){
	  		this.todos = response.data;
	  	}).catch(function (error) {
        console.log(error);
    	});
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