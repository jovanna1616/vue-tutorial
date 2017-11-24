<template>
	<div class="users">
		<h1>Todos:</h1>
		<form v-on:submit="addTodo">
			<input type="text" v-model.trim="newTodo.title" placeholder="Enter new todo">
			<br>
			<input type="submit" value="Submit">
		</form>
		<ul>
			<li v-for="todo in reverseTodos">
				<input type="checkbox" v-model="todo.completed">
				<!-- show todo on page load -->
				<span :class="{completed: todo.completed}" v-on:click="clicked" v-show="!inEditMode">
					{{ todo.title }}
			  </span>
			  <!-- show input only if editing todo -->
			  <input v-on:keyup.enter="saved" v-model="todo.title" v-show="inEditMode">
			  <br>
			  <select v-model="todo.priority">
      			<option v-for="option in options" v-bind:value="option.value">
        			{{ option.text }}
      			</option>
  			</select>
  			<span>Priority: {{ todo.priority }}</span>
  			<button v-on:click="deleteTodo(todo)">delete</button>
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
	  		this.$http.post('http://localhost:8000/api/todos', {
	  			title: this.newTodo.title,
	  			completed: false
	  		});
	  		this.todos.push({
	  			title: this.newTodo.title,
	  			completed: false
	  		});
	  		e.preventDefault();
	  	},
	  	deleteTodo: function(todo){
	  		this.$http.delete('http://localhost:8000/api/todos/' + todo.id);
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