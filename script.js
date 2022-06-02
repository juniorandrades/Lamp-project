
let imagem = document.getElementById("imagem")
let turnOn = document.getElementById("turnOn")
let turnOff = document.getElementById("turnOff")

function isLampBroken () {

    return imagem.src.indexOf ('quebrada') > -1

}

function ligar () {
    if (!isLampBroken ()) {
    imagem.src="ligada.jpg"
    }
}


function desligar () {
    if (!isLampBroken ()) {
    imagem.src ='desligada.jpg'
    }
}

function quebrada () {
    imagem.src = 'quebrada.jpg'
}
 
turnOn.addEventListener("click", ligar)
turnOff.addEventListener("click", desligar)
imagem.addEventListener("dblclick", quebrada)
imagem.addEventListener("mouseover", ligar)
imagem.addEventListener("mouseout", desligar)