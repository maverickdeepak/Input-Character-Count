const input = document.querySelector('input.field__input')
const counter = document.querySelector('span.field__counter')
const maxLength = input.getAttribute('maxlength')

counter.innerText = maxLength;

input.addEventListener('input', event => {
    const valueLength = event.target.value.length
    const charactersLeft = maxLength - valueLength;

    if(charactersLeft < 0) return

    counter.innerText = charactersLeft
})