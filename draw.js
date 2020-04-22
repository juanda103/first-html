var texto = document.getElementById("text_lines");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", drawByClick);


var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d")
var xx = d.width;
var m = xx - 1;
//while (l < lines) {
//    yi = 10 * l;
//    xf = 10 * (l + 1);
//    drawLine(colorcito, 0, yi, xf, 300);
//    console.log('line ' + l)
//   l++
//}

function drawByClick() {
    var lines = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = '#FAA';
    var space = xx / lines;

    for (l = 0; l < lines; l++) {
        yi = space * l;
        xf = space * (l + 1);
        drawLine(colorcito, 0, yi, xf, 300);
    }
    drawLine(colorcito, 1, 1, 1, 300)
    drawLine(colorcito, 1, m, m, m)
}

function drawLine(color, xinicial, xfinal, yinicial, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}