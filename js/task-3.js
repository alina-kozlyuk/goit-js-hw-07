const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', e => {
    const trimmedValue = input.value.trim();

    span.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
})

