var i = 0;

let textad = '';
let tituload = '';

function coluna() {

  let coluna = document.createElement("div");

  coluna.setAttribute('class', '');
  coluna.setAttribute('id', 'coluna');
  

  let div = document.getElementById("column");
  div.appendChild(coluna);

  var botao = document.createElement("button");
  var escrita = document.createTextNode("+ card");

  botao.appendChild(escrita);
  botao.style.height = "6%";
  botao.style.backgroundColor = "#7d71ea";
  botao.style.color = "#c6fbc6";
  botao.style.fontSize = "100%";
  botao.style.borderRadius = "15%";
  botao.style.borderColor = "#7d71eb";
  botao.style.margin = "2%";
  botao.setAttribute('onclick', 'createCard()');
  coluna.appendChild(botao);
}

function createCard() {

  let card = document.createElement("div");
  card.setAttribute('id', 'info');

  let tituloadd = document.createElement("input");
  tituloadd.setAttribute('id', 'tituload');
  tituloadd.setAttribute('placeholder', 'Titulo');

  tituload = tituloadd.value;

  let textadd = document.createElement("input");
  textadd.setAttribute('id', 'textad');
  textadd.setAttribute('placeholder', 'Texto');

  textad = textadd.value;

  let criar = document.createElement("input");
  criar.setAttribute('id', 'criar');
  criar.setAttribute('onclick', 'criar()');
  criar.setAttribute('type', 'button');
  criar.setAttribute('value', 'Criar')

  card.appendChild(tituloadd);
  card.appendChild(textadd);
  card.appendChild(criar);

  tituloadd.style.display = 'block';
  textadd.style.display = 'block';

  let coluna = document.getElementById("coluna");
  coluna.appendChild(card);

  card.style.marginTop = '10px';
  card.style.marginLeft = '5px';
  criar.style.marginTop = '10px';
  textadd.style.marginTop = '10px';

}

function criar() {
  let text_card = '';
  let titulo_card = '';
  let tituload = document.getElementById('tituload');
  let textad = document.getElementById('textad');
  let card = document.getElementById('cardadd')


  if (tituload.value == "") {
    alert('Você precisa colocar um titulo!!!!');
  } else {
    titulo_card = tituload.value;
  }

  if (textad.value == "") {
    alert('Você precisa colocar texto!!!!');
  } else {
    text_card = textad.value;
  }

  var h1 = document.createElement("h1");
  var h1_2 = document.createElement("h3");


  var textoh1 = document.createTextNode(titulo_card);
  var textoh2 = document.createTextNode(text_card);

  h1.appendChild(textoh1);
  h1_2.appendChild(textoh2);

  // document.getElementById('coluna').appendChild("div");

  document.getElementById('coluna').appendChild(h1);
  document.getElementById('coluna').appendChild(h1_2);


  h1.style.display = 'block';
}

let aux = 0;

function cardadd() {

  let cardadd = document.createElement("div");
  cardadd.setAttribute('id', 'cardadd');

  let h2 = document.createElement("h2");
  h2.innerText = "+ Add column";

  cardadd.appendChild(h2);

  cardadd.setAttribute('onclick', 'add()');

  let div = document.getElementById("card_add");
  div.appendChild(cardadd);

}

function add() {
  aux++;
  coluna();
}

cardadd();
