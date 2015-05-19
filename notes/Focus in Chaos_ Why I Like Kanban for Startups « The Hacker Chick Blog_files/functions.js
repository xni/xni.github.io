$(function(){
  /* Mobile Menu Slide Out */
  var mobile_menu_width = 250;
  $('#header-mobile-menu-button').on('click', function( e ){
    if($('#sitecontainer').css('margin-left') == '0px'){
      toggleMobileMenu( true );
    }else{
      toggleMobileMenu( false );
    }
  });

  function toggleMobileMenu( open ){
    var width = 0;
    var marginRight = "inherit";
    if( open ){
      width = mobile_menu_width;
      marginRight = -mobile_menu_width;
    }

    $('#sitecontainer').css('margin-left', width);
    $('.header-titlebar').css('left', width);
    $('.header-titlebar-bottomwhitespace').css('left', width);
    $('#mobile-menu').css('width', width);

    $('#sitecontainer').css('margin-right', marginRight);
    $('.header-titlebar').css('right', marginRight);
  }

  /* Mobile Menu Search - Hide/Show Search Image */
  $('#mobile-menu-search').on('click', function( e ){
    $('#mobile-menu-search').css('background-image', 'none');
  });
  $('#mobile-menu-search').on('focusout', function( e ){
    $('#mobile-menu-search').css('background-image', 'url(imgs/search-mobile.png)');
  });
  
  /* Search */
  $('#menu-search').on('click', function( e ){
    $('.nav-menu-items').css('visibility', 'hidden');
    $('#menu-search-field').css('display', 'inline-block');
    $('#menu-search-field').focus();
  });
  $('#menu-search-field').on('focusout', function( e ){
    $('.nav-menu-items').css('visibility', 'visible');
    $('#menu-search-field').css('display', 'none');
  });
  
  /* Dropdown Menu */
  var dropdown_menu_height = "6.6em";
  $('#topics-dropdown-menu').on('click', function( e ){
    if($('#dropdown-menu').css('height') == '0px'){
      toggleDropdownMenu( true, e );
    }else{
      toggleDropdownMenu( false );
    }
  });

  function toggleDropdownMenu( open, e ){
    var height = 0;
    if( open ){
      height = dropdown_menu_height;

      /* position below clicked menu item */
      $('#dropdown-menu').css('right', $(window).outerWidth() - $(e.currentTarget).position().left-$('#dropdown-menu').outerWidth(true));
    }

    $('#dropdown-menu').css('height', height);
  }

  // if the window width resizes to the point that the menu changes
  // from top nav to side (or vice versa) - close the other type of menu
  $(window).resize(function(){     
    if ($('body').width() > 800 ){
      toggleMobileMenu( false );
    }else{
      toggleDropdownMenu( false );
    }
  });

});

/* Browser Compatibility */
function isIncompatibleBrowser(){
  if(navigator.appName.indexOf("Internet Explorer")!=-1){
    var badBrowser=( navigator.appVersion.indexOf("MSIE 9")==-1 &&   //v9 is ok
                     navigator.appVersion.indexOf("MSIE 1")==-1  //v10, 11, 12, etc. is fine too
                   );

    return badBrowser;
  }
}

// Note pageURL & pageTitle set in header.php
var sharewindowoptions = "toolbar=0, status=0";

function sharetwitter(){
  var byHackerChick = escape( " | @HackerChick");
  window.open("https://twitter.com/intent/tweet?text=" + pageTitle + byHackerChick + "&url=" + pageURL, "twitter", sharewindowoptions + ", width=900, height=300");
}
function sharefacebook(){
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + pageURL, "facebook", sharewindowoptions + ", width=900, height=500");
}
function sharelinkedin(){
  window.open("https://www.linkedin.com/cws/share?url=" + pageURL, "linkedin", sharewindowoptions + ", width=550,height=550");
}
function sharegoogleplus(){
  window.open("https://plus.google.com/share?url=" + pageURL, "googleplus", sharewindowoptions + ", width=900, height=500");
}
function sharehackernews(){
  window.open("http://news.ycombinator.com/submitlink?u=" + pageURL + "&t=" + pageTitle, "hackernews", sharewindowoptions + ", width=900, height=250");
}
