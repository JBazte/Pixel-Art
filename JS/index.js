// GENERADOR DE CANVAS
var mayor = 1;
for (var i = 0; i < mayor; i++) {
  mayor++;
  var cubos = prompt("Introducir cantidad de cubos", "Insertar número");
  if(cubos === "" || cubos === "Insertar número"){
  alert("Has introducido un dígito inválido");
}else if (cubos !== ""){
  for (var i = 0; i < cubos; i++) {
  $('.canvas').append('<button></button>');
    
}
}
}

// GUARDADO
$('#save').click(function() {
  html2canvas(document.querySelector('.canvas')).then(canvas => {
      var url = canvas.toDataURL('image/png');
      var element = document.createElement('a');
      element.setAttribute('href', url);
      element.setAttribute('download', 'pixel.png');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
  });
});

// TU CÓDIGO A PARTIR DE ACÁ

//LIMPIAR
$('#default').click(function() {
  $($(".canvas button")).css("background-color", "#fff");
});

var colors;
var active = false;

$('.palette button').click(function(){
  colors = this.className;  
  if(colors === ""){
    colors = "#fff";
  }
});

$('body').mouseup(function(){
      active = false;
      console.log(active);
});

$('.canvas button').mousedown(function(){
    $(this).css("background-color", colors);
    $(this).addClass(colors);
    active = true;
    console.log(active);
});
    
$('.canvas button').hover(function(){
  if (active){
   $(this).css("background-color", colors);
   $(this).addClass(colors);
}
});