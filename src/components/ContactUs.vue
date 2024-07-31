<template>

	<body style="height: 800px;width:1440px">
		<header-main />

		<p style="padding-top: 150px;"></p>
		<p style="color: #834C0B;padding-left: 30px;"> Связь </p>
		<div class="bigcontainer">
			<h1 style="text-align: center;">Свяжитесь с нами</h1>
			<p style="text-align: center;">Оставьте заявку,чтоб мы смогли связаться вами</p>
			<p style="padding-top: 20px;"></p>
			<div class="container_1">
				<p class="name container_2">Имя</p>

				<p class="numberr ">Номер телефона</p>

			</div>
			<div class="container_2">
				<div class="container_1">
					<input class="btm" type="text" placeholder="Имя...">
					<input class="numberr2 btm" type="text" placeholder="Номер телефона...">
				</div>
				<p>Отчество</p>
				<input class="btm" type="text" placeholder="Отчество...">
				<div class="container_1">
					<p>Фамилия</p>

					<input class="btn" type="button" value="Отправить">

				</div>
				<input class="btm" type="text" placeholder="Фамилия...">
			</div>
		</div>

		<footer>

		</footer>
	</body>
</template>

<script>
import headerMain from '../components/headerMain.vue'
export default {
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
	}
}
</script>
<style lang="scss" scoped>
.header {
	position: relative;

}

.h2 {
	padding-bottom: 10px;
	padding-left: 5px;
	position: fixed;
	left: 100px;

}

.join-button {
	cursor: pointer;
	border: 2px solid;
	border-color: currentColor;
	border-radius: 6px;
	padding: 9px 15px;
	color: #2c3e50;
	background-color: transparent;
}

.join-button:hover {
	color: #834C0B;
}

.button-view {
	border: 2px solid;
	border-color: currentColor;
	border-radius: 6px;
	padding: 9px 15px;
	color: #2c3e50;
	background-color: transparent;
}

.button-view:hover {
	cursor: pointer;
	color: #834C0B;
}

.button-view:active {
	color: #834C0B;
}

.header-footer {
	position: fixed;
	right: 0;
	top: 0;
	z-index: 1000;
	margin-top: 0px;
	height: 60px;
	width: 1440px;
	background-color: rgb(255, 255, 255);
	padding: 15px 0 14px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

}

.container {

	max-width: 1440px;
	max-height: 4000px;
	margin: 0 auto;
	padding: 0 25px;

}

.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;

}

.menu {

	display: flex;
}

.menu-item {
	padding-right: 30px;

}

.send {
	margin: 0.5em 0.5em;
	padding: 0.7em;
	border-radius: 99px;
	margin-right: 290px;
}

.send:active {
	color: #834C0B;
}

.send:hover {
	color: #834C0B;
}



.menu-link {
	color: #959393;
	font-size: 14px;
	line-height: 29px;
	font-family:
		Inika, 'Source Sans Pro';
	text-decoration: none;
}

.btm {
	padding: 0.6rem;
	border: 2px solid #834C0B;
}

* {
	font-family:
		Inika, 'Source Sans Pro';
}

:is(header, footer) a:hover {
	color: #834C0B;
}

:is(header, footer) a:active {
	text-decoration: underline;
}

.container_1 {
	display: flex;
	justify-content: space-between;
}



.numberr {
	margin-right: 258px;
}

.numberr2 {
	margin-right: 202px;
}

.bigcontainer {
	border: solid 3px #834C0B;
	padding: 30px;
	padding-bottom: 50px;
	width: auto;
	height: auto;
	margin-left: 200px;
	margin-right: 200px;
	box-shadow: 4px 4px 4px 4px #834d0b98;


}

.btn {
	margin-top: 20px;
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
	left: 33%;
	margin-right: 480px;

}

.btn:active {
	color: white;
	background: #2c3e50;
}

p {
	color: #4E4E4E;
	font-size: 16px;
}

.buttom {

	border: 1px solid #4E4E4E;
}

.container_2 {
	margin-left: 200px;
}
</style>
./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue