<template>

	<body style="height: 800px;width:1400px">
		<header-main />
		<div class="firstblock">
			<img class="img-background" src="../assets/people-operations-scaled.jpeg">
			<h1 class="welcome text-background" style="color: rgba(255, 255, 255, 0.576);">
				Добро пожаловать HR ScoutHub
			</h1>
			<p></p>
			<pre class="info text-background">Ваш лучший партнер в оптимизации процесса найма и поиске
лучших специалистов для вашей организации.Общайтесь с
квалифицированными кандидатами,легко управляйте 
объявлениями о вакансиях и создайте 
идеальную команду уже сегодня.
			</pre>
			<div class="nav3">
				<div class="nav2">
					<div class="menu-link">
						<ul type="none" class="menu">
							<li class="menu-item">
								<button class="contact-button" @click="gotoContact">Связь</button>
							</li>
							<li class="menu-item">
								<button class="button-view" @click="gotoJoin">Присоединитесь</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<p></p>
		<h1 style="text-align: center;padding-top: 30px;">Доверено</h1>
		<p></p>
		<div style="text-align: center;">Ведущие организации полагаются на HR ScoutHub для эффективного и
			результативного
			привлечения и управления
			талантами.</div>
		<p style="height: 50px;"></p>
		<h1 style="padding-left: 30px;">Инновационные функции</h1>
		<pre style="padding-left: 30px;">Воспользуйтесь передовыми инструментами и услугами,
призванными революционизировать вашу стратегию
найма и улучшить управление человеческими
ресурсами.</pre>
		<p></p>
		<div class="info-block2-1">
			<div class="info-block2">
				<ul class="info-func">
					<li>
						<img class="logo-func1" src="../assets/16-1User_7-3-512.webp">
					</li>
					<li style="padding-left: 10px;padding-top: 6px;">
						Умный Фильтр
					</li>
				</ul>
			</div>
			<p></p>
			<pre style="padding-left: 70px;">Используйте нашу интеллектуальную систему фильтрации, 
чтобы быстро выявить кандидатов, соответствующих 
конкретным требованиям и критериям 
вакансии.</pre>
			<div class="info-block2">
				<ul class="info-func">
					<li>
						<img class="logo-func1" src="../assets/icon-eye-64.webp">
					</li>
					<li style="padding-left: 10px;padding-top: 6px;">
						Аналитика
					</li>
				</ul>
			</div>
			<pre style="padding-left: 70px;text-align:left;">Принимайте решения на основе данных с помощью нашей 
комплексной аналитической панели,которая 
отслеживает и сообщает о ваших 
показателях набора персонала.</pre>


			<div class="info-block2">
				<ul class="info-func">
					<li>
						<img class="logo-func1" src="../assets/1865294.png">
					</li>
					<li style="padding-left: 10px;padding-top: 6px;">
						Сотрудничество
					</li>
				</ul>
			</div>
			<pre style="padding-left: 70px;">Повысьте производительность команды с помощью нашей
оптимизированной коммуникационной платформы для 
синхронизации усилий по подбору персонала.</pre>
			<img class="img-func1"
				src="../assets/Female-human-resource-manager-shaking-hands-with-newly-hired-employees.jpeg">
			<img class="img-func2" src="../assets/hrgetjob.jpeg">
		</div>
		<div class="info-block3">
			<h1 style="text-align: center;padding-top: 40px;">Отзывы</h1>
			<p style="text-align: center;">Ваше стремление к совершенству подтверждается впечатляющей статистикой, которая
				подчеркивает успех нашей платформы и услуг.</p>
			<p style="height: 50px;"></p>
			<ul style="	display: flex;
	justify-content: space-between;padding-right: 35px;">
				<li>
					<div class="reviews">
						<h3>5000</h3>
						<p style="text-align: center;">Счастливых клиентов</p>
					</div>
				</li>
				<li>
					<div class="reviews">
						<h3>250</h3>
						<p style="text-align: center;">Должностных обязанностей</p>
					</div>
				</li>
				<li>
					<div class="reviews">
						<h3>10000</h3>
						<p style="text-align: center;">Кандидатов</p>
					</div>
				</li>
			</ul>

		</div>



		<footer class="footer">
			<img class="facebook" src="../assets/BW_Facebook_glyph_svg-64.webp">
			<img class="instagramm" src="../assets/38-instagram-2-64.webp">
			<pre style="padding-left: 1350px;">Больше</pre>
		</footer>
	</body>
