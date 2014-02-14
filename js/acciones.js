// JavaScript Document
$(document).ready(function(){
	


document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {

alert ("listo");
writeFiles();
// window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

$("li").bind(function() {
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


function writeFiles(){
	var content = "este es el contenido"
	//$('#fileContent').val();
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){
		fileSystem.root.getFile('ejemplo-write.txt', { create: true }, function(archivo){
			archivo.createWriter(function(escritor){
				escritor.onwrite = function(e){
					pgAlert("El archivo fue escrito Correctamente!");
				};
				escritor.write(content);
			}, function(){
				pgAlert("No existe el archivo, agrega contenido y luego presiona en Escribir");
			});
		}, function(err){
			pgAlert("No se pudo acceder al sistema de archivos");
		});
	}, function(err){
		pgAlert("No se pudo acceder al sistema de archivos");
	});
}