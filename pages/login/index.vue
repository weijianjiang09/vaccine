<template>
  <view class="template-login">
    <!-- 顶部自定义导航 -->
<!--    <tn-nav-bar fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back'
        @click="goBack">
        <text class='icon tn-icon-left'></text>
        <text class='icon tn-icon-home-capsule-fill'></text>
      </view>
    </tn-nav-bar> -->
    
    <view class="login">
      <!-- 顶部背景图片-->
      <view class="login__bg login__bg--top">
        <image class="bg" src="https://tnuiimage.tnkjapp.com/login/2/login-top2.png" mode="widthFix"></image>
      </view>

      <view class="login__wrapper">
        <view class="tn-margin-left tn-margin-right tn-text-bold" style="font-size: 60rpx;">
          欢迎回来!
        </view>
        <view class="tn-margin tn-color-gray--disabled tn-text-lg">
          带给你最方便的服务
        </view>
        
        <!-- 登录/注册切换 -->
       <!-- <view class="login-sussuspension login__mode tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center">
          <view class="login__mode__item tn-flex-1" :class="[{'login__mode__item--active': currentModeIndex === 0}]" @tap.stop="modeSwitch(0)">
            登录
          </view>
          <view class="login__mode__item tn-flex-1" :class="[{'login__mode__item--active': currentModeIndex === 1}]" @tap.stop="modeSwitch(1)">
            注册
          </view>
          <view class="login__mode__slider tn-cool-bg-color-15--reverse" :style="[modeSliderStyle]"></view>
        </view> -->
        
        <!-- 输入框内容-->
        <view class="login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
          <!-- 登录 -->
          <block v-if="currentModeIndex === 0">
            <view class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-phone"></view>
              </view>
              <view class="login__info__item__input__content">
                <input maxlength="20" v-model="from.userName" placeholder-class="input-placeholder" placeholder="请输入手机号码" />
              </view>
            </view>
            <view class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-lock"></view>
              </view>
              <view class="login__info__item__input__content">
                <input :password="!showPassword" v-model="from.password" placeholder-class="input-placeholder" placeholder="请输入登录密码" />
              </view>
              <view class="login__info__item__input__right-icon" @click="showPassword = !showPassword">
                <view :class="[showPassword ? 'tn-icon-eye' : 'tn-icon-eye-hide']"></view>
              </view>
            </view>
           <!-- <view class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-safe"></view>
              </view>
              <view class="login__info__item__input__content login__info__item__input__content--verify-code">
                <input placeholder-class="input-placeholder" placeholder="请输入验证码" />
              </view>
              <view class="login__info__item__input__right-verify-code" @tap.stop="getCode">
                <tn-button backgroundColor="#01BEFF" fontColor="#FFFFFF" size="sm" padding="5rpx 10rpx" width="100%" shape="round">{{ tips }}</tn-button>
              </view>
            </view> -->
          </block>
          <!-- 注册 -->
          <block v-if="currentModeIndex === 1">
            <view class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-phone"></view>
              </view>
              <view class="login__info__item__input__content">
                <input maxlength="20" placeholder-class="input-placeholder" v-model="from.userName" placeholder="请输入注册手机号码" />
              </view>
            </view>
            
          <!--  <view class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-safe"></view>
              </view>
              <view class="login__info__item__input__content login__info__item__input__content--verify-code">
                <input placeholder-class="input-placeholder" placeholder="请输入验证码" />
              </view>
              <view class="login__info__item__input__right-verify-code" @tap.stop="getCode">
                <tn-button size="sm" padding="5rpx 10rpx" width="100%" shape="round">{{ tips }}</tn-button>
              </view>
            </view> -->
            
            <view class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
              <view class="login__info__item__input__left-icon">
                <view class="tn-icon-lock"></view>
              </view>
              <view class="login__info__item__input__content">
                <input :password="!showPassword" placeholder-class="input-placeholder" v-model="from.password" placeholder="请输入登录密码" />
              </view>
              <view class="login__info__item__input__right-icon" @click="showPassword = !showPassword">
                <view :class="[showPassword ? 'tn-icon-eye' : 'tn-icon-eye-hide']"></view>
              </view>
            </view>
			<view class="login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left">
			  <view class="login__info__item__input__left-icon">
			    <view class="tn-icon-lock"></view>
			  </view>
			  <view class="login__info__item__input__content">
			    <input :password="!showPassword" placeholder-class="input-placeholder" v-model="from.repassword" placeholder="请输入再次登录密码" />
			  </view>
			  <view class="login__info__item__input__right-icon" @click="showPassword = !showPassword">
			    <view :class="[showPassword ? 'tn-icon-eye' : 'tn-icon-eye-hide']"></view>
			  </view>
			</view>
          </block>
          
          <view class="login__info__item__button tn-bg-blue tn-color-white" hover-class="tn-hover" :hover-stay-time="150" @click="login(currentModeIndex)">{{ currentModeIndex === 0 ? '登录' : '注册'}}</view>
          
          
          <view v-if="currentModeIndex === 1" :class="[{'login__info__item__tips': currentModeIndex === 0}]">
            <view class="tn-flex tn-flex-row-between tn-padding">
              <view class="" @tap.stop="modeSwitch(0)">前往登录</view>
            </view>
          </view>
          <view v-if="currentModeIndex === 0" :class="[{'login__info__item__tips': currentModeIndex === 1}]">
            <view class="tn-flex tn-flex-row-between tn-padding">
              <view class="tn-padding-right" @tap.stop="modeSwitch(1)">账号注册</view>
              <!-- <view class="tn-padding-left tn-color-gray">忘记密码</view> -->
            </view>
          </view>
          
        </view>
        
        <!-- 其他登录方式 -->
       <!-- <view class="login__way tn-flex tn-flex-col-center tn-flex-row-center">
          <view class="tn-padding-sm tn-margin-xs">
            <view class="login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-teal--dark">
              <view class="tn-icon-wechat-fill"></view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs">
            <view class="login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-red">
              <view class="tn-icon-sina"></view>
            </view>
          </view>
          <view class="tn-padding-sm tn-margin-xs">
            <view class="login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-color-blue">
              <view class="tn-icon-qq"></view>
            </view>
          </view>
        </view> -->
      </view>
      
      <!-- 底部背景图片-->
      <view class="login__bg login__bg--bottom">
        <image src="https://tnuiimage.tnkjapp.com/login/2/login-bottom2.png" mode="widthFix"></image>
      </view>
  
    </view>
    <tn-toast ref="toast"></tn-toast>
    <!-- 验证码倒计时 -->
    <tn-verification-code
      ref="code"
      uniqueKey="login-demo-4"
      :seconds="60"
      @change="codeChange">
    </tn-verification-code>
  </view>
