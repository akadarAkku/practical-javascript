// Objects and functions
var Akader = {
    name: 'Akader',
    sayName: function(){
console.log(this.name);
    }
}

//  It should store the todos array on an object
var todoList = {
    todos: ['item1', 'item2', 'item3'],
    displayTdos: function(){
      console.log('My Todos', this.todos);
    },
    addTodo: function(todo){
      this.todos.push(todo);
      this.displayTdos();
    },
    //It should have a changeTodo method
    changeTodo: function(position, newValue){
        this.addTodos[position] = newValue;
        this.displayTdos();
    },
    //It should have a deleteTodo method
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTdos();
    }

    };


