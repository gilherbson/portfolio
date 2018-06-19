$( document ).ready(function() {
	
	//animar meu nome
	$("#gilherbson").hide();
	$("#gilherbson").fadeIn(1500);


	$("#esquerda").hide();
	$("#esquerda").fadeIn(1500);



    $('body').on('mouseover', '#subtitulo', function() {
        $("#subtitulo").removeClass("linkA");
        $("#subtitulo").addClass("linkB");
    });
    $('body').on('mouseout', '#subtitulo', function() {
        $("#subtitulo").removeClass("linkB");
        $("#subtitulo").addClass("linkA");
    });


//contato

 	 $("#enviarb").on("click", function(){
        alert("Mensagem enviada?")

      });

     $("#apagarb").on("click", function(){
        alert("Itens apagados")

     });

});
