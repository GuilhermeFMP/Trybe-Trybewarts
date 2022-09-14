let INPUT_EMAIL = document.querySelector('#input-email');
let INPUT_PASSWORD = document.querySelector('#input-senha');
const loginBtn = document.getElementById('login-button');
loginBtn.addEventListener('click', () => {
  let inputEmail = INPUT_EMAIL.value;
  let inputPassword = INPUT_PASSWORD.value;
  if (inputEmail == "tryber@teste.com" && inputPassword == "123456") {
      alert: "Olá, Tryber!";
  } else {
      alert: "Email ou senha inválidos.";
  }
})