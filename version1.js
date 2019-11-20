/*************************************
 *************VERSION-01 **************
 ***************ARRAYS*****************
 **************************************/
//Store todos
var todos = ['item1', 'item2', 'item3']
    console.log(todos);

    //to print any item that you want 
    console.log('hello there', 'Akader');

    console.log('My todos', todos);
    todos.push('item 4') // .push will add new item in array which is item 4

    // to find the length of any item by number
    todos['0']; // will give us the first item (as computers start counting at 0)
    todos['1']; // second item ...

    // .splice will delete anything you want delete from the list
    todos.splice(0, 1); // remove one item starting at zero