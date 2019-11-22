// Looping over arrays
var todoList = {
    todos: [],
    displayTdos: function(){
    if(this.todos.Length === 0){
    console.log('you todo list is empty')
    } else {
    console.log('My Todos', this.todos);
    for(i = 0; i< this.todos.Length; i++){
        
    //displayTodos should show .completed
    if(this.todos[i].completed === true){
        console.log('(x)', this.todos[i].todoText);
    } else{
        console.log('( )', this.todos[i].todoText);
    }
        }

    }
    },
    
    addTodo: function(todoText){
      this.todos.push({
        todoText: todoText,
      completed: false
      });
      this.displayTdos();
      
    },
    //todoList.changeTodo should change the todoText property
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
        this.displayTdos();
    },
    //It should have a deleteTodo method
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTdos();
    },
    toggleCompleted: function(position){
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
    },
    // toggleAll
    toggleAll: function (){
      let totalTodos = this.todos.length;
      let completedTodos = 0;
    // Get number of completed todos
      for (let i=0 ; i<totalTodos ; i++){
        if (this.todos[i].completed === true){
          completedTodos++;
          }
        }
    // Case 1:if everything is true, make everything false
        if (completedTodos === totalTodos){
          for (let i=0 ; i<totalTodos ; i++){
            this.todos[i].completed = false;
            }      
    // Case 1:Otherwise, make everything true
        } else {
          for (let i=0 ; i<totalTodos ; i++){
            this.todos[i].completed = true;
            } 
        }
        this.displayTodos();
      }
    }
let handler = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  addTodo: function(){
      let addTodoTextInput = document.getElementById('addTodoTextInput');
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = '';
  },
  changeTodo: function(){
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.value, changeTodoTextInput.value);
    changeTodoTextInput.value = '';
    changeTodoPositionInput.value = '';
  },
  deleteTodos: function(){
    let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodos(deleteTodoPositionInput.value);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function(){
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.value);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll: function(){
    todoList.toggleAll();
  }
}
