<!-- 传入的url -> /static/logo.png 绝对地址 -->
<template name="img">
	<view class="img">
		<image class="logo" :src="imgUrl + urles"></image>
	</view>
</template>

<script>
	export default {
		name: "img",
		props: {
			urles: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				imgUrl: ''
			}
		},
		mounted () {
			this.imgUrl = this.baseImgUrl ? this.baseImgUrl : ''
			// console.log(this.imgUrl)
			// console.log(this.url)
		}
	}
</script>

<style>

</style>
