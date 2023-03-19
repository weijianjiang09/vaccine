<script>
	export default {
		onLaunch: function() {
			let token = uni.getStorageSync("token")
			if(!token){
				uni.navigateTo({
					url:'/pages/index/index'
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
  @import './tuniao-ui/index.scss';
  @import './tuniao-ui/iconfont.css';
	/*每个页面公共css */
</style>
