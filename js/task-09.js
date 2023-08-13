function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
      alert('All fields must be filled out.');
      return;
    }

    const loginData = {
      email: emailInput.value,
      password: passwordInput.value,
      color: getRandomHexColor(),
    };

    console.log(loginData);
    this.reset();
  });
});