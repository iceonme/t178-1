var host = 'http://www.97sng.com/public/img/';
document.write('<div id="open"style="width:690px; border:#336e8c 5px solid;background-color:#ebf6fc;position:fixed; display:none"><div style=" height:33px; width:680px; background-color:#197fc1; margin-top:5px; margin-left:auto; margin-right:auto;"><img src="'+host+'ment_03.jpg" width="62" height="15" style="margin-top:10px; margin-left:10px;" /></div><div id="ments" style=" text-align:left; width:680px; margin-left:auto; margin-right:auto; background-image:url('+host+'bg_07.jpg); text-indent:2em; background-repeat:repeat;line-height:32px;"></div><a href="javascript:void(0)"><img id="closeDIV" src="'+host+'ment_07.jpg" width="72" height="22" style=" float:right; margin:10px; border:none;" /></a></div>');
document.write('<script>function showWindow(a,b,c){jq("#open").css("display","");document.getElementById("ments").innerHTML=c;document.getElementById("open").style.left=(document.body.clientWidth-a>0?document.body.clientWidth-a:0)/2+"px";document.getElementById("open").style.top="100px";document.getElementById("open").style.zIndex=10001;document.getElementById("open").style.width=a;document.getElementById("open").style.border="3px solid #0099ff";}jq(document).ready(function(){jq("#bu_ton").click(function(){jq("#fugai").css("display",""),showWindow(700,200,openhtml)}),jq("#closeDIV").click(function(){jq("#open").css("display","none"),jq("#fugai").css("display","none")})})</script>');
var openhtml = "活动内容：<br>每周三选取一款游戏进行PK大奖赛，积分最高的用户可获得100-300元现金大奖。";
var html="<div id='bu_ton' style='over-flow:hidden;margin: 0 auto;text-align: center;cursor: pointer; '><img src='"+host+"gg.png'></div>";
document.write(html);