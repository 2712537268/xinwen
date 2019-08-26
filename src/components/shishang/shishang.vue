<template>
  <div class="shishang">
    <div class="xinwen">
    	<ul>
    		<li v-for="item in aa" class="item">
    			<div class="left">
    				<img :src="item.thumbnail_pic_s" height="75" width="75" />
    			</div>
    			<div class="right">
    				<a class="category">{{item.category}}</a>
    				<span class="author">{{item.author_name}}</span>
    				<span class="dae">{{item.date}}</span>
    				<p class="title">{{item.title}}</p>
    			</div>
    		</li>
    	</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shishang',
  data(){
  	return {
			aa:[],
  	}
  },
  created () {
		var url = this.HOST + '/toutiao/index'+'?type=shishang&key=1839cd19314e667d731a3a469f0ff786'
		this.axios.post(url,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
    })
      .then((res)=>{
      	console.log(res.data)
      	this.aa=res.data.result.data;
      	console.log(res.data.result.data)
      })
      .catch((err)=>{
        if(err.response) {
          console.log(err.response)
        }
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scoped="scoped">
	.shishang{
		ul li{
			list-style: none;
			margin-top: 10px;
		}
		.xinwen{
			margin-top: 40px;
			.item{
				display: flex;
			}
			.left{
				flex: 0 0 75px;
			}
			.right{
				flex: 1;
				font-size: 14px;
				margin-left: 5px;
				.category{
					width: 100%;
					height: 20px;
					line-height: 20px;
					display: inline-block;
					text-align: center;
					font-size: 16px;
				}
				.dae{
					float: right;
					margin-right: 5px;
				}
				.title{
					margin-top: 10px;
				}
			}
		}
		
	
	}
	
	
</style>
