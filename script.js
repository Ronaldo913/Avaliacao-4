function coluna() {
    let coluna = document.createElement("div");
    coluna.setAttribute('id', 'coluna');

    let div = document.getElementById("column");
    div.appendChild(coluna);
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

function add(){
    coluna();
}

coluna();
cardadd();
