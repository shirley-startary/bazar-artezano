$(document).ready(function() {
    $('select').material_select();
	$('#dvComunidad').hide();
	$('#dvTipArt').hide();
	$('#dvMarca').hide();	
	
	//Funcion para mostrar los div de los otros elmentos
	$('#idRTipUsr').change(function(){
		var tipUsr = $('#idRTipUsr').val();
		if(tipUsr =='artesano'){
			$('#dvComunidad').show(200);
			$('#dvTipArt').show(200);
			$('#dvMarca').show(200);
		}
		else{
			$('#dvComunidad').hide();
			$('#dvTipArt').hide();
			$('#dvMarca').hide();	
		}
	});	
	
  });
  
	
 