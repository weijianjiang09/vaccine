<template>
	<view class="container">
		<!-- 页面内容 -->
		<view class="wrap">
			<tn-form :model="form" ref="form" :errorType="errorType" labelPosition="left" :labelWidth="600" labelAlign="left">
				<tn-form-item label="真实姓名" prop="name" :required="true" labelPosition="top" labelAlign="left">
					<tn-input :clearable="false" v-model="form.name" type="text"  placeholder="请输入真实姓名" :border="false"></tn-input>
				</tn-form-item>
				<tn-form-item label="身份证号" prop="numId" :required="true" labelPosition="top" labelAlign="left">
					<tn-input :clearable="false" v-model="form.numId" type="text" placeholder="请输入身份证号" :border="false"></tn-input>
				</tn-form-item>
				<tn-form-item label="性别" :required="true" prop="sex" labelPosition="top" labelAlign="left">
					<tn-input v-model="form.sex" type="select" placeholder="请选择性别" :border="false" :selectOpen="selectShow" @click="selectShow = true" @confirm="checkType"></tn-input>
				</tn-form-item>
				<tn-form-item label="出生日期" prop="birthday" :required="true" labelPosition="top" labelAlign="left">
					<tn-input v-model="form.birthday" type="select" placeholder="请选择出生日期" :border="false"  :selectOpen="pickerShow" @click="pickerShow=true" @confirm="checkBirthday"></tn-input>
				</tn-form-item>
				<tn-form-item label="手机号" prop="phone" :required="true" labelPosition="top" labelAlign="left">
					<tn-input :clearable="false" v-model="form.phone" type="text" placeholder="请输入手机号" :border="false"></tn-input>
				</tn-form-item>
			</tn-form>
			<tn-picker v-model="pickerShow" mode="time" :params="params" @confirm="checkBirthday"></tn-picker>
			<tn-select v-model="selectShow" valueName="industry_code" labelName="industry_name" mode="single" :list="industryTyleList" @confirm="checkType"></tn-select>
			<tn-button shape="round" margin="60rpx 0rpx 0rpx 0rpx" backgroundColor="#007aff" :countDownText="s" :blockRepeatClick="true" fontColor="#FFFFFF" width="100%" @click="add">添加</tn-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				errorType: ['message', 'border-bottom'],
				pickerShow: false,
				selectShow: false,
				setinForm: null,
				industryTyleList: [{
						industry_name: '女',
						industry_code: 0
					},
					{
						industry_name: '男',
						industry_code: 1
					},
				],
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: false,
					second: false
				},
				form: {
					name: '',
					numId: '',
					birthday: '',
					phone: '',
					serviceId: '',
					sex: '',
				},
				rules: {
					name: [{
							required: true,
							message: '请输入名字',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 10,
							message: '请规范输入您的名字',
							trigger: ['change', 'blur'],
						},
						{	
							pattern:/^[a-zA-Z0-9_-]{2,10}$/,
							// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
							validator: (rule, value, callback) => {
								return /^[a-zA-Z0-9_-]{2,10}$/.test(value);
							},
							message: '姓名必须为英文或英文数字混合',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change', 'blur'],
						},
					],
					numId: [{
							required: true,
							message: '请输入身份证',
							trigger: 'blur'
						},
						{	
							pattern:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
							// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
							validator: (rule, value, callback) => {
								return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value);
							},
							message: '身份证有误',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change', 'blur'],
						},
					],
					phone: [{
						required: true,
						message: '手机号不能为空',
						trigger: ['change','blur']
					},{	
							pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
							// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
							validator: (rule, value, callback) => {
								return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(value);
							},
							message: '手机号有误',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change', 'blur'],
						},],
						
					birthday: [{
						required: true,
						message: '出生日期不能为空',
						trigger: 'change'
					}],
					sex: [{
						required: true,
						message: '所选性别不能为空',
						trigger: 'change'
					}],
				},
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			// Regester
			add() {
				let that=this;
				that.$refs.form.validate(valid => {
					if (valid) {
						// 验证通过
						that.$t.message.toast('验证通过!')
					} else {
						// 验证失败
						that.$t.message.toast('验证失败,请检查所填选项!')
					}
				})
			},
			// Check birthday
			checkBirthday(event) {
				console.log(event);
				this.form.birthday = event.year + '-' + event.month + '-' + event.day+" "+event.hour+":00:00"
			},
			// Check Type
			checkType(event) {
				this.form.sex = `${event[0]['label']}`;
			},
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
</style>
