<?php
bjload("bjphp.vendor.ui.CachePage");
class user_register_cache extends \bjphp\vendor\ui\CachePage
{
	public function run($uicontext)
	{
		$this->_root =$uicontext;
		$this->_this =$this->_root;
		
		$this->do_html("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\" />\r\n\t<title>开发新狗场</title>\r\n\t<meta name=\"screen-orientation\" content=\"portrait\">\t<!-- uc强制竖屏 -->\r\n\t<meta name=\"browsermode\" content=\"application\">\t\t<!-- UC应用模式 -->\r\n\t<meta name=\"full-screen\" content=\"yes\">\t\t\t\t<!-- UC强制全屏 -->\r\n\t<meta name=\"x5-orientation\" content=\"portrait\">\t\t<!-- QQ强制竖屏 -->\r\n\t<meta name=\"x5-fullscreen\" content=\"true\">\t\t\t<!-- QQ强制全屏 -->\r\n\t<meta name=\"x5-page-mode\" content=\"app\">\t\t\t<!-- QQ应用模式 -->\r\n\t<meta content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" name=\"viewport\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"/res/css/css1.css?\" />\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"/res/css/info.css\" />\r\n\t<script src=\"/res/js/jquery-1.11.2.min.js\" charset=\"utf-8\"></script>\r\n\t<script src=\"/uilib/bjui.js\" type=\"text/javascript\" charset=\"utf-8\"></script>\r\n\t<script src=\"/res/js/hui_tool.js\" type=\"text/javascript\" charset=\"utf-8\"></script>\r\n\t<script src=\"/res/js/highcharts.js\" charset=\"utf-8\"></script>\r\n\t<script src=\"/res/js/hui_register.js\" charset=\"utf-8\"></script>\r\n\t<style type=\"text/css\">\n\t\t/*----确定提示框------*/\r\n\t\t\t#okInfo3 {\r\n\t\t\t    position: absolute;\r\n\t\t\t    width: 100%;\r\n\t\t\t    height: 58vh!important;\r\n\t\t\t    height: 435px;\r\n\t\t\t    background: url(/res/image/farm/okInfo.png) no-repeat 0 0;\r\n\t\t\t    background-size: 100% 100%;\r\n\t\t\t    top: 10%;\r\n\t\t\t    z-index: 10000000;\r\n\t\t\t    text-align: center;\r\n\t\t\t    color: #815f0f;\r\n\t\t\t    font-size: 18px;\r\n\t\t\t    font-weight: bold;\r\n\t\t\t    display: none;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t#okInfo3 .okInfoClose3 {\r\n\t\t\t    width: 31px;\r\n\t\t\t    height: 31px;\r\n\t\t\t    background: url(/res/image/close1.png) no-repeat 0 0;\r\n\t\t\t    background-size: 100% 100%;\r\n\t\t\t    position: absolute;\r\n\t\t\t    top: 24%;\r\n\t\t\t    right: 9%;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t#okInfo3 .infoxiaoxi3 {\r\n\t\t\t    width: 60%;\r\n\t\t\t    margin: 28vh auto  !important;\r\n\t\t\t    margin: 200px auto;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t#okInfo3 .okInfoB3 {\r\n\t\t\t    width: 62%;\r\n\t\t\t    height: 6vh!important;\r\n\t\t\t    height: 40px;\r\n\t\t\t    background: url(/res/image/farm/queding.png) no-repeat 0 0;\r\n\t\t\t    background-size: 100% 100%;\r\n\t\t\t    margin: -18vh auto  !important;\r\n\t\t\t    margin: 304px auto;\r\n\t\t\t}\r\n\t\t\t/*----确定提示框------*/\n\t</style>\r\n</head>\r\n<body>\r\n<div id=\"page\">\r\n\t<div id=\"top\">\r\n\t\t<span><a href=\"/user/user/home\">返回</a></span>\r\n\t\t<label><img src=\"");
		$v1=( $this->get_prop($this->_this,"headimg") );
		$this->do_html($this->encode($v1));
		$this->do_html("\"></label>\r\n\t</div>\r\n\t<div id=\"reg_div\" class=\"box-sizing\">\r\n\t\t<div class=\"reg box-sizing\">\r\n\t\t\t<ul class=\"reg_button\">\r\n\t\t\t\t<li class=\"on\"><a href=\"/user/user/register\">开发新狗场</a></li>\r\n\t\t\t\t<li><a href=\"/user/user/sale\">转赠小狗</a></li>\r\n\t\t\t\t<li><a href=\"/user/user/salelist\">转赠记录</a></li>\r\n\t\t\t</ul>\r\n\t\t\t<div class=\"reg_content box-sizing\">\r\n\t\t\t\t<div class=\"border box-sizing\">\r\n\t\t\t\t\t<form class=\"form\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"giveuser\" value=\"");
		$v2=( $this->get_prop($this->_this,"account") );
		$this->do_html($this->encode($v2));
		$this->do_html("\" ");
		$v3=( ($this->get_prop($this->_this,"edit")) == (0) );
		if( $this->is_true($v3) ){
		$this->do_html("readonly");
		}
		$this->do_html(">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"myuser\" placeholder=\"注册手机号\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"name\" placeholder=\"姓名\">\r\n\t\t\t\t\t\t<p>性别 <input type=\"radio\" name=\"sport\" value=\"0\" checked/>男<input type=\"radio\" value=\"1\" name=\"sport\" />女</p>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"phone\" placeholder=\"确认手机号\">\r\n\t\t\t\t\t\t<p>所需小狗数量330</p>\r\n\t\t\t\t\t\t<span class=\"botton subBtn\">确认</span>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"t_bg\"><img src=\"/res/images/t_bg.png\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--提示框-->\r\n\t<div id=\"infoBox\">\r\n\t\t<span class=\"close8\"></span>\r\n\t\t<div class=\"infoText\">提示信息</div>\r\n\t</div>\r\n\t<!--提示框-->\r\n\t<!--确定提示框-->\r\n    <div id=\"okInfo3\" >\r\n        <span class=\"okInfoClose3\"></span>\r\n        <p class=\"infoxiaoxi3\">1111111111</p>\r\n        <div class=\"okInfoB3\"></div>\r\n    </div>\r\n    <!--确定提示框-->\r\n    <!--遮罩-->\r\n    <div id=\"screen\"></div>\r\n</div>\r\n</body>\r\n</html>");
	}
}