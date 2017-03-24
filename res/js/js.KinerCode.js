function KinerCode(options){if(this.opt=this.extend(!0,this.options,options),this.opt.chars=this.opt.chars&&0==this.opt.chars.length?this.options.chars:this.opt.chars,this.opt.bg=this.opt.bgImg&&0!=this.opt.bgImg.length?"url('"+this.opt.bgImg+"')":this.options.bgColor,this.opt.question){this.answer=[];for(var i=0;i<this.opt.chars.length;i++)this.answer.push(eval(this.opt.chars[i]))}this.init(),this.bind()}KinerCode.prototype.init=function(){function a(a,b){b?(a.removeAttribute("unselectable"),a.removeAttribute("onselectstart"),a.style["-moz-user-select"]="",a.style["-webkit-user-select"]="",a.style["user-select"]="",a.ondrag=function(){return!1}):(a.setAttribute("unselectable","on"),a.setAttribute("onselectstart","return false;"),a.style["-moz-user-select"]="none",a.style["-webkit-user-select"]="none",a.style["user-select"]="none",a.ondrag=function(){return!1})}var b=this;this.body?this.body.innerHTML="":this.body=document.createElement("div"),b.opt.click2refresh&&(this.body.title="看不清?换一张试试！！"),this.opt.codeArea.style.overflow="hidden",b.opt.copy||function(){function c(a){return a.cancelBubble=!0,a.returnvalue=!1,!1}function d(a){if(window.Event){if(2==a.which||3==a.which)return!1}else if(2==a.button||3==a.button)return a.cancelBubble=!0,a.returnvalue=!1,!1}function e(){return!1}window.Event&&document.captureEvents(Event.MOUSEUP),b.body.oncontextmenu=c,b.body.onmousedown=d,b.body.onselectionstart=e,b.body.oncopy=function(){return!1},b.body.oncut=function(){return!1},b.opt.inputArea.style.imeMode="disabled",b.opt.inputArea.onpaste=function(){return!1},b.opt.inputArea.oncontextmenu=c,b.opt.inputArea.onmousedown=d,b.opt.inputArea.onselectionstart=e,a(b.body,!1)}(),this.myCode=this.createCode();for(var c=this.myCode.arrCode.length,d=0;d<c;d++){var e=this.createCodeEle(this.myCode.arrCode[d]);this.body.appendChild(e)}this.body.style.background=this.opt.randomBg?this.toRGB().background:this.opt.bg,this.body.style.backgroundPosition="center",this.body.style.backgroundSize="cover",this.body.style.overflow="hidden",this.body.style.width="100%",this.body.style.height="100%",this.body.style.lineHeight="100%",this.body.style.cursor="pointer",this.body.style.position="relative",this.body.style.transition="all 1s",this.body.style.webkitTransition="all 1s",this.body.style.mozTransition="all 1s",this.body.style.oTransition="all 1s",this.opt.codeArea.appendChild(this.body)},KinerCode.prototype.refresh=function(){this.init()},KinerCode.prototype.bind=function(){var a=this;a.opt.click2refresh&&a.bindHandler(a.body,"click",function(){a.refresh()}),a.bindHandler(a.opt.validateObj||a.opt.inputArea,a.opt.validateEven,function(){a.opt.validateFn.call(a,a.validate(),a.myCode),a.opt.false2refresh&&!a.validate()&&(a.refresh(),a.opt.inputArea.focus(),a.opt.inputArea.select())})},KinerCode.prototype.bindHandler=function(a,b,c){window.addEventListener?a.addEventListener(b,c,!1):window.attachEvent&&a.attachEvent("on"+b,c)},KinerCode.prototype.validate=function(){return this.opt.question?parseFloat(this.myCode.answer)===parseFloat(this.opt.inputArea.value.trim()):this.myCode.strCode.toLowerCase().trim()==this.opt.inputArea.value.toLowerCase().trim()},KinerCode.prototype.createCodeEle=function(a){var b=document.createElement("span");return b.innerHTML=a,b.style.color=this.toRGB().color,b.style.textAlign="center",b.style.height="100%",b.style.lineHeight=this.opt.codeArea.offsetHeight+"px",b.style["-webkit-text-shadow"]="#000 1px 1px 5px,#FFCC99 -1px -1px 1px,#000 -1px -1px 2px",b.style["-moz-text-shadow"]="#000 0px 0px 5px,#FFCC99 -1px -1px 1px",b.style["-o-text-shadow"]="#000 0px 0px 5px,#FFCC99 -1px -1px 1px",b.style.textShadow="#000 1px 1px 5px,#FFCC99 -1px -1px 1px,#000 -1px -1px 2px",this.opt.question?b.style.width="100%":b.style.width=90/this.opt.len+"%",b.style.padding="0 1%",b.style.fontSize="2em",b.style.display="inline-block",b},KinerCode.prototype.toRGB=function(){var a="",b="",c=[],d=[],e=[],f=0;for(f=0;f<3;f++)c.push(parseInt(255*Math.random()));for(f=0;f<c.length;f++)e.push(c[f].toString(16)),d.push((255-c[f]).toString(16));for(f=0;f<e.length;f++)a+=e[f],b+=d[f];return{background:"#"+a,color:"#"+b}},KinerCode.prototype.createCode=function(){var a,b="",c=[],d=this,e="";if(this.opt.question){var f=parseInt(Math.random()*d.opt.chars.length);a=d.opt.chars[f],b=a,e=this.answer[f],c.push(a)}else for(var g=0;g<d.opt.len;g++){var f=parseInt(Math.random()*d.opt.chars.length);a=d.opt.chars[f],b+=a,c.push(a)}return this.myCode={strCode:b,arrCode:c,answer:e}},KinerCode.prototype.options={len:4,chars:[1,2,3,4,5,6,7,8,9,0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],copy:!1,bgColor:"#222222",bgImg:"",randomBg:!1,inputArea:"",codeArea:"",click2refresh:!0,validateEven:"",validateFn:function(a,b){}},KinerCode.prototype.extend=function(a,b,c){if(a){var d={};for(var e in b)d[e]=b[e];for(var e in c)d[e]=c[e];return d}for(var e in c)b[e]=c[e];return b};