
//<!--    portfolio  JS  =================    -->
window.addEventListener("load", function() {
  console.log("all loaded!");
	$(".sk-cube-grid").hide();
	$("#portfolio").fadeIn('slow');
}, false); 

$(function() {
	
	loadCountries(55,"prague");
	loadCountries(12,"budapest");
	loadCountries(24,"italy");
	loadCountries(10,"larnaca");
	loadCountries(22,"munich");
	loadCountries(57,"vienna");
	loadCountries(22,"propose");
	
	var selectedClass = "";
	$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
		$("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
		setTimeout(function() {
			$("."+selectedClass).fadeIn().addClass('scale-anm');
			$("#portfolio").fadeTo(300, 1);
		}, 300); 

	});
	
	$("button").click(function(){ 
		$("button").removeClass("active");
		$(this).addClass("active");
	});

	var sound = new Audio("content/mp3/perfect-ed-sheeran.mp3");
	sound.play();
	$('#sound').click(function() {
		if ($(this).hasClass("active")) {
			sound.pause();
			$(this).removeClass("active");
			$(this).find('i').addClass('fa-play-circle');
			$(this).find('i').removeClass('fa-pause-circle');
		}else{
			sound.play();
			$(this).addClass("active");
			$(this).find('i').removeClass('fa-play-circle');
			$(this).find('i').addClass('fa-pause-circle');
		}
	});

});

function loadCountries(imagesNum,country){
	pragueHTML = "";
	for (var i = 1; i <= imagesNum; i++) {
		pragueHTML += '<div class="tile scale-anm   '+country+' image"><img src="content/images/'+country+'/1 ('
				+ i + ').jpg" /></div>';
	}
	$("#"+country).replaceWith(pragueHTML);
}
