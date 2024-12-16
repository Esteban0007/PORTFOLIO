//VARIABLES
let turno = 0; /*mi turno = 0, turno IA = 1*/
let mi_ficha = "X";
let ficha_IA = "O";
let fichas_puestas = 0;
combinacionX = ['X', 'X', 'X'];
combinacionO = ['O', 'O', 'O'];
let partida_terminada = false;
let una_vez = 1;
let esquinas = -1;
let tactica = -1;
let modo = 'normal';
let ataque = -1;
let ataque_fila;
let modo_ataque = false;

// VISTA JUEGO
function vista_juego() {
  document.getElementById("ajustes").style.display = "none";
  document.getElementById("juego").style.display = "block";
  if(document.getElementById("turno").checked){
    poner_fichas('4');
  }
}


//REINICIAR
function reiniciar(param) {
  if (param == 'titulo') {
    document.getElementById("ajustes").style.display = "block";
    document.getElementById("juego").style.display = "none";
  }
 
  turno = 0; 
  fichas_puestas = 0;
  combinacionX = ['X', 'X', 'X'];
  combinacionO = ['O', 'O', 'O'];
  partida_terminada = false;
  una_vez = 1;
  document.getElementById('texto_victoria').style.color = 'green';
  document.getElementById('texto_victoria').innerHTML = 'Has ganado';
  document.getElementById('0').innerHTML = '';
  document.getElementById('1').innerHTML = ''; 
  document.getElementById('2').innerHTML = ''; 
  document.getElementById('3').innerHTML = '';
  document.getElementById('4').innerHTML = '';
  document.getElementById('5').innerHTML = '';
  document.getElementById('6').innerHTML = '';
  document.getElementById('7').innerHTML = '';
  document.getElementById('8').innerHTML = '';
  document.getElementById('0').style.backgroundColor = 'black';
  document.getElementById('1').style.backgroundColor = 'black';
  document.getElementById('2').style.backgroundColor = 'black';
  document.getElementById('3').style.backgroundColor = 'black';
  document.getElementById('4').style.backgroundColor = 'black';
  document.getElementById('5').style.backgroundColor = 'black';
  document.getElementById('6').style.backgroundColor = 'black';
  document.getElementById('7').style.backgroundColor = 'black';
  document.getElementById('8').style.backgroundColor = 'black';
  document.getElementById('reiniciar').style.display = "none";
  document.getElementById('texto_victoria').style.display = 'none';
  if(document.getElementById("turno").checked){
    poner_fichas('4');
  }
}

//ELEGIR FICHA

function elegir_ficha(param) {
  if (param == 'cruz')  {
     mi_ficha = "X";
     ficha_IA = "O";
    document.getElementById('bordeCruz').style.border =  'solid 5px gold';
    document.getElementById('bordeCirculo').style.border =  'solid 5px black';   
   }
  if (param == 'circulo')  {
    mi_ficha = "O";
    ficha_IA = "X";
    document.getElementById('bordeCirculo').style.border =  'solid 5px gold';
    document.getElementById('bordeCruz').style.border =  'solid 5px black';
  }  
}

//TURNO
function elegir_el_turno(){
if(document.getElementById("turno").checked){
 document.getElementById('empieza').innerHTML = 'EMPIEZA LA I.A.';
}else{
  document.getElementById('empieza').innerHTML = 'EMPIEZAS TU';
}
}
 // DIFICULTAT
function dificultat(param) {
  if(param == 'facil'){
    modo = 'facil';
    document.getElementById('facil').style.border =  'solid 5px gold';
    document.getElementById('normal').style.border =  'solid 2px grey';
    document.getElementById('dificil').style.border =  'solid 2px grey';
  }
  if(param == 'normal'){
    modo = 'normal';
    document.getElementById('facil').style.border =  'solid 2px grey';
    document.getElementById('normal').style.border =  'solid 5px gold';
    document.getElementById('dificil').style.border =  'solid 2px grey';
  }if(param == 'dificil'){
    modo = 'dificil';
    document.getElementById('facil').style.border =  'solid 2px grey';
    document.getElementById('normal').style.border =  'solid 2px grey';
    document.getElementById('dificil').style.border =  'solid 5px red';
  }
}
  
  
//FUNCIONAMIENTO

