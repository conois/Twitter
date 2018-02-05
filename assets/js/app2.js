$(document).ready(function(){
	$("#tweet").click(postear); 
	$(document).on('click', '.glyphicon-heart', heartclick);
	$(document).on('click', '.glyphicon-trash', deletePost);
	$("#newpost").keyup(countPost);
}); 

function postear(){
	let post= $("#newpost").val();
	if(post.length == 0){
		return false; 
	}
	let momentoActual= new Date();
	let hora= momentoActual.getHours(); 
	let minutos= momentoActual.getMinutes();  
	let time= hora + ":" + minutos; 
	$("#boxpost").append('<div class="post col-xs-10 col-lg-10">'+
													'<p class="mess col-xs-12">' + time + '<br>'+ post +'</p>'+
													'<div class="col-xs-12 divpost">'+
														'<p class="icons-post"><span class="glyphicon glyphicon-heart"></span><span class="glyphicon glyphicon-trash"></span></p>'+
													'</div>'+
												'</div>'); 
	$("#newpost").val('');
	$("#cuenta").html('140').addClass('colorCuatro').removeClass('colorTres');

}


function heartclick(){
	$(this).css({'color': '#FA3838'}); 
}

function deletePost(){
	let padre = $(this).parent().parent(); 
	$(padre).parent().remove(); 
	
}

function countPost(){
		let post= $("#newpost").val();
		let largePost= post.length; 
		let cont= 140; 
		cont = cont-largePost ; 
		$("#cuenta").html(cont); 

		if(largePost >=120){
			$('#cuenta').addClass('colorDos').removeClass('colorTres').removeClass('colorCuatro'); 
			$('#tweet').removeAttr('disabled');
			if(largePost >=130){
				$('#cuenta').removeClass('colorDos').addClass('colorTres').removeClass('colorUno');
				$('#tweet').removeAttr('disabled');
				if(largePost >140){
					$('#cuenta').removeClass('colorTres').addClass('colorUno'); 
					$('#tweet').attr('disabled','true');
					return false; 
				}
			}
		}
		cont= 140;	
}
