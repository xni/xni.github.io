(function (window, document) {

	var WOSRichMedia = new function () {
		var wos = this,
			dom = {},
			$,
			activeBanners = {};
		
		var assign = function () {
			$ = window.jQuery;
			dom.body = $('body');
		};
		
		String.prototype.format = function() {
		    var formatted = this;
		    for (var arg in arguments) {
		        formatted = formatted.replace("%", arguments[arg]);
		    }
		    return formatted;
		};
		
		var bind = function () {
			// Родительский баннер присылает код для дочернего баннера
			_getMessage('wos_external_banner', '*', function (data, e) {
				if (!activeBanners[data.id]) {
					activeBanners[data.id] = {
						type: data.type,
						html: data.html,
						append: data.append,
						window_target: e.source
					};
					
					appendBanner(data.id);
				}else{
					console.warn('Banner id', data.id, 'already appended');
				}
			});
			
			// Дочерней баннер отправляет данные родительскому баннеру
			_getMessage('wos_banner', '*', function (data, e) {
				if (activeBanners[data.id]) {
					var banner = activeBanners[data.id];
					
					_postMessage('wos_banner', '*', banner.window_target, data);
					
					if (data.remove) {
						removeBanner(data.id);
					}
				}else{
					console.warn('Banner id', data.id, 'doesn\'t exist');
				}
			});
		};
		
		var unbind = function () {
			
		};
		
		wos.ready = function () {
			assign();
			bind();
		};
		
		wos.init = function () {
			var scripts = ['http://w-o-s.ru/richmedia/messages.js'];
			
			if (!window.jQuery) {
				scripts.unshift('http://code.jquery.com/jquery-1.11.0.min.js');
			}
			
			if (document.body == null) {
				document.addEventListener("DOMContentLoaded", function(event) {
					wos.loadScripts(scripts, function () {
						wos.ready();
					});
				});
			}else{
				wos.loadScripts(scripts, function () {
					wos.ready();
				});
			}
			
		};
		
		wos.loadScripts = function(url, callback) {
			if (!(url instanceof Array)) {
				url = [url];
			}
			
			var url_counter = 0,
				url_length = url.length,
				onload = function() {
					url_counter++;
					
					if (url_counter >= url_length) {
						callback();
					} else {
						loadScript(url[url_counter], onload);
					}
				};
				
			if (url_length === 0) {
				callback();
			} else {
				loadScript(url[0], onload);
			}
		}
					
		var adfoxPixelEmitter = function(name) {
			var pixels = {
				'expand': '',
				'collapse': ''
			}
			if (pixels[name]) {
				var pixel = new Image();
				var url = pixels[name];
				
				if (url.substring(url.length, url.length-8) == '[RANDOM]') {
					url = url.substring(0, url.length-8) + Math.round(Math.random() * 999999)
				}
				
				pixel.src = url;
				document.getElementById('adfox_pixels').appendChild(pixel);
			}
		};
		
		var loadScript = function(url, callback) {
			var script = document.createElement("script")
			    script.type = "text/javascript";
			
		    if (script.readyState){  //IE
		        script.onreadystatechange = function(){
		            if (script.readyState == "loaded" ||
		                    script.readyState == "complete"){
		                script.onreadystatechange = null;
		                if (callback) callback();
		            }
		        };
		    } else {  //Others
		        script.onload = function(){
		        	if (callback) callback();
		        };
		    }
			
		    script.src = url;
		    document.body.appendChild(script);
		};
		
		var appendBanner = function (id) {
			var banner = activeBanners[id],
				template = '<div id="w-o-s-external-banner-container-id-%">%</div>';
			
			switch (banner.type) {
				case 'fullscreen':
					var $banner = $(template.format(id, banner.html));
					dom.body.prepend($banner);
					banner.$ = $banner;
				break;
				
				default:
					
				break;
			}
		};
		
		var removeBanner = function (id) {
			var banner = activeBanners[id];
			
			banner.$.remove();
			delete activeBanners[id];
		};
	};
	
	WOSRichMedia.init();
})(window, document);