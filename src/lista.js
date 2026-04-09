let lista = [];   

export function iniciaLista() {
    lista = ["Um", "Dois", "Três"];
}

export function getLista() {
    return structuredClone(lista);
    // Outra maneira:
    // return [...lista];
    // Outra maneira:
    // const novaLista = [];
    // for(let i=0; i<lista.length; i++){
    //     novaLista.push(lista[i]);
    // }
    // return novaLista;
}

export function limpaLista() {
    lista.splice(0);
}