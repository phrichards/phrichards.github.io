$(function(){
	
  enquire.register("screen and (max-width:940px)", {
    match: function(){
      $('.header-logo').attr('src', '../dist/img/phrichards-small.png');
    },
    unmatch: function(){
      $('.header-logo').attr('src', '../dist/img/phrichards-big.png');
    }
  });

  enquire.register("screen and (max-width:800px)", {
    match: function(){
      $('.header-logo').attr('src', '../dist/img/phrichards-smaller.png');
      $('nav').addClass('768-nav');
    },
    unmatch: function(){
      $('.header-logo').attr('src', '../dist/img/phrichards-small.png');
    }
  });

  enquire.register("screen and (max-width:640px)", {
    match: function(){
      $('.header-logo').attr('src', '../dist/img/phrichards-smallest.png');
    },
    umatch: function(){
      $('.header-logo').attr('src', '../dist/img/phrichards-smaller.png');
    }
  });

  enquire.register("screen and (max-width:480px)", {
    match: function(){
      $('.header-logo').attr('src', '../dist/img/header-lettermark.png');
    },
    unmatch: function(){
      $('.header-logo').attr('src', '../dist/img/phrichards-smallest.png');
    }
  });

  enquire.register("screen and (max-width:375px)", {
    match: function(){
      $('.lettermark').attr('src', '../dist/img/phlettermark-mobile.png');
    },
    unmatch: function(){
      $('.lettermark').attr('src', '../dist/img/phlettermark-small.png');
    }
  });

  $('nav').scrollToFixed({
		dontSetWidth: true,
	});

  if (window.screen.width() <= 768) {
    $('.lettermark').css('display', 'block');
  }

  var stickyNav = function(){
    $(window).scroll(function() {
      if ($(window).scrollTop() > 650) {
        $('.lettermark').fadeIn();
      } else {$$
        $('.lettermark').fadeOut();
      }
    });
  };

	if ($('body').hasClass('blog') || $('body').hasClass('page-template-portfolio-php') || $('body').hasClass('single-post')) {
    $('.lettermark').css('display', 'block');
  } else {
    stickyNav();
  }

});