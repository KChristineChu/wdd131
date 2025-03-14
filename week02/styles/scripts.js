const input = document.querySelector('favchap');    //declare three variables that hold references to the input, button, and list elements

const button = document.querySelector('button');

const list = document.querySelector('ul');

const li = document.createElement('li');     //Create a li element that will hold each entry's chapter title and an associated delete button

const deleteButton = document.createElement('button');       //Create a delete button

li.textContext = input.value;       //Populate the li element variable's textContent or innerHTML with the input value

deleteButton.textContext = 'X';    //Populate the button textContent with a ❌.

li.append(deleteButton);        //Append the li element variable with the delete button

list.append(li);                //Append the li element variable to the unordered list in your HTML


button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
    
    }                                          //trim-remove whitespace on both ends of string and return a new string.
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);                //add event listener to delete button that removes li element when clicked
    input.focus();
});

input.value = '';      //change the input value to nothing or empty string to clean up the interface for user

input.focus();      //whether or not a list item was created, the focus(active cursor) should be sent to the input element
