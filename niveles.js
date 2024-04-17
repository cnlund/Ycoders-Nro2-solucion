pantalla = document.getElementById('juego');
let ctx = pantalla.getContext("2d")
ctx.imageSmoothingEnabled = false

let move_x = 21
let move_y = 30

pj = new Image();
pj.src = "https://i.ibb.co/GCKWtwd/pj-prueba.png"
pj_altura = pj.height * 1.25

flecha = new Image();
flecha.src = "https://i.ibb.co/dcXqSs2/flecha.png"
flecha_altura = flecha.height * 0.5

enemigo = new Image();
enemigo.src = "https://i.ibb.co/GCKWtwd/pj-prueba.png"
enemigo_altura = enemigo.height * 1.25

posicion_fila = [1, 2, 3, 4, 5]
posicion_pj = posicion_fila[2]

posicion_columna = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
posicion_flecha = posicion_columna[2]
posicion_enemigo = posicion_columna[13]


function mover_flecha(y) {
    if (posicion_flecha < 15) {
        ctx.clearRect((posicion_flecha * move_x) - move_x, (y * move_y) - (move_y / 2), flecha.width / 4, flecha_altura)
        posicion_flecha++
        ctx.drawImage(flecha, (posicion_flecha * move_x) - move_x, (y * move_y) - (move_y / 2), flecha.width / 4, flecha_altura)
        setTimeout(mover_flecha.bind(null,flecha_y), 800);
    }
    else {
        ctx.clearRect((posicion_flecha * move_x) - move_x, (y * move_y) - (move_y / 2), flecha.width / 4, flecha_altura)
    }
}

function mover_enemigos() {
    if (posicion_enemigo > 0) {
        ctx.clearRect((posicion_enemigo * move_x) - move_x, (posicion_fila_enemigo * move_y) - move_y, enemigo.width, enemigo_altura)
        posicion_enemigo--
        ctx.drawImage(enemigo, (posicion_enemigo * move_x) - move_x, (posicion_fila_enemigo * move_y) - move_y, enemigo.width, enemigo_altura)
        setTimeout(mover_enemigos, 800);
    }
    else {
        ctx.clearRect((posicion_enemigo * move_x) - move_x, (posicion_fila_enemigo * move_y) - move_y, enemigo.width, enemigo_altura)
    }
}

function aparicion_enemigos() {
    rand_fila = Math.floor(Math.random() * 5)
    posicion_fila_enemigo = posicion_fila[rand_fila]
    ctx.drawImage(enemigo, (posicion_enemigo * move_x) - move_x, (posicion_fila_enemigo * move_y) - move_y, enemigo.width, enemigo_altura)
    setTimeout(mover_enemigos, 800);
}

function disparar() {
    let flecha_y = posicion_pj
    ctx.drawImage(flecha, (posicion_flecha * move_x) - move_x, (flecha_y * move_y) - (move_y / 2), flecha.width / 4, flecha_altura)
    setTimeout(mover_flecha.bind(null,flecha_y), 800);
}

document.addEventListener("DOMContentLoaded", function () {
    ctx.drawImage(pj, move_x, ((posicion_pj * move_y) - move_y), pj.width, pj_altura)
    aparicion_enemigos()
})
document.addEventListener('keydown', function (event) {
    if ((event.key === 'w' || event.key === 'W') && (posicion_pj > 1)) {
        ctx.clearRect(move_x, ((posicion_pj * move_y) - move_y), pj.width, pj_altura)
        posicion_pj--
        ctx.drawImage(pj, move_x, ((posicion_pj * move_y) - move_y), pj.width, pj_altura)
    }
    if ((event.key === 's' || event.key === 'S') && (posicion_pj < 5)) {
        ctx.clearRect(move_x, ((posicion_pj * move_y) - move_y), pj.width, pj_altura)
        posicion_pj++
        ctx.drawImage(pj, move_x, ((posicion_pj * move_y) - move_y), pj.width, pj_altura)
    }
});
document.addEventListener("click", disparar)