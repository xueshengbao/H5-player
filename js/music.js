$(document).ready(function(){
	
	var audio=$("#audio").get(0);
	var $audio=$(audio);
	var play=$("#key .start");
	var a=$("#key .start a");
	var current=$("#progress .begin span");
	var duration=$("#progress .over span");
	var cir=$("#cir");
	var progress=$("#progress .pro .progress");
//	var bcir=$("#r");
//	var yinliang=$("#yinliang");
//	var jin=$("#jin");
	var next=$("#key .right");
	var previous=$("#key .left");
	var red=$("#progress .pro .progress .red")
	
	
	
///////////////////////////////////////////////////////////////////	


//时间格式转换
	
	function time(v){
		v = Math.floor(v)
		var s= v % 60;
		s = s < 10 ? ("0"+s ):s ;
		var z= Math.floor(v / 60)
		return z+":"+s;
	}
	play.on("touchend",function(){
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}			
	})	
	
	
	
	
	cir.on("touchstart",function(e){
		
		var offsetX=e.originalEvent.changedTouches[0].clientX -cir.offset().left;
		var ir=cir.width()/2;
		console.log(ir)
		console.log(offsetX)
		
		var start= ir - offsetX;
		console.log(start)
		$(document).on("touchstart",function(e){
			var left=e.clientX - progress.position().left +start;
			var c= left/progress.width()*audio.duration;
			if(c>=audio.duration || c<=0){
				return;
			}
			audio.currentTime =c;	
			console.log(c)
		})
		return false;
	})
	$(document).on("touchend",function(){
		$(document).off("touchmove")
	});
	
	
	progress.on("touchend",function(e){
		var ir=cir.width()/2;
		var offsetX=e.originalEvent.changedTouches[0].clientX -cir.offset().left;
		audio.currentTime=offsetX/progress.width()*audio.duration;
		console.log(audio.currentTime)
    });
	
	//音乐进度
    
	$(audio).on("timeupdate",function(){
		var ir=cir.width()/2;
		current.html(time(audio.currentTime));
		var left= progress.width()* audio.currentTime /audio.duration-ir;
		var width=progress.width()* audio.currentTime /audio.duration;
		cir.css("left",left);
		red.css("width",width);
	})
    
    
    cir.on("touchend",false);
	
	
	var index=0;
	var music=[{
		name:"想太多",
		zuozhe:'Jason Chen',
		src:"Jason Chen - 想太多.mp3",
		duration:"3:34",
		lyrics:[	
            {time:"0:00",lyric:"想太多"},
            {time:"0:06",lyric:"李玖哲"},
            {time:"0:10",lyric:""},
            {time:"0:12",lyric:"你笑着说"},
            {time:"0:16",lyric:"他是朋友"},
            {time:"0:18",lyric:"但你眼中太温柔"},
            {time:"0:25",lyric:"我的不安"},
            {time:"0:28",lyric:"那么沉重"},
            {time:"0:32",lyric:"只有你不懂"},
            {time:"0:35",lyric:"他霸占了你的心中"},
            {time:"0:43",lyric:"属于我的角落"},
            {time:"0:49",lyric:"所以你说"},
            {time:"0:53",lyric:"我们 不是你和我"},
            {time:"1:01",lyric:"是我想太多"},
            {time:"1:04",lyric:"你总这样说 但你却没有 真的心疼我"},
            {time:"1:13",lyric:"是我想太多 我也这样说"},
            
            {time:"1:19",lyric:"这是唯一能安慰我的理由"},
            {time:"1:26",lyric:""},
            {time:"1:37",lyric:"他霸占了你的心中 属于我的角落"},
            {time:"1:50",lyric:"所以你说 我们 不是你和我"},
            {time:"2:03",lyric:"是我想太多 你总这样说"},
            {time:"2:09",lyric:"但你却没有 真的心疼我"},
            {time:"2:15",lyric:"是我想太多 我也这样说"},
            {time:"2:21",lyric:"这是唯一能安慰我的理由"},
            {time:"2:30",lyric:"我想我没有 错怪了什么"},
            {time:"2:38",lyric:"虽然你不说 或许错在我"},
            {time:"2:43",lyric:"太晚我才懂 爱了你太多"},
            {time:"2:53",lyric:"是我想太多 你总这样说"},
            {time:"2:59",lyric:"但你却没有 真的心疼我"},
            {time:"3:05",lyric:"是我想太多 我也这样说"},
            {time:"3:11",lyric:"这是唯一能安慰我的理由"}
            
        ]
	},
	{
		name:"Unbelievable",
		zuozhe:'Owl City',
		src:"Owl City - Unbelievable.mp3",
		duration:"3:13",
		lyrics:[	
            {time:"0:00",lyric:"Unbelievable"},
            {time:"0:04",lyric:"Owl City"},
            {time:"0:06",lyric:""},
            {time:"0:08",lyric:"It’s unbelievable"},
            {time:"0:10",lyric:"This is as good as it gets"},
            {time:"0:12",lyric:"It’s unbelievable"},
            {time:"0:14",lyric:"Don’t know what’s gonna happen next"},
            {time:"0:16",lyric:"It’s unbelievable"},
            {time:"0:18",lyric:"You haven’t seen nothing yet"},
            {time:"0:20",lyric:"It’s unbelievable, it’s unbelievable"},
            {time:"0:24",lyric:"When I was a kid I saved up all my dough so I could buy C-3PO"},
            {time:"0:28",lyric:"Put Mentos in my Diet Coke in the back seat of the bus"},
            {time:"0:32",lyric:"When I was a kid I ate SpaghettiOs, played laser tag and G.I. Joes"},
            {time:"0:36",lyric:"And if you vowed No Girls Allowed , then you could join the club"},
            {time:"0:40",lyric:"When I was a kid I spent my Saturday’s blowing on Nintendo games"},
            {time:"0:45",lyric:"My favorite part of Jurassic Park was how real the Raptors looked"},
            {time:"0:48",lyric:"It’s unbelievable"},
            {time:"0:50",lyric:"This is as good as it gets"},
            {time:"0:52",lyric:"It’s unbelievable"},
            {time:"0:54",lyric:"Don’t know what’s gonna happen next"},
            {time:"0:56",lyric:"It’s unbelievable"},
            {time:"0:58",lyric:"You haven’t seen nothing yet"},
            {time:"1:00",lyric:"It’s unbelievable, it’s unbelievable"},           
            {time:"1:13",lyric:"When I was a kid I dreamed of Power Wheels"},
            {time:"1:15",lyric:"Stayed up late watching action films"},
            {time:"1:17",lyric:"]And I won t lie my friends and I were too legit to quit"},
            {time:"1:21",lyric:"When I was a kid I lived for climbing trees"},
            {time:"1:23",lyric:"And Doctor Pepper jellybeans"},
            {time:"1:25",lyric:"My favorite part of Jurassic Park"},
            {time:"1:27",lyric:"Was how real the Raptors looked"},
            {time:"1:29",lyric:"When I was a kid I still had VHS"},
            {time:"1:31",lyric:"Watched Fresh Prince and Jazzy Jeff"},
            {time:"1:33",lyric:"Zack Morrison the first cell phone it was off the hook"},
            {time:"1:37",lyric:"It s unbelievable"},
            {time:"1:39",lyric:"This is as good as it gets"},
            {time:"1:41",lyric:"It s unbelievable"},
            {time:"1:43",lyric:"Don t know what s gonna happen next"},
            {time:"1:45",lyric:"It s unbelievable"},
            {time:"1:47",lyric:"You haven t seen nothing yet"},
            {time:"1:49",lyric:"It s unbelievable"},
            {time:"1:51",lyric:"It s unbelievable"},
            {time:"2:01",lyric:"Gak, pogs and Floam and Home Alone, Berenstain Bears and bean bag chairs"},
            {time:"2:05",lyric:"My L.A. looks and Goosebumps books, oh, Etch-A-Sketch, what happened next"},
            {time:"2:10",lyric:"Grape Juicyjuice and Dr. Seuss, piggy-back rides and Slip N' Slides"},
            {time:"2:13",lyric:"Mcdonold's fries, those were the best, what happens next"},  
            {time:"2:20",lyric:"It’s unbelievable"},
            {time:"2:22",lyric:"This is as good as it gets"},
            {time:"2:24",lyric:"It’s unbelievable"},
            {time:"2:26",lyric:"Don’t know what’s gonna happen next"},
            {time:"2:28",lyric:"It’s unbelievable"},
            {time:"2:30",lyric:"You haven’t seen nothing yet"},
            {time:"2:32",lyric:"It’s unbelievable, those were the days. Oh!"},
            {time:"2:36",lyric:"It’s unbelievable"},
            {time:"2:38",lyric:"When I think back on them, man"},
            {time:"2:40",lyric:"It’s unbelievable"},
            {time:"2:42",lyric:"Cause baby those were the days"},
            {time:"2:44",lyric:"It’s unbelievable"},
            {time:"2:46",lyric:"It ruled in so many ways"},
            {time:"2:49",lyric:"It’s unbelievable, it’s unbelievable"},
            {time:"2:57",lyric:"I'm so amazed, those were the days"},
            {time:"3:00",lyric:"(Nananana nanananana)"},
            {time:"3:05",lyric:"（nananana NaNaNaNaNa）"}
            
        ]
	},
	{
		name:"友情岁月 (Yeti一起兄弟版)",
		zuozhe:'华语群星',
		src:"华语群星 - 友情岁月 (Yeti一起兄弟版).mp3",
		duration:"3:29",
		lyrics:[	
            {time:"0:00",lyric:"友情岁月 (Yeti一起兄弟版)"},
            {time:"0:06",lyric:"华语群星"},
            {time:"0:10",lyric:""},
            {time:"0:35",lyric:"来忘掉错对 来怀念过去"},
            {time:"0:40",lyric:"曾共渡患难日子总有乐趣"},
            {time:"0:44",lyric:"不相信会绝望 不感觉到踌躇"},
            {time:"0:48",lyric:"在美梦里竞争 每日拼命进取"},
            {time:"0:50",lyric:""},
            {time:"0:52",lyric:"谢：奔波的风雨里"},
            {time:"0:54",lyric:"钱：不羁的醒与醉"},
            {time:"0:57",lyric:"合：所有故事像已发生飘泊岁月里"},
            {time:"1:00",lyric:"风吹过已静下 将心意再还谁"},
            {time:"1:03",lyric:"让眼泪已带走 夜憔悴"},
            {time:"1:20",lyric:""},
            {time:"1:31",lyric:"郑：消失的光阴散在风里 仿佛想不起再面对"},
            {time:"1:40",lyric:"陈：流浪日子 你在伴随 有缘再聚"},
            {time:"1:47",lyric:"林：天真的声音已在减退 彼此为着目标相距"},
            {time:"1:55",lyric:"合：凝望夜空 往日是谁 领会心中疲累"},
            {time:"2:00",lyric:""},
            {time:"2:05",lyric:"合：来忘掉错对 来怀念过去"},
            {time:"2:08",lyric:"曾共渡患难日子总有乐趣"},
            {time:"2:13",lyric:"不相信会绝望 不感觉到踌躇"},
            {time:"2:16",lyric:"在美梦里竞争 每日拼命进取"},
            {time:"2:20",lyric:"奔波的风雨里 不羁的醒与醉"},
            {time:"2:24",lyric:"所有故事像已发生飘泊岁月里"},
            {time:"2:28",lyric:"风吹过已静下 将心意再还谁"},
            {time:"2:32",lyric:"让眼泪已带走 夜憔悴"}           
        ]
	}]
	
	//添加歌曲列表（渲染）
	
	function add(){
		$("#uls").empty();
		$.each(music,function(i,v){
			console.log(i)	
			var c = ( i === index ) ? "active" : "";
			console.log(c)
			$('<li class="'+c+'"><span class="names">'+music[i].name+'-'+music[i].zuozhe+'</span><a class="delete" href="javascript:;">&#xe62e;</a></li>').appendTo("#uls");
			 $(music[index].lyrics).each(function(i,v){
	            $("<p class="+ i +">"+v.lyric+"</p>").appendTo("#lyric .lyric-box .lyric")
	        })
			
//		 	var ins=index+1;
//	  	  	console.log(ins)
//			$("#zhao").css({background: "url('../images/1"+ins+".jpg');"})
			
			
		})
	}
	add();
	
	
	// 列表 删除
	$("#uls").on('touchend','.delete',function(){
		var li = $(this).closest('li');
		var indexs = li.index();
		music.splice(indexs,1);
		
		if (indexs === index) {
			if(music[indexs]) {
				audio.src=music[index].src;
			} else {
				audio.src= '';
			}
		} else if (indexs > index){
				   //不操心
			} else if (indexs < index){
				index -= 1;
			}
			
		add();
		audio.play();
		return false;
	});
	
	
	
	
	//歌曲切换
	
	$("#uls").on("touchend","span",function(){
		
		index=$(this).closest('li').index();
		audio.src=music[index].src;
	 	var ins=index+1;
  	  	console.log(ins)
		$("#zhao").css({backgroundImage: "url('images/1"+ins+".jpg')"})
		audio.play();
		add();
	})
	
	//列表添加
//	$("#uls").on('touchend','div',function (){
//		var d = $(this).attr("data-v");
//		database.push(JSON.parse(d));
//		render();
//		
//	})

	
   
	
	
	
	//下一首
	
	function Next(){
		var indexs=index+1;
		if(indexs>=music.length){
			indexs=0;
		}
		audio.src=music[indexs].src;
		var ins=indexs+1;
  	  	console.log(ins)
		$("#zhao").css({backgroundImage: "url('images/1"+ins+".jpg')"})
		index=indexs;
		add();
		audio.play();
	}
	next.on("touchend",Next);
	
	//上一首
	
	function Previous(){
		var indexs=index-1;
		if(indexs<0){
			indexs=2;
		}
		audio.src=music[indexs].src;
		var ins=indexs+1;
  	  	console.log(ins)
		$("#zhao").css({backgroundImage: "url('images/1"+ins+".jpg')"})
		index=indexs;
		add();
		audio.play()
	}
	
	previous.on("touchend",Previous)
	
	
	//取消歌曲列表
	
	$("#list .uls-floor .close").on("touchend",function(){
		$("#list").removeClass("li");
		$("#list").addClass("lis");
		return false;
	})
	
	//打开歌曲列表
	
	$("#floor #key .list").on("touchend",function(){
		$("#list").addClass("li");
		$("#list").removeClass("lis");
		return false;
	})
	
	//清空列表
	
	$("#list .uls-header .clear").on("touchend",function(){
		$("#uls li").remove();
	})
	
	

	
	//音量条
	var vol=$("#volume .right .volume");
	var vI=$("#volume .right .volume a")
	var jin=$("#volume .left a");
	
	console.log(vol.width())
	
	
	
	
	
	
	vI.on('touchend',function (e){
		var offsetX  = e.originalEvent.changedTouches[0].clientX - vI.offset().left;
		var r = vI.width() / 2;
		var start = r - offsetX;
		$(document).on('touchmove',function(e){
			var pos = e.originalEvent.changedTouches[0].clientX - vol.offset().left + start;
			var v = pos/vol.width()
			if( v >=1 || v <=0 ){
				return;
			}
			audio.volume = v;
		})
		return false;
	});
	$(document).on('touchend',function(){
		$(document).off('touchmove');
	})
	
	//音量条拖拽
	
	
	vol.on('touchend',function(e){
		var offsetX = e.originalEvent.changedTouches[0].clientX - vol.offset().left;
		console.log(offsetX)
		audio.volume = offsetX / $(this).width();
//		console.log(audio.volume)
		jin.removeAttr("v");
	});
	
	$audio.on("volumechange",function(){
		vI.css("left",vol.width() * audio.volume - vI.width()/2 +"px") ;
		$("#volume .right .this").css("width",vol.width() * audio.volume - vI.width()/2 +"px")
		
		console.log(vol.width())
//		console.log(audio.volume)
//		console.log(vI.width()/2)
		console.log(vol.width() * audio.volume - vI.width()/2)
	});
	

	
	//静音控制
	
	
	jin.on("touchend",function(){
		if($(this).attr("v")){
			//自定义
			audio.volume=$(this).attr("v");
			$(this).removeAttr("v")
			
		}else{
			$(this).attr("v",audio.volume)
			audio.volume=0;
		}
	})
	 
	
	//用户
	
	
	var user=$("#header .return a");
	var userLeft=$("#user .user-left");
	var userRight=$("#user .user-right");
	
	user.on("touchend",function(){
		$("#user").css("display","block")
		userLeft.addClass("dong");
		userLeft.removeClass("dongs");
		userRight.addClass("zhezhao");
		userRight.removeClass("zhezhaos");
	})
	
	userRight.on("touchend",function(){
		
		userLeft.removeClass("dong");
		userLeft.addClass("dongs");
		userRight.removeClass("zhezhao");
		userRight.addClass("zhezhaos");
		$("#user").css("display","block")
	})
	
	
	//喜欢
	
	
	var like=$("#floor #menu .center .like");
	like.on("touchend",function(){
		$(this).find("a").toggleClass("click");
		return false;
	})
	
	
	//循环方式
	
	
	var circ=$("#key .circulation a");
	var i=0;
	$("#key .circulation").on("touchend",function(){		
		if(i>=circ.length){
			i=0;
		}
		$("#key .circulation a").removeClass("active");
		$("#key .circulation a").eq(i).addClass("active");
		
		i++;
	})
	
	
//////////////////////////////////////////////////////////////////////



	
	$audio.on("volumechange",function(){
		
	})
	$audio.on("loadstart",function(){
		$("#header .name").html(music[index].name);
		$("#header .author").html(music[index].zuozhe);
		var volume=audio.volume;
		console.log(volume);
		vI.css("left",vol.width() *volume - vI.width()/2 +"px") ;
		$("#volume .right .this").css("width",vol.width() * audio.volume - vI.width()/2 +"px")
	})
	$audio.on("progress",function(){
		
	})
	$audio.on("canplay",function(){
		duration.html(time(audio.duration))
	})
	$audio.on("play",function(){
		a.html("&#xe632;");
		a.css("font-size","1.18rem").css("margin-left","0.15rem")
	})
	$audio.on("pause",function(){
		a.html("&#xe623;");
		a.css("font-size","1.3rem").css("margin-left","0.1rem")
	})
	$audio.on("ended",function(){
		var indexs;
		if($("#key .circulation a.active").hasClass("all")){
			indexs=index+1;
			if(indexs>=music.length){
				indexs=0;
			}
		}else if($("#key .circulation a.active").hasClass("suiji")){
			indexs = parseInt( Math.random()*(music.length-1) );
		}else if($("#key .circulation a.active").hasClass("one")){
			indexs=index;
		};
		
		console.log(indexs)
		audio.src=music[indexs].src;
		index=indexs;
		add();
		audio.play();
	})
	$audio.on("timeupdate",function(){
		$(music[index].lyrics).each(function(i,v){
            if(time(audio.currentTime) == v.time){
                   console.log(time(audio.currentTime))
                
                if(i -3<=0){
                    i= 0;
                }else{
                    i= i-3
                }
                var a=i+3;
               $(".lyric").empty()
                for(var j=i;j<music[index].lyrics.length;j++){
                    $("<p class="+ j +">"+music[index].lyrics[j].lyric+"</p>").appendTo("#lyric .lyric-box .lyric")
                }
                $("."+a).addClass("active")
            }
        })
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})