</template>

<script>
  import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
  import {login,register} from '@/api/login/login.js'
  import {setToken} from '@/utils/auth.js'
  export default {
    name: 'login-demo-4',
    mixins: [template_page_mixin],
    data() {
      return {
        // 当前选中的模式
        currentModeIndex: 0,
        // 模式选中滑块
        modeSliderStyle: {
          left: 0
        },
        // 是否显示密码
        showPassword: false,
        // 倒计时提示文字
        tips: '获取验证码',
		from:{
			userName:'',
			password:"",
			repassword:""
		},
      }
    },
    watch: {
      currentModeIndex(value) {
        const sliderWidth = uni.upx2px(476 / 2)
        this.modeSliderStyle.left = `${sliderWidth * value}px`
      }
    },
    methods: {
      // 切换模式
      modeSwitch(index) {
        this.currentModeIndex = index
        this.showPassword = false
		this.from = {
		   userName:'',
		   password:"",
		   repassword:''
		}
      },
	  login(flag){
		  if(flag==0){
			  login(this.from).then(res=>{
				  console.log(res);
				  this.$refs.toast.show({
						title: '登录成功',
						icon: 'success',
						duration: 1500
				  })
				  setToken(res.data)
				  uni.reLaunch({
				  	url:'/pages/index/index'
				  })
			  })
		  }else{
			  register(this.from).then(res=>{
				   console.log(res);
				   this.$refs.toast.show({
						title: '注册成功',
						icon: 'success',
						duration: 1500
				   })
				   this.from = {
					   userName:'',
					   password:"",
				   }
				this.currentModeIndex = 0
			  })
			 
		  }
	  },
      // 获取验证码
      getCode() {
        if (this.$refs.code.canGetCode) {
          // this.$tn.message.loading('正在获取验证码')
		   this.$refs.toast.show({
			title: '获取成功',
			icon: 'success',
			duration: 1500
		  })
			this.$refs.code.start()
        
        } else {
          this.$refs.toast.show({
				title: '短信已发送，请稍后再试',
				icon: 'erreo',
				duration: 1500
          })
        }
      },
      // 获取验证码倒计时被修改
      codeChange(event) {
        this.tips = event
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/templatePage/custom_nav_bar.scss';
  /* 悬浮 */
  /* .login-sussuspension{
    animation: suspension 3s ease-in-out infinite;
  }
  
  @keyframes suspension {
    0%, 100% {
      transform: translate(0 , 0);
    }
    50% {
      transform: translate(0rem , 1rem);
    }
  } */
  
  .login {
    position: relative;
    height: 100%;
    z-index: 1;
    
    /* 背景图片 start */
    &__bg {
      z-index: -1;
      position: fixed;
      
      &--top {
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        
        .bg {
          width: 750rpx;
          will-change: transform;
        }
      }
      
      &--bottom {
        bottom: -10rpx;
        left: 0;
        right: 0;
        width: 100%;
        // height: 144px;
        margin-bottom: env(safe-area-inset-bottom);
        
        image {
          width: 750rpx;
          will-change: transform;
        }
      }
    }
    /* 背景图片 end */
    
    /* 内容 start */
    &__wrapper {
      // margin-top: 300rpx;
	  padding-top: 200rpx;
      width: 100%;
    }
    
    /* 切换 start */
    &__mode {
      position: relative;
      margin: 0 auto;
      width: 476rpx;
      height: 77rpx;
      margin-top: 100rpx;
      background-color: rgba(255,255,255,0.6);
      box-shadow: 0rpx 10rpx 50rpx 0rpx rgba(0, 3, 72, 0.1);
      border-radius: 39rpx;
      
      &__item {
        height: 77rpx;
        width: 100%;
        line-height: 77rpx;
        text-align: center;
        font-size: 31rpx;
        color: #080808;
        letter-spacing: 1em;
        text-indent: 1em;
        z-index: 2;
        transition: all 0.4s;
        
        &--active {
          font-weight: bold;
          color: #FFFFFF;
        }
      }
      
      &__slider {
        position: absolute;
        height: inherit;
        width: calc(476rpx / 2);
        border-radius: inherit;
        box-shadow: 0rpx 18rpx 72rpx 18rpx rgba(0, 195, 255, 0.1);
        z-index: 1;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }
    /* 切换 end */
    
    /* 登录注册信息 start */
    &__info {
      margin: 80rpx 30rpx 10rpx 30rpx;
      padding-bottom: 0;
      border-radius: 20rpx;
      
      &__item {
        
        &__input {
          margin-top: 59rpx;
          width: 100%;
          height: 77rpx;
          border: 1rpx solid #E6E6E6;
          border-radius: 39rpx;
          
          &__left-icon {
            width: 10%;
            font-size: 44rpx;
            margin-left: 20rpx;
            color: #838383;
          }
          
          &__content {
            width: 80%;
            padding-left: 10rpx;
            
            &--verify-code {
              width: 56%;
            }
            
            input {
              font-size: 24rpx;
              // letter-spacing: 0.1em;
            }
          }
          
          &__right-icon {
            width: 10%;
            font-size: 44rpx;
            margin-right: 20rpx;
            color: #838383;
          }
          
          &__right-verify-code {
            width: 34%;
            margin-right: 20rpx;
          }
        }
        
        &__button {
          margin-top: 75rpx;
          margin-bottom: 39rpx;
          width: 100%;
          height: 77rpx;
          text-align: center;
          font-size: 31rpx;
          font-weight: bold;
          line-height: 77rpx;
          letter-spacing: 1em;
          text-indent: 1em;
          border-radius: 39rpx;
          box-shadow: 1rpx 10rpx 24rpx 0rpx rgba(60, 129, 254, 0.35);
        }
        
        &__tips {
          margin: 30rpx 0;
          color: #AAAAAA;
        }
      }
    }
    /* 登录注册信息 end */
    
    /* 登录方式切换 start */
    &__way {
      margin: 0 auto;
      margin-top: 110rpx;
      
      &__item {
        &--icon {
          width: 85rpx;
          height: 85rpx;
          font-size: 80rpx;
          // border-radius: 100rpx;
          margin-bottom: 18rpx;
          position: relative;
          z-index: 1;
          
          // &::after {
          //   content: " ";
          //   position: absolute;
          //   z-index: -1;
          //   width: 100%;
          //   height: 100%;
          //   left: 0;
          //   bottom: 0;
          //   border-radius: inherit;
          //   opacity: 1;
          //   transform: scale(1, 1);
          //   background-size: 100% 100%;
          //   background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
          // }
        }
      }
    }
    /* 登录方式切换 end */
    /* 内容 end */
    
  }
  
  /deep/.input-placeholder {
    font-size: 24rpx;
    color: #838383;
  }
  
</style>
