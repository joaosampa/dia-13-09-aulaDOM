let menuBurg = document.querySelector(".menu-burg");
let nav = document.querySelector("nav");
let input = document.querySelector("input");
let botao = document.querySelector("button");
let h2 = document.querySelector("h2");



function mostarMenu(){
    nav.classList.toggle("visivel");
    menuBurg.classList.toggle("ativo");
}
function pegarNome(){
    let nome = input.value;
    h2.innerHTML = `Seja bem vindo ${nome} `;
    input.value = "";
}

menuBurg.onclick = mostarMenu;
botao.onclick = pegarNome;


// tudo dentro do function //

//  JEITO 1 

// nav.style.display = "block";
// if(nav.classList.contains("visivel")){
//     nav.classList.remove("visivel");
// }else{
//     nav.classList.add("visivel");
// }

// JEITO 2

// if(nav.classList.contains("visivel")){                                DA DOS DOIS JEITOS O DE CIMA E O COMENTADO
//     nav.classList.add("visivel");                                     DIFERENTES GOSTOS, VAI DE PREFERENCIA.
// }else{
//     nav.classList.remove("visivel");
// }   


// EVENTOS = qualquer interação com usuarios, eventos = click//