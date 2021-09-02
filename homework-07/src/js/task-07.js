const refs = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
};
    console.log(refs.inputEl);
    console.log(refs.spanEl);

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
   refs.spanEl.style.fontSize = e.target.value + "px";
}

