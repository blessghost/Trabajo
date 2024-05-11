let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;        
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;  
    }
}


function seleccionar(){
    //ocultar el menu una vez que selecciono una opcion//
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades//
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var disntacia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(disntacia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades(0).classList.add("javascript");
        habilidades(1).classList.add("html");
        habilidades(2).classList.add("css");
        habilidades(3).classList.add("Autodesk Inventor");
    }
} 