/*************************************
 *************VERSION-04 **************
 ***************ARRAYS*****************
 **************************************/
var todoList = {
    todos: ['item1', 'item2', 'item3'],
    displayTdos: function(){
      console.log('My Todos', this.todos);
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

    // todoList.toggleCompleted should flip the completed property
    toggleCompleted: function(position){
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
    }
    };