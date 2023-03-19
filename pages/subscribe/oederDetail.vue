<template>
	<view class="r_detail">
		<view class='tag-e'>
			<view class="goods " v-if="order_info">
				<view class='goods_02'>
					<view class='goods_title'>{{order_info.vaccineName}}</view>
					
					<view class='good_p'>
						<view class="good_price">¥{{order_info.vaccinePrice}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="show-eq">
			<image  :src="base+order_info.appointmentCode"></image>
			
		</view>
		<view class="mess">
			<view class="mess_01">预约信息</view>
			<view class="mess_02">
				<view class="mess_02_1">
					<view class="mess_02_l">预约编号:</view>
					<view class="mess_02_r">{{order_info.orderId}}</view>
				</view>
				<view class="mess_02_1">
					<view class="mess_02_l">{{order_info.pay_statement==0?'创建时间':'预约时间'}}: </view>
					<view class="mess_02_r">{{order_info.createTime}}</view>
				</view>
				<view class="mess_02_1">
					<view class="mess_02_l">预约状态: </view>
					<view class="mess_02_r">{{state[order_info.state]}}</view>
				</view>
			</view>
			<view class="mt-3">
				<u-row>
					<u-col :span="4">
						<view style="text-align: center;">
							<tn-button backgroundColor="#ff7474" fontColor="#ffffff" width="80vw" @click="open_tui(order_info.id)">取消预约</tn-button>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>
		<view class="KB" style="height: 80px;"></view>
	</view>
</template>

<script>
	import env from '@/utils/env.js';
	export default {
		onLoad: function(option) {
		  const eventChannel = this.getOpenerEventChannel();
		  let that = this;
		  eventChannel.on('order-detail', function(data) {
			// that.setData(JSON.parse(JSON.stringify(data.data)))
			console.log(data);
			that.order_info = data
		  })
		},
		data() {
			return {
				state: ["预约中", "预约成功", "取消预约", "已核销"],
				tuiShow: false,
				tuiContent: '确认退款该预约吗？',
				order_info: {
					name: "思维开阔基础java课",
					price: "5.01",
					url: require('@/static/subscribe/img3.jpg'),
					order_id: "2255",
					order_num: "D323906381817708",
					update_time: "2021-03-23 17:10:38",
					state: "1"
				},
				base:env.baseUrl
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.r_detail {
		border-top: 1px solid #d4d4d4;
		background-color: #F5F5F5;
		height: calc(100vh - 100rpx);

		.head {
			display: flex;
			justify-content: space-between;
			background-color: #F85043;
			padding: 10px 20px 0;

			.head_l {
				padding: 20px;
				color: #FDF1F0;

				.head_l_01 {
					font-size: 16px;
					padding-bottom: 6px;
				}

				.head_l_02 {
					font-size: 13px;
				}
			}

			.head_r img {
				height: 100px;
				width: 120px;
			}
		}

		.address {
			display: flex;
			padding: 20px 15px;
			;
			background-color: #fff;
			margin-bottom: 10px;

			.address_l {
				padding-right: 20px;
				display: flex;
				flex-direction: column;
				justify-content: center;

				img {
					width: 20px;
					height: 20px;
				}
			}

			.address_r {
				flex-grow: 1;

				.address_r_01 {
					display: flex;
					justify-content: space-between;
					font-size: 15px;
					font-weight: 600;
					padding-bottom: 8px;
				}

				.address_r_02 {
					line-height: 20px;
				}
			}
		}

		.tag-e {
			background-color: #fff;
			margin-bottom: 10px;

			.goods {
				display: flex;
				font-size: 14px;
				width: 100%;
				background-color: #ffffff;
				padding: 10px;
				box-sizing: border-box;
				border-bottom: 1px solid #EEF0EF;

				image {
					width: 160rpx;
					height: 160rpx;
				}

				.goods_02 {
					box-sizing: border-box;
					display: flex;
					// flex-direction: column;
					height: 60rpx;
					flex-grow: 1;
					justify-content: space-between;
					padding:0px 25px;
					padding-top: 10rpx;
					
				}

				.goods_title {
					max-height: 40px;
					overflow: hidden;
					line-height: 20px;
					font-weight: 600;
					font-size: 15px;
				}

				.goods_des {
					color: #979797;
				}

				.good_p {
					display: flex;
					justify-content: space-between;

					.good_price {
						color: #F04E42;
						font-weight: 600;
					}
				}

			}
		}

		.total {
			background-color: #fff;
			padding: 12px 15px;
			text-align: right;
			margin-bottom: 10px;
			font-size: 15px;
		}

		.mess {
			background-color: #fff;
			padding: 10px;
			margin-bottom: 10px;

			.mess_01 {
				border-left: 2px solid #FD5153;
				padding-left: 10px;
				margin-bottom: 10px;
				font-size: 15px;
				font-weight: 600;
			}

			.mess_02 {
				border-top: 1px solid #F8F8F8;
				padding: 10px;

				.mess_02_1 {
					display: flex;
					line-height: 25px;

					.mess_02_l {
						width: 100px;
					}
				}
			}
		}

		.foot {
			position: fixed;
			bottom: 0px;
			left: 0px;
			z-index: 99;
			border-top: 1px solid #E4E4E4;
			width: 100%;
			background-color: #fff;
			justify-content: flex-end;
			padding: 10px 15px;
			display: flex;
		}
	}
	.show-eq{
		display: flex;
		justify-content: center;
		margin-bottom: 20rpx;
		image{
			width: 600rpx;
			height: 600rpx;
		}
	}
</style>
