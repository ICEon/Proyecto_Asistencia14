// JavaScript Document

var $contenido
var $color
var $esta

$(document).ready(function(){
	


document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {



 window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

$('.Btn_Guardar').tap(function(){

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
		
		alert ($esta);
		
$contenido = $contenido + $(this).attr("id") + "," + $('#' + $(this).attr('id') + ' a').val() + "," + $esta; 
  });
  
  alert ($contenido);
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
   fileSystem.root.getDirectory("Datos_Asistencia", {create: true}, gotDir);
}

function gotDir(dirEntry) {
    dirEntry.getFile("Asistencia.txt", {create: true, exclusive: true}, gotFileEntry);


            }

            function gotFileEntry(fileEntry) {
                fileEntry.createWriter(gotFileWriter, fail);
            }

            function gotFileWriter(writer) {
                writer.onwrite = function(evt) {				
					
                    console.log("Correcto");
                };

  
                writer.write("Esto es el contenido");
                writer.abort();
                // contents of file now 'some different text'
            }

            function fail(error) {
                console.log("error : "+error.code);
            }
