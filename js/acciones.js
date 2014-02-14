// JavaScript Document

var $contenido = ""
var $color
var $esta
var $nombre=""
				
$(document).ready(function(){
	


document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {



 

$('.Btn_Guardar').tap(function(){
Guardar();
});


$("li").tap(function() {
	
	var Asiste = $(this).attr("data-icon");
var $Quien = $(this).attr('id');
	if (Asiste == 'delete')
	{
		$(this).buttonMarkup({ icon: "check" });
		$('#' + $Quien + ' a').css('color', '#0F0');
	}
	
	if (Asiste == 'check')
	{
  	    $(this).buttonMarkup({ icon: "delete" });
		$('#' + $Quien + ' a').css('color', '#F00');
	}

    });  

   }
});

            function gotFS(fileSystem) {

				 var fecha = new Date();


 
$nombre = fecha.getDate() + "-" + (fecha.getMonth() +1) + "-" + fecha.getFullYear() + "-" + fecha.getHours() + "-" + fecha.getMinutes() + "-" + fecha.getSeconds();
				
   fileSystem.root.getDirectory("Datos_Asistencia", {create: true}, gotDir);
}

function gotDir(dirEntry) {
    dirEntry.getFile($nombre+".csv", {create: true, exclusive: true}, gotFileEntry);


            }

            function gotFileEntry(fileEntry) {
                fileEntry.createWriter(gotFileWriter, fail);
            }

            function gotFileWriter(writer) {
                writer.onwrite = function(evt) {				
					
alert ("Archivo Guradado");
                };

                writer.write($contenido);
                writer.abort();

            }

            function fail(error) {
                console.log("error : "+error.code);
            }
function Guardar()
{
	$contenido = "";
	
		$('#listado li').each(function (index) {
		$color = $('#' + $(this).attr('id') + ' a').css('color');
		
		if ($color == 'rgb(255, 0, 0)')
		{
			$esta = 'NA';
		}
		if ($color == 'rgb(0, 255, 0)')		
		{
			$esta = 'A';
		}
		
		
$contenido = $contenido + $(this).attr("id") + "," + $('#' + $(this).attr('id') + ' a').text() + "," + $esta + "\n"; 
  });
  
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

}