export function setupRootAppContent() {
    const divRoot = document.createElement("div");
    divRoot.append(criaTitulo());
    divRoot.append(criaLista());
    return divRoot;
}

function criaLista() {
    const div = document.createElement("div");
    const botaoAtualizar = document.createElement("button");
    botaoAtualizar.id = "atualizar";
    botaoAtualizar.textContent = "Atualizar";
    div.append(botaoAtualizar)
    const ol = document.createElement("ol");
    ol.id = "lista";
    div.append(ol);
    return div;
}

function criaTitulo() {
    const h1 = document.createElement("h1");
    h1.textContent = "App de lista";
    return h1;
}

export function setupEvents(root) {
    const botaoAtualizar = root.querySelector("#atualizar");
    const ol = root.querySelector("ol");
    botaoAtualizar.addEventListener("click", ()=> {
        const lista = getLista();
        ol.innerHTML = "";
        for(let i=0; i<lista.length; i++){
            const li = document.createElement("li");
            li.textContent = lista[i];
            ol.append(li);
        }
    });
}