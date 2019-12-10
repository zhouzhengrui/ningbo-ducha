<template>
	<view class="container">
		<scroll-view scroll-y class="bottom-bar-scroll-view">
			<view class="examine">
				<view class="item blue">
					<text class="title">项目责任单位领导审核</text>
				</view>
				<view class="item">
					<text class="title">发改局审核</text>
				</view>
				<view class="item">
					<text class="title">县政府督查室审核</text>
				</view>
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
			<view class="list-title">
				<text class="title">审核意见</text>
			</view>
			<div class="textarea-box">
				<textarea class="textarea" placeholder="请输入审批意见" @blur="fixScroll"/>
			</div>
			<view class="list-space"></view>
		</scroll-view>
		<view class="bottom-bar">
			<navigator class="bottom-bar-button" url="/pages/project-examine/project-examine-edit">
				<image src="/static/icon-1.png"></image>
				<text>审核</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array1: ['智慧校园创建工程', '宁海西店新城围填海工程'],
				array2: ['', ''],
				index: 0,
			};
		},
		onShow() {
			document.title = '项目审核'
		},
		methods: {
			// 选择器
			bindPickerChange: function(e) {
				this.index = e.target.value
			},
			//修复 IOS12，微信 6.7.4+ 键盘不回弹的问题
			fixScroll() {
			  window.scrollTo(0, 0);
			}
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
		display: flex;
	}
	.container {
		flex: 1;
		display: flex;
		align-items: stretch;
		flex-direction: column;
		align-content: flex-start;
		overflow: hidden;
		height: 100%;
	}
	
	.examine {
		margin-bottom: 20rpx;
		padding: 20rpx 0;
		background-color: #fff;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, .075);
		.item {
			position: relative;
			padding: 6rpx 35rpx 6rpx 120rpx;
			&.blue {
				.title {
					color: #0081ff;
				}
				&:before {
					background-color: #0081ff;
					box-shadow: 0 0 2px #0081ff;
				}
			}
			&:before {
				content: '';
				display: block;
				width: 18rpx;
				height: 18rpx;
				border-radius: 50%;
				border: 2rpx solid #fff;
				background-color: #aaa;
				box-shadow: 0 0 4rpx #aaa;
				position: absolute;
				top: 24rpx;
				left: 70rpx;
			}
			&:after {
				content: '';
				display: block;
				width: 2rpx;
				background-color: #aaa;
				position: absolute;
				top: 50rpx;
				left: 80rpx;
				bottom: -18rpx;
				opacity: .3;
			}
			&:last-child:after {
				display: none;
			}
		}
		.title {
			font-size: 32rpx;
			color: #999;
		}
	}
	
	.textarea-box {
		width: 100%;
		background-color: #fff;
		textarea {
			font-size: 32rpx;
			padding: 20rpx 38rpx;
		}
	}
		
</style>
