<template>
	<view class="page-detail">
		<view class="title">
			{{information.announcementTitle}}
		</view>
		<view class="page-detail-img">
			<image :src="baseUrl+information.announcementCover" mode=""></image>
		</view>
		<view class="content">
			{{information.announcementContent}}
		</view>
	</view>
</template>

<script>
	import env from '@/utils/env.js';
	export default {
		data() {
			return {
				baseUrl:env.baseUrl,
				information:{}
			};
		},
		// 在test.vue页面，向起始页通过事件传递数据
		onLoad: function(option) {
		  const eventChannel = this.getOpenerEventChannel();
		  // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
		  let that = this
		  eventChannel.on('information', function(data) {
		    console.log(data)
			that.information = data
		  })
		}
	}
</script>

<style lang="scss" scoped>
.page-detail{
	min-height: calc(100vh - 90rpx);
	background-color: $uni-bg-color-grey;
	.title{
		font-size: 42rpx;
		font-weight: 600;
		text-align: center;
		padding: 20rpx;
	}
	.page-detail-img{
		display: flex;
		justify-content: center;
		margin-top: 20rpx;
		image{
			width: 80%;
			height: 60vw;
		}
	}
	.content{
		margin-top: 20rpx;
		padding: 20rpx;
		font-size: 32rpx;
	}
}
</style>
