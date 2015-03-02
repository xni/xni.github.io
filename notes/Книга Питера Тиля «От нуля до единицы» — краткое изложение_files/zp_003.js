var tab_active = true;

$(function(){
    var rplNotif = new Dklab_Realplexor(
        "http://rpl."+location.hostname+"/",
        "zp"
    );
    
    var time = Math.round(new Date().getTime() / 1000);
    rplNotif.setCursor("mainNotifications", time);
    rplNotif.subscribe(uniqueRplId, function() {});
    rplNotif.subscribe("mainNotifications", function(data, id)
    {
        if (typeof data.notification != 'undefined') {
            var template = '<div class="b-messages__item" id="message{{notification_id}}" data-id="{{notification_id}}" data-commentId="{{comment_id}}" style="display: none;"><p><a href="{{notification_url}}" class="b-messages__item__user"><b>{{user_name}}</b><img src="{{user_picture}}" /><i class="{{icon_class}}"></i></a> {{notification_text}} «<a href="{{notification_url}}" class="b-messages__item__article">{{article_title}}</a>»</p><a href="#" class="b-messages__item__close">×</a></div>';

            var output = Mustache.render(template, data.notification);
            $('div.b-messages').append(output);

            // Плавное появление
            $('#message'+data.notification.notification_id).fadeIn(300);

            // Убираем уведомление только если вкадка активна
            if (tab_active) {
                setTimeout(function() {
                    if ($('#message'+data.notification.notification_id).length)
                        $('#message'+data.notification.notification_id).fadeOut(500);
                }, 7000);
            }

            // Не даём накапливаться
            if ($('div.b-messages .b-messages__item').length > 3) {
                $('div.b-messages .b-messages__item').first().children('.b-messages__item__close').click();
            }
        }
    });
    rplNotif.execute();

    $('body').append('<div class="b-messages"></div>');

    // Закрытие уведомления по кнопке
    $('body').on('click', '.b-messages__item__close', function(e) {
        e.preventDefault();

        var mess = $(this).parent();

        mess.fadeOut(500);

        $.post('/helper/iveSeenNotification/', { id: mess.attr('data-id') }, function() {
            mess.remove();
        });
    });

    // При переходе на уведомление делаем аякс
    $('body').on('click', '.b-messages__item__user', function(e) {
        var mess = $(this).parent().parent();

        mess.fadeOut(500);

        $.post('/helper/iveSeenNotification/', { id: mess.attr('data-id') }, function() {
            mess.remove();
        });

        if ($('.b-comments').length && mess.attr('data-commentId') > 0) {
            var paperId = $('.b-comments').attr('data-id');

            loadComments(paperId, 1, function(){
                $('html, body').animate({
                    scrollTop: $('#commentBox'+mess.attr('data-commentId')).offset().top - 100
                }, 300);
            });

            e.preventDefault();
        }
    });

    $(window).blur(function(){
        tab_active = false;
    });
    $(window).focus(function(){
        tab_active = true;
    });
});