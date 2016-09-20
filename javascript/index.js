// JavaScript Document
	function ClickOn(){
		
		$('#IndexHeaderWords ul li a').click(function(){
			$(this).parent().addClass('on').siblings().removeClass('on');
			});
		
		}
	function ShowShadow(){
		
		$('.IndexMianDownloadBox').hover(function (){
			
			$(this).children('.IndexMianShadowBox').stop(true,true).delay(100).animate({'top':0,opacity:1,},300);
			
			},function(){
				
				$(this).children('.IndexMianShadowBox').animate({'top':-54,opacity:0},300);
				
				});
		$('.IndexHeaderLogin').hover(function(){
			
			$(this).children('.IndexHeaderLoginBox').stop(true,true).delay(100).animate({'top':0,opacity:1,},300);
			
			},function(){
				
			$(this).children('.IndexHeaderLoginBox').animate({'top':-30,opacity:0,},300);
				});
		};
	function MouseWheel(){
		var siz=0;
		var flag=true;
		var le=2;	
		var	hi=$(window).height();
	//	var le=$('#content li').length;
			$('html,body').mousewheel(function(event, delta, deltaX, deltaY){
				
					if (delta<0&&flag) {
						flag=false;
						siz=$(window).scrollTop()>hi*(le-1)?hi*(le-1):hi+$(window).scrollTop();
						
						$('html,body').stop().animate({scrollTop:siz},1500,function  () {
							flag=true;
						})
					}else{
						if (flag) {
							flag=false;
						   siz=$(window).scrollTop()<hi*2?0:$(window).scrollTop()-hi;
						   $('html,body').stop().animate({scrollTop:siz},1500,function  () {
							flag=true;
						})
						}
						}
						return false;
			})
		
		
		};	
		
/*			
		
window.onscroll=function onscroll(){
	
	var t = document.documentElement.scrollTop || document.body.scrollTop;//滚轮高度
	var s=document.body.scrollHeight;//文档高度
	var q=window.screen.height;//屏幕高度
	
		if(t>10 & t<300){t=(s-q)/2}
	//alert('a')
	};
	
	function SolidHeight(){
		var DS=$(document).scrollTop();
		var DH=$(document).height();
		var DW=$(window).height();
		
		
	if($(document).scrollTop()>10){
		alert('aaaa');
		$(document).scrollTop('800')
		}
		
	};
	//	var DS=$(document).scrollTop();
	//	var DH=$(document).height();
	//	var DW=$(window).height();
	
		alert(DW);
		alert(DH);
		alert(DS);
		
		$(document).scroll(500); 
		alert($(document).scroll());
	};
	*/
//****
