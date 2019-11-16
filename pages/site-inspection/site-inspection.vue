<template>
	<view class="container">
		<!-- tab start -->
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" tabClass="tab" class="text-center"></wuc-tab>
		<swiper :current="TabCur" duration="300" @change="swiperChange" class="tab-swiper">
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="list-space"></view>
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
					<view class="list">
						<!-- item start -->
						<view class="item">
							<view class="inner inner-direction border-bottom">
								<text class="name" style="margin-bottom: 20rpx;">项目形象进度</text>
								<view class="image-update">
									<view class="image-update-item">
										<image class="image-update-thumbnail" src="/static/index-banner.jpg" mode="aspectFill"></image>
										<image class="close" src="/static/close.png"></image>
									</view>
									<view class="image-update-add">
										<image src="/static/camera.png"></image>
										<text>添加照片</text>
									</view>
								</view>
							</view>
						</view>
						<!-- item over -->
					</view>
					<view class="list-space"></view>
					<view class="list">
						<!-- item start -->
						<view class="item">
							<view class="inner inner-direction border-bottom">
								<text class="name">实际完成情况</text>
								<view class="input">
									<textarea class="uni-input" placeholder="请输入" placeholder-style="color:#bbb" auto-height />
								</view>
							</view>
						</view>
						<!-- item over -->
						<!-- item start -->
						<view class="item">
							<view class="inner inner-direction border-bottom">
								<text class="name">存在问题</text>
								<view class="input">
									<textarea class="uni-input" placeholder="请输入" placeholder-style="color:#bbb" auto-height />
								</view>
							</view>
						</view>
						<!-- item over -->
						<!-- item start -->
						<view class="item">
							<view class="inner inner-direction border-bottom">
								<text class="name">备注</text>
								<view class="input">
									<textarea class="uni-input" placeholder="请输入" placeholder-style="color:#bbb" auto-height />
								</view>
							</view>
						</view>
						<!-- item over -->
					</view>
					<view class="list-space"></view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- tab over -->
		<view class="bottom-bar">
			<navigator class="bottom-bar-button" url="">
				<image src="/static/icon-2.png"></image>
				<text>保存</text>
			</navigator>
			<navigator class="bottom-bar-button" url="">
				<image src="/static/icon-3.png"></image>
				<text>提交</text>
			</navigator>
			<navigator class="bottom-bar-button" url="">
				<image src="/static/icon-4.png"></image>
				<text>返回</text>
			</navigator>
		</view>
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
					name: '巡查上报'
				}],
				array1: ['智慧校园创建工程', '宁海西店新城围填海工程'],
				array2: ['', ''],
				index: 0,
			};
		},
		onShow() {
			document.title = '现场查询'
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
	.tab-swiper-scroll-view {
		height: calc(100% - 90rpx);
	}
</style>
