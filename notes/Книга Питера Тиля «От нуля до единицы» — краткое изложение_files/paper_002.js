var isLS = supportsHtml5Storage();

// Если есть сторадж, и там хранится последний просмотренный коммент, то отмечаем все новые комментарии
$(function() {
    startMarking();
});

// Если юзер доскроллил до комментов, то считаем все комменты, как прочитанные, запоминаем
var scrolled = false;
var blockPosition = $('.b-content_t2').position().top + 100;
$(document).scroll(function() {
    if (isLS && !scrolled && paperId != undefined && $('.b-content_t2').length > 0) {
        var fromTop = $(this).scrollTop() + $(window).height();

        if (fromTop >= blockPosition) {
            scrolled = true;

            saveAsSeen();
        }
    }
});

//
function startMarking()
{
    if (isLS && paperId != undefined) {
        var ls_name = 'commentsSeen'+parseInt(paperId);

        if (typeof localStorage[ls_name] != 'undefined' && localStorage[ls_name] > 0) {
            var lastSeen = parseInt(localStorage[ls_name]);

            $('.b-comments .comment').each(function(i,v) {
                if ($(this).attr('data-id') > lastSeen) {
                    $(this).addClass("unread");
                }
            });
        }
    }
}

//
function saveAsSeen()
{    
    var ls_name = 'commentsSeen'+parseInt(paperId);
    var maximumId = 0;
    $('.b-comments .comment').each(function(i,v) {
        if (maximumId <= $(this).attr('data-id'))
            maximumId = parseInt($(this).attr('data-id'));
    });

    if (maximumId > 0) {
        localStorage[ls_name] = maximumId;
        localStorage['countCommentsSeen'+parseInt(paperId)] = parseInt($('.b-article__infoline__comments a span').text());
    }
}

function supportsHtml5Storage() {
  try { return 'localStorage' in window && window['localStorage'] !== null; } catch (e) { return false; }
}