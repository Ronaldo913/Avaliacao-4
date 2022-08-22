var i = 0;

function coluna() {

  
  let coluna = document.createElement("div");
  coluna.setAttribute('id', 'coluna');
  coluna.setAttribute('class', 'coluna');
  //coluna.setAttribute('class', 'coluna');

  
  
  let div = document.getElementById("column");
  div.appendChild(coluna);


  var botao = document.createElement("button");
  var escrita = document.createTextNode("+ card");

  botao.appendChild(escrita);
  botao.style.height="6%";
  botao.style.backgroundColor="#7d71ea";
  botao.style.color="#c6fbc6";
  botao.style.fontSize="100%";
  botao.style.borderRadius="15%";
  botao.style.borderColor="#7d71eb";
  botao.style.margin="2%";
  botao.setAttribute('onclick', 'createCard()');
  
  coluna.appendChild(botao);
  
}


}

function criar() {

  let titulo_card = getElementById('tituloadd').value;

  let text_card = getElementById('textadd').value;

  let title = getElementById("tituloadd");

  let textocard = getElementById("textadd");

  var h1 = document.createElement("h1");

  var h1_2 = document.createElement("h1");

  var textoh1 = document.createTextNode(titulo_card);

  var textoh2 = document.createTextNode(text_card);

  h1.appendChild(titulo_card);

  h1_2.appendChild(text_card);

  title.appendChild(h1);

  textocard.appendChild(h1_2);

}

function createCard() {

  let coluna = document.getElementById("coluna");

  var card = document.createElement("div");

  let tituloadd = document.createElement("input");

  tituloadd.setAttribute('id', 'tituloadd');

  let textadd = document.createElement("input");

  textadd.setAttribute('id', 'textadd');

  let criar = document.createElement("button");

  criar.setAttribute('id', 'criar');

  criar.setAttribute('onclick', 'criar()');

  if (tituloadd = null) {

    alert('Você precisa colocar um titulo!!!!');

  }

  if (textadd = null) {

    alert('Você precisa colocar texto!!!!');

  }

}



  
  


  



  

  




  


  

  

function mudarId(){
  return i++;
}

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
  coluna();
}

//coluna();
cardadd();

