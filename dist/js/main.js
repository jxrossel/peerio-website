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

			$('[data-page="signup"]').each(function(index, $el){
				console.log('SIGNUP PAGE!');
				App.setPasswordStrengthBar($('form'), 80);
			});
		},

		scrollToElement: function($element, offset, duration){
	        offset = offset || 0;
	        duration = duration || 200;

	        $('html, body').animate({
	            scrollTop: $element.offset().top + offset
	        }, duration);
	    },

		// this will set the strength bar visual indicator, pass the jquery form element and percentage
	    setPasswordStrengthBar: function($form, percentage){
	    	var $bar = $form.find('.password-strength .current-strength-bar');

	    	if(percentage <= 40){
	    		$bar.removeClass('medium high').addClass('low');
	    	}else if(percentage <= 60){
	    		$bar.removeClass('low high').addClass('medium');
	    	}else{
	    		$bar.removeClass('low medium').addClass('high');
	    	}

	    	$bar.width(percentage + "%");
	    },
	};

	App.init();

})