</template>

<script>
import headerMain from '../components/headerMain.vue'
export default {
	name: 'userCard',//св-во name для откладки
	data() {
		return {
			text: "sgsdg",
			isCatVisible: true,
			imgFilters: {
				sepia: false,
				border: false,
				small: false
			}

		}
	},
	methods: {// без кэширования
		gotoContact() {
			this.$router.push('/contact')
		},
		gotoJoin() {
			this.$router.push('/join')
		}
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
.h2 {
	padding-bottom: 10px;
	padding-left: 5px;
	position: fixed;
	left: 100px;

}


.menu {

	display: flex;
}

.menu-item {
	padding-right: 30px;

}

.menu-link {
	color: #959393;
	font-size: 14px;
	line-height: 29px;
	font-family:
		Inika, 'Source Sans Pro';
	text-decoration: none;
}

.img-func1 {
	width: 450px;
	height: 300px;
	border-radius: 50px;
	margin-left: 850px;
	position: absolute;
	bottom: 320px;

}

.img-func2 {
	width: 450px;
	height: 300px;
	border-radius: 50px;
	margin-left: 700px;
	position: absolute;
	bottom: 5px;
}

h3 {
	text-align: center;
	padding-top: 40px;
}



.contact-button {
	border: 2px solid;
	border-color: currentColor;
	border-radius: 6px;
	padding: 9px 15px;
	color: rgb(178, 178, 178);
	background-color: transparent;
}


.contact-button:hover {
	cursor: pointer;
	color: #834C0B;
}

ul {
	list-style: none;
}

.menu {

	display: flex;
}

.button-view {
	border: 2px solid;
	border-color: currentColor;
	border-radius: 6px;
	padding: 9px 15px;
	color: rgb(178, 178, 178);
	background-color: transparent;
}

.button-view:hover {
	cursor: pointer;
	color: #834C0B;
}

.button-view:active {
	color: #834C0B;
}


.fristblock {
	position: relative;
}

.img-background {
	width: 1440px;
	height: 500px;
	filter: brightness(40%);
	position: absolute;
	left: 0;
	top: 0;
	z-index: -1;
}






.footer {
	height: 60px;
	width: 1423px;
	background-color: rgb(255, 255, 255);
	padding: 15px 0 14px;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	position: relative;
	top: 438px;
}

.header {
	position: relative;

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
	;
}



.info-block2 {
	display: flex;
	justify-content: space-between;
}

.nav2 {
	display: flex;

}


.reviews {
	width: 300px;
	height: 150px;
	background-color: rgb(255, 255, 255);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
}



.info-block2-1 {
	position: relative;
}

.info-block3 {
	background-color: #bfc4c924;
	width: 1440px;
	height: 540px;
	position: absolute;
	left: 0;
	z-index: -1;
}



* {
	font-family:
		Inika, 'Source Sans Pro';
}





.welcome {
	width: 280px;
	padding-left: 0;
	margin-top: 190px;
	margin-left: 30px;
	border-radius: 6px;
	font-family:
		Inika, 'Source Sans Pro';
}

.info {
	color: rgba(255, 255, 255, 0.576);
	border-radius: 6px;
	margin-left: 30px;
	margin-right: 950px;
	padding-left: 5px;
	font-family:
		Inika, 'Source Sans Pro';


}

:is(header, footer) a:hover {
	color: #834C0B;
}

:is(header, footer) a:active {
	text-decoration: underline;
}

.logo-func1 {
	width: 30px;
	height: 30px;
}

.facebook {
	height: 30px;
	width: 30px;
	padding-left: 5px;

}

.instagramm {
	height: 30px;
	width: 30px;
}

.logo {

	left: 50px;
}

.info-func {
	display: flex;
	justify-content: space-between;
	padding-left: 30px;
}
</style>
