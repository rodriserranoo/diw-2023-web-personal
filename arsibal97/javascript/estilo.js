const body = document.getElementsByTagName('body');

function cambio(){
    if (body[0].classList.contains("tema-claro")) {
        body[0].classList.replace("tema-claro","tema-oscuro")
        
    }else{
        body[0].classList.replace("tema-oscuro","tema-claro")
    }



}
