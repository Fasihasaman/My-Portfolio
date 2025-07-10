const colorInput = document.querySelector('#color-input');

colorInput.addEventListener('input', () => {
    document.body.style.backgroundColor = colorInput.value;
});
