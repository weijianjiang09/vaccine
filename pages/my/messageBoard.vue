<template>
	<view class="message-box">
		<tn-form :model="form" ref="uForm" :errorType="['message']">
			<tn-form-item label="标题" labelPosition="top" labelAlign="left" prop="messageTitle" :borderBottom="false" >
				<tn-input :clearable="false" v-model="form.messageTitle" focus type="text"  placeholder="请输入标题" :border="false"></tn-input>
			</tn-form-item>
			<tn-form-item label="内容" labelPosition="top" labelAlign="left" prop="messageContent" :borderBottom="false" >
				<tn-input v-model="form.messageContent" type="textarea" placeholder="请输入内容" :border="false" />
			</tn-form-item>
		</tn-form>
		<tn-button shape="round" width="90vw" backgroundColor="#4DD0EB" fontColor="#fff" @click="sub">椭圆按钮</tn-button>
	</view>
</template>

<script>
	import {
		messageBox
	} from '@/api/my/index.js'
	export default {
		data() {
			return {
				form: {
					messageTitle: "",
					messageContent: ""
				}
			}
		},
		methods: {
			sub(){
				messageBox(this.form).then(res=>{
					uni.showToast({
						icon:"success",
						title:"提交成功"
					})
					uni.navigateTo({
						url:'/pages/my/my'
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/.tn-form-item--left__content__label {
		font-weight: bold;
	}

	/deep/.tn-checkbox__label {
		margin-right: 0rpx !important;
	}
	/deep/.tn-border-solid-bottom{
		border-bottom-widt:0 !important;
	}
	.container {
		padding: 0rpx 60rpx 60rpx 60rpx !important;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;

		.wrap {
			width: 100%;
			margin-top: 30rpx;
		}
	}
	.message-box{
		padding: 20rpx;
		min-height: calc(100vh - 90rpx);
		background-color: #f8f8f8;
	}
	textarea{
		background-color: #fff !important;
	}
</style>
