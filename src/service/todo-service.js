import Vue from 'vue'

export class TodoService {
	getAllTodos(){
  		return Vue.http.get('http://localhost:8000/api/todos');
  	}
	addTodo(todo){
		return Vue.http.post('http://localhost:8000/api/todos', todo);
	}
	deleteTodo(todo){
		return Vue.http.delete('http://localhost:8000/api/todos/' + todo.id);
	}
	saveEditedTodo(todo){
		return Vue.http.put('http://localhost:8000/api/todos/' + todo.id, {
			title: todo.title,
			completed: todo.completed,
			priority: todo.priority
		});
	}
}
