var i = 0;

function coluna() {

  
  let coluna = document.createElement("div");
  coluna.setAttribute('id', 'coluna');
  coluna.setAttribute('class', 'coluna');
  //coluna.setAttribute('class', 'coluna');

  
  
  let div = document.getElementById("column");
  div.appendChild(coluna);

  /*var b = document.createElement("button");
  var escrita = document.createTextNode("card");
  //--------- css do botão de criar card ------
  b.appendChild(escrita);
  b.style.height="6%";
  b.style.backgroundColor="#7d71ea";
  b.style.color="#c6fbc6";
  b.style.fontSize="100%";
  b.style.borderRadius="15%";
  b.style.borderColor="#7d71eb";
  b.style.margin="2%";
  b.setAttribute("onclick", "criarCardDiferentesColunas()");
   
  coluna.appendChild(b);*/

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
  botao.setAttribute("onclick", "criarCard()");
  
  coluna.appendChild(botao);
  
}

function criarCard(){
  let coluna = document.getElementById("coluna");
    coluna.setAttribute("id", 'coluna');
    var card = document.createElement("div");
    
    var titulo = document.querySelector("#input_name_card");
    var tituloCard = titulo.value;
    var h1 = document.createElement("h1");
    var textoh1 = document.createTextNode(tituloCard);
    var titulo_card = document.createElement("div");
    h1.appendChild(textoh1);
  //-----------------pegando o texto para o card
  
  var texto = document.querySelector("#input_text_card");
  var text_card = texto.value; 
  //---------------- p/ exibir o texto do card
  var texto_card = document.createElement("div");
  var h1_2 = document.createElement("h1");
  var texto2 = document.createTextNode(text_card);
  h1_2.appendChild(texto2);
  h1_2.style.fontSize="70%";
  h1_2.style.backgroundColor="#7d71ea";

  card.style.position="relative";  
  card.style.backgroundColor="#7d71ea";
  card.style.margin="2%";
  card.style.border="4px";
  card.style.borderRadius="28%";

  titulo_card.style.backgroundColor="white";
  titulo_card.style.fontSize="90%";

  titulo_card.appendChild(h1);
  coluna.appendChild(card);
  card.appendChild(titulo_card);
  texto_card.appendChild(h1_2);
  card.appendChild(texto_card);
    
}
  
/*
function criarCardDiferentesColunas(){ 
    
    let coluna = document.getElementById("coluna");
    coluna.setAttribute("id", 'coluna'+mudarId());
    var card = document.createElement("div");
    
    var titulo = document.querySelector("#input_name_card");
    var tituloCard = titulo.value;
    var titulo_card = document.createElement("div");
    
    var h1 = document.createElement("h1");
    var textoh1 = document.createTextNode(tituloCard);
    h1.appendChild(textoh1);
    

  var texto = document.querySelector("#input_text_card");
  var text_card = texto.value; 

  var h1_2 = document.createElement("h1");
  var textoh1_2 = document.createTextNode(text_card);
  h1_2.appendChild(textoh1_2);
  h1_2.style.fontSize="70%";
  h1_2.style.backgroundColor="#7d71ea";

  card.style.position="relative";
    
      
    
    card.style.backgroundColor="#7d71ea";
    card.style.height="10%";
    card.style.margin="2%";
  
    titulo_card.style.backgroundColor="white";
    titulo_card.style.fontSize="90%";
      
    coluna.appendChild(card);
    card.appendChild(titulo_card);
    card.appendChild(h1_2);
    titulo_card.appendChild(h1);
  
  
  
  
  }

*/
  

  

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

