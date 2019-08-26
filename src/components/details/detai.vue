<template>
	<div class="xiang">
		<div class="" style="margin-top: 20px;text-align: center;">
			<label><input @click="getRadioVal1" type="radio" name="type" checked="checked">满意</label>
	    	<label><input @click="getRadioVal2" type="radio" name="type" >不满意</label>
	    	<br />
			<button @click="ping()" style="margin-top: 30px;"> 评论</button>
		</div>
		<!--左右滑动图片开始-->
	    <div class="lateral-sliding">
    		<div class="lateral-sliding-item" v-for="(item,index) in aa" :key="index">
      			<div class="each-img">
      				<img :src="item.thumbnail_pic_s" height="75" width="75">
      			</div>
    		</div>
		</div>
		<!--左右滑动图片结束-->
	    
	    <!--top切换栏开始-->
		<div class="but">
			<button @click="dian()"> {{ all+countOne }}</button>
			<button @click="dianj()"> {{ positiye+countTow }}</button>
			<button @click="dianji()"> {{ nedative+countThree }}</button>
		</div>
		<div>
			<div class="a1" v-if="dddd==true">
				<div>
					<div v-viewer>
						<img src="http://06imgmini.eastday.com/mobile/20190805/2019080511_9653e6527a9f46709f5e9ab3769bc498_5303_mwpm_03200403.jpg" width="75" height="75" />
					</div>
					<div>
						<p>比较满意</p>
						<p>非常满意</p>
					</div>
				</div>
			</div>
			<div class="a2" v-if="daaa==true">
				<div>
					<div v-viewer>
						<img src="http://01imgmini.eastday.com/mobile/20190805/2019080510_9036331ed575471292ea3d2097dcd16c_6983_cover_mwpm_03200403.jpg" width="75" height="75" />
					</div>
					<div>
						<p>比较满意</p>
						<p>非常满意</p>
					</div>
				</div>
			</div>
			<div class="a3" v-if="ddaa==true">
				<div>
					<div v-viewer>
						<img src="http://02imgmini.eastday.com/mobile/20190805/20190805100438_adf0bc20355162d0cc483b27d14103bc_4_mwpm_03200403.jpg" width="75" height="75" />
					</div>
					<div>
						<p>不满意</p>
						<p>非常不满意</p>
					</div>
				</div>
			</div>
		</div>
		<!--top切换栏结束-->
		
		<!--搜索功能开始-->
		<div class="safetyInfo">
		  	<input type="text" name="" id="" placeholder="搜索" v-model="search"/> 
		  	<button @click="btn">搜索</button>
		  	<ul v-for="list in searchData">
		  		<li>
		  			<div>
		  				<img :src="list.thumbnail_pic_s" v-viewer alt="">
		  			</div>
		  			<div>
		  				<span class="category">{{list.category}}</span>
		  				<span>{{list.author_name}}</span>
			  			<span>{{list.date}}</span>
			  			<span>{{list.title}}</span>
		  			</div>
		  			
		  		</li>
		  	</ul>
		</div>
		<!--搜索功能结束-->	
		
		<!--列表左滑开始-->
		<div id="SlideBar" class="box">
	        <div class="item" ref="slide" :style="slideStyle" @touchstart="start($event)" @touchmove="move($event)" @touchend="end($event)">
	          	<img src="http://02imgmini.eastday.com/mobile/20190805/20190805100438_adf0bc20355162d0cc483b27d14103bc_2_mwpm_03200403.jpg" v-viewer alt="">
	          	<div class="right">
	            	<div class="title">你好!</div>
	            	<p class="text">哈哈哈</p>
	            	<p class="price">好不</p>
	          	</div>
	        </div>
	        <div class="btn" ref="btn">
	            <button>编辑</button>
	            <button style="background:#387ef5;color:#fff">收藏</button>
	        </div>
	    </div>
		<!--列表左滑结束-->
		
		<!--日期开始-->
 		<div id="calendar">
  			<div class="month">
  				<ul>
   					<li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
   					<li class="year-month" @click="pickYear(currentYear,currentMonth)">
	   					<span class="choose-year">{{ currentYear }}</span>
	   					<span class="choose-month">{{ currentMonth }}月</span>
   					</li>
   					<li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
  				</ul>
  			</div>
			<ul class="weekdays">
			  	<li>一</li>
			  	<li>二</li>
			  	<li>三</li>
			  	<li>四</li>
			  	<li>五</li>
			  	<li style="color:red">六</li>
			  	<li style="color:red">日</li>
			</ul>
  			<ul class="days">
  				<li @click="pick(day)" v-for="day in days">
   					<!--今天-->
   					<span v-if="day.getMonth()+1 != currentMonth" class="other-month">{{ day.getDate() }}</span>
   					<span v-else>
	   					<!--今天-->
					   	<span v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()" class="active">{{ day.getDate() }}</span>
					   	<span v-else>{{ day.getDate() }}</span>
   					</span>
  				</li>
  			</ul>
 		</div>
		<!--日期结束-->
		
		<!--倒计时开始-->
		<span v-if="sendAuthCode" class="c-right" @click="getCode">倒计时</span>
 		<span v-if="!sendAuthCode" class="c-right"> <span class="auth_text_blue">{{auth_time}} </span> 秒之后重新开始</span>
		<!--倒计时结束-->
		
		<!--轮播图开始-->
		<div id="topBanner" style="padding-top: 5px;" class="slide" >
            <div v-for="(imgUrl, index) in bannerList" v-show="index===mark" :key="index" class="slideshow">
                  <a href="#">
                    <img :src=imgUrl>
                  </a>
            </div>
            <div class="bar">
                   <span v-for="(item, index) in bannerList" @click="chang(index)" :class="{ 'active':index===mark }" :key="index"></span>
            </div>
        </div>
		<!--轮播图结束-->
		
		<!--瀑布流效果开始-->
		<!--左侧开始-->
		<div id="vm" class="pubu" v-cloak>
			<ul id="show" class="yg yg_l">
				<li v-for="(item,index) in aa" v-if="index%2==0">
					<div style="position: relative;">
		           		<img :src="item.thumbnail_pic_s" alt="">
		            	<div class="u_xinx">
		                	<img :src="item.thumbnail_pic_s02" v-viewer alt="">
		                	<span>{{item.author_name}}</span>
		            	</div>
		        	</div>
					<p>{{item.title}}</p>
				</li>
			</ul>
			<!--左侧结束-->
			<!--右侧开始-->
			<ul class="yg yg_r">
				<li v-for="(item,index) in aa" v-if="index%2==1" >
					<div style="position: relative;">
		            	<img :src="item.thumbnail_pic_s" alt="">
		            	<div class="u_xinx">
		                	<img :src="item.thumbnail_pic_s02" v-viewer alt="">
		                	<span>{{item.author_name}}</span>
		            	</div>
		        	</div>
					<p>{{item.title}}</p>
				</li>
			</ul>
			<div style="clear: both;"></div>
		</div>
		<!--右侧结束-->
		<!--瀑布流效果结束-->

		
	</div>
