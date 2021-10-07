function insert(num){
  var numero = document.getElementById('visor').innerHTML;
  document.getElementById('visor').innerHTML = numero + num;
}

function limpaVisor(){
  document.getElementById('visor').innerHTML = "";
}


function calcular(){
  var visor = document.getElementById('visor').innerHTML;
  if(visor){
      document.getElementById('visor').innerHTML = eval(visor)
  }else{
      document.getElementById('visor').innerHTML= "Erro";
  }
}