$(function(){
	$('#menu ul > li > a').on('click', function myFunction(){
		if($('.menuopen').hasClass('menuopen')){            /*Added conditional statement to this function so the submenus don't automatically collapse*/ 
			$('.menuopen').slideUp(250).removeClass('menuopen');
		}
		else{
			$(this).parent().find('.submenu').slideDown(250).addClass('menuopen');
		}
	});
	
	$(window).resize(function (){                            /*This function makes sure the menu is open when in desktop mode and it collapses into the hamburger when switching to mobile*/ 
		if($('#mobileMenuBtn').css('display') === 'none'){
			$('#menu').slideDown(0).addClass('mainmenuopen');	
		}
		else{
			$('#menu').slideUp(0).removeClass('mainmenuopen');
		}
		
	});
	
	$('#mobileMenuBtn').on('click', function(){
		if($('#menu').hasClass('mainmenuopen')){
			$('#menu').slideUp(250).removeClass('mainmenuopen');
		}else{		
			$('#menu').slideDown(250).addClass('mainmenuopen');	
		}		
	});
	
});