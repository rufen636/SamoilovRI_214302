<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
	<header-main />
	<p style="margin-top: 150px;"></p>
	<h2 style="padding-left: 40%;">Аналитика соискателей по опыту работы</h2>
	<div id="my-pie-chart-container" style="padding-left: 40%;">
		<div id="my-pie-chart"></div>

		<div id="legenda">
			<div class="entry">
				<div id="color-brown" class="entry-color"></div>
				<div class="entry-text">1 год</div>
			</div>
			<div class="entry">
				<div id="color-black" class="entry-color"></div>
				<div class="entry-text">2 года</div>
			</div>
			<div class="entry">
				<div id="color-blue" class="entry-color"></div>
				<div class="entry-text">3 года и более</div>
			</div>
		</div>
	</div>
	<p style="padding-left: 30px;padding-top: 30px;"></p>
	<button class="btn" @click="downloadPDF" style="margin-left: 40%;">Скачать PDF отчет</button>
</template>
<script>
import headerMain from '../components/headerMain.vue';
import axios from 'axios';

export default {
	components: {
		headerMain,
	},
	data() {
		return {
			data: [],
		};
	},
	mounted() {
		this.fetchData();
	},
	methods: {
		async fetchData() {
			try {
				const response = await axios.get('http://localhost:3000/api/experienceAnalytics');
				this.data = response.data;
				console.log(this.data);
				this.renderChart();
			} catch (error) {
				console.error('Ошибка при получении данных:', error);
			}
		},
		renderChart() {
			const total = this.data.reduce((sum, item) => sum + item.count, 0);
			const chart = document.getElementById('my-pie-chart');
			let startAngle = 0;
			let gradients = [];

			this.data.forEach(item => {
				const sliceAngle = (item.count / total) * 360;
				const color = this.getColor(item.experience);
				gradients.push(`${color} ${startAngle}deg ${startAngle + sliceAngle}deg`);
				startAngle += sliceAngle;
			});

			chart.style.background = `conic-gradient(${gradients.join(', ')})`;
		},
		getColor(experience) {
			switch (experience) {
				case 1:
					return 'brown';
				case 2:
					return 'green';
				case 3:
					return 'blue';
				default:
					return 'gray';
			}
		},
		downloadPDF() {
			window.location.href = 'http://localhost:3000/api/experienceAnalytics/download';
		}
	},

};
</script>
<style lang="scss" scoped>
body {
	background-color: silver;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

#my-pie-chart-container {
	display: flex;
	align-items: center;
}

#my-pie-chart {
	border-radius: 50%;
	width: 150px;
	height: 150px;
	background: conic-gradient(gray 0% 100%);
	/* Default background */
}

.btn {
	margin-top: 30px;
	margin-left: 60px;
	color: #2c3e50;
	position: relative;
	place-content: center;
	place-items: center;
	width: fit-content;
	border-radius: 99px;
	letter-spacing: 0.05em;
	border: 1px solid #2c3e50;
	text-decoration: none;
	text-transform: uppercase;
	margin-right: 10px;
	padding: 0.5rem 1.5rem;
	white-space: nowrap;
	font-weight: 700;
	outline: none;
	background: #fff;
	transition: all 0.22s;
}

.btn:active {
	color: white;
	background: #2c3e50;
}

#legenda {
	margin-left: 20px;
	background-color: white;
	padding: 5px;
}

.entry {
	display: flex;
	align-items: center;
}

.entry-color {
	height: 10px;
	width: 10px;
}

.entry-text {
	margin-left: 5px;
}

#color-brown {
	background-color: brown;
}

#color-black {
	background-color: green;
}

#color-blue {
	background-color: blue;
}
</style>
