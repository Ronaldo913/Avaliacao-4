var i = 0;

let textad = '';
let tituload = '';

let iD;

function coluna() {

  let coluna = document.createElement("div");

  coluna.classList.add("coluna");
  coluna.setAttribute('id', aux);
  coluna.setAttribute('name', "coluna"+aux);

  let divA = document.createElement("div");
  // divA.setAttribute('id', aux);
  divA.appendChild(coluna);
    
  let div = document.getElementById("column");
  div.appendChild(divA);

  var botao = document.createElement("button");
  var escrita = document.createTextNode("+ card");

  botao.appendChild(escrita);
  botao.style.height = "12%";
  botao.style.width = "30%";
  botao.style.backgroundColor = "#7d71ea";
  botao.style.color = "#c6fbc6";
  botao.style.fontSize = "100%";
  botao.style.borderRadius = "15%";
  botao.style.borderColor = "#7d71eb";
  botao.style.margin = "2%";

  botao.setAttribute('id', aux);
  botao.addEventListener('click', function() {
    iD = this.id; 
  });

  botao.setAttribute('onclick', 'createCard(iD)');
  
  botao.setAttribute('id', aux);

  coluna.appendChild(botao);

  let del = document.createElement("img");
  del.src = './img/lixeira.png';
  del.setAttribute('id', aux);
  del.addEventListener('click', function() {
    iD = this.id; 
  });
  del.setAttribute('onclick', 'delet(iD)');


  coluna.appendChild(del);
  
  del.style.width = "50px";
  del.style.height = "45px";
  del.style.marginLeft = "150px";
  del.style.cursor = "pointer";

}

function delet(id) {
  let div = document.getElementById(id);
  div.remove();
}

function createCard(iD) {

  let card = document.createElement("div");
  card.classList.add("info");
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
  criar.setAttribute('onclick', 'criar(iD)');

  criar.setAttribute('type', 'button');
  criar.setAttribute('value', 'Criar')

  card.appendChild(tituloadd);
  card.appendChild(textadd);
  card.appendChild(criar);

  tituloadd.style.display = 'block';
  textadd.style.display = 'block';

  let coluna = document.getElementById(iD);
  coluna.appendChild(card);

  criar.style.marginTop = '10px';
  textadd.style.marginTop = '10px';

}
let a = false;
let b;
let c;

let p=0;
let idP;
function criar(id) {
  p++;
  a = true;
  if(a == true){

    // let button = document.getElementById("criar");
    // button.removeAttribute("onclick");

    let text_card = '';
    let titulo_card = '';
    let tituload = document.getElementById('tituload');
    let textad = document.getElementById('textad');
    // let card = document.getElementById('cardadd')
  
    if (tituload.value == "") {
      alert('Você precisa colocar um titulo!!!! É necessário ter todas informações preenchidas');
      b = true;
    } else {
      titulo_card = tituload.value;
      b=false;
    }
  
    if (textad.value == "") {
      alert('Você precisa colocar texto!!!! É necessário ter todas informações preenchidas');
      c = true;
    } else {
      text_card = textad.value;
      c=false;
    }
    
    if( b == false && c == false){
      var h1 = document.createElement("h3");
      var h1_2 = document.createElement("p");
      
      
      var textoh1 = document.createTextNode(titulo_card);
      var textoh2 = document.createTextNode(text_card);
      
      h1.appendChild(textoh1);
      h1_2.appendChild(textoh2);
  
      let del = document.createElement("img");
      del.src = './img/lixeira.png';
      del.setAttribute('id', p+'a');
      del.addEventListener('click', function() {
        idP = this.id; 
      });
      del.setAttribute('onclick', 'deletC(idP)');

      let del2 = document.createElement("img");
      del2.src = './img/tarefa-concluida.png';
      del2.setAttribute('id', p+'a');
      del2.addEventListener('click', function() {
        idP = this.id; 
      });
      del2.setAttribute('onclick', 'deletCo(idP)');
  
      let au = document.createElement("div");
      au.appendChild(del);
      au.appendChild(del2);
  
      au.style.display = "flex";
      au.style.paddingRight = "50px";
    
      del.style.width = "20px";
      del.style.height = "25px";
      del.style.marginLeft = "260px";
      del.style.cursor = "pointer";
  
      del2.style.width = "20px";
      del2.style.height = "25px";
      del2.style.cursor = "pointer";
    
      // document.getElementById('coluna').appendChild("div");
      let div = document.createElement("div");
      div.classList.add("divCard");
      div.setAttribute('id', p+"a");
      
      div.appendChild(au);
      div.appendChild(h1);
      div.appendChild(h1_2);
  
      document.getElementById(id).appendChild(div);
      // document.getElementById('coluna').appendChild(h1_2);
      
      
      h1.style.display = 'block';
    }
  }
  let div = document.getElementById("info");
  div.remove();
}

function deletC(id){
  let div = document.getElementById(id);
  div.remove();
  alert("Card Excluído!");
}

function deletCo(id){
  let div = document.getElementById(id);
  div.remove();
  alert("Terefa concluída!");
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
