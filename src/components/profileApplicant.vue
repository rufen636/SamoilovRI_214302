<template>
	<header-main />
	<p style="height: 100px;"></p>
	<div class="container">
		<div class="block-left">
			<div class="text-area">
				<h1>Профиль</h1>
				<ul type="none" class="ul1">
					<li style="left:0;" class="li1">Компания:</li>
					<li style="right: 0;" class="li1">value</li>
				</ul>
				<p style="height: 20px;"></p>
				<ul type="none" class="ul2">
					<li class="li2" style="left:0;">Деятельность:</li>
					<li class="li2" style="right: 0;">value</li>
				</ul>

			</div>
		</div>
		<div class="divider"></div>
		<div class="block-right">
			<div class="text-area"></div>
		</div>
	</div>
</template>

<script>
import headerMain from '../components/headerMain.vue'
export default {
	name: 'userCard',//св-во name для откладки
	data() {
		return {

		}
	},
	methods: {// без кэширования

	},
	computed: {//кэширование и  аргумент передать нельзя

	},
	watch: {//следят за изменением свойств(называются как и св-ва за которыми буде следить)


	},
	components: {
		headerMain
	},
}
</script>
<style lang="scss" scoped>
.container {
	position: relative;
	width: 100%;
	height: 100px;
	/* Просто для демонстрации, может быть любой */
}

.block-left,
.block-right {
	position: absolute;
	top: 0;
	bottom: 0;
	width: calc(50% - 1px);
	/* Вычисляем ширину блоков, вычитая ширину границы */

	/* Граница для разделителя */
	box-sizing: border-box;
	/* Учитываем границу в расчетах размеров */
}

.block-left {
	left: 0;
}

.block-right {
	right: 0;
}

.divider {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 3px;
	height: 600px;
	/* Ширина границы */
	background-color: black;
	/* Цвет границы */
	left: 50%;
	/* Положение границы в центре контейнера */
	transform: translateX(-50%);
	/* Смещаем границу на половину своей ширины влево, чтобы она оказалась точно по центру */
}

.text-area {
	margin-left: 30px;
}

.ul1 {
	position: relative;
	width: 100%;

}

.ul2 {
	position: relative;
	width: 100%;

}

.li1 {
	width: calc(50% - 1px);
	top: 0;
	bottom: 0;
	box-sizing: border-box;
	position: absolute;
}

.li2 {
	width: calc(50% - 1px);
	top: 0;
	bottom: 0;
	box-sizing: border-box;
	position: absolute;
}
</style>