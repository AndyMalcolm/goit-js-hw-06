
    const fontSizeControl = document.getElementById('font-size-control');
    const textElement = document.getElementById('text');
    function onInput() {
        const fontSizeValue = fontSizeControl.value + 'px';
              textElement.style.fontSize = fontSizeValue;
        }
        fontSizeControl.addEventListener('input', onInput);
        onInput();