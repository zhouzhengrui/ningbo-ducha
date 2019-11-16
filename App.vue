<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f6f6f6;
	}
	image {
		display: block;
	}
	.border-top {
		position: relative;
		&:after {
			content: '';
			display: block;
			width: 100%;
			height: 1px;
			background-color: #eee;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			transform: scaleY(0.5);
		}
	}
	.border-bottom {
		position: relative;
		&:after {
			content: '';
			display: block;
			width: 100%;
			height: 1px;
			background-color: #eee;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			transform: scaleY(0.5);
		}
	}
	// tab
	.tab {
		font-size: 32rpx;
		background-color: #fff;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, .075);
		.wuc-tab-item {
			position: relative;
			line-height: 90rpx !important;
			padding: 0 0 !important;
			width: 220rpx;
			&.cur {
				border-bottom: none !important;
				&:before {
					content: '';
					display: block;
					width: 34rpx;
					height: 6rpx;
					background-color: #0081ff;
					border-radius: 4rpx;
					position: absolute;
					top: 70rpx;
					left: 50%;
					margin-left: -17rpx;
				}
			}
		}
	}
	.tab-swiper {
		flex: 1;
		overflow: hidden;
	}
	.tab-swiper-scroll-view {
		height: 100%;
	}
	.tab-multiple {
		font-size: 28rpx;
		background-color: #fff;
		box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, .075);
		.wuc-tab-item {
			position: relative;
			line-height: 90rpx !important;
			padding: 0 0 !important;
			width: 140rpx;
			&.cur {
				border-bottom: none !important;
				&:before {
					content: '';
					display: block;
					width: 34rpx;
					height: 6rpx;
					background-color: #0081ff;
					border-radius: 4rpx;
					position: absolute;
					top: 70rpx;
					left: 50%;
					margin-left: -17rpx;
				}
			}
		}
	}
	
	// list
	.list-title {
		padding: 20rpx 38rpx;
		font-size: 24rpx;
		.title {
			color: #999;
		}
		.red {
			color: #bf0304;
			margin-left: 10rpx;
		}
	}
	.list-space {
		height: 20rpx;
	}
	.list {
		font-size: 32rpx;
		.item {
			padding-left: 38rpx;
			background-color: #fff;
		}
		.inner {
			padding: 28rpx 38rpx 28rpx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			&.inner-direction {
				display: flex;
				align-items: flex-start;
				flex-direction: column;
				.input {
					width: 100%;
					margin-top: 10rpx;
				}
				.uni-input {
					text-align: left;
				}
			}
				
		}
		.name {
			color: #666;
			.blue {
				color: #0081ff;
			}
		}
		.link {
			color: #0081ff;
		}
		.input {
			flex: 1;
			display: flex;
			align-items: center;
			.uni-input {
				width: 100%;
				text-align: right;
			}
			.keyboard-icon {
				display: block;
				width: 28rpx;
				height: 28rpx;
				margin-left: 20rpx;
			}
		}
		.picker {
			display: flex;
			align-items: center;
			.arrow-down {
				display: block;
				width: 28rpx;
				height: 28rpx;
				margin-left: 20rpx;
			}
			.blue {
				color: #0081ff;
			}
			.uni-input {
				max-width: 375rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
	.image-update {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		.image-update-item {
			width: 150rpx;
			height: 150rpx;
			border: .5px solid #ccc;
			margin-right: 30rpx;
			position: relative;
			.close {
				display: block;
				width: 32rpx;
				height: 32rpx;
				position: absolute;
				top: -12rpx;
				right: -12rpx;
			}
		}
		.image-update-thumbnail {
			display: block;
			width: 150rpx;
			height: 150rpx;
		}
		.image-update-add {
			width: 150rpx;
			height: 150rpx;
			border: .5px solid #ccc;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			image {
				display: block;
				width: 46rpx;
				height: 46rpx;
			}
			text {
				color: #AAAAAA;
				font-size: 24rpx;
				margin-top: 10rpx;
			}
		}
	}
		
	// bottom-bar
	.bottom-bar-scroll-view {
		height: calc(100% - 90rpx);
	}
	.bottom-bar {
		width: 100%;
		height: 90rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		display: flex;
		align-content: stretch;
		&:after {
			content: '';
			display: block;
			width: 100%;
			height: 1px;
			background-color: #ccc;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			transform: scaleY(0.5);
		}
		.bottom-bar-button {
			flex-grow: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #fff;
			image {
				display: block;
				width: 44rpx;
				height: 44rpx;
				margin-right: 20rpx;
			}
			text {
				font-size: 32rpx;
				color: #666;
			}
		}
	}
</style>
