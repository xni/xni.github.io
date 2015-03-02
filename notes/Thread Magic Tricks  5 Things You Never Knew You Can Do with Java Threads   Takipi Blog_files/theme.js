//`Ruben: Special request from Chen
if(jQuery){
	window.$ = jQuery;
}

/* ---------------------------------------------------------------- *
 * Post-page load functionality
 * ---------------------------------------------------------------- */

(function($) {
	$(function() {
		
		// Bootstrap Multi-Level Menus
		$('.submenu').hover(function() {
			
			// Display the submenu on hover
			$(this).children('ul')
				.removeClass('submenu-hide')
				.addClass('submenu-show');
				
		}, function() {
		
			// Hide the submenu when not on hover
			$(this).children('ul')
				.removeClass('.submenu-show')
				.addClass('submenu-hide');
			
		}).click(function() {
		
			// If the submenu item is clicked, navigate to its anchor
			window.location = $(this).children('a').attr('href');
			
		});
		
		// Center Header Logo only if the background image is present
		processLogoAndBackground($);
		$(window).load(function() {
			processLogoAndBackground($);
		}).resize(function() {
			processLogoAndBackground($);
		});
		
		// If the Activity Widget is present, activate the first tab
		if($('.tabbed-widget').length > 0) { 
			
			$('.nav-tabs').children('li:first')
				.addClass('active');
				
			$('.tab-content').children('.tab-pane:first')
				.addClass('active');
			
		} // end if
		
		// Navigate to the menu item's anchor
		$('.dropdown a').click(function() {
			window.location = $(this).attr('href');
		});
		
		// Introduce responsive functionality but only if the CSS is loaded
		if($('link[id*="bootstrap-responsive-css"]').length > 0) {
		
			// Move sidebar below content on left sidebar layout
			if($('#sidebar').length > 0 && $('#wrapper > .container > .row').children(':first').attr('id') == 'sidebar') {
			
				moveSidebarInLeftSidebarLayout($);
				$(window).resize(function() {
					moveSidebarInLeftSidebarLayout($);
				});
			
			} // end if

			// FitVid
			$('.entry-content, .comment-text').fitVids();
			
			// Look to see if there are any video wrappers from FitVid
			if(0 < $('.fluid-width-video-wrapper').length) { 

				// For each video wrapper, we only want to change the styles if the video is posted alone (without text)
				$('.fluid-width-video-wrapper').each(function() {
					
					// First, clear the margin on the video itself
					$(this).css('margin', 0);
					
					// Next, if the video is the only content, we can remove both margin and padding
					if(0 == $(this).parents('p').siblings().length) {
					
						$(this)
							.parents('p')
							.css({ margin: 0, padding: 0 });
							
					} // end if
					
				});
			
			} // end if

			// If there is no content below the link container, then kill the margin
			if(0 === $('.format-link .entry-content').children('p').length) {
				$('.format-link .entry-content').css({
					marginTop: 0,
					paddingBottom: 0
				});
			} // end if

		} // end if
		
	});
})(jQuery);

/**
 * In mobile view with the left-sidebar layout, repositions the sidebar below the content.
 */
function moveSidebarInLeftSidebarLayout($) {

	if($('#wrapper').width() < 768) {
		$('#sidebar').insertAfter('#main');
	} else {
		$('#sidebar').insertBefore('#main');
	} // end if

} // end moveSidebarInLeftSidebarLayout

/**
 * This positions the logo against the background so that it's centered and properly positioned for
 * responsive behavior.
 *
 * @params	$	A reference to the jQuery function.
 */
