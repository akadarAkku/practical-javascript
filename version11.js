let todoList = {
  todos: [],
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodos: function (position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function (position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function (){
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    
    this.todos.forEach(function(todo){
      if (todo.completed === true){
          completedTodos++;
          }
    });
    this.todos.forEach(function(todo){
      // Case1 : If everything is true, make everything false
      if (completedTodos === totalTodos){
        todo.completed = false;
      // Case2 : Otherwise, make everything true
        } else {
        todo.completed = true;
      }
    });
  }
}
let handler = {
addTodo: function(){
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
},
changeTodo: function(){
  let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
  let changeTodoTextInput = document.getElementById('changeTodoTextInput');
  todoList.changeTodo(changeTodoPositionInput.value, changeTodoTextInput.value);
  changeTodoTextInput.value = '';
  changeTodoPositionInput.value = '';
  view.displayTodos();
},
deleteTodos: function(position){
  todoList.deleteTodos(position);
  view.displayTodos();
},
toggleCompleted: function(){
  let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
  todoList.toggleCompleted(toggleCompletedPositionInput.value);
  toggleCompletedPositionInput.value = '';
  view.displayTodos();
},
toggleAll: function(){
  todoList.toggleAll();
  view.displayTodos();
}
}
let view = {
displayTodos: function(){
  let todosUl = document.querySelector('ul');
  todosUl.innerHTML = '';
  
  todoList.todos.forEach(function(todo, position){
    let todoLi = document.createElement('li');
    let todoTextWithCompletion = '';

    if(todo.completed === true){
      todoTextWithCompletion = '(X) ' + todo.todoText;
    } else {
      todoTextWithCompletion = '( ) ' + todo.todoText;
    }
    todoLi.id = position;
    todoLi.textContent = todoTextWithCompletion;
    todoLi.appendChild(this.createDeleteButton());
    todosUl.appendChild(todoLi);
  }, this) // this refers to view object ==> forEach(callbak, this)
},
createDeleteButton: function (){
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'deleteButton';
  return deleteButton;
},
setUpEventListeners: function(){
  var todoUl = document.querySelector('ul');
  todoUl.addEventListener('click', function(event){
  // get the element that was clicked on
  let elementClicked = event.target;
  // check if the element is a click button
  if (elementClicked.className === 'deleteButton'){
    handler.deleteTodos(parseInt(elementClicked.parentNode.id));
    }
  });
}
}
view.setUpEventListeners();