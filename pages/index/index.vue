<template>
	<view class="container">
		<image class="banner" src="/static/index-banner.jpg"></image>
		<view class="list-index">
			<navigator class="item" v-for="(item, index) in listIndex" :key="index" :url="item.url">
				<image :src="item.src"></image>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listIndex: [{
						src: '/static/index-button-1.jpg',
						url: '/pages/project-query/project-query'
					},
					{
						src: '/static/index-button-2.jpg',
						url: '/pages/project-examine/project-examine'
					},
					{
						src: '/static/index-button-3.jpg',
						url: '/pages/progress-report/progress-report'
					},
					{
						src: '/static/index-button-4.jpg',
						url: '/pages/site-inspection/site-inspection'
					},
					{
						src: '/static/index-button-5.jpg',
						url: '/pages/statistics/statistics'
					},
					{
						src: '/static/index-button-6.jpg',
						url: '/pages/progress-list/progress-list'
					}
				]
			}
		},
		onShow() {
			document.title = '项目督查'
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.banner {
		width: 100%;
		height: 298rpx;
		box-shadow: 0 5rpx 10rpx rgba(0, 0, 0, .2);
	}
	.list-index {
		padding: 34rpx 44rpx;
		.item {
			image {
				display: block;
				width: 100%;
				height: 167rpx;
			}
		}
	}
</style>
