// Get UI variables
const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

// Add numbers to screen
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        // keep the data-num value of each btn on a variable
        let number = buttons[i].getAttribute('data-num');
        // show data-num value to the screen
        screen.value += number;
    });
}

// Show results on screen
equalBtn.addEventListener('click', () => {
    if (screen.value === '') {
        screen.value = 'Add a number!';
    } else {
        // set the value of the eval function into a variable
        let value = eval(screen.value);
        screen.value = value;
    }
});

// Clear screen value
clearBtn.addEventListener('click', () => {
    screen.value = '';
});
