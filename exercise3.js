//The Object Context Challenge
const display = document.querySelector('#count-display');

const CounterApp = {
    count: 0,
    
    increment: function() {
        this.count++;
        display.textContent = this.count;
    },
    
    decrement: function() {
        this.count--;
        display.textContent = this.count;
    }
};

const incBtn = document.querySelector('#inc-btn');
const decBtn = document.querySelector('#dec-btn');

incBtn.addEventListener('click', CounterApp.increment.bind(CounterApp));
decBtn.addEventListener('click', CounterApp.decrement.bind(CounterApp));