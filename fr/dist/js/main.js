$(window).load(function() {

	var $html = $('html');
	var $body = $html.find('body');
	var $main = $body.find('.main');
	var $content = $body.find('.content-section');
	var $version = '(1.0.4.2)';

	var App = {
		init: function(){
			var _this = this;

			$html = $('html');
			$body = $html.find('body');
			$main = $body.find('.main');

			App.bindEvent();
			App.bindDownloadButton();
		},

		bindDownloadButton: function() {
			if (navigator.userAgent.match('Mobile')) {
				$('a.sign-button').attr('href', '#');
				$('span.sign-button-platform').text('Bientôt disponible pour mobile')				
			}
			else if (navigator.userAgent.match('Chrome')) {
				$('a.sign-button').attr('href', 'https://chrome.google.com/webstore/detail/khipofjlgnklanmhddccafbogkkhmdpm');
				$('span.sign-button-platform').text('Télécharger pour Google Chrome ' + $version)		
				$('a.sign-button').unbind().on('click', function(e) {
					e.preventDefault()
					chrome.webstore.install(
						'https://chrome.google.com/webstore/detail/khipofjlgnklanmhddccafbogkkhmdpm'
					)
				})
			}
			else if (navigator.userAgent.match('Windows')) {
				$('a.sign-button').attr('href', 'https://peerio.com/download/peerio-win.exe');
				$('span.sign-button-platform').text('Télécharger pour Windows ' + $version)				
			}
			else if (navigator.userAgent.match('Macintosh')) {
				$('a.sign-button').attr('href', 'https://peerio.com/download/peerio-mac.zip');
				$('span.sign-button-platform').text('Télécharger pour Mac ' + $version)				
			}
		},

		bindEvent: function(){
			$body.find('[data-action="scrollToContent"]').on('click', function(e){
				App.scrollToElement($content, -20);
			});

			$body.find('[data-action="toggleMobileMenu"]').on('click', function(e){
				$body.find('.menu-wrapper').toggleClass('closed');
			});

			$body.find('[data-action="showMorePrice"]').on('click', function(e){
				$(this).parents('.price-item').find('.additional-info')
				.stop(true, true).slideToggle(200);
			});
		},

		scrollToElement: function($element, offset, duration){
	        offset = offset || 0;
	        duration = duration || 200;

	        $('html, body').animate({
	            scrollTop: $element.offset().top + offset
	        }, duration);
	    }
	};

	App.init();

	
	$(document).ready(function(){
     $(".info-bubble").mouseover(function(){
         $(".info-bubble-popup").css("display", "inline");
         $(".info-bubble").css("display", "none");
     });
	 
     $(".info-bubble").mouseleave(function(){
         $(".info-bubble-popup").css("display", "none");
         $(".info-bubble").css("display", "inline");
     });
	 
     $(".info-bubble-popup").mouseover(function(){
         $(".info-bubble-popup").css("display", "inline");
         $(".info-bubble").css("display", "none");
     });
	 
     $(".info-bubble-popup").mouseleave(function(){
         $(".info-bubble-popup").css("display", "none");
         $(".info-bubble").css("display", "inline");
     });
	 
	});

})

	function showVideo() {
        $(".video2").css("display", "inline");
		var player = document.getElementById("player");
		var data = { method: "play" };
		player.contentWindow.postMessage(JSON.stringify(data), "*");
     };	 
	 
	function hideVideo() {
        $(".video2").css("display", "none");
		var player = document.getElementById("player");
		var data = { method: "pause" };
		player.contentWindow.postMessage(JSON.stringify(data), "*");
     };
