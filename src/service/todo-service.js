import Vue from 'vue'
// import axios from 'axios';

export class TodoService {
	getAllTodos(){
  		Vue.http.get('http://localhost:8000/api/todos');
  		// axios.get('http://localhost:8000/api/todos');
  	}
	addTodo(){
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
	}
	deleteTodo(todo){
		this.$http.delete('http://localhost:8000/api/todos/' + todo.id);
		this.todos.splice(this.todos.indexOf(todo), 1);
	}
	saveEditedTodo(todo){
		this.$http.put('http://localhost:8000/api/todos/' + todo.id, {
			title: todo.title,
			completed: todo.completed,
			priority: todo.priority
		});
		this.inEditMode = false;
	}
	editTodo(todo){
		this.inEditMode = true;
	}
}
