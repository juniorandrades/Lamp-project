
let lamp = document.getElementById("lamp")
let turnOnOff = document.getElementById("turnOnOff")

function isLampBroken () {

    return lamp.src.indexOf ('quebrada') > -1

}

function lampOn () {
    if (!isLampBroken ()) {
    lamp.src="ligada.jpg"
    }
}


function lampOff () {
    if (!isLampBroken ()) {
    lamp.src ='desligada.jpg'
    }
}

function lampBroken () {
    lamp.src = 'quebrada.jpg'
}

function lampOnOff () {
    if (!isLampBroken ()) {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn ();
        turnOnOff.textContent = 'Desligar'
    } else {
        lampOff ();
        turnOnOff.textContent = 'Ligar'
    }
}
}
turnOnOff.addEventListener("click", lampOnOff)
lamp.addEventListener("dblclick", lampBroken)
lamp.addEventListener("mouseover", lampOn)
lamp.addEventListener("mouseout", lampOff)