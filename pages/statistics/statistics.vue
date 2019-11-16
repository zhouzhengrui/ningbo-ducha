<template>
	<view class="container">
		<!-- tab start -->
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange" tabClass="tab" class="text-center"></wuc-tab>
		<swiper :current="TabCur" duration="300" @change="swiperChange" class="tab-swiper">
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="list-space"></view>
					<view class="charts-box">
						<view class="charts" id="myChart"></view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view class="tab-swiper-scroll-view" scroll-y>
					<view class="list-space"></view>
					<view class="charts-box">
						<view class="charts" id="myChart2"></view>
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
					name: '新建'
				}, {
					name: '续建'
				}],
			};
		},
		onShow() {
			document.title = '汇总统计'
		},
		mounted(){
		    this.myCharts();
		},
		methods: {
			myCharts(){
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				myChart.setOption({
					color: ['#0081ff', '#f93c02', '#999999'],
					tooltip: {
						trigger: 'axis',
						position: function(point, params, dom, rect, size){
						    return ['20%',point[1]];
						},
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['已开工', '完工数', '计划数']
					},
					grid: {
						top: '40',
						left: '20',
						right: '20',
						bottom: '40',
						containLabel: true
					},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.01]
					},
					yAxis: {
						type: 'category',
						boundaryGap: [10, 0.01],
						data: ['医疗卫生','交通运输','环保整治','水利设施','教育事业']
					},
					series: [
						{
							name: '已开工',
							type: 'bar',
							barGap: '50%',
							barCategoryGap:'50%',
							label: {
								normal: {
									show: true,
									position: 'right'
								}
							},
							data: [3, 7, 3, 3, 3]
						},
						{
							name: '完工数',
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'right'
								}
							},
							data: [1, 3, 1, 5, 1]
						},
						{
							name: '计划数',
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'right'
								}
							},
							data: [6, 6, 6, 4, 8]
						}
					]
				});
				let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
				myChart2.setOption({
					color: ['#0081ff', '#f93c02', '#999999'],
					tooltip: {
						trigger: 'axis',
						position: function(point, params, dom, rect, size){
						    return ['20%',point[1]];
						},
						axisPointer: {
							type: 'shadow'
						}
					},
					legend: {
						data: ['已开工', '完工数', '计划数']
					},
					grid: {
						top: '40',
						left: '20',
						right: '20',
						bottom: '40',
						containLabel: true
					},
					xAxis: {
						type: 'value',
						boundaryGap: [0, 0.01]
					},
					yAxis: {
						type: 'category',
						boundaryGap: [10, 0.01],
						data: ['医疗卫生','交通运输','环保整治','水利设施','教育事业']
					},
					series: [
						{
							name: '已开工',
							type: 'bar',
							barGap: '50%',
							barCategoryGap:'50%',
							label: {
								normal: {
									show: true,
									position: 'right'
								}
							},
							data: [3, 7, 3, 3, 3]
						},
						{
							name: '完工数',
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'right'
								}
							},
							data: [1, 3, 1, 5, 1]
						},
						{
							name: '计划数',
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'right'
								}
							},
							data: [6, 6, 6, 4, 8]
						}
					]
				});
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
	.charts-box {
		padding-top: 30rpx;
		background-color: #FFFFFF;
	}
	.charts{
		width: 100%;
		height:750rpx;
	}
</style>
