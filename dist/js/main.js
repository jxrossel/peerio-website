$(window).load(function() {

	var $html = $('html');
	var $body = $html.find('body');
	var $main = $body.find('.main');
	var $content = $body.find('.content-section');

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
				$('span.sign-button-platform').text('Download for Android')				
			}
			else if (navigator.userAgent.match('Chrome')) {
				$('a.sign-button').attr('href', '#');
				$('span.sign-button-platform').text('Download for Google Chrome')				
			}
			else if (navigator.userAgent.match('Windows')) {
				$('a.sign-button').attr('href', '#');
				$('span.sign-button-platform').text('Download for Windows')				
			}
			else if (navigator.userAgent.match('Macintosh')) {
				$('a.sign-button').attr('href', '#');
				$('span.sign-button-platform').text('Download for Mac')				
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

})