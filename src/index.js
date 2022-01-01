import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

//const tarea = new Todo("Aprender JavaScript");

//todoList.nuevoTodo(tarea);


//crearTodoHtml(tarea);


//console.log(todoList);


todoList.todos.forEach(todo => { 
    crearTodoHtml(todo); 
});


