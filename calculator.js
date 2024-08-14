let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;
        switch (value) {
            case 'C':
                display.value = '';
                break;
            case '⌫':
                display.value = display.value.slice(0, -1);
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
                break;
            default:
                display.value += value;
        }
    });
});