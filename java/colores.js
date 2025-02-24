




//código para cambiar de color la página

var blanco = document.querySelector('.colores .blanco');
var amarillo = document.querySelector('.colores .amarillo');
var azul = document.querySelector('.colores .azul');
var rosi = document.querySelector('.colores .rosa');
var fondo = document.querySelector('.fade');
var cabesa = document.querySelector('.cabecera1');


function colorin1(){
	fondo.style.backgroundColor = "rgba(243,241,241, .89)";
	cabesa.style.backgroundColor = "rgb(243,241,241)";
	
}
function colorin2(){
	fondo.style.backgroundColor = "rgba(247, 247, 110, .89)";
	cabesa.style.backgroundColor = "rgb(247, 247, 10)";
}
function colorin3(){
	fondo.style.backgroundColor = "rgba(153, 180, 203, .89)";
	cabesa.style.backgroundColor = "rgb(70, 130, 180)";
	
}
function colorin4(){
	fondo.style.backgroundColor = "rgba(243, 196, 225, .89)";
	cabesa.style.backgroundColor = "rgb(243, 131, 210)";
	
}

blanco.addEventListener('click',colorin1);
amarillo.addEventListener('click',colorin2);
azul.addEventListener('click',colorin3);
rosi.addEventListener('click',colorin4);






//Página contactos y formulario - Iniciar el script

var nombre = formu.nombre;
var apellido = formu.apellido;
var correo = formu.correo;
var datonombre;
var datoapellido;
var datocorreo;
var boton = document.getElementById('mostrar');
var boton2 = document.getElementById('cerrar');



function antonio(){
	datonombre = prompt('Escriba su Nombre.');
	datoapellido = prompt('Escriba su Apellido.');
	datocorreo = prompt('Escriba su Correo Electrónico.');
	alert('Gracias '+datonombre+' '+datoapellido+' comprueba que todos tus datos son correctos antes de enviar el formulario y rellena los campos que faltan.');
	resultado();	
}	

function resultado(){
	nombre.value = datonombre;
	apellido.value = datoapellido;
	correo.value = datocorreo;
	ActivarCampoOtroTema();
}

function ActivarCampoOtroTema(){		
var contenedor = document.getElementsByClassName('formulasion');		
contenedor[0].style.display = "block";
var contenido = document.getElementsByClassName('textoformu');
contenido[0].style.display = "none";		
return true;
}
function desactiva(){		
var contenedor = document.getElementsByClassName('formulasion');		
contenedor[0].style.display = "none";
var contenido = document.getElementsByClassName('textoformu');
contenido[0].style.display = "block";	
return true;	
}

boton.addEventListener('click',antonio);
boton2.addEventListener('click',desactiva);




