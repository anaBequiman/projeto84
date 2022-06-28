canvas = document.getElementById("meuCanvas");
ctx = canvas.getContext("2d");
larguraImg = 300;
alturaImg = 100;
var imagem;
imgX = 100;
imgY = 100;
function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = imagem;
}
function uploadimg() {
	ctx.drawImage(img_imgTag, imgX, imgY, larguraImg, alturaImg);
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	//teclas do alfabeto
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
			document.getElementById("d1").innerHTML = "Você pressionou uma tecla do alfabeto";
			console.log("Tecla do alfabeto")
		}
		else{
			otherkey();
			document.getElementById("d1").innerHTML="Você pressionou o símbolo ou outra tecla";
		}
	//tecla dos números
		if((keyPressed >=48 && keyPressed <=57)){
			numberkey();
			document.getElementById("d1").innerHTML = "Você pressionou uma tecla dos números";
			console.log("Tecla numérica")
		}
		else{
			otherkey();
			document.getElementById("d1").innerHTML="Você pressionou o símbolo ou outra tecla";
		}
	//tecla direcional
		if((keyPressed >=37 && keyPressed <=40)){
			arrowkey();
			document.getElementById("d1").innerHTML = "Você pressionou uma tecla direcional";
			console.log("Tecla direcional")
		}
		else{
			otherkey();
			document.getElementById("d1").innerHTML="Você pressionou o símbolo ou outra tecla";
		}
	//tecla especial
		if((keyPressed == 17 && 18)){
			specialkey();
			document.getElementById("d1").innerHTML = "Você pressionou uma especial";
			console.log("Tecla especial")
		}
		else{
			otherkey();
			document.getElementById("d1").innerHTML="Você pressionou um símbolo ou outra tecla";
		}
}
function aplhabetkey(){
	imagem = "TECLA ALFABÉTICA.png";
	add();
}
function numberkey(){
	imagem = "TECLA NUMÉRICA.png";
	add();
}
function arrowkey(){
	imagem = "TECLA DIRECIONAL.png";
	add();
}
function specialkey(){	
	imagem = "TECLA ESPECIAL.png";
	add();
}
function otherkey(){
	imagem="OUTRA TECLA.png";
	add();
}
