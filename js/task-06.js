document.addEventListener('DOMContentLoaded', function () {
  const inputElement = document.getElementById('validation-input');

  inputElement.addEventListener('blur', function () {
    const inputValue = this.value.trim();
    const inputLength = inputValue.length;
    const requiredLength = parseInt(inputElement.getAttribute('data-length'));

    if (inputLength === requiredLength) {
      inputElement.classList.remove('invalid');
      inputElement.classList.add('valid');
    } else {
      inputElement.classList.remove('valid');
      inputElement.classList.add('invalid');
    }
  });
});
//тоже нужен метод trim, который уберет пробелы и убрать зис
