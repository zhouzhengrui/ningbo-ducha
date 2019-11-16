<template>
	<view class="container">
		<view class="list-title">
			<text class="title">项目进展情况</text>
		</view>
		<div class="textarea-box">
			<textarea class="textarea" placeholder="请输入"/>
		</div>
		<div class="button-box">
			<button class="button">提交</button>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onShow() {
			document.title = '项目进展情况'
		},
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
	.button-box {
		padding: 38rpx;
		button {
			color: #fff;
			border-radius: 100rpx;
			background: linear-gradient(to right, #25b7ff, #0081ff);
		}
	}
</style>
