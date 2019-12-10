<template>
	<view class="container">
		<text class="title">项目督查</text>
		<image class="banner" src="/static/index-banner.jpg" mode="aspectFill"></image>
		<view class="list-index">
			<navigator class="item" v-for="(item, index) in listIndex" :key="index" :url="item.url">
				<view class="icon">
					<image :src="item.src" mode="widthFix"></image>
				</view>
				<text class="text">{{item.text}}</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listIndex: [{
						src: '/static/index-button-1.png',
						url: '/pages/project-query/project-query',
						text: '项目查询'
					},
					{
						src: '/static/index-button-2.png',
						url: '/pages/project-examine/project-examine',
						text: '项目审核'
					},
					{
						src: '/static/index-button-3.png',
						url: '/pages/progress-report/progress-report',
						text: '进度上报'
					},
					{
						src: '/static/index-button-4.png',
						url: '/pages/site-inspection/site-inspection',
						text: '现场查询'
					},
					{
						src: '/static/index-button-5.png',
						url: '/pages/statistics/statistics',
						text: '统计分析'
					},
					{
						src: '/static/index-button-6.png',
						url: '/pages/progress-list/progress-list',
						text: '我的收藏'
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
	.container {
		padding: 60rpx 48rpx 48rpx;
	}
	.title {
		font-size: 48rpx;
		font-weight: bold;
		margin-bottom: 28rpx;
		display: block;
	}
	.banner {
		width: 100%;
		height: 180rpx;
		margin-bottom: 28rpx;
		border-radius: 20rpx;
		box-shadow: 0 5rpx 10rpx rgba(0, 0, 0, .2);
	}
	.list-index {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.item {
			width: 48%;
			padding: 40rpx 0;
			margin-bottom: 28rpx;
			border-radius: 20rpx;
			background-color: #fff;
			box-shadow: 0 10rpx 20rpx rgba($color: #000000, $alpha: 0.075);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			&:nth-of-type(2) .icon {
				background-image: linear-gradient(to bottom, #ed8844, #f96247);
			}
			&:nth-of-type(3) .icon {
				background-image: linear-gradient(to bottom, #e457fd, #b81eee);
			}
			&:nth-of-type(4) .icon {
				background-image: linear-gradient(to bottom, #12c3bd, #1fb4cc);
			}
			&:nth-of-type(5) .icon {
				background-image: linear-gradient(to bottom, #5a75ea, #055cc5);
			}
			&:nth-of-type(6) .icon {
				background-image: linear-gradient(to bottom, #986ff9, #841cf5);
			}
		}
		.icon {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			background-image: linear-gradient(to bottom, #2dc1fd, #3289fc);
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 28rpx;
			image {
				display: block;
				width: 60rpx;
			}
		}
		.text {
			font-size: 28rpx;
		}
	}
</style>
