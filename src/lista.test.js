import { expect, it } from "vitest";
import { getLista, iniciaLista, limpaLista } from "./lista";

it("Deve ter zero elementos após limpar a lista", ()=>{
    iniciaLista();
    const lista1 = getLista();
    expect(lista1.length).toBe(3);
    limpaLista();
    const lista2 = getLista();
    expect(lista2.length).toBe(0);
})

it("Deve ter elementos iniciais", ()=>{
    iniciaLista();
    const lista = getLista();
    expect(lista.length).toBe(3);
});

it("Alterar a lista retornada, não pode mexer na do módulo", ()=>{
    iniciaLista();
    const lista1 = getLista();
    expect(lista1.length).toBe(3);
    lista1.push("Quatro");
    const lista2 = getLista();
    expect(lista2.length).toBe(3);
});
