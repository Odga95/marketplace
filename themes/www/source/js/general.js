
//Variables
const cambiaPestaña = document.querySelector("#tabs-list");


document.addEventListener("DOMContentLoaded", () => {
	// Cuando se da click en alguna pestaña de template se cambia la pestaña
	cambiaPestaña.addEventListener('click', mostrarContenido);

});


function mostrarContenido(e) {
	e.preventDefault();
	// Mostrar el contenido y cambiar la pestaña de templates
	if (!e.target.classList.contains('tab-select')) {
		var select = document.querySelector(".tab-select");
		select.classList.remove("tab-select"); // Se elimina la clase existente 
		e.target.classList.add("tab-select"); // Se agrega la clase del tab seleccionado 
		var content = e.target.id;
		const tabContent = document.querySelector(".tab-content__" + content); // se busca el contenido por clase
		// se muestra el contenido de la clase seleccionada y oculta la actual.
		if (!tabContent.classList.contains("enabled")) {
			var enabled = document.querySelector(".enabled");
			tabContent.classList.remove("disabled");
			tabContent.classList.add("enabled");
			enabled.classList.add("disabled");
			enabled.classList.remove("enabled");
		}
	}
}

// SLIDER BASIC
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlide");
    var y = document.getElementsByClassName("mySlideText");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    if(y.length !==0){
        y[slideIndex - 1].style.display = "block";
    }else{
        console.log("nada")
    }
}