let botones = Array.from(document.getElementsByClassName("boton_tablero"));
botones.forEach((item) => item.addEventListener("click", poner_fichas(this)));

function poner_fichas(param) {
  
  
  //ELEGIR TURNO
  
  if(una_vez !== 2) {  
  if(document.getElementById('turno').checked){
  turno = 1;
  una_vez++ ;
  }
}
  
 

  if(partida_terminada === false){
  
  let id_boton = param.id;
  let boton_pulsado = document.getElementById(id_boton);
  var id_boton_ia = Math.floor(Math.random() * 8);
  var boton_ia = document.getElementById(id_boton_ia);
  let ganador;  

  //MI FICHA SE PONE
  if (fichas_puestas < 9 && turno === 0 && boton_pulsado.innerHTML === "" && partida_terminada === false) {
    boton_pulsado.innerHTML = mi_ficha;
    fichas_puestas++;
    turno = 1;
    ganador ='yo';
  }

  fila1 = [document.getElementById('0').innerHTML, document.getElementById('1').innerHTML,  document.getElementById('2').innerHTML];
  fila2 = [document.getElementById('3').innerHTML,  document.getElementById('4').innerHTML,  document.getElementById('5').innerHTML];
  fila3 = [ document.getElementById('6').innerHTML,  document.getElementById('7').innerHTML, document.getElementById('8').innerHTML];
  columna1 = [ document.getElementById('0').innerHTML,  document.getElementById('3').innerHTML,  document.getElementById('6').innerHTML];
  columna2 = [ document.getElementById('1').innerHTML,  document.getElementById('4').innerHTML,  document.getElementById('7').innerHTML];
  columna3 = [ document.getElementById('2').innerHTML,  document.getElementById('5').innerHTML, document.getElementById('8').innerHTML];
  diagonal1 = [ document.getElementById('0').innerHTML, document.getElementById('4').innerHTML,  document.getElementById('8').innerHTML];
  diagonal2 = [ document.getElementById('6').innerHTML,  document.getElementById('4').innerHTML,  document.getElementById('2').innerHTML];
  
  if ( fila1[0] == combinacionO[0] && fila1[1] == combinacionO[1] && fila1[2] == combinacionO[2] ||fila1[0] == combinacionX[0] && fila1[1] == combinacionX[1] && fila1[2] == combinacionX[2] ) {
  quien_gana();
  document.getElementById('0').style.backgroundColor = 'green';
  document.getElementById('1').style.backgroundColor = 'green';
  document.getElementById('2').style.backgroundColor = 'green';
  }else if( fila2[0] == combinacionO[0] && fila2[1] == combinacionO[1] && fila2[2] == combinacionO[2] ||fila2[0] == combinacionX[0] && fila2[1] == combinacionX[1] && fila2[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('3').style.backgroundColor = 'green';
  document.getElementById('4').style.backgroundColor = 'green';
  document.getElementById('5').style.backgroundColor = 'green';
  }else if( fila3[0] == combinacionO[0] && fila3[1] == combinacionO[1] && fila3[2] == combinacionO[2] ||fila3[0] == combinacionX[0] && fila3[1] == combinacionX[1] && fila3[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('6').style.backgroundColor = 'green';
  document.getElementById('7').style.backgroundColor = 'green';
  document.getElementById('8').style.backgroundColor = 'green';
  }else if( columna1[0] == combinacionO[0] && columna1[1] == combinacionO[1] && columna1[2] == combinacionO[2] || columna1[0] == combinacionX[0] && columna1[1] == combinacionX[1] && columna1[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('0').style.backgroundColor = 'green';
  document.getElementById('3').style.backgroundColor = 'green';
  document.getElementById('6').style.backgroundColor = 'green';
  }else if( columna2[0] == combinacionO[0] && columna2[1] == combinacionO[1] && columna2[2] == combinacionO[2] || columna2[0] == combinacionX[0] && columna2[1] == combinacionX[1] && columna2[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('1').style.backgroundColor = 'green';
  document.getElementById('4').style.backgroundColor = 'green';
  document.getElementById('7').style.backgroundColor = 'green';
  }else if( columna3[0] == combinacionO[0] && columna3[1] == combinacionO[1] && columna3[2] == combinacionO[2] || columna3[0] == combinacionX[0] && columna3[1] == combinacionX[1] && columna3[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('2').style.backgroundColor = 'green';
  document.getElementById('5').style.backgroundColor = 'green';
  document.getElementById('8').style.backgroundColor = 'green';
  }else if( diagonal1[0] == combinacionO[0] && diagonal1[1] == combinacionO[1] && diagonal1[2] == combinacionO[2] || diagonal1[0] == combinacionX[0] && diagonal1[1] == combinacionX[1] && diagonal1[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('0').style.backgroundColor = 'green';
  document.getElementById('4').style.backgroundColor = 'green';
  document.getElementById('8').style.backgroundColor = 'green';
  }else if( diagonal2[0] == combinacionO[0] && diagonal2[1] == combinacionO[1] && diagonal2[2] == combinacionO[2] || diagonal2[0] == combinacionX[0] && diagonal2[1] == combinacionX[1] && diagonal2[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('6').style.backgroundColor = 'green';
  document.getElementById('4').style.backgroundColor = 'green';
  document.getElementById('2').style.backgroundColor = 'green';
  }

  //IA
  if(modo == "dificil" && document.getElementById('4').innerHTML == ''){
     boton_ia = document.getElementById(4);
  }

  
    
    // no nos deja ganar
    
   
  if(modo == 'normal' || modo == 'dificil'){
   
  function no_ganas(){
  if(document.getElementById('0').innerHTML == '' &&
  document.getElementById('1').innerHTML == mi_ficha &&
  document.getElementById('2').innerHTML == mi_ficha){
    boton_ia = document.getElementById(0);
  }
  if(document.getElementById('0').innerHTML == mi_ficha &&
  document.getElementById('1').innerHTML == '' &&
  document.getElementById('2').innerHTML == mi_ficha){
    boton_ia = document.getElementById(1);
  }
  if(document.getElementById('0').innerHTML == mi_ficha &&
  document.getElementById('1').innerHTML == mi_ficha &&
  document.getElementById('2').innerHTML == ''){
    boton_ia = document.getElementById(2);
  }
  if(document.getElementById('3').innerHTML == '' &&
  document.getElementById('4').innerHTML == mi_ficha &&
  document.getElementById('5').innerHTML == mi_ficha){
    boton_ia = document.getElementById(3);
  }
   if(document.getElementById('3').innerHTML == mi_ficha &&
  document.getElementById('4').innerHTML == '' &&
  document.getElementById('5').innerHTML == mi_ficha){
    boton_ia = document.getElementById(4);
  }
    if(document.getElementById('3').innerHTML == mi_ficha &&
  document.getElementById('4').innerHTML == mi_ficha &&
  document.getElementById('5').innerHTML == ''){
    boton_ia = document.getElementById(5);
  }
    if(document.getElementById('6').innerHTML == '' &&
  document.getElementById('7').innerHTML == mi_ficha &&
  document.getElementById('8').innerHTML == mi_ficha){
    boton_ia = document.getElementById(6);
  }
   if(document.getElementById('6').innerHTML == mi_ficha &&
  document.getElementById('7').innerHTML == '' &&
  document.getElementById('8').innerHTML == mi_ficha){
    boton_ia = document.getElementById(7);
  }
  if(document.getElementById('6').innerHTML == mi_ficha &&
  document.getElementById('7').innerHTML == mi_ficha &&
  document.getElementById('8').innerHTML == ''){
    boton_ia = document.getElementById(8);
  }
   if(document.getElementById('0').innerHTML == '' &&
  document.getElementById('3').innerHTML == mi_ficha &&
  document.getElementById('6').innerHTML == mi_ficha){
    boton_ia = document.getElementById(0);
  }
  if(document.getElementById('0').innerHTML == mi_ficha &&
  document.getElementById('3').innerHTML == '' &&
  document.getElementById('6').innerHTML == mi_ficha){
    boton_ia = document.getElementById(3);
  }
   if(document.getElementById('0').innerHTML == mi_ficha &&
  document.getElementById('3').innerHTML == mi_ficha &&
  document.getElementById('6').innerHTML == ''){
    boton_ia = document.getElementById(6);
  }
  if(document.getElementById('1').innerHTML == '' &&
  document.getElementById('4').innerHTML == mi_ficha &&
  document.getElementById('7').innerHTML == mi_ficha){
    boton_ia = document.getElementById(1);
  }
  if(document.getElementById('1').innerHTML == mi_ficha &&
  document.getElementById('4').innerHTML == '' &&
  document.getElementById('7').innerHTML == mi_ficha){
    boton_ia = document.getElementById(4);
  }
   if(document.getElementById('1').innerHTML == mi_ficha &&
  document.getElementById('4').innerHTML == mi_ficha &&
  document.getElementById('7').innerHTML == ''){
    boton_ia = document.getElementById(7);
  }
  if(document.getElementById('2').innerHTML == '' &&
  document.getElementById('5').innerHTML == mi_ficha &&
  document.getElementById('8').innerHTML == mi_ficha){
    boton_ia = document.getElementById(2);
  }
   if(document.getElementById('2').innerHTML == mi_ficha &&
  document.getElementById('5').innerHTML == '' &&
  document.getElementById('8').innerHTML == mi_ficha){
    boton_ia = document.getElementById(5);
  }
   if(document.getElementById('2').innerHTML == mi_ficha &&
  document.getElementById('5').innerHTML == mi_ficha &&
  document.getElementById('8').innerHTML == ''){
    boton_ia = document.getElementById(8);
  }
   if(document.getElementById('0').innerHTML == '' &&
  document.getElementById('4').innerHTML == mi_ficha &&
  document.getElementById('8').innerHTML == mi_ficha){
    boton_ia = document.getElementById(0);
  }
   if(document.getElementById('0').innerHTML == mi_ficha &&
  document.getElementById('4').innerHTML == '' &&
  document.getElementById('8').innerHTML == mi_ficha){
    boton_ia = document.getElementById(4);
  }
  if(document.getElementById('0').innerHTML == mi_ficha &&
  document.getElementById('4').innerHTML == mi_ficha &&
  document.getElementById('8').innerHTML == ''){
    boton_ia = document.getElementById(8);
  }
   if(document.getElementById('2').innerHTML == '' &&
  document.getElementById('4').innerHTML == mi_ficha &&
  document.getElementById('6').innerHTML == mi_ficha){
    boton_ia = document.getElementById(2);
  }
   if(document.getElementById('2').innerHTML == mi_ficha &&
  document.getElementById('4').innerHTML == '' &&
  document.getElementById('6').innerHTML == mi_ficha){
    boton_ia = document.getElementById(4);
  }
   if(document.getElementById('2').innerHTML == mi_ficha &&
  document.getElementById('4').innerHTML == mi_ficha &&
  document.getElementById('6').innerHTML == ''){
    boton_ia = document.getElementById(6);
  }
}


  no_ganas();

  function ia_intenta_ganar(){

  if(document.getElementById('0').innerHTML == '' &&
  document.getElementById('1').innerHTML == ficha_IA &&
  document.getElementById('2').innerHTML == ficha_IA){
    boton_ia = document.getElementById(0);
  }
  if(document.getElementById('0').innerHTML == ficha_IA &&
  document.getElementById('1').innerHTML == '' &&
  document.getElementById('2').innerHTML == ficha_IA){
    boton_ia = document.getElementById(1);
  }
  if(document.getElementById('0').innerHTML == ficha_IA &&
  document.getElementById('1').innerHTML == ficha_IA &&
  document.getElementById('2').innerHTML == ''){
    boton_ia = document.getElementById(2);
  }
  if(document.getElementById('3').innerHTML == '' &&
  document.getElementById('4').innerHTML == ficha_IA &&
  document.getElementById('5').innerHTML == ficha_IA){
    boton_ia = document.getElementById(3);
  }
   if(document.getElementById('3').innerHTML == ficha_IA &&
  document.getElementById('4').innerHTML == '' &&
  document.getElementById('5').innerHTML == ficha_IA){
    boton_ia = document.getElementById(4);
  }
    if(document.getElementById('3').innerHTML == ficha_IA &&
  document.getElementById('4').innerHTML == ficha_IA &&
  document.getElementById('5').innerHTML == ''){
    boton_ia = document.getElementById(5);
  }
    if(document.getElementById('6').innerHTML == '' &&
  document.getElementById('7').innerHTML == ficha_IA &&
  document.getElementById('8').innerHTML == ficha_IA){
    boton_ia = document.getElementById(6);
  }
   if(document.getElementById('6').innerHTML == ficha_IA &&
  document.getElementById('7').innerHTML == '' &&
  document.getElementById('8').innerHTML == ficha_IA){
    boton_ia = document.getElementById(7);
  }
  if(document.getElementById('6').innerHTML == ficha_IA &&
  document.getElementById('7').innerHTML == ficha_IA &&
  document.getElementById('8').innerHTML == ''){
    boton_ia = document.getElementById(8);
  }
   if(document.getElementById('0').innerHTML == '' &&
  document.getElementById('3').innerHTML == ficha_IA &&
  document.getElementById('6').innerHTML == ficha_IA){
    boton_ia = document.getElementById(0);
  }
  if(document.getElementById('0').innerHTML == ficha_IA &&
  document.getElementById('3').innerHTML == '' &&
  document.getElementById('6').innerHTML == ficha_IA){
    boton_ia = document.getElementById(3);
  }
   if(document.getElementById('0').innerHTML == ficha_IA &&
  document.getElementById('3').innerHTML == ficha_IA &&
  document.getElementById('6').innerHTML == ''){
    boton_ia = document.getElementById(6);
  }
  if(document.getElementById('1').innerHTML == '' &&
  document.getElementById('4').innerHTML == ficha_IA &&
  document.getElementById('7').innerHTML == ficha_IA){
    boton_ia = document.getElementById(1);
  }
  if(document.getElementById('1').innerHTML == ficha_IA &&
  document.getElementById('4').innerHTML == '' &&
  document.getElementById('7').innerHTML == ficha_IA){
    boton_ia = document.getElementById(4);
  }
   if(document.getElementById('1').innerHTML == ficha_IA &&
  document.getElementById('4').innerHTML == ficha_IA &&
  document.getElementById('7').innerHTML == ''){
    boton_ia = document.getElementById(7);
  }
  if(document.getElementById('2').innerHTML == '' &&
  document.getElementById('5').innerHTML == ficha_IA &&
  document.getElementById('8').innerHTML == ficha_IA){
    boton_ia = document.getElementById(2);
  }
   if(document.getElementById('2').innerHTML == ficha_IA &&
  document.getElementById('5').innerHTML == '' &&
  document.getElementById('8').innerHTML == ficha_IA){
    boton_ia = document.getElementById(5);
  }
   if(document.getElementById('2').innerHTML == ficha_IA &&
  document.getElementById('5').innerHTML == ficha_IA &&
  document.getElementById('8').innerHTML == ''){
    boton_ia = document.getElementById(8);
  }
   if(document.getElementById('0').innerHTML == '' &&
  document.getElementById('4').innerHTML == ficha_IA &&
  document.getElementById('8').innerHTML == ficha_IA){
    boton_ia = document.getElementById(0);
  }
   if(document.getElementById('0').innerHTML == ficha_IA &&
  document.getElementById('4').innerHTML == '' &&
  document.getElementById('8').innerHTML == ficha_IA){
    boton_ia = document.getElementById(4);
  }
  if(document.getElementById('0').innerHTML == ficha_IA &&
  document.getElementById('4').innerHTML == ficha_IA &&
  document.getElementById('8').innerHTML == ''){
    boton_ia = document.getElementById(8);
  }
   if(document.getElementById('2').innerHTML == '' &&
  document.getElementById('4').innerHTML == ficha_IA &&
  document.getElementById('6').innerHTML == ficha_IA){
    boton_ia = document.getElementById(2);
  }
   if(document.getElementById('2').innerHTML == ficha_IA &&
  document.getElementById('4').innerHTML == '' &&
  document.getElementById('6').innerHTML == ficha_IA){
    boton_ia = document.getElementById(4);
  }
   if(document.getElementById('2').innerHTML == ficha_IA &&
  document.getElementById('4').innerHTML == ficha_IA &&
  document.getElementById('6').innerHTML == ''){
    boton_ia = document.getElementById(6);
  }
  }
  ia_intenta_ganar();
}


//mas inteligente

  //colocar en esquinas
  if(modo == 'dificil'){
  if(fichas_puestas == 1 && document.getElementById('4').innerHTML == mi_ficha){
     esquinas = Math.floor(Math.random() * 4);
    if(esquinas == 0){
      boton_ia = document.getElementById('0');
      tactica = 0;
    }
    if(esquinas == 1){
      boton_ia = document.getElementById('2');
      tactica = 1;
    }
    if(esquinas == 2){
      boton_ia = document.getElementById('6');
      tactica = 2;
    } 
    if(esquinas == 3){
      boton_ia = document.getElementById('8');
      tactica = 3;
    }
  }

  if(fichas_puestas == 3 && tactica == 0 
  && document.getElementById('8').innerHTML == mi_ficha){
    esquinas = Math.floor(Math.random() * 2);
    if(esquinas == 0){
      boton_ia = document.getElementById('2');
    }
    if(esquinas == 1){
      boton_ia = document.getElementById('6');
  }
}
  if(fichas_puestas == 3 && tactica == 1 
  && document.getElementById('6').innerHTML == mi_ficha){
    esquinas = Math.floor(Math.random() * 2);
    if(esquinas == 0){
      boton_ia = document.getElementById('0');
    }
    if(esquinas == 1){
      boton_ia = document.getElementById('8');
  }
  }

if(fichas_puestas == 3 && tactica == 2 
  && document.getElementById('2').innerHTML == mi_ficha){
    esquinas = Math.floor(Math.random() * 2);
    if(esquinas == 0){
      boton_ia = document.getElementById('0');
    }
    if(esquinas == 1){
      boton_ia = document.getElementById('8');
  }
}
if(fichas_puestas == 3 && tactica == 3 
  && document.getElementById('0').innerHTML == mi_ficha){
    esquinas = Math.floor(Math.random() * 2);
    if(esquinas == 0){
      boton_ia = document.getElementById('2');
    }
    if(esquinas == 1){
      boton_ia = document.getElementById('6');
  }
}
}

// modo dificil cuando empieza IA

if(modo == 'dificil' && una_vez == 2){
  //tencnica colocar en fila
  if(fichas_puestas == 2 && document.getElementById('0').innerHTML == mi_ficha){
    boton_ia = document.getElementById('8');
    ataque_fila = 0;
  }
  if(fichas_puestas == 2 && document.getElementById('2').innerHTML == mi_ficha){
    boton_ia = document.getElementById('6');
    ataque_fila = 2;
  }
  if(fichas_puestas == 2 && document.getElementById('6').innerHTML == mi_ficha){
    boton_ia = document.getElementById('2');
    ataque_fila = 6;
  }
  if(fichas_puestas == 2 && document.getElementById('8').innerHTML == mi_ficha){
    boton_ia = document.getElementById('0');
    ataque_fila = 8;
  }

//tencnica colocar en fila y ataque 

  if(ataque_fila == 0 && fichas_puestas == 4 && document.getElementById('5').innerHTML == mi_ficha){
    boton_ia = document.getElementById('6');
    modo_ataque = true;
  }
  if(ataque_fila == 0 && fichas_puestas == 4 && document.getElementById('7').innerHTML == mi_ficha){
    boton_ia = document.getElementById('2');
    modo_ataque = true;
  }
  if(ataque_fila == 2 && fichas_puestas == 4 && document.getElementById('3').innerHTML == mi_ficha){
    boton_ia = document.getElementById('8');
    modo_ataque = true;
  }
  if(ataque_fila == 2 && fichas_puestas == 4 && document.getElementById('7').innerHTML == mi_ficha){
    boton_ia = document.getElementById('0');
    modo_ataque = true;
  }
  if(ataque_fila == 6 && fichas_puestas == 4 && document.getElementById('1').innerHTML == mi_ficha){
    boton_ia = document.getElementById('8');
    modo_ataque = true;
  }
  if(ataque_fila == 6 && fichas_puestas == 4 && document.getElementById('5').innerHTML == mi_ficha){
    boton_ia = document.getElementById('0');
    modo_ataque = true;
  }
  if(ataque_fila == 8 && fichas_puestas == 4 && document.getElementById('1').innerHTML == mi_ficha){
    boton_ia = document.getElementById('6');
    modo_ataque = true;
  }
  if(ataque_fila == 8 && fichas_puestas == 4 && document.getElementById('3').innerHTML == mi_ficha){
    boton_ia = document.getElementById('2');
    modo_ataque = true;
  }

  //si yo pongo en los del medio

  
  if( fichas_puestas == 2 && document.getElementById('1').innerHTML == mi_ficha){
    boton_ia = document.getElementById('2');
     ataque = 1;
  }
  if( fichas_puestas == 2 && document.getElementById('3').innerHTML == mi_ficha){
    boton_ia = document.getElementById('0');
     ataque = 3;
  }
   if( fichas_puestas == 2 && document.getElementById('5').innerHTML == mi_ficha){
    boton_ia = document.getElementById('8');
     ataque = 5;
  }
  if( fichas_puestas == 2 && document.getElementById('7').innerHTML == mi_ficha){
    boton_ia = document.getElementById('8');
     ataque = 7;
  }
  if(ataque == 1 && fichas_puestas == 4 ){
    boton_ia = document.getElementById('8')
  }
  if(ataque == 3 && fichas_puestas == 4 ){
    boton_ia = document.getElementById('2')
  }
  if(ataque == 5 && fichas_puestas == 4 ){
    boton_ia = document.getElementById('6')
  }
  if(ataque == 7 && fichas_puestas == 4 ){
    boton_ia = document.getElementById('2')
  }

}

if(modo == 'normal' || modo == 'dificil'){
no_ganas();
}
if(ataque != -1 || modo_ataque == true){
 ia_intenta_ganar();
}


  //FICHA IA SE PONE
  if (fichas_puestas < 9 && turno === 1 && boton_ia.innerHTML === "" && partida_terminada === false) {
    boton_ia.innerHTML = ficha_IA;
    fichas_puestas++;
    turno = 0;
    ganador = 'IA';
  }
  //FICHA IA SE PONE
  if (fichas_puestas < 9 && turno === 1 && boton_ia.innerHTML !== "" && partida_terminada === false) {
    for (let index = 0; index < 9; index++) {
      id_boton_ia++;
      boton_ia = document.getElementById(id_boton_ia);
      if (boton_ia.innerHTML === "") {
        boton_ia.innerHTML = ficha_IA;
        fichas_puestas++;
        turno = 0;
        ganador = 'IA';
        index = 9;
      }
    }
  }
  fila1 = [document.getElementById('0').innerHTML, document.getElementById('1').innerHTML,  document.getElementById('2').innerHTML];
  fila2 = [document.getElementById('3').innerHTML,  document.getElementById('4').innerHTML,  document.getElementById('5').innerHTML];
  fila3 = [ document.getElementById('6').innerHTML,  document.getElementById('7').innerHTML, document.getElementById('8').innerHTML];
  columna1 = [ document.getElementById('0').innerHTML,  document.getElementById('3').innerHTML,  document.getElementById('6').innerHTML];
  columna2 = [ document.getElementById('1').innerHTML,  document.getElementById('4').innerHTML,  document.getElementById('7').innerHTML];
  columna3 = [ document.getElementById('2').innerHTML,  document.getElementById('5').innerHTML, document.getElementById('8').innerHTML];
  diagonal1 = [ document.getElementById('0').innerHTML, document.getElementById('4').innerHTML,  document.getElementById('8').innerHTML];
  diagonal2 = [ document.getElementById('6').innerHTML,  document.getElementById('4').innerHTML,  document.getElementById('2').innerHTML];
  
  if(partida_terminada === false){
  
  if ( fila1[0] == combinacionO[0] && fila1[1] == combinacionO[1] && fila1[2] == combinacionO[2] ||fila1[0] == combinacionX[0] && fila1[1] == combinacionX[1] && fila1[2] == combinacionX[2] ) {
  quien_gana();
  document.getElementById('0').style.backgroundColor = 'red';
  document.getElementById('1').style.backgroundColor = 'red';
  document.getElementById('2').style.backgroundColor = 'red';
  }else if( fila2[0] == combinacionO[0] && fila2[1] == combinacionO[1] && fila2[2] == combinacionO[2] ||fila2[0] == combinacionX[0] && fila2[1] == combinacionX[1] && fila2[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('3').style.backgroundColor = 'red';
  document.getElementById('4').style.backgroundColor = 'red';
  document.getElementById('5').style.backgroundColor = 'red';
  }else if( fila3[0] == combinacionO[0] && fila3[1] == combinacionO[1] && fila3[2] == combinacionO[2] ||fila3[0] == combinacionX[0] && fila3[1] == combinacionX[1] && fila3[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('6').style.backgroundColor = 'red';
  document.getElementById('7').style.backgroundColor = 'red';
  document.getElementById('8').style.backgroundColor = 'red';
  }else if( columna1[0] == combinacionO[0] && columna1[1] == combinacionO[1] && columna1[2] == combinacionO[2] || columna1[0] == combinacionX[0] && columna1[1] == combinacionX[1] && columna1[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('0').style.backgroundColor = 'red';
  document.getElementById('3').style.backgroundColor = 'red';
  document.getElementById('6').style.backgroundColor = 'red';
  }else if( columna2[0] == combinacionO[0] && columna2[1] == combinacionO[1] && columna2[2] == combinacionO[2] || columna2[0] == combinacionX[0] && columna2[1] == combinacionX[1] && columna2[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('1').style.backgroundColor = 'red';
  document.getElementById('4').style.backgroundColor = 'red';
  document.getElementById('7').style.backgroundColor = 'red';
  }else if( columna3[0] == combinacionO[0] && columna3[1] == combinacionO[1] && columna3[2] == combinacionO[2] || columna3[0] == combinacionX[0] && columna3[1] == combinacionX[1] && columna3[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('2').style.backgroundColor = 'red';
  document.getElementById('5').style.backgroundColor = 'red';
  document.getElementById('8').style.backgroundColor = 'red';
  }else if( diagonal1[0] == combinacionO[0] && diagonal1[1] == combinacionO[1] && diagonal1[2] == combinacionO[2] || diagonal1[0] == combinacionX[0] && diagonal1[1] == combinacionX[1] && diagonal1[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('0').style.backgroundColor = 'red';
  document.getElementById('4').style.backgroundColor = 'red';
  document.getElementById('8').style.backgroundColor = 'red';
  }else if( diagonal2[0] == combinacionO[0] && diagonal2[1] == combinacionO[1] && diagonal2[2] == combinacionO[2] || diagonal2[0] == combinacionX[0] && diagonal2[1] == combinacionX[1] && diagonal2[2] == combinacionX[2] ){
  quien_gana();
  document.getElementById('6').style.backgroundColor = 'red';
  document.getElementById('4').style.backgroundColor = 'red';
  document.getElementById('2').style.backgroundColor = 'red';
  }
  };



  function quien_gana() {
    if(ganador == 'yo'){
      document.getElementById('texto_victoria').style.display = "block";
      document.getElementById('reiniciar').style.display = "block";
      partida_terminada = true;
    }else if(ganador == 'IA'){
      document.getElementById('texto_victoria').innerHTML = 'Has perdido';
      document.getElementById('texto_victoria').style.color = 'red';
      document.getElementById('texto_victoria').style.display = "block";
      document.getElementById('reiniciar').style.display = "block";
      partida_terminada = true;
    } 
  }
  }

  if(fichas_puestas === 9 &&  partida_terminada == false){
    document.getElementById('texto_victoria').innerHTML = 'Has empatado';
    document.getElementById('texto_victoria').style.color = 'ORANGE';
    document.getElementById('texto_victoria').style.display = "block";
    document.getElementById('reiniciar').style.display = "block";
    partida_terminada === true;
  }
}