<template>
  <div id="app">
    <div class="nav">
    	<div class="nav-item border-1px">
    		<router-link to='/yule'>娱乐</router-link>
    	</div>
    	<div class="nav-item">
    		<router-link to='/shishang'>时尚</router-link>
    	</div>
    	<div class="nav-item">
    		<router-link to='/guoji'>国际</router-link>
    	</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  
}
</script>

<style lang="less" scoped="scoped">
	#app{
		.nav{
	  	display: flex;
	  	position: fixed;
	  	left: 0px;
	  	top: 0px;
	  	width: 100%;
	  	height: 40px;
	  	line-height: 40px;
	  	background-color: gold;
	  }
	  .nav-item{
	  	flex: 1;
	  	text-align: center;
	  	a{
	  		font-size: 14px;
	  		color: rgb(77,85,93);
	  	}
	  	a.router-link-active{
	  		color: rgb(240,20,20);
	  	}
	  }
	}
	
</style>
