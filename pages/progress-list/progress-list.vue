<template>
	<view class="container">
		<!-- tab start -->
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" tabClass="tab-multiple" class="text-center"></wuc-tab>
		<swiper :current="TabCur" duration="300" @change="swiperChange" class="tab-swiper">
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="list-project-progress border-top">
						<!-- item start -->
						<navigator class="item border-bottom" url="">
							<text class="number">1</text>
							<view class="inner">
								<view class="row">
									<text class="title">宁海西店新城围填海工程</text>
								</view>
								<view class="row">
									<view class="progress">
										<view class="progress-bar" style="width:85%"></view>
									</view>
									<text class="label label-blue">85%</text>
								</view>
							</view>
						</navigator>
						<!-- item over -->
						<!-- item start -->
						<navigator class="item border-bottom" url="">
							<text class="number">2</text>
							<view class="inner">
								<view class="row">
									<text class="title">宁海西店新城围填海工程</text>
								</view>
								<view class="row">
									<view class="progress">
										<view class="progress-bar" style="width:85%"></view>
									</view>
									<text class="label label-blue">85%</text>
								</view>
							</view>
						</navigator>
						<!-- item over -->
						<!-- item start -->
						<navigator class="item border-bottom" url="">
							<text class="number">3</text>
							<view class="inner">
								<view class="row">
									<text class="title">宁海西店新城围填海工程</text>
								</view>
								<view class="row">
									<view class="progress">
										<view class="progress-bar" style="width:85%"></view>
									</view>
									<text class="label label-blue">85%</text>
								</view>
							</view>
						</navigator>
						<!-- item over -->
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="list-project-progress border-top">
						<!-- item start -->
						<navigator class="item border-bottom" url="">
							<text class="number">1</text>
							<view class="inner">
								<view class="row">
									<text class="title">宁海西店新城围填海工程</text>
								</view>
								<view class="row">
									<view class="progress">
										<view class="progress-bar" style="width:85%"></view>
									</view>
									<text class="label label-blue">85%</text>
								</view>
							</view>
						</navigator>
						<!-- item over -->
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="list-project-progress border-top">
						<!-- item start -->
						<navigator class="item border-bottom" url="">
							<text class="number">1</text>
							<view class="inner">
								<view class="row">
									<text class="title">宁海西店新城围填海工程</text>
								</view>
								<view class="row">
									<view class="progress">
										<view class="progress-bar" style="width:85%"></view>
									</view>
									<text class="label label-blue">85%</text>
								</view>
							</view>
						</navigator>
						<!-- item over -->
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="list-project-progress border-top">
						<!-- item start -->
						<navigator class="item border-bottom" url="">
							<text class="number">1</text>
							<view class="inner">
								<view class="row">
									<text class="title">宁海西店新城围填海工程</text>
								</view>
								<view class="row">
									<view class="progress">
										<view class="progress-bar" style="width:85%"></view>
									</view>
									<text class="label label-blue">85%</text>
								</view>
							</view>
						</navigator>
						<!-- item over -->
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="list-project-progress border-top">
						<!-- item start -->
						<navigator class="item border-bottom" url="">
							<text class="number">1</text>
							<view class="inner">
								<view class="row">
									<text class="title">宁海西店新城围填海工程</text>
								</view>
								<view class="row">
									<view class="progress">
										<view class="progress-bar" style="width:85%"></view>
									</view>
									<text class="label label-blue">85%</text>
								</view>
							</view>
						</navigator>
						<!-- item over -->
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- tab over -->
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'; // WucTab 组件
	export default {
		components: {
			WucTab
		},
		data() {
			return {
				TabCur: 0,
				tabList: [{
					name: '水利设施'
				}, {
					name: '教育事业'
				}, {
					name: '交通运输'
				}, {
					name: '环保整治'
				}, {
					name: '医疗卫生'
				}],
			};
		},
		onShow() {
			document.title = '项目进度列表'
		},
		methods: {
			// tab 切换
			tabChange(index) {
				this.TabCur = index;
			},
			// swiper 同步
			swiperChange(e) {
				this.TabCur = e.target.current;
			}
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		min-height: 100%;
		display: flex;
	}
	.container {
		flex: 1;
		display: flex;
		align-items: stretch;
		flex-direction: column;
		align-content: flex-start;
		overflow: hidden;
	}
		
	.list-project-progress {
		padding: 0;
		.item {
			display: flex;
			align-items: center;
			padding: 32rpx;
			background-color: #fff;
		}
		.number {
			width: 46rpx;
			height: 46rpx;
			line-height: 46rpx;
			text-align: center;
			color: #fff;
			border-radius: 23rpx;
			font-size: 32rpx;
			background-color: #9082bf;
			font-weight: bold;
			margin-right: 20rpx;
		}
		.inner {
			flex: 1;
		}
		.row {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.title {
			font-size: 32rpx;
			margin-bottom: 8rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.progress {
			width: 100%;
			height: 16rpx;
			border-radius: 8rpx;
			background-color: #ededed;
			overflow: hidden;
			.progress-bar {
				height: 16rpx;
				border-radius: 8rpx;
				background: linear-gradient(to right, #25b7ff, #0081ff);
			}
		}
		.label {
			flex-shrink: 0;
			font-size: 38rpx;
			line-height: 1;
			width: 100rpx;
			text-align: right;
			border-radius: 8rpx;
			color: #0081ff;
			font-weight: bold;
			margin-left: 10rpx;
		}
	}
</style>
