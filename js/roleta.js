const roleta = document.querySelector('.wheel');
const btnGirar = document.querySelector('.spinBtn');
const opcoes = [
  'Coxinha',
  'Pastel',
  `Empada`,
  `Você escolhe`,
  `Rabo de tatu`,
  `+1 salgado`,
];

function adicionarOpcao(opcao, index) {
  const divElement = document.createElement('div');
  divElement.classList.add('number');
  divElement.style.setProperty('--i', index);

  const spanElement = document.createElement('span');
  spanElement.textContent = opcao;
  divElement.appendChild(spanElement);

  roleta.appendChild(divElement);
}

function sortear() {
  const value = Math.ceil(Math.random() * 360 * 7) + 360 * 3;
  roleta.style.transform = `rotate(${value}deg)`;
}

opcoes.map(adicionarOpcao);
btnGirar.addEventListener('click', sortear);
