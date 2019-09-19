<!-- 传入的url -> /static/logo.png 绝对地址 -->
<template name="style-img">
	<view class="style-img" :style="{backgroundImage: 'url(' + imgUrl + urles + ')'}"></view>
</template>

<script>
	export default {
		name: "style-img",
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
		}
	}
</script>
