const inputEmail = document.getElementById('input-email');
const inputSenha = document.getElementById('input-senha');
const btn = document.getElementById('login-button');

let textoEmail = '';
let textoSenha = '';

function campoEmail(event) {
  textoEmail = event.target.value;
}

function campoSenha(event) {
  textoSenha = event.target.value;
}

function acessed() {
  if (textoEmail === 'tryber@teste.com' && textoSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

inputEmail.addEventListener('change', campoEmail);
inputSenha.addEventListener('change', campoSenha);
btn.addEventListener('click', acessed);

const button = document.getElementById('submit-btn');
const input = document.getElementById('agreement');

input.addEventListener('change', () => {
  button.style.display = 'flex';
});
