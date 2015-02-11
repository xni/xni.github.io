/* this is for extra js */
var expiredate = "20-01-2015";
var drowterces = "icnivad";
var svterces = "xaja";//eruza
function ALS_success(fLoc) {
    var whatF= 'Signedupvia' + fLoc;
    var s = s_gi(s_account);
    s.linkTrackVars = 'eVar4,prop21,events';
    s.linkTrackEvents = 'event19';
    s.eVar4 = 'AL SIGNUP';
    s.prop21 = whatF;
    s.events = 'event19';
    s.tl(true, 'o', whatF);
    console.log("success from: " + fLoc);
}

function createTesterCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

function checkTesterCookie ()
{
    if ((window.location.host == "ppe.thegatesnotes.com") ||
        (window.location.host == "gatesnotes")) {
        var query = window.location.search.slice(1);
        if (query == "preview") {
            createTesterCookie("IAmATesterB", "Yes", 7);
        }
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            //console.debug(c)
            if (c == "IAmATesterB=Yes") {  // this needs to change if SetTesterCookie() value for newTesterCookie is changed
                return;
            }
        }
        console.log("not legit");
        window.location.replace("http://www.gatesnotes.com");
    }
}

$(document).ready(function () {
    $(".ALS_IL_AddedText").css("display", "none");
    var a = location.pathname.split("/");
    a[a.length - 1] = a[a.length - 1].toLowerCase();
    //console.log("url: " + a[a.length - 1]);
    if (a[a.length - 1] == "contact-bill-gates" || a[a.length - 1] == "privacy-policy" || a[a.length - 1] == "terms-of-use" || a[a.length - 1] == "topstories" || a[a.length - 1] == "books" || a[a.length - 1] == "bio" || a[a.length - 1] == "profilesettings") {
        $(".ALS_Holder").css("display", "none");
        $(".ALS_IL_Holder").css("display", "none");
        $(".ALS_IL_AddedText").css("display", "none");
        $(function () {
            holdTGNB();
            function holdTGNB() {
                setTimeout(holdTGNB, 100);
                var tgnbt = parseInt($('#tgnbody').css('top'));
                if (tgnbt > 0) {
                    $('#tgnbody').stop();
                    $("#tgnbody").css("top", "0px");
                    clearInterval(holdTGNB);
                }
            }
        });
    }
    //
    checkTesterCookie();
    $('input#ALS_InputID').attr('maxlength', '200');
    $('input#ALS_IL_InputID').attr('maxlength', '200');
    //$('.ALS_Headline').html("<span class='ALS_Headline_Bold'><strong>Sign up</strong></span> to receive <span class='ALS_Headline_Bold'><strong>occasional updates</strong></span> from <span class='ALS_Headline_Bold'><strong>the&nbsp;Gates&nbsp;Notes</strong></span>");//<span class='ALS_Headline_Bold'><strong>Bill & Melinda&rsquo;s 2015 Annual Letter,</strong></span> and&nbsp;
    //$('.ALS_IL_Headline').html("<span class='ALS_IL_Headline_Bold'><strong>Sign up</strong></span> to receive <span class='ALS_IL_Headline_Bold'><strong>occasional updates</strong></span> from <span class='ALS_IL_Headline_Bold'><strong>the&nbsp;Gates&nbsp;Notes</strong></span>");//<span class='ALS_IL_Headline_Bold'><strong>Bill & Melinda&rsquo;s 2015 Annual Letter,</strong></span> and&nbsp;
    $('.ALS_Headline').html("<span class='ALS_Headline_Bold'>Sign up</span> to receive <span class='ALS_Headline_Bold'>occasional updates</span> from <span class='ALS_Headline_Bold'>the&nbsp;Gates&nbsp;Notes</span>");//<span class='ALS_Headline_Bold'><strong>Bill & Melinda&rsquo;s 2015 Annual Letter,</strong></span> and&nbsp;
    $('.ALS_IL_Headline').html("<span class='ALS_IL_Headline_Bold'>Sign up</span> to receive <span class='ALS_IL_Headline_Bold'>occasional updates</span> from <span class='ALS_IL_Headline_Bold'>the&nbsp;Gates&nbsp;Notes</span>");//<span class='ALS_IL_Headline_Bold'><strong>Bill & Melinda&rsquo;s 2015 Annual Letter,</strong></span> and&nbsp;

    //console.log("name:" + a[a.length - 1] + " exists:" + $('.ALS_IL_Headline').length);
    if (a[a.length - 1] == "2015-annual-letter-sign-up" || a[a.length - 1] == "2015-annual-letter") {
        $(".ALS_Holder").css("display", "none");
        $(".ALS_IL_Holder").css("display", "block");
        if (a[a.length - 1] == "2015-annual-letter") {
            $(".ALS_IL_AddedText").css("display", "block");
        } else {
            $(".ALS_IL_AddedText").css("display", "none");
        }
        $(function () {
            holdTGNB();
            function holdTGNB() {
                setTimeout(holdTGNB, 100);
                var tgnbt = parseInt($('#tgnbody').css('top'));
                if (tgnbt > 0) {
                    $('#tgnbody').stop();
                    $("#tgnbody").css("top", "0px");
                    clearInterval(holdTGNB);
                }
            }
        });
        //console.log("name:" + a[a.length - 1] + " exists:" + $('.ALS_IL_Headline').length);
        if ($('.ALS_IL_Headline').length) {
            if (a[a.length - 1] == "2015-annual-letter") {
                $('.ALS_IL_Headline').html("<span class='ALS_IL_Headline_Bold'>Sign Up for Our 2015 Annual Letter</span>");
            }
            $(".ALS_IL_Holder").css("background", "rgba(150, 150, 150, 0.4)");
            $(".ALS_IL_Holder").css("margin-top", "20px");
            //ALS_IL_Holder background: transparent;
            $(".blogbackground").css("background", "transparent");
            //blogbackground  background: transparent;
            $(".main").css("background-image", "url(http://www.thegatesnotes.com/media/al2015/media/images/ALS_Map7.jpg)");
            $(".main").css("background-size", "cover");
            $(".main").css("background-position", "50% 50%");
            $(".main").css("background-repeat", "no-repeat");
            //main background-image: url(http://www.thegatesnotes.com/media/al2015/media/images/ALS_Map.jpg);
            //background-size: cover;
            //background-position: 50% 50%;
            //background-repeat: no-repeat;
            $(".ALS_Form .ALS_Signup").css("background-color", "#3379be");
            $(".ALS_Form .ALS_Signup:hover").css("background-color", "#cccccc");
            $(".headline").css("padding-top", "40px");
            $(".AL_LinkText").css("color", "#3379be");
            $(".AL_LinkText:hover").css("color", "#cccccc");
            
            //console.log("name:" + a[a.length - 1] + " exists:" + $('.ALS_IL_Headline').length);
        }
        if ($('.bottom').length) {
            $('.bottom').css("display", "none");
        }
        if ($('.articlePrevNextCont').length) {
            $('.articlePrevNextCont').css("display", "none");
        }
    }

});