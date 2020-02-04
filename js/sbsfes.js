$(function(){

	answer=function(){
		$(".question").css("display","none");
		$(".movie").css("display","block");
		$("#v01")[0].load();
		$("#v01")[0].play();
	}	
   $( 'input[name="a"]:radio' ).change( function() {
         $('#b1').removeAttr('disabled');
   }); 
	$("#v01")[0].addEventListener('ended',function() {
		$(".movie").css("display","none");
		$(".question").css("display","block");
		$(".a_img").css("display","block");
		$(".a_img").css("float","left");
		$(".q_img").css("float","left");
		$(".sign").css("display","block");
		jadg();
    });

	jadg=function(){
    	var radioVal = $("input[name='a']:checked").val();
    	if (radioVal == 3){
    		$("#btnsound1").prop('volume',0.5);
			$("#btnsound1")[0].currentTime = 0;
			$("#btnsound1")[0].play();
		} else {
    		$("#btnsound2").prop('volume',0.5);
			$("#btnsound2")[0].currentTime = 0;
			$("#btnsound2")[0].play();
		}
	}


	open_movie=function(ele){
		var video_id = "#v" + ele;
		var movie_id = "#m" + ele;
		$(movie_id).css("display","block");
		$(video_id)[0].load();
		$(video_id)[0].play();
		/*
		$(video_id)[0].addEventListener('ended',function() {
                close_movie(ele);
            });
        */
	}
	play_movie=function(ele) {
		var video_id = "#v" + ele;
		$(video_id)[0].play();
	}
	stop_movie=function(ele) {
		var video_id = "#v" + ele;
		$(video_id)[0].pause();
	}
	head_movie=function(ele) {
		var video_id = "#v" + ele;
		$(video_id)[0].currentTime=0;
	}
	close_movie=function(ele) {
		var video_id = "#v" + ele;
		var movie_id = "#m" + ele;
		$(video_id)[0].pause();
		$(video_id)[0].currentTime=0;
		$(video_id)[0].load();
		$(movie_id).css("display","none");
	}
    
    
var video = document.getElementById("v01");

video.addEventListener("timeupdate", function(){
	if(video.currentTime < 10){
		$("#telop01").html(video.currentTime);
	} else if(video.currentTime < 20){
		$("#telop01").html("bbb");
	} else if(video.currentTime < 30){
		$("#telop01").html("ccc");
	} else {
		$("#telop01").html("");
	}   
}); 
}); 
