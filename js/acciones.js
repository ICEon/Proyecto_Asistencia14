// JavaScript Document

var $contenido
var $esta

$(document).ready(function(){
	


document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {



 window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

$('.Btn_Guardar').tap(function(){

	$('#listado li').each(function (index) {
		$esta = $('#' + $(this).attr('id') + ' a').css('color');
		alert ($esta);
		
$contenido = $contenido + $(this).attr("id") + "," + $('#' + $(this).attr('id') + ' a').val() + ""; 
  });
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
