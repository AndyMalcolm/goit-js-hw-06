document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('validation-input');
  
    inputElement.addEventListener('blur', function () {
      const inputLength = this.value.length;
      const requiredLength = parseInt(this.getAttribute('data-length'));
  
      if (inputLength === requiredLength) {
        this.classList.remove('invalid');
        this.classList.add('valid');
      } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
      }
    });
  });