function processLogoAndBackground($) {
	
	// If we're viewing the mobile version of the site, we need to position the header elements
	if( $('.btn-navbar').is(':visible') ) {
	
		if( $('#header-image').length > 0 ) { 

			// If the header image is larger than the logo container, we subtract half the height of the header from the background image...
			if( $('#header-image').height() > $('#hgroup').height() ) {
			
				$('#hgroup').css({
					marginTop: Math.round( $('#header-image').height() / 2 ) - Math.round( $('#hgroup').height() / 2 )
				});
			
			// ...otherwise, we'll subtract the height of the hgroup from the header image	
			} else {
			
				$('#hgroup').css({
					marginTop: Math.round( $('#header-image').height() / 2 ) - Math.round( $('#hgroup').height() )
				});
				
			} // end if
		
		} else {
		
			if( $('#header-widget').length > 0 ) {
			
				// Only set the margin of the header widget to 20 if there's no logo
				if( $('#logo').length > 0 ) {
				
					$('#header-widget').css({
						marginTop: '20px'
					});
					
				} // end if
				
			} // end if
		
		} // end if/else
		
	} else {
	
		// If there's no logo and header image, we don't care about adjusting margins
		if( $('#header-image').length > 0 || $('#site-title > a').children('img').length > 0 ) { 
	
			var $background = null;
			if( ( $background = $('#header-image').children(':first').children('img')).length > 0 ) {
			
				$('#hgroup').css({
					padding: 0,
					marginTop: Math.round( $background.height() / 2 ) - Math.round( $('#hgroup').height() / 2 )
				});
				
			} // end if
			
			// If the widget is present...
			if($('#header-widget').length > 0) {
	
				// ...and there is a logo or header text
				if( $('#logo').length > 0 ) {
	
					$('#header-widget').css({
						marginTop: Math.round( $('#hgroup').height() / 2 ) - Math.round( $('#header-widget').height() / 2 )
					});	
				
				// ...or there is no logo or no header text
				} else {
	
					$('#header-widget').css({
						marginTop: Math.round( $('#header-image').height() / 2 ) - Math.round( $('#header-widget').height() )
					});
					
					// If there's a header widget but no logo or text, then we need to make the hgroup and the logo an anchor
					$('#hgroup')
						.css('cursor', 'pointer')
						.click(function(evt) {
							window.location = $('#site-title').children('a').attr('href');
						});
					
					
				} // end if
				
			} // end if
				
		} // end if 
	
	} // end if
	
} // end processLogoAndBackground

