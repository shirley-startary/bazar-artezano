$(window).on("load",function(){

 $(function() {
  $('select').material_select();
  $('#requisitos').hide();
  $('#derecho-autor').change(mostrarRequisitos)
  $('#file-input').change(function(e) {
      addImage(e);
  });

  function checarInputRequisitos () {
    
  }



  function mostrarRequisitos() {
    var derecho = $('#derecho-autor').val();
    if (derecho == 2) {
      $('#requisitos').show(200);
    } else {
      $('#requisitos').hide();
    }
  }

  function addImage(e){
  var file = e.target.files[0],
  imageType = /image.*/;

  if (!file.type.match(imageType))
   return;

  var reader = new FileReader();
  reader.onload = fileOnload;
  reader.readAsDataURL(file);
  }

     function fileOnload(e) {
      var result=e.target.result;
      $('#imgSalida').attr("src",result);
     }
   });
});
