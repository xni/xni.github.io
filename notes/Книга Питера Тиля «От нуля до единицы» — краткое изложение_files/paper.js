$(function(){
    // Add comment: toggle file-attach and file-upload fields
    $("body").on("click", ".add-comment .options a", function(){
        if($(this).parents(".add-comment").hasClass('expanded')){
            $(this).parents(".add-comment").find("textarea").focus();
        } else {
            $(this).parents(".add-comment").find(".file-attach input").focus();
        }
        $(this).parents(".add-comment").toggleClass('expanded');
        return false;
    });
    
    // Add comment: file-attaching by timeout
    $("body").on("input", ".add-comment .file-attach input", function(){
        link = $(this).parent().find("a");
        clearTimeout(timer);
        var timer = setTimeout(function(){ link.click(); }, 200);
    });
    
    // Add comment: file-attaching by click
    $("body").on("click", ".add-comment .file-attach a", function(){

        var comment_max_attachments = 2;
        
        url = $(this).parents(".file-attach").find("input").val();
        container = $(this).parents(".add-comment").find(".files");
        add_comment = $(this).parents(".add-comment");

        add_comment.find(".file-attach").addClass("loading");
        
        if(container.find(".file-preview").length < comment_max_attachments) {
        
            var is_youtube = youtube_parser(url);
            var is_coub = coub_parser(url);

            if(is_youtube){
                
                pic_url = "http://img.youtube.com/vi/" + youtube_parser(url) + "/0.jpg";
                container.append("<div class='file-preview'><img src='" + pic_url + "'><input type='hidden' name='attach[]' value='" + url + "' /><a href='#'>Удалить</a></div>");
                
                add_comment.find(".file-attach input").val("");
                add_comment.find(".file-attach").removeClass("loading");
                
            } else if (is_coub) {
            
                pic_url = "http://assets1.akamai.coub.com/assets/meta-logo-96d6a25329c35e556d64d3f4cd448725.png";
                container.append("<div class='file-preview'><img src='" + pic_url + "'><input type='hidden' name='attach[]' value='" + url + "' /><a href='#'>Удалить</a></div>");
                
                add_comment.find(".file-attach input").val("");
                add_comment.find(".file-attach").removeClass("loading");
                
            } else {
                
                pic_url = url;
                
                validate_image(pic_url, function(pic_url, result) {
                    if (result) {
                        
                        container.append("<div class='file-preview'><img src='" + pic_url + "'><input type='hidden' name='attach[]' value='" + pic_url + "' /><a href='#'>Удалить</a></div>");
                        
                        add_comment.find(".file-attach input").val("");
                        add_comment.find(".file-attach").removeClass("loading");
                        
                    } else {
                    
                        add_comment.find(".attach-error span").text("Это совсем не картинка и не ютуб-видео");
                        add_comment.find(".attach-error").show();
                        add_comment.find(".file-attach").removeClass("loading");
                        setTimeout("add_comment.find('.attach-error').fadeOut()", 5000);
                    
                    }
                    
                });
                
            }
            
        } else {
        
            add_comment.find(".attach-error span").text("Больше двух прикреплять нельзя");
            add_comment.find(".attach-error").show();
            add_comment.find(".file-attach").removeClass("loading");
            setTimeout("add_comment.find('.attach-error').fadeOut()", 5000);
        
        }

        return false;

    });
    
    // Add comment: file-attaching: youtube parser
    function youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match&&match[7].length==11){
            return match[7];
        }else{
            return false;
        }
    }

    // Add comment: file-attaching: coub parser
    function coub_parser(url){
        var regExp = /^.*(coub.com\/view\/).*/;
        var match = url.match(regExp);
        if (match){
            return url;
        }else{
            return false;
        }
    }

    // Add comment: file-attaching: image validation    
    function validate_image(url,callback) {
        $("<img>", {
            src: url,
            error: function() { callback(url, false); },
            load: function() { callback(url, true); }
        });
    }

    function escapeHtml(text) {
      return text
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
    }
    
    // Add comment: file-uploading
    $("body").on("change", ".file-upload input", function(){
        $(this).parents(".file-upload").find("a b u").html(escapeHtml($(this).val().replace(/(c:\\)*fakepath(\\)/i, '')));
        //console.log($(this).val());
    });
    
    // Add comment: delete attaches
    $("body").on("click", ".add-comment .files .file-preview a", function(){
        $(this).parents(".file-preview").remove();
        return false;
    });
    
    // Add comment: submit
    var isSendActive = true;
    $("body").on("click", ".add-comment .submit", function(){
        if (isSendActive) {
            isSendActive = false;
            $(this).addClass("disabled");
            var add_comment = $(this).parents('.add-comment');
            setTimeout(function() { add_comment.find('form').submit(); isSendActive = true; }, 500);
        }
        return false;
    });

    $("body").on("keydown", ".ctrlEnterCommentTextarea", function(e) {
        if ((e.metaKey || e.ctrlKey) && (e.keyCode == 10 || e.keyCode == 13)) {
            $(this).parent().parent().find('.submit').click();
            e.preventDefault();
        }
    });
    
    // Add comment: disabled submit
    $("body").on("click", ".add-comment .submit-disabled", function(){
        $.fancybox($(".login"));
        return false;
    });
	
	// Add comment: login and submit
    $("body").on("click", ".login a", function(){
        saveComment($("#commentMessage").val());

		/*var login = $(this);
        if(login.parent().hasClass("invisible")){
            var add_comment = $('.add-comment');
        } else {
            var add_comment = $(this).parents('.add-comment');
        }
		add_comment.find(".social_type").val(login.attr("data-social-type"));
        setTimeout(function() { add_comment.find('form').submit(); }, 500);
        return false;*/
    });
    
    // Comment: video embedding
    $("body").on("click", ".video-preview", function(){
        $(this).hide();
        $(this).before('<iframe width="500" height="280" src="' + $(this).attr("data-url") + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
        return false;
    });
    
    // Comment: add reply form
    $("body").on("click", ".reply-button a.reply", function(){
        if(!$(this).hasClass("disabled")){
            $('.add-comment.reply').remove();
            var reply_comment = $('.add-comment').clone();
            reply_comment.find(".in_reply_to_comment_id").val($(this).attr("data-comment-id"));
            
            if(reply_comment.hasClass("payment")){
                
                if(reply_comment.hasClass("not-logined")){
                    reply_comment.find(".l a").each(function(){
                        $(this).attr("href", $(this).attr("href") + "#reply" + reply_comment.find(".in_reply_to_comment_id").attr("value"));
                    });
                } else {
                    reply_comment.find(".btn_darkgreen").attr("href", reply_comment.find(".btn_darkgreen").attr("href") + "#reply" + reply_comment.find(".in_reply_to_comment_id").attr("value"));
                }
                
            }
            
            reply_comment.addClass("reply").insertAfter($(this).parents(".comment"));
            reply_comment.find('textarea').focus();    
        }
        return false;
    });

    // Comment: rating marks: scroll
    $('.rating .marks.scroll .wrap-list').slimscroll({
        wheelStep: 3,
        width: '240px',
        height: '248px'
    });
    
    // Comment: rating marks: toggle by click
    $("body").on("click", ".rating-count", function(){
        $(this).parents(".rating").find(".marks:not(.empty)").toggle();
        return false;
    });

    // Comment: rating marks: toggle by mouseover
    $("body").on("mouseenter", ".rating-count", function(){
        var rc = $(this);
        var st = setTimeout(function(){ rc.parents(".rating").find(".marks:not(.empty)").show(); /* console.log('rating-count.mouseenter'); */ }, 500);
        rc.parents('.comment').find('.rating').mouseleave(function(){
            clearTimeout(st);
            rt = setTimeout(function(){ rc.parents(".rating").find(".marks:not(.empty)").fadeOut("fast"); /* console.log('rating.mouseleave'); */ }, 500);
        });
    });
    
    // Comment: add reply form by hash
    if(window.location.hash) {
        if(window.location.hash.indexOf("#reply") != -1){
            comment_id = window.location.hash.replace('#reply', '#comment');
            $(comment_id).find(".reply-button").click();
        }
    }   
    
    // Comment: like and dislike
    $("body").on("click", ".comment-vote:not(.active)", function(){
        var vote = $(this);
        var rating = $(this).parents(".rating");
        var list = rating.find(".marks ul");
        var comment_id = $(this).attr("data-comment-id");
        var sign = $(this).attr("data-sign");
        var hash = $(this).attr("data-hash");
        
        $.post('/helper/like/', { commentId: comment_id, sign: sign, hash: hash }, function (data, textStatus) {

            //console.log(data);
        
            if (typeof data.error == "undefined" || data.error == 'undefined') {
                
                if (data.likes_count > 0) {
                    var text = data.likes_count;
                    rating.addClass('positive').removeClass('negative');
                } else if (data.likes_count < 0) {
                    var text = '–'+Math.abs(data.likes_count);
                    rating.addClass('negative').removeClass('positive');
                } else {
                    var text = '0';
                    rating.removeClass('negative').removeClass('positive');
                }
                
                vote.addClass("active");
                rating.parent().removeClass("unvoted");

                if (list && typeof data.user != "undefined") {
                    var u = data.user;
                    var signclass = 'up';
                    if (data.sign < 0) {
                        signclass = 'down';
                    }

                    list.find('li').each(function(){
                        if ($(this).attr('data-id') == u.id) {
                            $(this).hide();
                        }
                    });

                    list.append('<li data-id="'+u.id+'"><a href="/users/'+u.id+'"><img src="'+u.profile_image_url+'" /><i>'+u.name+'</i><b class="mark icon-thumbs-'+signclass+'"></b></a></li>');
                    list.parents(".marks").removeClass("empty");
                }
                
                rating.find(".rating-count").text(text);
            
            } else {
            
                $("#tip").html("<p>"+data.error+"</p>").show();
                setTimeout(function(){
                    $("#tip").fadeOut(1000);
                }, 5000);
            
            }
            
        }, 'json');
        return false;
    });

    // Sidebar: enable blocks if its enough space
	$(window).load(function(){

		var sidebar_blocks_height = 0; 

		$(".b-sidebar-block > div").each(function(i,item){
			sidebar_blocks_height = sidebar_blocks_height + $(item).height();
		});
		
		var sidebar_free_space = $(".b-main").height() - sidebar_blocks_height;
		
		if(sidebar_free_space > 40){
			$(".b-sidebar-block-adv-bottom").removeClass("b-sidebar-block-invisible");
		}
		
		if(sidebar_free_space > 100){
			$(".b-sidebar-block-gold").removeClass("b-sidebar-block-invisible");
		}
		
		console.log(sidebar_blocks_height);
		console.log($(".b-main").height());
		console.log($(".b-main").height() - sidebar_blocks_height);
		
	});
    
});
