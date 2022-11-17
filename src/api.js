let form = document.querySelector('form');

const inputs = document.querySelectorAll('.input');

const emptyFieldClass = 'empty-field';

function checkIfEmpty() {
    let empty = false;
    for (const element of inputs) {
        if (element.value === ''){
            element.classList.add(emptyFieldClass);
            element.placeholder = `${element.id} cannot be empty`;
            empty = true;
        }
    }
    return empty;
}

function formFilledWrong(event) {
    if (checkIfEmpty() === true) {
        event.preventDefault();
    } else {
        alert('git');
    }


}

function formSubmit(event) {
        formFilledWrong(event);

}

form.addEventListener('submit', formSubmit);
