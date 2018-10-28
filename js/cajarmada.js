// JavaScript Document


var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  x=$("#misiona");
  x.click(mision1);
    x=$("#visiona");
  x.click(vision1);
    x=$("#himnoa");
  x.click(himno1);
    x=$("#videoa");
  x.click(video1);
}



function mision1()
{
  var x=$("#mision1");
  x.slideToggle (800);
      var x=$("#vision1");
  x.hide("");
        var x=$("#himno1");
  x.hide("");
        var x=$("#video1");
  x.hide("");
  
}
function vision1()
{
  var x=$("#vision1");
 x.slideToggle (800);
      var x=$("#mision1");
  x.hide("");
        var x=$("#himno1");
  x.hide("");
        var x=$("#video1");
  x.hide("");
  
}
function himno1()
{
  var x=$("#himno1");
  x.slideToggle ( 800);
      var x=$("#mision1");
  x.hide("");
        var x=$("#vision1");
  x.hide("");
        var x=$("#video1");
  x.hide("");
  
}
function video1()
{
  var x=$("#video1");
  x.slideToggle (800);
      var x=$("#mision1");
  x.hide("");
        var x=$("#vision1");
  x.hide("");
        var x=$("#himno1");
  x.hide("");
  
}



