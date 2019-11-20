// function 
function sayHiTo(person){
console.log('hi', person);
sayHiTo('Akader')  // Hi Akader will be printed out
}

//function to display todos
var todos = ['item1', 'itmet2', 'itme3',] 
function displayTodos(){
console.log('My todos:', todos);
}

//function to add new todos
function addTodos(){
todos.push(new todo);
}
displaytodos()// will print ['item1', 'itmet2', 'itme3', 'new todo'] 

// function to change a todos
function changeTodo(position, newValue){
todos[position] = newValue;
displayTodos();
}
console.log(changeTodo); 

// function to delete a todo
function deleteTodo(){
    todos.splice(position, 1);
    displayTodos();
}
console.log(deleteTodo);

//  Functions and variables
var myName ='Akader'
    function myName(){
    console.log(myName); // output "Akader"
    }

    