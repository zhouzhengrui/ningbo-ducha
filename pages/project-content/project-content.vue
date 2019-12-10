<template>
	<view class="container">
		<!-- tab start -->
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" tabClass="tab" class="text-center"></wuc-tab>
		<swiper :current="TabCur" duration="300" @change="swiperChange" class="tab-swiper">
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="map">
						<image src="../../static/map.png"></image>
					</view>
					<view class="list">
						<!-- item start -->
						<view class="item">
							<view class="inner border-bottom">
								<text class="name">项目分类</text>
								<text class="text">新建</text>
							</view>
						</view>
						<!-- item over -->
						<!-- item start -->
						<view class="item">
							<view class="inner border-bottom">
								<text class="name">项目名称</text>
								<view class="picker">
									<picker @change="bindPickerChange" :value="index" :range="array1">
										<view class="uni-input blue">{{array1[index]}}</view>
									</picker>
									<image class="arrow-down" src="../../static/arrow-down.png"></image>
								</view>
							</view>
						</view>
						<!-- item over -->
						<!-- item start -->
						<view class="item">
							<view class="inner border-bottom">
								<text class="name">等级部门</text>
								<text class="text">教育局</text>
							</view>
						</view>
						<!-- item over -->
						<!-- item start -->
						<view class="item">
							<view class="inner border-bottom">
								<text class="name">责任县领导</text>
								<text class="text"></text>
							</view>
						</view>
						<!-- item over -->
					</view>
					<view class="list-title">
						<text class="title">责任单位及负责人</text>
					</view>
					<view class="list">
						<!-- item start -->
						<view class="item">
							<view class="inner border-bottom">
								<text class="name">责任单位 (一)</text>
								<text class="text">宁海县教育局</text>
							</view>
						</view>
						<!-- item over -->
						<!-- item start -->
						<view class="item">
							<view class="inner border-bottom">
								<text class="name">负责人</text>
								<text class="text"></text>
							</view>
						</view>
						<!-- item over -->
					</view>
					<view class="list-space"></view>
					<view class="list">
						<!-- item start -->
						<view class="item">
							<view class="inner border-bottom">
								<text class="name">年度计划</text>
								<view class="picker">
									<picker @change="bindPickerChange" :value="index" :range="array2">
										<view class="uni-input blue">{{array2[index]}}</view>
									</picker>
									<image class="arrow-down" src="../../static/arrow-down.png"></image>
								</view>
							</view>
						</view>
						<!-- item over -->
					</view>
					<view class="list-space"></view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="list-space"></view>
					<view class="list-history">
						<!-- item start -->
						<view class="item">
							<view class="row">
								<text class="text date">2019-8-31</text>
								<view class="inner">
									<text class="text">现场巡查现场巡查现场巡查现场巡查现场巡查现场巡查</text>
									<text class="text blue">(督查室)</text>
								</view>
							</view>
							<navigator class="list-history-button" url="">查看详情</navigator>
						</view>
						<!-- item over -->
						<!-- item start -->
						<view class="item">
							<view class="row">
								<text class="text date">2019-7-25</text>
								<view class="inner">
									<text class="text">月度进度上报</text>
									<text class="text blue">(教育局)</text>
								</view>
							</view>
							<navigator class="list-history-button" url="">查看详情</navigator>
						</view>
						<!-- item over -->
						<!-- item start -->
						<view class="item">
							<view class="row">
								<text class="text date">2019-1-10</text>
								<view class="inner">
									<text class="text">开工</text>
									<text class="text blue"></text>
								</view>
							</view>
							<navigator class="list-history-button" url="">查看详情</navigator>
						</view>
						<!-- item over -->
						<!-- item start -->
						<view class="item">
							<view class="row">
								<text class="text date">2019-1-10</text>
								<view class="inner">
									<text class="text">初始录入</text>
									<text class="text blue">(教育局)</text>
								</view>
							</view>
							<navigator class="list-history-button" url="">查看详情</navigator>
						</view>
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
					name: '项目信息'
				}, {
					name: '历史记录'
				}],
				array1: ['智慧校园创建工程', '宁海西店新城围填海工程'],
				array2: ['', ''],
				index: 0,
			};
		},
		onShow() {
			document.title = '项目详情'
		},
		methods: {
			// tab 切换
			tabChange(index) {
				this.TabCur = index;
			},
			// swiper 同步
			swiperChange(e) {
				this.TabCur = e.target.current;
			},
			// 选择器
			bindPickerChange: function(e) {
				this.index = e.target.value
			},
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
	.map {
		margin-bottom: 20rpx;
		padding: 0 35rpx 20rpx;
		background-color: #fff;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, .075);
		image {
			width: 680rpx;
			height: 240rpx;
			margin: 0 auto;
		}
	}
	.list-history {
		background-color: #fff;
		padding: 38rpx 0 0;
		.item {
			position: relative;
			padding: 0 38rpx 60rpx 90rpx;
			&:before {
				content: '';
				display: block;
				width: 12rpx;
				height: 12rpx;
				border-radius: 50%;
				border: 2rpx solid #e53712;
				position: absolute;
				top: 16rpx;
				left: 38rpx;
			}
			&:after {
				content: '';
				display: block;
				width: 4rpx;
				background-color: #0081ff;
				position: absolute;
				top: 36rpx;
				left: 44rpx;
				bottom: -12rpx;
				opacity: .2;
			}
			&:last-child:after {
				display: none;
			}
		}
		.row {
			display: flex;
			align-items: baseline ;
		}
		.innner {
			
		}
		.text {
			font-size: 32rpx;
			margin-right: 24rpx;
		}
		.blue {
			color: #0081ff;
		}
		.date {
			font-size: 28rpx;
			color: #999;
			white-space: nowrap;
		}
		.list-history-button {
			display: inline-block;
			font-size: 28rpx;
			margin-top: 14rpx;
			padding: 10rpx 24rpx;
			color: #fff;
			border-radius: 8rpx;
			background: linear-gradient(to right, #25b7ff, #0081ff);
		}
	}
</style>
