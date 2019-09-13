let menuBurg = document.querySelector(".menu-burg");
let nav = document.querySelector("nav");

function mostarMenu(){
    // nav.style.display = "block";
    if(nav.classList.contains("visivel")){
        nav.classList.remove("visivel");
    }else{
        nav.classList.add("visivel");

    }
}

menuBurg.onclick = mostarMenu;

// EVENTOS = qualquer interação com usuarios, eventos = click//