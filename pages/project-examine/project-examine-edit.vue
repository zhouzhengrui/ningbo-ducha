<template>
	<view class="container">
		<view class="list">
			<view class="list-space"></view>
			<!-- item start -->
			<view class="item">
				<view class="inner border-bottom">
					<text class="name">后续环节</text>
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
					<text class="name">选择用户</text>
					<view class="picker">
						<picker @change="bindPickerChange2" :value="index2" :range="array2">
							<view class="uni-input blue">{{array2[index2]}}</view>
						</picker>
						<image class="arrow-down" src="../../static/arrow-down.png"></image>
					</view>
				</view>
			</view>
			<!-- item over -->
		</view>
		<div class="button-box">
			<button class="button">提交</button>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array1: ['责任单位1领导审核', '责任单位2领导审核'],
				array2: ['跃龙街道负责人', '桃源街道负责人'],
				index: 0,
				index2: 0,
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
			bindPickerChange2: function(e) {
				this.index2 = e.target.value
			},
		}
	}
</script>

<style lang="scss">
	.textarea-box {
		width: 100%;
		background-color: #fff;
		textarea {
			font-size: 32rpx;
			padding: 20rpx 38rpx;
		}
	}
	.container {
		width: 100%;
	}
	.list {
		width: 100%;
	}
	.button-box {
		padding: 38rpx;
		button {
			color: #fff;
			border-radius: 100rpx;
			background: linear-gradient(to right, #25b7ff, #0081ff);
		}
	}
</style>
