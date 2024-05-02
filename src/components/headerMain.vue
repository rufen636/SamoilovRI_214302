<template>
	<header class="header">
		<div class="header-footer">
			<div class="container">
				<nav class="nav">
					<a class="logo">
						<img src="../assets/employee_care_wellbeing_selection_hire-64.webp" alt="логотип сайта" class="logo-img">
					</a>

					<router-link to="/" style="margin-top: -76px; color: #2c3e50;">
						<h2 class="h2">HR ScoutHub</h2>
					</router-link>
					<ul type="none" class="menu">
						<li class="menu-item">
							<router-link to='/' class="menu-link">Главная</router-link>
						</li>
						<li class="menu-item">
							<router-link to='/talent' class="menu-link">Найти Талант </router-link>
						</li>
						<li class="menu-item">
							<router-link to='/blog' class="menu-link">HR-Блог </router-link>
						</li>
						<li class="menu-item">
							<router-link to='/analysis' class="menu-link">Аналитика </router-link>
						</li>
						<li class="menu-item">
							<button class="button-view" @click="gotoRegister">Регистрация</button>
						</li>
						<li class="menu-item">
							<button class="join-button" @click="gotoLogin">Войти</button>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>

</template>

<script>


export default {
	methods: {
		gotoLogin() {
			this.$router.push('/login')
		},
		gotoRegister() {
			this.$router.push('/register')
		}
	}

}
</script>

<style lang="scss" scoped>
.join-button:hover {
	color: #834C0B;
}

.header {
	position: relative;

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

.container {

	max-width: 1440px;
	max-height: 4000px;
	margin: 0 auto;
	padding: 0 25px;

}

.info-block2 {
	display: flex;
	justify-content: space-between;
}

.nav2 {
	display: flex;

}





.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;

}

ul {
	list-style: none;
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

.h2 {
	padding-bottom: 10px;
	padding-left: 5px;
	position: fixed;
	left: 100px;

}

* {
	font-family:
		Inika, 'Source Sans Pro';
}

.logo {
	position: fixed;
	left: 30px;
}

:is(header, footer) a:hover {
	color: #834C0B;
}

:is(header, footer) a:active {
	text-decoration: underline;
}
</style>
