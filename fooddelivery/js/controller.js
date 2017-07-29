
$(document).ready(function(){
	$('.sign_inbar_email').keyup(function(){
		if($(this).val()=='bhaskar@gmail.com'){
			$.get('respdata.json',function(response,status){
				var t= response.india;
				$('.sign_up_email').val(t);
			});
		}
	});

	(function(){
		// a=20;
		console.log(a);
		var a=30;
		console.log(a);
	})();
	console.log(a);
});