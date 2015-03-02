$(document).ready(function(){if (typeof $.ab == 'undefined' || $.ab === undefined){$.ab = true;}});

$(document).ready(function() {
    setTimeout(function() {
        //console.log($.ab);
        if ($.ab == true) {
            if (typeof yaCounter16881199 != 'undefined' && yaCounter16881199 != undefined) {
                yaCounter16881199.reachGoal('ab-user');
            }

            var adblockActive = $.cookie('adblockActive');
            if (adblockActive == undefined) {
                $.cookie('adblockActive', 1, { expires: 1, path: '/' });
            } else if (adblockActive <= 6) {
                if ($('#'+abblock).length > 0) {
                    $(".b-intro").hide();
                    $('#'+abblock).addClass("active");

                    if (typeof yaCounter16881199 != 'undefined' && yaCounter16881199 != undefined) {
                        yaCounter16881199.reachGoal('adblock_banner_show');
                    }

                    $(".b-head__menu, .b-main, .b-pagination, .b-footer").addClass("filter-grayscale");
                    $("body").on("click", "#"+abblock+" a", function(){
                        $("#"+abblock+" span").toggleClass("active");
                        return false;
                    });

                    $.cookie('adblockActive', parseInt(adblockActive) + 1, { expires: 1, path: '/' });
                }
            }
        } else {
            if ($.cookie('adblockActive') != undefined) {
                if (typeof yaCounter16881199 != 'undefined' && yaCounter16881199 != undefined) {
                    yaCounter16881199.reachGoal('adblock_disable');
                }

                $.removeCookie('adblockActive', { path: '/' });
            }
        }
    }, 500);
});