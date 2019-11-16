<template>
	<view class="container">
		<!-- search start -->
		<view class="search-bar">
			<view class="search-bar-button" @click="togglePopup('top', 'popup')">
				<image class="search-bar-icon" src="/static/search.png"></image>
				<text class="search-bar-text">搜索</text>
			</view>
		</view>
		<!-- search over -->
		<!-- tab start -->
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" tabClass="tab" class="text-center"></wuc-tab>
		<swiper :current="TabCur" duration="300" @change="swiperChange" class="tab-swiper">
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="list-project-query">
						<navigator class="item" url="/pages/project-content/project-content">
							<view class="inner border-bottom">
								<view class="row">
									<text class="title">宁海西店新城围填海工程</text>
								</view>
								<view class="row">
									<view class="column">
										<image class="list-project-query-icon" src="/static/list-project-query-icon.png"></image>
										<text class="text">项目类型</text>
										<text class="text gray">农水项目</text>
									</view>
									<view class="label label-blue">30%</view>
								</view>
							</view>
						</navigator>
						<navigator class="item" url="/pages/project-content/project-content">
							<view class="inner border-bottom">
								<view class="row">
									<text class="title">宁海生活垃圾焚烧发电项目(一期)</text>
								</view>
								<view class="row">
									<view class="column">
										<image class="list-project-query-icon" src="/static/list-project-query-icon.png"></image>
										<text class="text">项目类型</text>
										<text class="text gray">城建项目</text>
									</view>
									<view class="label label-orange">已完工</view>
								</view>
							</view>
						</navigator>
						<navigator class="item" url="/pages/project-content/project-content">
							<view class="inner border-bottom">
								<view class="row">
									<text class="title">宁海潘天寿艺术中心</text>
								</view>
								<view class="row">
									<view class="column">
										<image class="list-project-query-icon" src="/static/list-project-query-icon.png"></image>
										<text class="text">项目类型</text>
										<text class="text gray">社会发展项目</text>
									</view>
									<view class="label label-blue">60%</view>
								</view>
							</view>
						</navigator>
						<navigator class="item" url="/pages/project-content/project-content">
							<view class="inner border-bottom">
								<view class="row">
									<text class="title">宁海抽水蓄能电站</text>
								</view>
								<view class="row">
									<view class="column">
										<image class="list-project-query-icon" src="/static/list-project-query-icon.png"></image>
										<text class="text">项目类型</text>
										<text class="text gray">能源项目</text>
									</view>
									<view class="label label-orange">已完工</view>
								</view>
							</view>
						</navigator>
						<navigator class="item" url="/pages/project-content/project-content">
							<view class="inner border-bottom">
								<view class="row">
									<text class="title">智慧校园创建项目</text>
								</view>
								<view class="row">
									<view class="column">
										<image class="list-project-query-icon" src="/static/list-project-query-icon.png"></image>
										<text class="text">项目类型</text>
										<text class="text gray">教育事业</text>
									</view>
									<view class="label label-blue">80%</view>
								</view>
							</view>
						</navigator>
						
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="list-project-query">
						<navigator class="item" url="/pages/project-content/project-content">
							<view class="inner border-bottom">
								<view class="row">
									<text class="title">宁海西店新城围填海工程</text>
								</view>
								<view class="row">
									<view class="column">
										<image class="list-project-query-icon" src="/static/list-project-query-icon.png"></image>
										<text class="text">项目类型</text>
										<text class="text gray">农水项目</text>
									</view>
									<view class="label label-blue">30%</view>
								</view>
							</view>
						</navigator>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- tab over -->
		<!-- popup-search start -->
		<uni-popup ref="popup" type="top">
			<view class="popup-search">
				<view class="list">
					<!-- item start -->
					<view class="item">
						<view class="inner border-bottom">
							<text class="name">项目名称</text>
							<view class="input">
								<input class="uni-input" placeholder="请输入" placeholder-style="color:#bbb" />
								<image class="keyboard-icon" src="/static/keyboard.png"></image>
							</view>
						</view>
					</view>
					<!-- item over -->
					<!-- item start -->
					<view class="item">
						<view class="inner border-bottom">
							<text class="name">项目类型</text>
							<view class="input">
								<input class="uni-input" placeholder="请输入" placeholder-style="color:#bbb" />
								<image class="keyboard-icon" src="/static/keyboard.png"></image>
							</view>
						</view>
					</view>
					<!-- item over -->
					<!-- item start -->
					<view class="item">
						<view class="inner border-bottom">
							<text class="name">项目状态</text>
							<view class="picker">
								<picker @change="bindPickerChange" :value="index" :range="array">
									<view class="uni-input">{{array[index]}}</view>
								</picker>
								<image class="arrow-down" src="../../static/arrow-down.png"></image>
							</view>
						</view>
					</view>
					<!-- item over -->
				</view>
				<view class="popup-search-button">
					<button class="search-button search" type="primary">搜索</button>
					<button class="search-button cancel" type="primary" @click="cancel('popup')">取消</button>
				</view>
			</view>
		</uni-popup>
		<!-- popup-search over -->
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue" // uniPopup 组件
	import WucTab from '@/components/wuc-tab/wuc-tab.vue'; // WucTab 组件
	export default {
		components: {
			WucTab,
			uniPopup
		},
		data() {
			return {
				TabCur: 0,
				tabList: [{
					name: '新建'
				}, {
					name: '续建'
				}],
				array: ['已完工', '部分完工', '未完工'],
				index: 0,
			};
		},
		onShow() {
			document.title = '项目查询'
		},
		methods: {
			// 选择器
			bindPickerChange: function(e) {
				this.index = e.target.value
			},
			togglePopup(type, open) {
				this.$refs[open].open()
			},
			cancel(type) {
				this.$refs[type].close()
			},
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
	.search-bar {
		padding: 20rpx 30rpx 0;
		background-color: #fff;
		.search-bar-button {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 60rpx;
			background: #eeeeee;
			border-radius: 30rpx;
		}
		.search-bar-icon {
			width: 46rpx;
			height: 46rpx;
		}
		.search-bar-text {
			font-size: 30rpx;
			color: #aaa;
		}
	}
	.popup-search {
		background-color: #fff;
		.popup-search-button {
			display: flex;
			align-items: center;
			padding: 30rpx 38rpx;
		}
		.search-button {
			margin-right: 20rpx;
			&.search {
				flex: 1;
				color: #fff;
				border-radius: 12rpx;
				background: linear-gradient(to right, #25b7ff, #0081ff);
			}
			&.cancel {
				width: 40%;
				flex-shrink: 0;
				border-radius: 12rpx;
				background: #fff;
				border: 1rpx solid #0081ff;
				color: #0081ff;
			}
			&:last-child {
				margin-right: 0;
			}
		}
	}
		
	.list-project-query {
		padding: 20rpx 0;
		.item {
			padding-left: 48rpx;
			background-color: #fff;
		}
		.inner {
			padding: 28rpx 30rpx 28rpx 0;
		}
		.row {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.column {
			display: flex;
			align-items: center;
			.text {
				font-size: 24rpx;
				margin-right: 12rpx;
			}
			.gray {
				color: #999;
			}
		}
		.title {
			font-size: 32rpx;
			margin-bottom: 8rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.list-project-query-icon {
			display: block;
			width: 28rpx;
			height: 28rpx;
			margin-right: 10rpx;
		}
		.label {
			font-size: 24rpx;
			line-height: 1;
			padding: 8rpx 0;
			width: 100rpx;
			text-align: center;
			border: 1px solid #eee;
			border-radius: 8rpx;
			&.label-blue {
				color: #0081ff;
				border-color: #0081ff;
			}
			&.label-orange {
				color: #e53712;
				border-color: #e53712;
			}
		}
	}
</style>
