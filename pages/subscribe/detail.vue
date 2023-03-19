<template>
	<view class="subscribe">
		<!-- 一版 -->
		<wly-tabnav defaultKey="subscribe"></wly-tabnav>
		<view class="hospital">
			<!-- 医院信息 -->
			<view class="hospital-detail">
				<img :src="hospitalImg==null?'../../static/subscribe/hospital2.png':hospitalImg" alt="" srcset="">
				<view class="msg-box">
					<view class="title">
						<text>{{hospitalTitle}}</text>
					</view>
					<view class="play-icon">
						<text>支付方式</text>
						<img src="../../static/subscribe/支付宝.png" alt="" srcset="" class="icon">
						<img src="../../static/subscribe/微信.png" alt="" srcset="" class="icon">
						<img src="../../static/subscribe/云闪付.png" alt="" srcset="" class="icon">
					</view>
				</view>
			</view>
			<view class="item" v-for="item in itemList">
				<img :src="item.icon" alt="">
				<text class="ho-msg">{{item.title}}</text>
				<img src="../../static/subscribe/r.png" style="width: 40rpx;height: 40rpx;" alt="">
			</view>
		</view>
		<!-- 疫苗 -->
		<view class="vaccine" v-for="item in vaccineList">
			<view class="vaccine-header">
				<text class="vaccine-name">{{item.vaccineName}}</text>
				<view class="price">
					<text class="he">参考价</text>
					<text class="num">{{item.vaccinePrice.toFixed(2)}}</text>
					<text class="fo">/支</text>
				</view>
			</view>
			<view class="vaccine-content">
				<tn-tag shape="circle" backgroundColor="#01BEFF" fontColor="#fff" v-for="tag in item.tag">{{tag}}
				</tn-tag>
			</view>
			<view class="vaccine-btn">
				<tn-button v-if="item.vaccineNum==0" shape="circle" :disabled="true" :blockRepeatClick="true"
					backgroundColor="#b4b4b4" fontColor="#FFF">暂未开始</tn-button>
				<tn-button v-else shape="circle" :blockRepeatClick="true" backgroundColor="#2AEBA7" fontColor="#FFF"
					@click="tosubscribe(item)">立即预约</tn-button>
			</view>
		</view>

		<view class="" style="text-align: center;margin-top: 10rpx;">已经到底喽~</view>
	</view>
</template>

<script>
	import {
		getVaccineInfo,getHospitalBySort
	} from '@/api/subscribe/index.js'
	export default {
		onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.id); //打印出上个页面传递的参数。
			this.getHospitalDetail(option.id)
			uni.setNavigationBarTitle({
				title: "疫苗预约"
			})
			getVaccineInfo(this.from).then(res => {
				console.log(res);
				this.vaccineList = res.data
				// this.vaccineList.tag = 
				//
				this.vaccineList.map(item=>{
					item.tag = [item.suitableAge,item.vaccineFactory,item.vaccineIntro]
				})
				 console.log(this.vaccineList);
			})
			
			getHospitalBySort({pageNum:1,pageSize:10,sortId:1}).then(res=>{
				console.log(res);
				let hospital = res.rows.filter(item=>{
					return item.hospitalId ==1
				})
				console.log(hospital[0]);
				this.hospitalTitle = hospital[0].hospitalName
				this.hospitalImg =  hospital[0].hospitalImg
				this.itemList[0].title =   hospital[0].hospitalAddress
				this.itemList[1].title =   hospital[0].hospitalPhone
			})
		},
		onShow() {

		},
		data() {
			return {
				show: false,
				hospitalTitle:"",
				hospitalImg:"",
				// 介绍
				itemList: [
				// 	{
				// 	icon: "../../static/subscribe/ho.png",
				// 	title: "单位简介",

				// }, 
				{
					icon: "../../static/subscribe/ad.png",
					title: "八公山区淮风路新淮小区对面",

				}, {
					icon: "../../static/subscribe/ph.png",
					title: "0554-5622927",

				}],
				// 疫苗数据
				vaccineList: [{
					suitableAge: "18-47",
					vaccTypeId: null,
					vaccineFactory: "新冠一厂",
					vaccineId: 1,
					vaccineImg: "/img/20230319102819.jpg",
					vaccineIntro: "预防新冠",
					vaccineName: "新冠疫苗1",
					vaccineNum: 100,
					vaccinePrice: 10,
					vaccineSortName: null,
					vaccineType: "注射"
				}],
				from: {
					hospitalId: 1
				}
			};
		},

		methods: {
			// 获取页面数据
			getHospitalDetail(id) {

			},
			// 去往预约页面
			tosubscribe(item) {
				uni.navigateTo({
					url: '/pages/subscribe/order',
					success: (res) => {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('vaccine', {
							data: item
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.subscribe {
		padding: 20rpx 0;
		padding-bottom: 60rpx;
		min-height: calc(100vh - 90rpx);
		background-color: $uni-bg-color-grey;
	}

	.hospital {
		padding: 22rpx;
		background-color: $uni-bg-color;

		.item {
			img {
				width: 40rpx;
				height: 40rpx;
				margin-right: 10rpx;

			}

			.ho-msg {
				flex: 1;
			}

			height: 50rpx;
			display: flex;
			align-items: center;
			color: #9f9f9f;
			font-size: 32rpx;
			margin-top: 20rpx;
		}
	}

	.hospital-detail {


		display: flex;

		img {
			width: 150rpx;
			height: 150rpx;
			margin-right: 40rpx;
		}

		.msg-box {

			margin-bottom: 80rpx;

			.title {
				// margin-top: 10rpx;
				// line-height: 30rpx;
				font-size: 40rpx;
				font-weight: 600;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.play-icon {
				margin-top: 10rpx;
				font-size: 24rpx;
				color: #a7a7a7;
				height: 60rpx;
				display: flex;
				align-items: flex-end;

				.icon {
					width: 40rpx;
					height: 40rpx;
					margin-left: 10rpx;
					margin-right: 0;
				}
			}
		}


	}

	.vaccine {
		background-color: $uni-bg-color;
		margin-top: 20rpx;
		padding: 22rpx 30rpx;

		.vaccine-header {
			display: flex;
			align-items: flex-end;

			.vaccine-name {
				flex: 1;
				font-size: 36rpx;
				font-weight: 600;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.price {
				width: 270rpx;

				color: #9f9f9f;

				.he {
					margin-right: 8rpx;
					font-size: 24rpx;
				}

				.num {
					color: #ffaa00;
					font-size: 36rpx;
					font-weight: 600;
				}

				.fo {

					font-size: 24rpx;
				}
			}
		}

		.vaccine-content {
			margin-top: 12rpx;
		}

		.vaccine-btn {
			margin-top: 12rpx;
			display: flex;
			justify-content: flex-end;
		}
	}

	::v-deep .tn-tag {
		margin-right: 20rpx !important;
		font-size: 20rpx !important;
	}
</style>
