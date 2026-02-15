//Identifying the Bug
const box = document.querySelector('.box');

box.addEventListener('click', (event) => {
    /*
       Arrow functions do not have their own 'this' binding. Instead, they 
       inherit 'this' from the surrounding (lexical) scope, which in this 
       case is the global 'window' object. Since the window doesn't have 
       a classList, 'this.classList.add' throws an error.
    */

    event.currentTarget.classList.add('active');

    /*
       'event.currentTarget' always refers to the element that the event 
       listener was originally attached to (the .box). This provides a 
       reliable "escape hatch" to access the element even when using 
       arrow functions where 'this' is unavailable.
    */
});