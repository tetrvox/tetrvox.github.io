
common = (function($) {
    var o = {};
	
	
	// Final version
	o.showTopNavigation = function(){
		var $wrapper = $('.hidden-block-wrapper');
		var $button = $wrapper.find('> .show-block');		
        
		$button.click(function(){
			var $currentBlock = $(this).find('+ .hidden-block');			
			
			if ($currentBlock.hasClass('visible')) {				
				panelToggle($currentBlock); // Current block is hiding
			} else {				
				var $activeBlock = $wrapper.find('.visible');
				var isActiveBlock = $activeBlock.size() > 0;
				
				if (isActiveBlock) {
					panelToggle($activeBlock); // Active block is hiding
				}
				
				panelToggle($currentBlock); // Current block is appearing
			}			
        });
		
		function panelToggle(panel){
			var button = panel.parent().find('> .show-block');
			
			panel.slideToggle(function(){
				panel.toggleClass('visible').removeAttr('style');
			});
			button.toggleClass('active');
		}
    };	
	
	
	
	// I
	o.sliderInitialization = function() {
		var query = Modernizr.mq('(max-width: 768px)');
		
		if (query) {
			$('.bxslider').bxSlider({
			  mode: 'horozontal',
			  captions: true
			});
			
			$('.bxslider2').bxSlider({
			  mode: 'fade',
			  captions: false
			});	
		}
	};
    
	o.tabsInitialization = function(){
		$('#tab-container').easytabs();
		//var tabsNames = "#tabs-all, #tabs-hardware, #tabs-software, #tabs-consulting, #tabs-hosting, #tabs-startup";
		$("#tabs-all").bxSlider({
			  minSlides: 2,
			  maxSlides: 3,
			  slideWidth: 120,
			  adaptiveHeight: true,
			  responsive: false,
			  slideMargin: 3,
			  autoControls: true,
			});
		$("#tabs-hardware").bxSlider({
			  minSlides: 2,
			  maxSlides: 3,
			  slideWidth: 120,
			  adaptiveHeight: true,
			  responsive: false,
			  slideMargin: 3,
			  autoControls: true,
			});
	};
    
    return o;
})($);



$(document).ready(function(){	
	common.showTopNavigation();
	common.sliderInitialization();
	common.tabsInitialization();

	$("#first-slide").load(function(){
  		var height = $(this).height();
   		$( ".bx-viewport" ).css( "height", height );
	});

	$(".bx-wrapper").css("max-width", "900px");
	$(".bx-wrapper").removeAttr('height');
	$(".bx-viewport").css("height", "320px");

});


$(window).resize(function(){	
	//alert('Изменился размер окна');
});
