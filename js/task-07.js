document.addEventListener('DOMContentLoaded', function () {
    const fontSizeControl = document.getElementById('font-size-control');
    const textElement = document.getElementById('text');
  
    fontSizeControl.addEventListener('input', function () {
      const fontSizeValue = this.value + 'px';
      textElement.style.fontSize = fontSizeValue;
    });
  });
// функцию сделать именнованой и вынести из скобок