<template>
	<view class="order">
		<view class="order-vaccine">
			<view class="title">{{vaccineData.vaccineName}}</view>
			<view class="tags">
				<tn-tag shape="circle" backgroundColor="#01BEFF" fontColor="#fff" v-for="tag in vaccineData.tag">{{tag}}</tn-tag>
			</view>
			<view class="price-inventory">
				<text class="price">{{vaccineData.vaccinePrice.toFixed(2)}}元</text>
				<text class="inventory">库存:{{vaccineData.vaccineNum}}</text>
			</view>
		</view>
		
		<view class="vaccine-man">
			<tn-list-view :customTitle="true">
			  <view slot="title" class="list-title-container" @click="ifShow()">
			    <tn-button class="list-title-button">接种人</tn-button>
				<img  v-if="user.inoculationPerson==''" src="../../static/subscribe/r.png" style="width: 32rpx;height: 32rpx;margin-right: 40rpx;" alt="">
				<view v-else class="msg">{{user.inoculationPerson}}</view>
			  </view>
			</tn-list-view>
			<tn-list-view :customTitle="true">
			  <view slot="title" class="list-title-container" @click="ifShow()">
			    <tn-button class="list-title-button">手机号</tn-button>
				<img v-if="user.phone==''" src="../../static/subscribe/r.png" style="width: 32rpx;height: 32rpx;margin-right: 40rpx;" alt="">
				<view  v-else class="msg">{{user.phone}}</view>
			  </view>
			</tn-list-view>
			
			<tn-list-view :customTitle="true" v-if="user.phone!=''" >
			  <view slot="title" class="list-title-container" @click="pickerShow=true">
			    <tn-button class="list-title-button">预约时间</tn-button>
				<img v-if="user.appointmentTime==''" src="../../static/subscribe/r.png" style="width: 32rpx;height: 32rpx;margin-right: 40rpx;" alt="">
				<view v-else class="msg">{{user.appointmentTime}}</view>
			  </view>
			</tn-list-view>
			<tn-list-view :customTitle="false">
			  <view slot="title" class="list-title-container play">
			    <tn-button class="list-title-button">支付方式</tn-button>
				<text class="play-type">线下支付</text>
			  </view>
			</tn-list-view>
		</view>
		
		<view class="">
			<tn-button margin="10vw" width="80vw" backgroundColor="#01BEFF" fontColor="#FFF" @click="sub">确认预约</tn-button>
		</view>
		<tn-picker v-model="pickerShow" :params="params" mode="time"  @confirm="checkBirthday"></tn-picker>
		
		<tn-popup v-model="show" mode="bottom" height="260rpx" :maskCloseable="true" :closeBtn="true">
		    <view class="pop-title">暂无成员信息，请添加</view>
			<view class="pop-content">
				<view class="" @click="addPerson">
					<text class="tn-icon-my-add"></text>
					<text>添加成员</text>
				</view>
			</view>
		</tn-popup>
		
		<tn-popup v-model="showHave" mode="bottom" height="400rpx" :maskCloseable="true" :closeBtn="true">
		    <view class="pop-title">成员信息</view>
			<view class="pop-content">
				<view class="" v-for="user in userList" @click="select(user)">
					<view class="name">{{user.name}}</view>
				</view>
			</view>
		</tn-popup>
	</view>
</template>

<script>
	import {addAppointment} from '@/api/subscribe/index.js'
	export default {
		// 在test.vue页面，向起始页通过事件传递数据
		onLoad: function(option) {
		  const eventChannel = this.getOpenerEventChannel();
		  let that = this;
		  eventChannel.on('vaccine', function(data) {
			// that.setData(JSON.parse(JSON.stringify(data.data)))
			that.vaccineData = data.data
		  })
		},
		data() {
			return {
				vaccineData:{
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
				},
				user:{
					inoculationPerson:"",
					phone:"",
					appointmentTime:"",
					vaccineId:'',
					// hospitalId:1
				},
				show:false,
				showHave:false,
				pickerShow:false,
				userList:[{
					name:"目临海",
					phone:"12345346541"
				}],
				params:{
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: false,
					second: false,
					province: true,
					city: true,
					area: true,
					timestamp: true
				}
			};
		},
		methods:{
			setData(data){
				this.vaccineData = data
			},
			addPerson(){
				this.show =false
				uni.navigateTo({
					url:'/pages/my/add-person'
				})
			},
			ifShow(){
				if(this.userList.length==0){
					this.show = true
				}else{
					this.showHave = true
				}
			},
			select(data){
				this.user = data
				this.showHave = false
			},
			sub(){
				this.user.vaccineId = this.vaccineData.vaccineId
				addAppointment(this.user).then(res=>{
					if(res.code ==200){
							uni.showToast({
								icon:"success",
								title:"预约成功"
							})
							uni.navigateTo({
								url:'/pages/subscribe/list'
							})
					}else{
						uni.showToast({
							icon:"error",
							title:"预约失败"
						})
					}
					
				})
			},
			// Check birthday
			checkBirthday(event) {
				console.log(event);
				this.user.date = event.year + '-' + event.month + '-' + event.day+ '-' +event.hour
			},
		},
	}
</script>

<style lang="scss" scoped>
.order {
	padding: 20rpx 0;
	padding-bottom: 60rpx;
	min-height: calc(100vh - 90rpx);
	background-color: $uni-bg-color-grey;
	.order-vaccine{
		padding: 40rpx;
		margin: 20rpx auto;
		width: calc(100vw - 40rpx);
		background-color: #fff;
		border-radius: 10rpx;
		.title{
			font-size: 36rpx;
			font-weight: 600;
		}
		.tags{
			margin: 20rpx 0;
		}
		.price-inventory{
			
			
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			.price{
				font-size: 36rpx;
				font-weight: 600;
				color: orange;
			}
			.inventory{
				font-size: 28rpx;
				color: #949494;
			}
		}
	}
	.vaccine-man{
		width: calc(100vw - 40rpx);
		margin: 0 auto;
	}
}
.list-title-container{
	height: 80rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.msg{
		width: 300rpx;
		text-align: right;
		margin-right: 40rpx;
	}
}
.list-title-container.play{

	
	
	.list-title-button{
		font-size: 36rpx;
		font-weight: 550;
	}
	.play-type{
		color: #949494;
		margin-right: 40rpx;
	}
}
.pop-title{
	font-size: 36rpx;
	font-weight: 550;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	border-bottom: 1px solid #ccc;
}
.pop-content{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	font-size: 34rpx;
	color: #01BEFF;
	margin-top: 40rpx;
}
</style>
