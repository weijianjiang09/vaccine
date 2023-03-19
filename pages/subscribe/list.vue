<template>
	<view class="container">
		<scroll-view scroll-y="true" class="orders-scroll1" v-for="(item,index) in pro">
			<view class="wrapper" @click="toDetail(item)">
				<view class="order-list">
					<view class="order">
						<view class="header">
							<view class="flex-fill font-size-medium"></view>
						</view>
						<view class="images">
							<!-- <image :src="item.img"></image> -->
							<view class="good_name">{{item.vaccineName}}</view>
						</view>
						<view class="info">
							<view class="left">
								<view>预约编号：{{item.orderId}}</view>
								<view>预约时间：{{item.createTime}}</view>
							</view>
							<view class="right">￥{{item.vaccinePrice.toFixed(2)}}</view>
						</view>
						<view class="action">
							<view class="button button_del" hover-class="none"
								style="width: 50px;text-align:center;font-size: 10px;">删除</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		</swiper-item>
	</view>
</template>

<script>
	import {myAppointment} from '@/api/subscribe/index.js'
	export default {
		created() {
			myAppointment(this.form).then(res=>{
				console.log(res);
				this.pro = res.rows
			})
		},
		data() {
			return {
				form:{
					pageSize:10,
					pageNum:1,
					state:0,
					
				},
				pro: [
				]
			}
		},
		methods:{
			toDetail(item){
				uni.navigateTo({
					url:'/pages/subscribe/oederDetail',
					success: (res) => {
						 res.eventChannel.emit('order-detail', { ...item})
					}
					
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f6f6f6;
	}

	.font-size-lg {
		border: none;
		background-color: var(--theme_color);
	}

	.navbar {
		height: calc(44px + var(--status-bar-height));
		/* #ifdef H5 */
		height: 44px;
		/* #endif */
		display: flex;
		background-color: #ffffff;
	}

	.talk-btn {
		height: 32px;
		margin-left: 10px;
		margin-top: 26px;
		/* #ifdef H5 */
		margin-top: 6px;
		/* #endif */
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px !important;
		padding: 0 20rpx;
		border-radius: 50rem !important;

		image {
			width: 40rpx;
			height: 40rpx;
			margin-right: 10px;
		}
	}

	.tabbar {
		/* #ifdef MP-WEIXIN */
		// margin-top: 60px;
		/* #endif */

		height: 100rpx;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		// margin-top: 100rpx;

		.item {
			height: 100%;
			font-size: 32rpx;
			color: #999;
			font-weight: 400 !important;
			display: flex;
			align-items: center;

			&.active {
				color: #343434;
				border-bottom: 4rpx solid #343434;
			}
		}
	}

	.swiper {
		width: 100%;
		height: calc(100vh - 44px);
		/* #ifdef H5 */
		height: calc(100vh - 100px);
		/* #endif */
	}



	.history-order {
		width: 100%;
		height: 100%;
		position: relative;

		.menu {
			padding: 18rpx 30rpx;
			display: flex;
			align-items: center;
			font-size: #343434;
			color: #FFFFFF;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 10;

			.item {
				padding: 14rpx 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 10rpx;
				}

				&.active {
					color: var(--theme_color);
					background-color: #ffffff;
				}
			}
		}

		.history-order-swiper {
			width: 100%;
			height: 100%;
		}
	}

	.store-order-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: #343434;
		color: #999;
		line-height: 1.3rem !important;

		image {
			width: 400rpx;
			height: 333rpx;
			margin-bottom: 40rpx;
		}
	}

	.orders-scroll {
		width: 100%;
		height: 100%;
		padding-top: 104rpx;
	}

	.orders-scroll1 {
		width: 100%;
		height: 100%;
		padding-top: 10rpx;
	}

	.good_name {
		// padding-left: 30rpx;
		padding-top: 15rpx;
		color: #555;
		font-weight: 600;
		font-size: 14px;
	}

	.order-list {
		display: flex;
		width: 100%;
		flex-direction: column;

		.order {
			background-color: #ffffff;
			padding: 30rpx 40rpx;
			margin-bottom: 18rpx;

			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.status {
					font-size: 14px;
					color: #595959;
					display: flex;
					align-items: center;

					image {
						width: 30rpx;
						height: 30rpx;
						margin-left: 10px;
					}
				}
			}

			.images {
				display: flex;
				padding: 30rpx 0;

				image {
					flex-shrink: 0;
					width: 150rpx;
					height: 112.5rpx;
				}
			}

			.info {
				// display: flex;
				// align-items: center;
				margin-bottom: 30rpx;

				.left {
					flex: 1;
					display: flex;
					flex-direction: column;
					font-size: 12px;
					color: #7a7a7a;

					// view {
					// 	margin-bottom: 10rpx;
					// 	font-size: 12px;

					// 	&:last-child {
					// 		margin-bottom: 0;
					// 	}
					// }
				}

				.right {
					font-size: 32rpx;
					color: #ff7373;
					text-align: right;
				}
			}

			.action {
				display: flex;
				justify-content: flex-end;
				align-items: center;


				button {
					margin-left: 30rpx;
					font-size: 16px;
				}
			}
		}

		.button {
			margin-left: 30rpx;
			padding: 15rpx 20rpx;
			font-size: 16px;
			border-radius: 70rpx;
			background-color: #eee;

			&_pay {
				background-color: var(--theme_color);
				color: white;
				border: none;
				border-radius: 70rpx;
			}

			&_del {
				color: white;
				background-color: #F56C6C;
			}

			&_re {
				color: white;
				background-color: #5CB87A;
			}
		}
	}
</style>