</template>

<script>
//	图片点击放大开始
	import 'viewerjs/dist/viewer.css'
	import Viewer from 'v-viewer'
	import Vue from 'vue'
	Vue.use(Viewer)
//	图片点击放大结束
	export default {
		name:'detai',
		data(){
		    return {
		      	countOne: 24,
		      	countTow: 18,
		      	countThree: 6,
		      	all:'全部',
		      	positiye:'满意',
		      	nedative:'不满意',
		      	radioData:true,
		      	dddd:true,
		      	daaa:false,
		      	ddaa:false,
		      	aa:[],
		      	mark: 0, //比对图片索引的变量  
      			bannerList:[
      				"http://01imgmini.eastday.com/mobile/20190805/2019080510_9036331ed575471292ea3d2097dcd16c_6983_cover_mwpm_03200403.jpg",
      				"http://00imgmini.eastday.com/mobile/20190809/2019080913_c7ddbc421e8548ae999f50ecf61635de_3878_mwpm_03200403.jpg",
      				"http://06imgmini.eastday.com/mobile/20190805/2019080511_9653e6527a9f46709f5e9ab3769bc498_5303_mwpm_03200403.jpg"
      			],//轮播图片
      			flag: false,//左滑
                startX: 0,//左滑
                endX: 0,//左滑
                slideStyle: {
                    left: 0,
                    transition: 'none'
                },//左滑
                sendAuthCode: true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
      			auth_time: 0, /*倒计时 计数器*/
      			search:'',//搜索
    			searchData: '',//存放搜索数据
    			currentDay: 1,//日期
  				currentMonth: 1,//日期
  				currentYear: 1970,//日期
  				currentWeek: 1,//日期
  				days: [],//日期
		    }
		},
		created () {
			var url = this.HOST + '/toutiao/index'+'?type=yule&key=1839cd19314e667d731a3a469f0ff786'
			this.axios.post(url,{
		        headers: {
		            'Content-Type': 'application/x-www-form-urlencoded'
		        }
		    })
		    .then((res)=>{
		      	console.log(res.data);
		      	this.aa=res.data.result.data;
		      	console.log(res.data.result.data);
		    })
		    .catch((err)=>{
		        if(err.response) {
		          	console.log(err.response)
		        }
		    })
		    this.play();//调用轮播图逻辑
		    this.initData(null);
		},
		methods:{
//			三个点击事件开始
			dian(){
//				console.log("全部");
				this.dddd=true;
				this.daaa=false;
				this.ddaa=false;
			},
			dianj(){
//				console.log("满意");
				this.daaa=true;
				this.dddd=false;
				this.ddaa=false;
			},
			dianji(){
//				console.log("不满意");
				this.ddaa=true;
				this.dddd=false;
				this.daaa=false;
			},
			getRadioVal1(value){
		        this.radioData=true
		   	},
			getRadioVal2(value){
		        this.radioData=false
		   	},
		   	ping:function(){
				this.countOne++
				if (this.radioData==true) {
					this.countTow++
				} else{
					this.countThree++
				}
			},
//			三个点击事件结束
//			轮播图业务逻辑开始
			autoPlay () {
			    this.mark++;
			    if (this.mark === 3) { //当遍历到最后一张图片置零 
			    	this.mark = 0
			    }
    		},
		    play () {
		      	setInterval(this.autoPlay, 2500)
		    },
		    chang (index) {
		      	this.mark = index
		    },
//			轮播图业务逻辑结束
//			左滑业务逻辑开始
			start (e){  //记录开始滑动屏幕的X轴的位置
                this.flag = true;
                this.startX = e.touches[0].clientX;
                this.endX = this.$refs.slide.offsetLeft;
                this.slideStyle.transition = 'none';
            },
            move (e){
                if(this.flag){
                    // 处理鼠标移动的逻辑
                    var moveX = this.endX + (e.touches[0].clientX - this.startX);  //计算滑动的距离
                    if(Math.abs(moveX) >= this.$refs.btn.offsetWidth && moveX < 0){  //判断滑动的距离是否大于class:btn的宽度
                        moveX = (Math.abs(moveX) - this.$refs.btn.offsetWidth) * 0.1; // 0.3阻力系数
                        this.slideStyle.left = - this.$refs.btn.offsetWidth - moveX + 'px';
                    }else if(moveX >= 0){  //滑动距离是否大于等于0
                        this.slideStyle.left = 0 + 'px';  //大于等于0让class:item等于0
                    }else{
                        this.slideStyle.left = moveX + 'px';  //小于0让class:item等于滑动的距离
                    }
                }
            },
            end (e){
                if(this.flag){
                    this.flag = false;
                    // endX = slide.offsetLeft;
                    var moveX = e.changedTouches[0].clientX - this.startX;  //计算滑动的距离
                    this.slideStyle.transition = 'left .3s';
                    var btnWidth = this.$refs.btn.offsetWidth;  //class:btn的宽度
                    if(moveX < 0){
                        if(Math.abs(moveX) >= btnWidth / 2 || Math.abs(this.$refs.slide.offsetLeft) >= this.$refs.btn.offsetWidth){ //是否大于class:btn宽度的一半
                            this.slideStyle.left = - btnWidth + 'px';  //左滑超过class:btn宽度的一半就滑回去
                        }else if(Math.abs(moveX) < btnWidth / 2){  //小于class:btn宽度的一半
                            this.slideStyle.left = 0 + 'px';  //左滑没有超过class:btn宽度的一半回原位
                        }
                    }else if(moveX > 0 && this.endX != 0){
                        if(Math.abs(moveX) >= btnWidth / 2){
                            this.slideStyle.left = 0 + 'px';  //右滑超过class:btn宽度的一半就滑回去
                        }else if(Math.abs(moveX) < btnWidth / 2){
                            this.slideStyle.left = - btnWidth + 'px';  //右滑没有超过class:btn宽度的一半回原位
                        }
                    }
                }
            },
//         	左滑业务逻辑结束
//			倒计时开始
            getCode() {
			    this.sendAuthCode = false;
			    this.auth_time = 60;
			    var auth_timetimer = setInterval(() => {
			        this.auth_time--;
			        if (this.auth_time <= 0) {
			          	this.sendAuthCode = true;
			          	clearInterval(auth_timetimer);
			        }
			    }, 1000);
			},
//			倒计时结束
//			搜索功能业务逻辑开始
			btn:function(){
  				var search = this.search;
				if (search) {
			 		this.searchData =  this.aa.filter(function(product) {
//				 		console.log(product)
						return Object.keys(product).some(function(key) {
//							console.log(key)
				  			return String(product[key]).toLowerCase().indexOf(search) > -1
						})
					})
				}
  			},
//			搜索功能业务逻辑结束
//			日期业务逻辑开始
			initData: function(cur) {
   				var date;
   				if (cur) {
    				date = new Date(cur);
   				} else {
    				date = new Date();
   				}
			   	this.currentDay = date.getDate();
			   	this.currentYear = date.getFullYear();
			   	this.currentMonth = date.getMonth() + 1;
			   	this.currentWeek = date.getDay(); // 1...6,0
				if (this.currentWeek == 0) {
					this.currentWeek = 7;
				}
   				var str = this.formatDate(this.currentYear , this.currentMonth, this.currentDay);
   				console.log("today:" + str + "," + this.currentWeek);
   				this.days.length = 0;
   				// 今天是周日，放在第一行第7个位置，前面6个
   				for (var i = this.currentWeek - 1; i >= 0; i--) {
    				var d = new Date(str);
    				d.setDate(d.getDate() - i);
//  				console.log("y:" + d.getDate());
    				this.days.push(d);
   				}
   				for (var i = 1; i <= 35 - this.currentWeek; i++) {
    				var d = new Date(str);
    				d.setDate(d.getDate() + i);
    				this.days.push(d);
   				}
   			},
   			pick: function(date) {
   				alert(this.formatDate( date.getFullYear() , date.getMonth() + 1, date.getDate()));
   			},
   			pickPre: function(year, month) {
   			// setDate(0); 上月最后一天
   			// setDate(-1); 上月倒数第二天
   			// setDate(dx) 参数dx为 上月最后一天的前后dx天
			   	var d = new Date(this.formatDate(year , month , 1));
			   	d.setDate(0);
			   	this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
		   	},
		   	pickNext: function(year, month) {
			   	var d = new Date(this.formatDate(year , month , 1));
			   	d.setDate(35);
			   	this.initData(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
		   	},
		   	pickYear: function(year, month) {
		   		alert(year + "," + month);
		   	},
    
		   	// 返回 类似 2016-01-02 格式的字符串
		   	formatDate: function(year,month,day){
			   	var y = year;
			   	var m = month;
			   	if(m<10) m = "0" + m;
			   		var d = day;
			   	if(d<10) d = "0" + d;
			   		return y+"-"+m+"-"+d
		   	},
//		   	日期业务逻辑结束
		},
		mounted (){
//			左滑业务逻辑开始
            var _this = this;
            // 使用js的现代事件监听transition过渡结束
            this.$refs.slide.addEventListener('transitionend',function(){
                _this.endX = this.offsetLeft;
            })
//         	左滑业务逻辑结束
        }
	}
</script>

<style lang="less" scoped="scoped">
	.xiang{
		margin-top: 60px;
		/*top切换栏开始*/
		.but{
			display: flex;
			margin-top: 30px;
			button{
				flex: 1;
				border: gainsboro solid 1px;
				height: 40px;
				margin: 10px;
			}
		}
		.a1{
			width: 100%;
			height: auto;
			div{
				display: flex;
				div{
					flex: 0 0 75px;
					margin-left: 10px;
				}
				div{
					flex: 1;
				}
			}
		}
		.a2{
			width: 100%;
			height: auto;
			div{
				display: flex;
				div{
					flex: 0 0 75px;
					margin-left: 10px;
				}
				div{
					flex: 1;
				}
			}
		}
		.a3{
			width: 100%;
			height: auto;
			div{
				display: flex;
				div{
					flex: 0 0 75px;
					margin-left: 10px;
				}
				div{
					flex: 1;
				}
			}
		}
		/*top切换栏结束*/
		
		/*左右滑动图片样式开始*/
		.lateral-sliding {
		  	display: flex;
		  	overflow-y: hidden;
		  	overflow-x: scroll;
		  	margin-top: 10px;
		}
		.lateral-sliding-item {
		 	display: flex;
		  	margin-right: 8px;
		}
		.each-img {
		  	width: 75px;
		  	height: 75px;
		}
		/*左右滑动图片样式结束*/
		
		/*瀑布流样式开始*/
		[v-cloak]{
			display: none!important;
		}
		.pubu{
            width: calc(100% - 16px);
            margin-left: 8px;
        }
        .yg img{
            width:100%;
            border-radius: 8px 8px 0 0;
        }
        .yg p{
            width: 100%;
            font-size: 0.75rem;
            padding:3px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            color: #999;
        }
        .yg_l , .yg_r{
            width: calc(50% - 5px);
        }
        .yg li{
            background: #fff;
            border-radius: 8px;
            margin-bottom: 10px;
            box-shadow: 0 0 5px #999;
        }
        .yg_l{
            float: left;
        }
        .yg_r{
            float: right;
        }
		.u_xinx{
	        position: absolute;
	        bottom: 4px;
	    }
	    .u_xinx img{
	        margin-left: 5px;
	        background: rgba(0,0,0,.2);
	        box-shadow: 0 1px 3px rgba(0,0,0,.5);
	        width: 26px;
	        height: 26px;
	        border-radius: 50%;
	        display: inline-block;
	    }
	    .u_xinx span{
	        position: relative;
	        text-shadow: 0 1px 1px #333;
	        top: -8px;
	        color: #fff;
	        font-size: 0.6rem;
	    }
	    /*瀑布流样式结束*/
	   	/*日期样式开始*/
	    #calendar{
  			width:80%;
  			margin: 10px auto;
  			margin-bottom: 20px;
  			box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12);
  			.month {
			  	width: 100%;
			  	background: #00B8EC;
			}
		  	.month ul {
			  	margin: 0;
			  	padding: 0;
			  	display: flex;
			  	justify-content: space-between;
		  	}
		  	.year-month {
		  		display: flex;
		  		flex-direction: column;
		  		align-items: center;
		  		justify-content: space-around;
		  	}
		  	.year-month:hover {
		  		background: rgba(150, 2, 12, 0.1);
		  	}
  			.choose-year {
				padding-left: 20px;
				padding-right: 20px;
  			}
		  	.choose-month {
		  		text-align: center;
		  		font-size: 1.5rem;
		  	}
		  	.arrow {
		  		padding: 30px;
		  	}
		  	.arrow:hover {
		  		background: rgba(100, 2, 12, 0.1);
		  	}
		  	.month ul li {
			  	color: white;
			  	font-size: 20px;
			  	text-transform: uppercase;
			  	letter-spacing: 3px;
		  	}
		  	.weekdays {
			  	margin: 0;
			  	padding: 10px 0;
			  	background-color: #00B8EC;
			  	display: flex;
			  	flex-wrap: wrap;
			  	color: #FFFFFF;
			  	justify-content: space-around;
		  	}
		  	.weekdays li {
			  	display: inline-block;
			  	width: 13.6%;
			  	text-align: center;
		  	}
		  	.days {
			  	padding: 0;
			  	background: #FFFFFF;
			  	margin: 0;
			  	display: flex;
			  	flex-wrap: wrap;
			  	justify-content: space-around;
		  	}
		  	.days li {
			  	list-style-type: none;
			  	display: inline-block;
			  	width: 14.2%;
			  	text-align: center;
			  	padding-bottom: 15px;
			  	padding-top: 15px;
			  	font-size: 1rem;
			  	color: #000;
		  	}
		  	.days li .active {
			  	padding: 6px 10px;
			  	border-radius: 50%;
			  	background: #00B8EC;
			  	color: #fff;
		  	}
		  	.days li .other-month {
			  	padding: 5px;
			  	color: gainsboro;
		  	}
		  	.days li:hover {
		  		background: #e1e1e1;
		  	}
  		}
  		/*日期样式结束*/
	   /*轮播图样式开始*/
	    .slide {
		    width: 100%;  
		    height: 200px;  
		    margin: 0 auto; 
		    margin-top: 20px;
		    margin-bottom: 20px;  
		    overflow: hidden;  
		    position: relative;  
		    .slideshow {
			    width: 90%;  
			    height: 150px;
			    margin: 0 auto;
			}
		 	li {
		    	position: absolute;  
		  	}
		  	img {
		    	width: 100%;  
		    	height: 200px;  
		  	}
		  	.bar {
		   	 	position: absolute;  
		    	width: 100%;  
		    	bottom: 10px;  
		    	margin: 0 auto;  
		    	z-index: 10;  
		    	text-align: center;  
		  	}  
		  	.bar span {
		    	width: 10px;  
		    	height: 10px;
		    	border-radius: 50%;
		    	border: 1px solid;  
		    	background: white;  
		    	display: inline-block;  
		    	margin-right: 10px;  
		  	}
		  	.active {
		    	background: #bfd6b6 !important;
		  	}
	  	}
	  	/*轮播图样式结束*/
	  	/*倒计时样式开始*/
		.c-right{
			width: 100%;
			height: 20px;
			margin-left: 30px;
		}
		/*倒计时样式结束*/
		/*搜索功能开始*/
		.safetyInfo{
			width: 100%;
			height: auto;
			text-align: center;
			margin: 10px 0;
			input{
				width: 60%;
				height: 30px;
			}
			button{
				height: 30px;
				width: 30%;
				border: none;
				background: #4E90DE;
				color: white;
			}
			ul{
				li{
					display: flex;
					width: 100%;
					height: auto;
					margin-top: 10px;
					padding-bottom: 10px;
					border-bottom: 1px solid gray;
					div{
						display: 0 0 75px;
						margin-left: 10px;
						img{
							width: 75px;
							height: 75px;
						}
					}
					div{
						display: 1;
						.category{
							display: inline-block;
							width: 100%;
							height: 20px;
							line-height: 20px;
							text-align: center;
						}
						span{
							margin-right: 30px;
						}
					}
				}
			}
		}
		/*搜索功能结束*/
		/*列表左滑样式开始*/
		.box{
		    position:relative;
		    border-bottom:0.026667rem solid #666666;
		    margin-bottom: 10px;
		    .btn{
			  	height:100%;
			  	position:absolute;
			  	right:0;
			  	top:0;
			  	display:flex;
			  	button{
				  	width:3rem;
				  	height:100%;
				  	background:#f8f8f8;
				  	border:none;
				}
			}
			.item{
			  	padding:0.266667rem;
			  	display:flex;
			  	position:relative;
			  	background:#fff;
			  	z-index: 2;
			  	box-shadow: 0.026667rem 0 0.053333rem #ddd;
			}
			.item img{
			  	width:2.133333rem;
			  	height:2.133333rem;
			  	margin-right:0.4rem;
			  	border-radius: 0.133333rem;
			}

			.item .title{
			  	font-size:0.48rem;
			  	float: left;
			}
			.item .text{
			  	font-size:0.426667rem;
			  	color:#888;
			  	float: left;
			  	margin: 0 1.33rem;
			}
			.item .price{
			  	color:#888;
			  	float: left;
			  	margin: 0 1.33rem;
			}
		}
		/*列表左滑结束*/
		
	}
</style>