jQuery(window).on('load', function(){

    setTimeout(function(){
            var e = document.createElement('script'); e.async = true;
            e.src = document.location.protocol +
              '//connect.facebook.net/en_US/all.js#xfbml=1';
            document.getElementById('fb-root').appendChild(e);
            jQuery('body').append("<script type='text/javascript' src='https://apis.google.com/js/plusone.js' async>{lang: 'en-US'}</script>");
            jQuery('body').append("<script src='//platform.linkedin.com/in.js' type='text/javascript' async></script>");
            jQuery('body').append("<script src='//platform.twitter.com/widgets.js' type='text/javascript' async></script>");
            setTimeout(function(){
                jQuery('.dd_buttons').animate({opacity:1},1000);
            }, 3000);

            var s = document.createElement('script'); s.async = true;
            s.type = 'text/javascript';
            s.src = '//go.disqus.com/count.js';
            (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);

            if(window.___dsq_embed === true){
                var dsq = document.createElement('script'); dsq.type = 'text/javascript';
                dsq.async = true;
                dsq.src = '//go.disqus.com/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            }

            adRoll();
    },  2500);

    function adRoll(){
       adroll_adv_id = "RTHTY4IRUVAN5CPZ5YUQ46";
       adroll_pix_id = "UW2XQSYWXVA4VHGMKZD5WU";

       __adroll_loaded=true;
       var scr = document.createElement("script");
       var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
       scr.setAttribute('async', 'true');
       scr.type = "text/javascript";
       scr.src = host + "/j/roundtrip.js";
       ((document.getElementsByTagName('head') || [null])[0] ||
        document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
    }
});

/* Ruben: Takipi signup element */
(function($){
	TakipiMiniSignupElement = function(dialogHolderEl, loginPage, redirectUrl, errorRedirect, headerText, btnText, appUrl, isSidebar)
	{
		this.dialogHolderEl = dialogHolderEl;
		this.loginPage = loginPage;
		
		if (isSidebar)
		{
			this.dialogHolderEl.append(this.buildSidebarForm(btnText));
		}
		else 
		{
			this.dialogHolderEl.append(this.buildForm(headerText, btnText));
		}

		this.emailInputEl = $(".emailInput", this.dialogHolderEl);
		this.errorLabelEl = $(".errorLabel", this.dialogHolderEl);
		this.createBtnEl = $(".createStubAccountBtn", this.dialogHolderEl);

		this.servletUrl = "/app/account/stub/validate";
		this.appUrl = (appUrl ? appUrl : "");
		this.redirectUrl = redirectUrl;
		this.errorRedirect = errorRedirect;
		this.stubPlaceholder = "THATS_WHY_ONE_SHOULD_NEVER_USE_REQUIRED_IN_A_PROTO";
		
		var miniSignupElement = this;
		
		this.createBtnEl.click(function() {
			miniSignupElement.createStubAccount();
			return false;
		});

		this.emailInputEl.keydown(function(event) {
			var keyCode = (event.keyCode ? event.keyCode : event.which);
			
			if (keyCode == 13)
			{
				miniSignupElement.createStubAccount();
				return false;
			}
			
			return true;
		});
		
		this.hideErrorLabel();
	}
	TakipiMiniSignupElement.prototype = {
		buildForm:function(headerText, btnText)
		{
			var headerTextValue = (headerText ? headerText : "Solve monster bugs");
			var btnTextValue = (btnText ? btnText : "Start using Takipi");
			
			return '<div class="stubSignupElement"> \
						<div class="blogheader"> \
							<div class="dukewrapper"><img src="//blog.takipi.com/wp-content/themes/standard/images/duke/duke1.png" /><div class="duketext" style="width: 130px">Detect 100% production errors</div></div> \
							<div class="dukewrapper"><img src="//blog.takipi.com/wp-content/themes/standard/images/duke/duke2.png" /><div class="duketext" style="width: 140px">See the variables behind every error</div></div> \
							<div class="dukewrapper"><img src="//blog.takipi.com/wp-content/themes/standard/images/duke/duke3.png" /><div class="duketext" style="width: 146px">Debugging at scale finally made easy</div></div> \
						</div> \
						<form class="blogStubSignupForm"> \
							<input class="emailInput" type="text" autocomplete="off" placeholder="Enter your email"></input> \
							<div class="createStubAccountBtn">' + btnTextValue + '</div> \
						</form> \
						<div class="errorLabel"></div> \
					</div>';
		},
		buildSidebarForm:function(btnText)
		{
			var btnTextValue = (btnText ? btnText : "Get started");

			return '<div class="stubSignupElement sidebar"> \
						<form class="blogStubSignupForm sidebar"> \
							<input class="emailInput sidebar" type="text" autocomplete="off" placeholder="Email"></input><br/> \
							<div class="createStubAccountBtn sidebar">' + btnTextValue + '</div> \
						</form> \
						<div class="errorLabel sidebar"></div> \
					</div>';
		},
		createStubAccount:function()
		{
			this.hideErrorLabel();
			
			if (!this.validateEmail())
			{
				this.showInvalidEmailError();
				return;
			}
			
			var request = {
				"email":this.emailInputEl.val()
			}
			
			this.disableForm();
			
			var miniSignupElement = this;
			
			$.ajax({
				type: "POST",
				url:  this.appUrl + miniSignupElement.servletUrl,
				data: JSON.stringify(request)})
			.success(function(data)
			{
				if (data.is_valid)
				{
					window.location.href = 
						miniSignupElement.redirectUrl +
						"?cs" +															// cs - createStub
						"&e=" + miniSignupElement.encodeURLSafeBase64(request.email) +	// e - email
						"&er=" + encodeURIComponent(miniSignupElement.errorRedirect);	// er - error redirect
				}
				else
				{
					miniSignupElement.showEmailExistError();
					miniSignupElement.enableForm();
				}
			})
			.error(function(data)
			{
				miniSignupElement.showServerError();
				miniSignupElement.enableForm();
			});
		},
		disableForm:function()
		{
			this.emailInputEl.prop("disabled", true);
			this.createBtnEl.addClass("waitForResponse");
		},
		enableForm:function()
		{
			this.emailInputEl.prop("disabled", false);
			this.createBtnEl.removeClass("waitForResponse");
		},
		validateEmail:function()
		{
			var email = this.emailInputEl.val();
			
			return ((email != "") &&
					(this.isValidEmail(email)));
		},
		hideErrorLabel:function()
		{
			this.errorLabelEl.html('').hide();
		},
		showServerError:function()
		{
			this.errorLabelEl.html('Problem with server').show();
		},
		showInvalidEmailError:function()
		{
			this.errorLabelEl.html('Invalid email').show();
		},
		showEmailExistError:function()
		{
			this.errorLabelEl.html('User already exists <a class="loginLink" href="' + this.loginPage + '">Log in</a>').show();
		},
		encodeURLSafeBase64:function(str) // ZZZ: copied from takipiUtilityMethods
		{
			return $.base64.encode(str).replace(/\//g, '.').replace(/\+/g, '_').replace(/\=/g, '-');
		},
		isValidEmail:function(email) // ZZZ: copied from takipiUtilityMethods
		{
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			
			return re.test(email);
		}
	};
})(jQuery);
/* Ruben: End of Takipi signup element */

jQuery(document).ready(function() {
	if (jQuery('.the-comment-link a').text() == "Leave a comment") {
		jQuery('.the-comment-link a').attr('href','#comments');
	}
	jQuery('#disqus_thread').wrap('<div id="comments"></div>');

	//`Ruben: Takipi signup element
	// Add to your posts: <div class="miniSignupDialog"></div>
	var miniLoginDialogEl = jQuery(".miniSignupDialog");
	var miniLoginSidebarDialogEl = jQuery(".miniSignupSidebarDialog");
	new TakipiMiniSignupElement(miniLoginDialogEl, "https://app.takipi.com/login.html", "https://app.takipi.com/", "http://localhost", null, null, "https://app.takipi.com", false);
	new TakipiMiniSignupElement(miniLoginSidebarDialogEl, "https://app.takipi.com/login.html", "https://app.takipi.com/", "http://localhost", null, null, "https://app.takipi.com", true);
});

/*Rezaur: add demo video to div id="takipiVideo"*/
/* appear.min.js 0.0.14 */
appear=function(){"use strict";function e(){var e=window.scrollY||window.pageYOffset;null!=n&&(o.velocity=e-n,o.delta=o.velocity>=0?o.velocity:-1*o.velocity),n=e,i&&clearTimeout(i),i=setTimeout(function(){n=null},30)}function t(e,t){var n=e.getBoundingClientRect();return n.top+n.height>=0&&n.left+n.width>=0&&n.bottom-n.height<=(window.innerHeight||document.documentElement.clientHeight)+t&&n.right-n.width<=(window.innerWidth||document.documentElement.clientWidth)+t}var n=null,i=0,o={};return addEventListener("scroll",e),function(e){return function(){function e(e,t){return function(){var n=this,i=arguments;clearTimeout(c),c=setTimeout(function(){e.apply(n,i)},t)}}function n(){o.delta<w.delta.speed&&(l||(l=!0,u(),setTimeout(function(){l=!1},w.delta.timeout))),e(function(){u()},w.debounce)()}function i(){u(),addEventListener("scroll",n),addEventListener("resize",n)}function r(){m=[],c&&clearTimeout(c),a()}function a(){removeEventListener("scroll",n),removeEventListener("resize",n)}function u(){s||(m.forEach(function(e,n){e&&t(e,w.bounds)?v[n]&&(v[n]=!1,h++,w.appear&&w.appear(e),w.disappear||w.reappear||(m[n]=null)):(v[n]===!1&&(w.disappear&&w.disappear(e),g++,w.reappear||(m[n]=null)),v[n]=!0)}),w.reappear||w.appear&&(!w.appear||h!==p)||w.disappear&&(!w.disappear||g!==p)||(s=!0,a(),w.done&&w.done()))}function d(){if(!f){f=!0,w.init&&w.init();var e;if(e="function"==typeof w.elements?w.elements():w.elements){p=e.length;for(var t=0;p>t;t+=1)m.push(e[t]),v.push(!0);i()}}}var p,c,l,s,f=!1,m=[],v=[],h=0,g=0,w={};return function(e){return e=e||{},w={init:e.init,elements:e.elements,appear:e.appear,disappear:e.disappear,done:e.done,reappear:e.reappear,bounds:e.bounds||0,debounce:e.debounce||50,delta:{speed:e.deltaSpeed||50,timeout:e.deltaTimeout||500}},addEventListener("DOMContentLoaded",d),"complete"===document.readyState&&d(),{trigger:function(){u()},pause:function(){a()},resume:function(){i()},destroy:function(){r()}}}}()(e)}}();

window.onload = function() {  
	//alert('im working');   
    //var newContent = document.createTextNode("Hi there and greetings!"); 
    var inidiv = document.getElementsByClassName('takipiVideo');    
    var noofdiv = inidiv.length;
    if(noofdiv >= 1){
        for(var i = 0; i < noofdiv; i++){
            var video = document.createElement('video');
            video.setAttribute('id', 'demo-video-'+i);
            video.setAttribute('class', 'demovideos'); 
            video.setAttribute('poster', 'https://www.takipi.com/assets/images/index/img03.jpg');            
            video.setAttribute('style', 'max-width:100%');   
            inidiv[i].appendChild(video);
           // inidiv[i].appendChild(newContent);
            addSourceToVideo(video, 'https://www.takipi.com/assets/videos/index/demo.mp4', 'video/mp4');
						var videoLink = $(inidiv).attr('url');
						
						$(video).click(function(){window.location.href=videoLink});
						$(video).css("cursor", "pointer");
           // var videoEl = document.getElementById('demo-video'+i);           
        }
              appear({
                    init: function init(){
                        //console.log('dom is ready');
                      },
                elements: function elements(){
                   return document.getElementsByClassName('demovideos');
                },
                appear: function appear(el){
                   // el.load();
                    el.play();
                    el.setAttribute('loop', '');                    
                  // console.log('visible', el);
                },
                disappear: function disappear(el){
                //    el.stop();
                    el.removeAttribute('loop');
                  //console.log('no longer visible', el);
                },
                bounds: -100,
                reappear: true
              });
    }
	//for ninja kickers
	              appear({
                    init: function init(){
                      },
                elements: function elements(){
                   return document.getElementsByClassName('appear');
                },
                appear: function appear(el){
                   addClass(el);
				   el.click();
                },
                disappear: function disappear(el){
					removeClass(el);
                },
                bounds: -100,
                reappear: true
              });
};
function addClass(el) {
	  if (el.classList) {
		el.classList.add('appeared');
	  } else {
		// IE9 compat
		el.className += ' ' + 'appeared';
	  }
	}
	
function removeClass(el) {
	  if (el.classList) {
		el.classList.remove('appeared');
	  } else {
		// IE9 compat
		el.className += ' ' + '';
	  }
	}
	
function addSourceToVideo(element, src, type) {
    var source = document.createElement('source');

    source.src = src;
    source.type = type;

    element.appendChild(source);
}

/*Rezaur: End of add demo video to div id="takipiVideo" and ninja kickstart*/
