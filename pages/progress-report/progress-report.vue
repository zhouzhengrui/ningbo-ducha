<template>
	<view class="container">
		<scroll-view scroll-y class="bottom-bar-scroll-view">
			<view class="list-title">
				<text class="title">月办理单</text>
			</view>
			<view class="list">
				<!-- item start -->
				<view class="item">
					<view class="inner border-bottom">
						<text class="name">报送人</text>
						<view class="input">
							<input class="uni-input" placeholder="输入姓名" placeholder-style="color:#bbb" />
							<image class="keyboard-icon" src="/static/keyboard.png"></image>
						</view>
					</view>
				</view>
				<!-- item over -->
				<!-- item start -->
				<view class="item">
					<view class="inner border-bottom">
						<text class="name">报送时间</text>
						<view class="picker">
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input">{{date}}</view>
							</picker>
							<image class="arrow-down" src="/static/arrow-down.png"></image>
						</view>
					</view>
				</view>
				<!-- item over -->
				<!-- item start -->
				<view class="item">
					<view class="inner inner-direction border-bottom">
						<text class="name">月形象进度</text>
						<view class="input">
							<textarea class="uni-input" placeholder="请输入" placeholder-style="color:#bbb" auto-height />
						</view>
					</view>
				</view>
				<!-- item over -->
			</view>
			<view class="list-space"></view>
			<view class="list">
				<!-- item start -->
				<view class="item">
					<view class="inner border-bottom">
						<text class="name">本月完成投资 (<text class="blue">万元</text>)</text>
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
						<text class="name">年初至今成投资 (<text class="blue">万元</text>)</text>
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
						<text class="name">完成比例</text>
						<view class="input">
							<input class="uni-input" placeholder="年初至今完成投资/年度计划投资" placeholder-style="color:#bbb" />
							<image class="keyboard-icon" src="/static/keyboard.png"></image>
						</view>
					</view>
				</view>
				<!-- item over -->
				<!-- item start -->
				<view class="item">
					<view class="inner border-bottom">
						<text class="name">工程至今累计完成投资 (<text class="blue">万元</text>)</text>
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
						<text class="name">完成比例</text>
						<view class="input">
							<input class="uni-input" placeholder="累计完成投资/总投资" placeholder-style="color:#bbb" />
							<image class="keyboard-icon" src="/static/keyboard.png"></image>
						</view>
					</view>
				</view>
				<!-- item over -->
			</view>
			<view class="list-title">
				<text class="title">进度影像 <text class="red">*注: 小于10M的附件</text></text>
			</view>
			<view class="list">
				<!-- item start -->
				<view class="item">
					<view class="inner border-bottom">
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
				<!-- item start -->
				<view class="item">
					<view class="inner border-bottom">
						<text class="name">项目进展情况</text>
						<navigator class="link" url="/pages/progress-report/progress-report-edit">文本录入</navigator>
					</view>
				</view>
				<!-- item over -->
			</view>
			<view class="list-space"></view>
			<view class="list">
				<!-- item start -->
				<view class="item">
					<view class="inner inner-direction border-bottom">
						<text class="name">政策处理进展情况</text>
						<view class="input">
							<textarea class="uni-input" placeholder="请输入" placeholder-style="color:#bbb" auto-height />
						</view>
					</view>
				</view>
				<!-- item over -->
				<!-- item start -->
				<view class="item">
					<view class="inner inner-direction border-bottom">
						<text class="name">主要存在问题</text>
						<view class="input">
							<textarea class="uni-input" placeholder="请输入" placeholder-style="color:#bbb" auto-height />
						</view>
					</view>
				</view>
				<!-- item over -->
				<!-- item start -->
				<view class="item">
					<view class="inner inner-direction border-bottom">
						<text class="name">工作建议</text>
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
		<view class="bottom-bar">
			<navigator class="bottom-bar-button" url="">
				<image src="../../static/icon-2.png"></image>
				<text>保存</text>
			</navigator>
			<navigator class="bottom-bar-button" url="">
				<image src="../../static/icon-3.png"></image>
				<text>提交</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date: currentDate,
			};
		},
		onShow() {
			document.title = '进度上报'
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
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
	
</style>
