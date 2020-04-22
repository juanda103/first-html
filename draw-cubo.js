var element = document.getElementById('drawCube');
var object = element.getContext('2d');
var colorcito = '#000000';



object.beginPath();
object.strokeStyle = colorcito;
object.moveTo(0, 300);
object.lineTo(200, 800);
object.stroke();
object.closePath();