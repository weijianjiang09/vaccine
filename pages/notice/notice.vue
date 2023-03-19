<template>
	<view class="tabs">
		<wly-tabnav defaultKey="notice"></wly-tabnav>
		<view class="entity">
			<view class="item" v-for="item in noteList">
				<view class="item-header">
					<view class="icon">
						<img src="../../static/note/like.png" alt="" class="like">
						<img src="../../static/note/ten.png" alt="" class="ten">
					</view>
					<view class="title">
						<text>{{item.announcementTitle}}</text>
						<img src="../../static/note/sex.png" alt="">
					</view>
				</view>
				<view class="item-content">
					{{item.announcementContent}}
				<img src="../../static/note/red.png" alt="">
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import wlyTabnav from '../../components/wly-tabnav/wly-tabnav.vue'
	import {
		getVaccineInfo
	} from '@/api/index/index.js'
	export default {
		created() {
			getVaccineInfo(this.getForm).then(res=>{
				console.log(res);
				this.noteList =res.rows
			})
		},
		data() {
			return {
				getForm: {
					pageSize: 10,
					pageNum: 1,
					type: "1"
				},
				noteList:[{
					announcementTitle:"预约时间",
					announcementContent:"2023年3月10日下午15点-16点(往后预约时间以线上实际发布时间为准,暂定为每月的第二个星期五)。预约成功者，系统会自动提示“预约成功”。"
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.tabs{
	background-color: #FFE0DE;
	width: 100vw;
	min-height: 100vh;
	
}
.entity{
	padding: 40rpx;
	padding-top: 80rpx;

}
.item{
	margin-top: 30rpx;
	.item-header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: calc(100% - 80rpx);
			padding: 0 20rpx;
			height: 60rpx;
			background-color: #FF7670;
			color: #fff;
			font-weight: 525;
			letter-spacing:4rpx;
			line-height: 60rpx;
			border-top-right-radius: 30rpx;
			img{
				width: 40rpx;
				height: 40rpx;
			}
		}
		.icon{
			position: relative;
			width: 80rpx;
			height: 80rpx;
			margin-right: 20rpx;
			.like{
				width: 100%;
				
				position: absolute;
			}
			.ten{
				width: 40rpx;
				position: absolute;
				left: 20rpx;
				top: 18rpx;
			}
		}
	}
	.item-content{
		position: relative;
		width: 100%;
		font-size: 32rpx;
		background-color: #fff;
		margin-top: 10rpx;
		padding: 40rpx ;
		
		line-height: 46rpx;
		img{
			width: 40rpx;
			height: 40rpx;
			position: absolute;
			right: -20rpx;
			bottom: 20rpx;
		}
	}
}
</style>
