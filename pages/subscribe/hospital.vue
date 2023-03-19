<template>
	<view class="hospital">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<view class="hospital-item" v-for="item in hospitalList" @click="toDetail(item)">
				<img src="../../static/subscribe/hospital.png" alt="" srcset="">
				<view class="msg-box">
					<view class="title">
						<text>{{item.name}}</text>
					</view>
					<view class="phone">
						<text class="tn-icon-tel icon"></text>{{item.phone}}<text></text>
					</view>
					<view class="address">
						<text class="tn-icon-location icon"></text>{{item.address}}<text></text>
					</view>

				</view>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		props: {
			id: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				scrollTop: 0,
				hospitalList:[{
					id:1,
					name:"八公山区毕家岗街道社区卫生服务中心",
					phone:"0554-5212120",
					address:"八公山区毕家岗街道邮政储蓄向东200米"
				},{
					id:2,
					name:"八公山区毕家岗街道社区卫生服务中心",
					phone:"0554-5212120",
					address:"八公山区毕家岗街道邮政储蓄向东200米"
				},{
					id:3,
					name:"八公山区毕家岗街道社区卫生服务中心",
					phone:"0554-5212120",
					address:"八公山区毕家岗街道邮政储蓄向东200米"
				},{
					id:4,
					name:"八公山区毕家岗街道社区卫生服务中心",
					phone:"0554-5212120",
					address:"八公山区毕家岗街道邮政储蓄向东200米"
				},{
					id:5,
					name:"八公山区毕家岗街道社区卫生服务中心",
					phone:"0554-5212120",
					address:"八公山区毕家岗街道邮政储蓄向东200米"
				},{
					id:6,
					name:"八公山区毕家岗街道社区卫生服务中心",
					phone:"0554-5212120",
					address:"八公山区毕家岗街道邮政储蓄向东200米"
				},{
					id:7,
					name:"八公山区毕家岗街道社区卫生服务中心",
					phone:"0554-5212120",
					address:"八公山区毕家岗街道邮政储蓄向东200米"
				}]
			}
		},
		methods:{
			toDetail(data){
				uni.navigateTo({
					url:'/pages/subscribe/detail?id='+data.id+'&title='+data.name,
				})
			}
		},
		created() {

		}
	}
</script>

<style lang="scss" scoped>
	.hospital {
		// width: calc(100vw - 80rpx);
		padding: 40rpx;

		.scroll-Y {
			height: calc(100vh - 580rpx);
		}

		.scroll-view-item {
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
			font-size: 36rpx;
		}

		.hospital-item {
			padding-bottom: 40rpx;
			margin-top: 20rpx;
			display: flex;
			justify-content: space-around;
			border-bottom: 1px solid #cccccc;

			// align-items: center;
			img {
				width: 100rpx;
				height: 100rpx;
			}

			.msg-box {
				// margin-left: 10rpx;

				.title {
					margin-top: 10rpx;
					font-size: 30rpx;
					font-weight: 600;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}

				.phone {
					margin-top: 30rpx;
					font-size: 26rpx;

					color: #888888;
				}

				.address {
					margin-top: 30rpx;
					font-size: 26rpx;
					color: #888888;
				}

				.icon {
					margin-right: 10rpx;
				}
			}
		}
		// .hospital-item:last-child{
		// 	margin-bottom: 100rpx;
		// }
	}
</style>
