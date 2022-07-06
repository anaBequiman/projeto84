canvas = document.getElementById("meuCanvas");
ctx = canvas.getContext("2d");
larguraImg = 600;
alturaImg = 300;
var imagem;
imgX = 100;
imgY = 100;
function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploading;
	img_imgTag.src = imagem;
}
function uploading() {
	ctx.drawImage(img_imgTag, imgX, imgY, larguraImg, alturaImg);
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			//teclas do alfabeto
			aplhabetkey();
			document.getElementById("d1").innerHTML = "Você pressionou uma tecla do alfabeto";
			console.log("Tecla do alfabeto");
		}
		else if((keyPressed >=48 && keyPressed <=57)){
			//tecla dos números
			numberkey();
			document.getElementById("d1").innerHTML = "Você pressionou uma tecla dos números";
			console.log("Tecla numérica");
		}
		else if((keyPressed >=37 && keyPressed <=40)){
			//tecla direcional
			arrowkey();
			document.getElementById("d1").innerHTML = "Você pressionou uma tecla direcional";
			console.log("Tecla direcional");
		}
		else if((keyPressed == 17) || (keyPressed == 18) || (keyPressed == 27)){
			//tecla especial
			specialkey();
			document.getElementById("d1").innerHTML = "Você pressionou uma tecla especial";
			console.log("Tecla especial");
		}
		else{
			//outra tecla
			otherkey();
			document.getElementById("d1").innerHTML = "Você pressionou um símbolo ou outra tecla";
			console.log("Outra tecla");
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
	imagem = "OUTRA TECLA.png";
	add();
}
