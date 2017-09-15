/*页面进度条*/
	document.onreadystatechange = function(){
		if(document.readyState == "complete"){
			$(".loading").fadeOut();
		}
	}
	/*轮播区域高度获取*/
	var height = $(window).height()-$(".head-v3").height();
	$(".center_area").css("height",height+"px");
	$(".content_middle").css("height",height+"px");
	$(".content_middle ul li").css("height",height+"px");
	var bannerTop = $(".banner-top").height();
	$(".banner-top").css("margin-top",(height-bannerTop)/2+"px");
	//console.log("height:"+height);
	/*导航菜单设置*/
	jQuery(document).ready(function(){
		var qcloud={};
		$('[_t_nav]').hover(function(){
			var _nav = $(this).attr('_t_nav');
			clearTimeout( qcloud[ _nav + '_timer' ] );
			qcloud[ _nav + '_timer' ] = setTimeout(function(){
				$('[_t_nav]').each(function(){
					$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
				});
				$('#'+_nav).stop(true,true).slideDown(200);
			}, 150);
		},function(){
			var _nav = $(this).attr('_t_nav');
			clearTimeout( qcloud[ _nav + '_timer' ] );
			qcloud[ _nav + '_timer' ] = setTimeout(function(){
				$('[_t_nav]').removeClass('nav-up-selected');
				$('#'+_nav).stop(true,true).slideUp(200);
			}, 150);
		});
	});
	//视频js
    function createplayer() {
        /*var submitData = {
            note: "首页",
            type: "AddSee",
            siteid:1
        };
        $.get("http://www.isoftstone.com/ajax/ajax_register.aspx?time=" + new Date().getTime(), submitData,
            function (data) {
            }, "json")*/

        /*var flashvars = {
            f: '',
            c: 0,
            loaded: 'loadedHandler',
            p: 1
        };

        var video = ['video/video.mp4', 'video/video.mp4'];

        CKobject.embed('http://www.isoftstone.com/scripts/ckplayer/ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', '885px', '500px', false, flashvars, video);
*/		

		$("#a1 img").css("display","none");
		$("#a1 i").css("display","none");
		$("#a1").append("<video controls='controls' id='ckplayer_a1' width='885px' height='500px' autoplay='autoplay'>"+
			"<source src='video/video.mp4'>"+
			"<source src='video/video.mp4'>"+
			"</video>");
        /*if(!device.desktop()){
            if( $('#a1 video').length > 0){
                $('#a1 video').get(0).play()
            }
        }*/
    }
    /*合作伙伴板块切换*/
   $(".right").click(function(){
   		$(".par_logo.one").css({"left":"-1200px","transition":"all 0.5s"});
   		$(".par_logo.two").css({"left":"0px","transition":"all 0.5s"});
   		$(".left").css("background-position","0px -1590px");
   		$(".right").css("background-position","-40px -1630px");
   });
   $(".left").click(function(){
   		$(".par_logo.one").css({"left":"0px","transition":"all 0.5s"});
   		$(".par_logo.two").css({"left":"1200px","transition":"all 0.5s"});
   		$(".left").css("background-position","0px -1630px");
   		$(".right").css("background-position","-40px -1590px");
   })
	/*回到顶部js*/
	window.onload = function(){
		var obtn = document.getElementById('gotoTop');  //获取回到顶部按钮的ID
		var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
		var timer = null; //定义一个定时器
		var isTop = true; //定义一个布尔值，用于判断是否到达顶部

		window.onscroll = function(){         //滚动条滚动事件

			//获取滚动条的滚动高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;

			if(osTop >= clientHeight){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
				obtn.style.display = 'block';
			}else{         //否则隐藏
				obtn.style.display = 'none';
			}

			//主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
			if(!isTop){

				clearInterval(timer);
			}
			isTop = false;

		}

		obtn.onclick = function(){    //回到顶部按钮点击事件
			//设置一个定时器
			timer = setInterval(function(){
				//获取滚动条的滚动高度
				var osTop = document.documentElement.scrollTop || document.body.scrollTop;
				//用于设置速度差，产生缓动的效果
				var speed = Math.floor(-osTop / 6);
				document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
				isTop =true;  //用于阻止滚动事件清除定时器
				if(osTop == 0){
					clearInterval(timer);
				}
			},30);
		}
	}