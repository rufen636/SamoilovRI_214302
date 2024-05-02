<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<header-main />

	<p style="margin-top: 150px;"></p>
	<h2 style="padding-left: 40%;">Вакансии по городам</h2>
	<div id="my-pie-chart-container" style="padding-left: 40%;">
		<div id="my-pie-chart"></div>

		<div id="legenda">
			<div class="entry">
				<div id="color-brown" class="entry-color"></div>
				<div class="entry-text">Минск</div>
			</div>
			<div class="entry">
				<div id="color-black" class="entry-color"></div>
				<div class="entry-text">Пинск</div>
			</div>
			<div class="entry">
				<div id="color-blue" class="entry-color"></div>
				<div class="entry-text">Гродно</div>
			</div>

		</div>
	</div>
</template>

<script>
import headerMain from '../components/headerMain.vue';

export default {

	components: {
		headerMain,
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
	background: conic-gradient(brown 0% 50%, black 0% 50%);
	border-radius: 50%;
	width: 150px;
	height: 150px;
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

#color-red {
	background-color: red;
}

#color-orange {
	background-color: orange;
}

#color-yellow {
	background-color: yellow;
}

#color-green {
	background-color: green;
}

#color-blue {
	background-color: blue;
}

#color-black {
	background-color: black;
}

#color-brown {
	background-color: brown;
}
</style>