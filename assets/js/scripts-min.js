!function($){"use strict";function e(){$('a[href*="#"]').on("click",function(e){var t=$(this).attr("href");$(this).parent("div").addClass("tab-head-active").removeClass("cell-disabled").siblings().removeClass("tab-head-active").addClass("cell-disabled"),$('[id*="table-"] '+t).addClass("tab-active"),$('[id*="table-"] '+t).siblings().removeClass("tab-active"),e.preventDefault()})}function t(){var e=200,t=200,a=$(".btn-to-top");$("#main-content").scroll(function(){$(this).scrollTop()>200?a.addClass("is-visible"):a.removeClass("is-visible fade-out"),$(this).scrollTop()>200&&a.addClass("fade-out")}),a.on("click",function(){$("#main-content").animate({scrollTop:0},700)})}var a;if(window.viewportSize={},window.viewportSize.getWidth=function(){return a("Width")},window.viewportSize.getHeight=function(){return a("Height")},a=function(e){var t,a,i,n=e.toLowerCase(),s=window.document,o=s.documentElement;return void 0===window["inner"+e]?t=o["client"+e]:window["inner"+e]!==o["client"+e]?(a=s.createElement("body"),a.id="vpw-test-b",a.style.cssText="overflow:scroll",i=s.createElement("div"),i.id="vpw-test-d",i.style.cssText="position:absolute;top:-1000px",i.innerHTML="<style>@media("+n+":"+o["client"+e]+"px){body#vpw-test-b div#vpw-test-d{"+n+":7px!important}}</style>",a.appendChild(i),o.insertBefore(a,s.head),t=7===i["offset"+e]?o["client"+e]:window["inner"+e],o.removeChild(a)):t=window["inner"+e],t},viewportSize.getWidth()<768&&$("#main #main-content").scroll(function(){var e=190;$(this).scrollTop()>190?$("#user-bar-header,header").addClass("sticky"):$("#user-bar-header,header").removeClass("sticky"),$(this).scrollTop()>190?($("#user-bar-header").stop().animate({top:"-200px"},1e3),$("header").stop().animate({top:0})):($("#user-bar-header").stop().animate({top:"0"},1e3),$("header").stop().animate({top:0}))}),viewportSize.getWidth()>=768&&viewportSize.getWidth()<1199){var i=$(".nav-link");i.find("span").css("display","none")}else if(viewportSize.getWidth()>1200||viewportSize.getWidth()<768){var i=$(".nav-link");i.find("span").css("display","block")}jQuery(document).ready(function($){var a,i,n;$(".navbar-white .nav-items").append('<li id="magic-line"></li>');var s=$("#magic-line");s.width($(".nav-items .current a").width()).css("left",$(".current a").position().left).data("origLeft",s.position().left).data("origWidth",s.width()),$(".navbar-white li").hover(function(){a=$(this).find("a"),i=a.position().left,n=a.parent().width(),s.stop().animate({left:i,width:n})},function(){s.stop().animate({left:s.data("origLeft"),width:s.data("origWidth")})}),$('a[href="#"]').on("click",function(e){e.preventDefault()}),$('a[href="#home"]').on("click",function(){$("#main-content").animate({scrollTop:0},700)}),$(".message.unread-message").on("mouseleave",function(){$(this).removeClass("unread-message")}),$('.dropdown a[href="#user-notification"]').on("click",function(){"show"==$(".dropdown").hasClass("show")?$(".badge").css("display","block"):$(".badge").remove()}),$('[href="#open-searchbar"]').on("click",function(){$("#search-bar-form").animate({width:"100%"},1e3)}),$(".closebtn").on("click",function(e){$(".overlay").animate({width:"0"},1e3),e.preventDefault()}),$('[data-tooltip="tooltip"]').tooltip(),$('[data-show="show-sidebar"]').on("click",function(){var e=$(this).attr("href");"width: 200px;"==$(e).attr("style")?($("#left-sidebar .navbar.navbar-dark").removeAttr("style"),$(e).animate({width:"0"},420),$(".menu-collapse").animate({left:0},420)):($("#left-sidebar .navbar.navbar-dark").css("display","block"),$(e).animate({width:"200px"},420),$(".menu-collapse").animate({left:"200px"},420))}),e(),t(),$(".chart").each(function(){var e=$(this).attr("data-chart");$(this).append('<canvas class="newCanvas"></canvas>'),$(this).find(".newCanvas").width("30px").height(e+"%");var t=$(this).find(".newCanvas")[0].getContext("2d");t.fillStyle="#16a085",t.fillRect(0,0,600,800)}),viewportSize.getWidth()<768?$('[name="submit"]').on("click",function(e){e.preventDefault(),$(".overlay").animate({width:"0"},1e3)}):$('[name="submit"]').on("click",function(e){e.preventDefault()}),$("input#search").on("keyup",function(){var e=$("#search").val();""==e||" "==e?$('button[name="clear-search"]').css("display","none"):$('button[name="clear-search"]').css("display","block")}),$('a[href="#edit"]').on("click",function(e){var t=$("h4.user-name").text();$("h4.user-name").hide(),$(".user-info-head").append('<input type="text" class="userName" name="userName" value="'+t+'" />'),$(this).hide(),$(".user-actions").each(function(){$(this).append('<a href="#save-it" class="save-it">Save</a>')}),e.preventDefault()}),$(".user-info-head").on("keyup",".userName",function(){var e=$(this).val();$(".user-actions").on("click",'a[href="#save-it"]',function(t){$(".userName").hide(),$("h4.user-name").show().html(e),$(".brand-logo .brand-title").html(e),$(".user-name").attr({title:e,"data-original-title":e}),localStorage.setItem("username",e),$(this).hide(),$('a[href="#edit"]').show(),t.preventDefault()})});var o=$("#user-name"),r=$("#brand-title");if("undefined"!=typeof Storage)if(null!=localStorage.getItem("username")||" "!=localStorage.getItem("username")){var l=localStorage.getItem("username");o.html(l).attr({title:l,"data-original-title":l}),r.html(l)}else{var l=localStorage.setItem("username","HOANG NGUYEN");o.html(l).attr({title:l,"data-original-title":l}),r.html(l)}else o.html("HOANG NGUYEN"),o.html("HOANG NGUYEN")})}(window.jQuery);