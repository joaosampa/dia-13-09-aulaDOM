let menuBurg = document.querySelector(".menu-burg");
let nav = document.querySelector("nav");


//  JEITO 1 

function mostarMenu(){
    // nav.style.display = "block";
    if(nav.classList.contains("visivel")){
        nav.classList.remove("visivel");
    }else{
        nav.classList.add("visivel");

    }
}

// JEITO 2 

// if(nav.classList.contains("visivel")){                                DA DOS DOIS JEITOS O DE CIMA E O COMENTADO
//     nav.classList.add("visivel");                                     DIFERENTES GOSTOS, VAI DE PREFERENCIA.
// }else{
//     nav.classList.remove("visivel");
//     }   
// }

menuBurg.onclick = mostarMenu;

// EVENTOS = qualquer interação com usuarios, eventos = click//