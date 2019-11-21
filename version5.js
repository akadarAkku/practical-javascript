/*************************************
 *************VERSION-05 **************
 ***************Loops *****************
 **************************************/
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
    
    };

