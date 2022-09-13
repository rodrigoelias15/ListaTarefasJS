let cont = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput != null) && (valorInput != "") && (valorInput != undefined)) {

        ++cont;

        // Poderia ser colocado aspas simples, porém teria que colocar tudo em uma linha só
        let novoItem = `<div id="${cont}" class="item">
                            <div onclick="marcarTarefa(${cont})" class="item-icone">
                                <i id="icone_${cont}" class="mdi mdi-circle-outline"></i>            
                            </div>
                            <div onclick="marcarTarefa(${cont})" class="item-nome">
                                ${valorInput}
                            </div>
                            <div class="item-botao">
                                <button onclick="deletar(${cont})" class="delete">
                                    <i class="mdi mdi-delete">Deletar</i>
                                </button>
                            </div>
                        </div>`;
        main.innerHTML += novoItem;

        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    let item = document.getElementById(id);
    let classe = item.getAttribute("class");
    console.log(classe);

    if (classe == "item") {
        item.classList.add("clicado");
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);
    } 
    else {
        item.classList.remove("clicado");
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
}

input.addEventListener("keyup", function (event) {
    // tecla enter (13)
    if (event.keyCode === 13) {
        event.preventDefault(); // força ação do btnAdd.click()
        btnAdd.click(); // executa mesma ação de um clique
    }
});