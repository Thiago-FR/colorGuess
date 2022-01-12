const paragrafo = document.createElement('div');
const rgbPrincipal = document.getElementById('rgb-principal');
const number = 6;
const rgbContainer = document.querySelector('#rgb-container');
const btnReset = document.getElementById('reset-game');
const score = document.getElementById('score');
const resposta = document.getElementById('answer');
const resInicial = 'Escolha uma cor';
const btnZerar = document.getElementById('zerar-game');
let pointTotal = 0;
let cor;

resposta.innerHTML = resInicial;
score.innerHTML = `Pontuação: ${pointTotal}`;

function gerarCor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function corPrincipal(cor) {
  paragrafo.innerHTML = cor;
  paragrafo.id = 'rgb-color';
  //paragrafo.style.background = cor;

  rgbPrincipal.appendChild(paragrafo);
}

function coresAleatoria() {
  for (let index = 0; index < number; index += 1) {
    const circuitos = document.createElement('div');
    const cor = gerarCor();
    
    //  circuitos.innerHTML = cor;
    circuitos.className = 'ball';
    circuitos.style.backgroundColor = cor;    
    rgbContainer.appendChild(circuitos);
  }
  const ball = document.querySelectorAll('.ball');
  const random = Math.ceil(Math.random() * 6) - 1;
  cor = ball[random].style.backgroundColor;
  console.log(random);
  corPrincipal(cor);
}

function removeAll() {
  while (rgbContainer.firstChild) {
    rgbContainer.firstChild.remove();
  }
  paragrafo.style.backgroundColor = 'white';
  resposta.style.backgroundColor = 'aliceblue';
}

coresAleatoria();

function resetGame() {
  removeAll();
  coresAleatoria();  
  resposta.innerHTML = resInicial;
}

btnReset.addEventListener('click', () => resetGame());

btnZerar.addEventListener('click', () =>{
  resetGame();
  pointTotal = 0;
  score.innerHTML = `Pontuação: ${pointTotal}`;
});

function comparaCor(cor) {
  if (paragrafo.innerHTML === cor) {
    return true;
  }
  return false;
}

function respostaFunction(result) {
  if (result) {
    const point = 3;
    //const pointTotal = parseInt(score.innerHTML, 10);
    resposta.innerHTML = 'Acertou!';
    resposta.style.backgroundColor = 'rgb(26,214,151)'
    paragrafo.style.backgroundColor = cor;
    score.innerHTML = `Pontuação: ${pointTotal += point}`;
    return;
  }
  resposta.innerHTML = 'Errou! Tente novamente!';
  resposta.style.backgroundColor = 'rgb(214,11,89)'
}

rgbContainer.addEventListener('click', (event) => {
  if (resposta.innerHTML === resInicial) {
    const cor = event.target.style.backgroundColor;
    const result = comparaCor(cor);
    respostaFunction(result);
  }
});
