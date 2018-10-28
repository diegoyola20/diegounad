// JavaScript Document

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  x=$("#mision");
  x.click(mision);
    x=$("#vision");
  x.click(vision);
    x=$("#himno");
  x.click(himno);
    x=$("#video");
  x.click(video);
}



function mision()
{
  var x=$("#centroeje1");
  x.show("fast");
      var x=$("#centroeje2");
  x.hide("fast");
        var x=$("#centroeje3");
  x.hide("fast");
        var x=$("#centroeje4");
  x.hide("fast");
  
  
  
}

function vision()
{
     var x=$("#centroeje2");
  x.show("fast");
  var x=$("#centroeje1");
  x.hide("fast");
    var x=$("#centroeje3");
  x.hide("fast");
    var x=$("#centroeje4");
  x.hide("fast");
}
function himno()
{
  var x=$("#centroeje3");
  x.show("fast");
      var x=$("#centroeje1");
  x.hide("fast");
        var x=$("#centroeje2");
  x.hide("fast");
        var x=$("#centroeje4");
  x.hide("fast");
  
  
}

function video()
{
     var x=$("#centroeje4");
  x.show("fast");
  var x=$("#centroeje1");
  x.hide("fast");
    var x=$("#centroeje2");
  x.hide("fast");
    var x=$("#centroeje3");
  x.hide("fast");
}