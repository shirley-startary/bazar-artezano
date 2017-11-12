$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
	
	$('#btnMCancelar').on('click',function(){
		$('#modalLogin').modal('close');
	});
  });
       