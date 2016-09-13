$(function(){
	$('.toggle-nav').click(function(e) {
		e.stopPropagation();
		toggleNav();
	});

	$('#main').click(function (e){
        var target = $(e.target);
        if(!target.closest('#nav').length && $('#menu-var').hasClass('show-nav')) toggleNav();
  });

  function toggleNav(){
    if($('#menu-var').hasClass('show-nav')){
      $('#menu-var').removeClass('show-nav');   
    }else{
      $('#menu-var').addClass('show-nav');
    }
  }
});




$(document).ready(function(){
  var x = true;
  $(".toggle-nav").click(function(){
    x = (x == false)?true:false;
    if(x){
      $('#main-content').attr('id','menu-main');
    }else{
      $('#menu-main').attr('id','main-content');
    }
  });
});