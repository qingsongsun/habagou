$(document).ready(function(){function a(){var a=$(".phone").val();if(/^1[34578]\d{9}$/.test(a))return!0}$("#page").height($(window).height()),$(".tjt_div").css("height",$("#page").height()-$(".bottom").height()-$(".new_content").height()-100),bjui_config.error_report=function(a,b,c,d,e){$("#infoBox").show(),$("#infoBox").find(".infoText").text(d)};var b=$("#screen");$(".close8").on("click",function(){$("#infoBox").hide()}),$(".okInfoClose3").on("click",function(){$("#okInfo3").hide(),unlock(b)}),$(".subBtn").on("click",function(){var c=$(".giveuser").val(),d=$(".myuser").val(),e=$(".name").val(),f=$(".phone").val();$("input:radio:checked").val(),""==c?($("#infoBox").show(),$("#infoBox").find(".infoText").text("请输入转赠人手机号")):""==d?($("#infoBox").show(),$("#infoBox").find(".infoText").text("请输入手机号码")):""==e?($("#infoBox").show(),$("#infoBox").find(".infoText").text("请输入姓名")):""==f?($("#infoBox").show(),$("#infoBox").find(".infoText").text("请输入电话号码")):a()?d!=f?($("#infoBox").show(),$("#infoBox").find(".infoText").text("手机号码不一致，请核对")):BizCall("user.User.loadRecommend",{fromAccount:c},function(a){$("#okInfo3").show(),lock(b),$("#okInfo3").find(".infoxiaoxi3").text("确认推荐人为："+a+"?")}):($("#infoBox").show(),$("#infoBox").find(".infoText").text("手机号格式不正确"))}),$(".okInfoB3").on("click",function(){var a=$(".giveuser").val(),c=$(".myuser").val(),d=$(".name").val(),e=$(".phone").val(),f=$("input:radio:checked").val();BizCall("user.User.register",{fromAccount:a,account:c,name:d,sex:f,phone:e},function(a){$("#okInfo3").hide(),unlock(b),$("#infoBox").show(),$("#infoBox").find(".infoText").text("成功开发新狗场")})})});