const roleta = document.querySelector('.wheel');
const btnGirar = document.querySelector('.spinBtn');
const opcoes = [
  'Nada',
  '-1 salgado',
  '+2 salgados',
  '-1 salgado',
  'Nada',
  '-2 salgados',
  '+1 salgado',
  '-1 salgado',
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

let oldValue = 0;
function sortear() {
  const value = Math.ceil(Math.random() * 360 * 7) + 360 * 3;
  roleta.style.transform = `rotate(${oldValue + value}deg)`;
  oldValue += value;
}

opcoes.map(adicionarOpcao);
btnGirar.addEventListener('click', sortear);
