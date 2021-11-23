<template>
  <div>
    <div class="banner_pic">
      <img src="../../img/banner 2.png" alt="">
      <span class="banner_text1">老照片专业修复</span>
      <span class="banner_text2">是一款残破模糊老照片修复上色，可以将老照片，破损褶皱痕迹<br>修复，并针对面部进行高度还原……</span>
    </div>
    <div class="download">
      <div class="download_button">
        <img src="../../img/下载图标.png" alt="" class="download_pic">
        <span class="download_text">立即下载</span>
      </div>
    </div>
    <div class="blank"></div>
    <div class="main">
      <p class="main_p">功能展示</p>
      <div class="main_show">
         <img src="../../img/overDarkRepair/overDarkRepairBefore.png" alt="" class="main_pic">
         <div class="main_bottom">
           <div class="main_bottom_text1">一键修复破损照片</div>
           <div class="main_bottom_text2">对老照片破损褶皱痕迹修复，并针对面部进行高度还原</div>
         </div>
      </div>
    </div>
    <div class="page">
      <div class="prav_page" @click="prav">|&lt;上一页</div>
      <div class="pages" v-for="(item,index) in conpages" :key="index" @click="page(item)">{{item}}</div>
      <div class="next_page" @click="next">|&gt;上一页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      conpages: 9,//总页数
      cur: 1,//当前页
      showPage: [],
      images:[
        {('../../img/overDarkRepair/overDarkRepairBefore.png')}
      ]
    }
  }
}
</script>

<style lang="scss">
.banner_pic {
  width: 100%;
  height: 400px;
  position: relative;
  opacity: 0.8;
  .banner_text1 {
    position: absolute;
    top: 126px;
    left: 41.5%;
    color: #ffffff;
    font-family: PingFangSC-Medium;
	  font-size: 46px;
    font-weight:bold;
    background-color:rgba(0,0,0,0);
  }
  .banner_text2 {
    position: absolute;
    top: 203px;
    left: 30.8%;
    font-family: PingFangSC-Light;
	  font-size: 26px;
    color: #ffffff;
    background-color:rgba(0,0,0,0);
  }
}
.download {
  height: 230px;
  position: relative;
  .download_button {
    width: 320px;
	  height: 60px;
    line-height: 60px;
  	background-color: #007bbd;
	  border-radius: 30px;
    position: relative;
    top: 85px;
    margin: auto;
    .download_pic {
      background-color:rgba(0,0,0,0);
      margin-left: 86px;
      height: 29px;
      width: 29px;
      margin-top: 16px;
    }
    .download_text {
      background-color:rgba(0,0,0,0);
      color: #ffffff;
      font-family: MicrosoftYaHei;
	    font-size: 24px;
      margin-right: 87px;
      float: right;
      height: 25px;
    }
  }
}
.blank {
  background-color: #fff;
  height: 90px;
  width: 100%;
}
.main {
  height: 1760px;
  width: 100%;
  position: relative;
  .main_p {
    font-family: MicrosoftYaHei-Bold;
	  font-size: 34px;
    width: 100%;
    width: 139px;
    position: relative;
    margin: 76px auto;
    left: 0;
    right: 0;
  }
  .main_show {
    position: relative;
    width: 1200px;
    height: 1430px;
    margin: 0 auto;
    left: 0;
    right: 0;
    .main_pic {
      width: 1200px;
      height: 1200px;
      overflow:hidden;
      display: block;
    }
  }
  .main_bottom {
    position: relative;
    margin: 0;
    padding: 0;
    width: 1200px;
	  height: 230px;
  	background-color: #ffffff;
	  box-shadow: 0px 3px 7px 0px 
		rgba(0, 0, 0, 0.08);
    .main_bottom_text1 {
      background-color: #ffffff;
      padding: 57px 856px 27px 79px;
      border-bottom: solid 1px #ececec;;
      width: 265px;
     	height: 32px;
      line-height: 32px;
    	font-family: MicrosoftYaHei-Bold;
    	font-size: 32px;
	    font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 1px;
    	color: #007bbd;
      font-weight:bold;
    }
    .main_bottom_text2 {
      background-color: #ffffff;
      padding: 28px 0 0 81px;
      width: 560px;
	    height: 22px;
      line-height: 22px;
    	font-family: MicrosoftYaHei;
	    font-size: 22px;
	    font-weight: normal;
    	font-stretch: normal;
    	letter-spacing: 1px;
    	color: #999999;
    }
  }
}
</style> 