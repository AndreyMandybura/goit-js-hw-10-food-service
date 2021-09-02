const refs = {
inputEl: document.querySelector('#name-input'),
spanEl: document.querySelector('#name-output'),
};


refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.spanEl.textContent = event.currentTarget.value ? refs.inputEl.value : 'незнакомец';
}
