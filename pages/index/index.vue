<template>
	<view class="content">
		<image class="logo" :class="{'rotate': rotateBool , 'rotate1': !rotateBool}" :src="imgUrl + '/static/logo.png'" />
		<uni-img :urles="urles"></uni-img>
    <!-- <div class="bg-test"></div> -->
		<view style="background-image: url('/static/logo.png')"></view>
		<style-img :urles="urles" class="hm"></style-img>
		<view class="text-area hm">
			<text class="title">{{title}}</text>
		</view>
		<uni-list>
			<uni-list-item title="11" note="">33</uni-list-item>
			<uni-list-item title="22" note="">44</uni-list-item>
		</uni-list>
		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index">
				<view class="image-view">
					<image v-if="renderImage" class="uni-product-image" :src="product.image" />
				</view>
				<view class="uni-product-title">{{product.title}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
					<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
					<text class="uni-product-tip">{{product.tip}}</text>
				</view>
			</view>
		</view>
		<div v-for="item in items" :key="item.id">
			{{ item }}
		</div>
		<button type="primary" @click='change'>cccc</button>
		<div class="iconfont iconjianchagengxin margin-top30"></div>
	</view>
</template>

<script>
	import {functions} from '../../common/utils.js'
	import uniImg from '@/components/img/img.vue'
	import styleImg from '@/components/img/style-img.vue'
	
	export default {
		components: {
			uniImg,
			styleImg
		},
		data() {
			return {
				title: 'Hello',
				rotateBool: false,
				imgUrl: '',
				urles: '/static/logo.png'
			}
		},
		onLoad() {
			this.$http.getPackageList.call(this)
			this.imgUrl = this.baseImgUrl
			// console.log(this.imgUrl)
			// this.go('aaa')
		},
		methods: {
			change () {
				// console.log(this.rotateBool)
				this.rotateBool = !this.rotateBool
				let params = {
					token: 111,
					page: 222,
					pageSize: 333
				}
				let c = functions.objectToString(params)
				// console.log(c)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.hm {
		.title {
			color: #007AFF;
		}
  }
</style>
