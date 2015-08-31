 $(document).ready(function() {

 $('#form_id').hide(); //Initially form wil be hidden.

  $('#button_id').on('click', function(e) {
   $('#form_id').toggle();//Form shows on button click
		$(this).toggleClass('form_id');
   });
  // $('#submit_id').click(function(){
  // 	$('#form_id').hide();
  // })
 });
