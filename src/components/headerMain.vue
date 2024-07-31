<template>
	<header class="header">
		<div class="header-footer">
			<div class="container">
				<nav class="nav">
					<a class="logo">
						<img src="../assets/OMCah4J9tszZbXoGfnft5-transformed.webp" alt="логотип сайта" class="logo-img">
					</a>

					<router-link to="/" style="margin-top: -76px; color: #2c3e50;">
						<h2 class="h2">HR ScoutHub</h2>
					</router-link>
					<ul type="none" class="menu">
						<li class="menu-item">
							<router-link to='/' class="menu-link">Главная</router-link>
						</li>
						<li class="menu-item">
							<a @click="gotoFindT" class="menu-link">Найти Талант </a>
						</li>
						<li class="menu-item">
							<a @click="gotoHrB" class="menu-link">HR-Блог </a>
						</li>
						<li class="menu-item">
							<a @click="gotoAnalytics" class="menu-link">Аналитика </a>
						</li>
						<li class="menu-item">
							<!-- Условный рендеринг для показа кнопки входа/выхода -->
							<button v-if="!$store.state.isAuthenticated" class="button-view" style="margin-right: 30px;"
								@click="gotoRegister">Регистрация</button>
							<button v-if="!$store.state.isAuthenticated" class="join-button" @click="gotoLogin">Войти</button>
							<div v-else>
								<button class="button-view" @click="logout">Выход</button>
								<button class="button-view" style="margin-left: 30px;" @click="gotoProfile">Профиль</button>
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>
<script>


export default {
	data() {
		return {
			role: ''
		}
	},
	methods: {
		gotoLogin() {
			this.$router.push('/login')
		},
		gotoRegister() {
			this.$router.push('/register')
		},
		gotoProfile() {
			const role = this.$store.state.userRole;
			if (role === 'applicant') {
				this.$router.push('/profileapplicant');
			} else if (role === 'company') {
				this.$router.push('/profilecompany');
			} else {
				console.error('Ошибка при входе: неизвестная роль');
			}

		}, gotoFindT() {
			const role = this.$store.state.userRole;
			if (role === 'company') {
				this.$router.push('/talent');
			} else {
				alert("Ввойдите как компания")
			}
		}, gotoHrB() {
			const role = this.$store.state.userRole;
			if (role === 'applicant') {
				this.$router.push('/blog');
			} else {
				alert("Ввойдите как соискатель")
			}
		},
		gotoAnalytics() {
			const role = this.$store.state.userRole;
			if (role === 'company') {
				this.$router.push('/analysis');
			} else {
				alert("Ввойдите как компания")
			}
		},

		logout() {
			// Реализация выхода из системы (например, очистка токена)
			// После этого перенаправляем на страницу входа
			this.$router.push('/login');
			// Устанавливаем флаг isAuthenticated в false
			this.$store.commit('setIsAuthenticated', false);
			localStorage.setItem('isAuthenticated', false);
			this.$store.commit('resetUser');
			localStorage.removeItem('userRole');
			localStorage.removeItem('login');
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

@media (max-width: 590px) {
	.menu-link {
		font-size: 8px;
	}
}

@media(max-width: 590px) {
	.menu-item {
		padding-right: 6px;
	}
}

@media(max-width:590px) {
	.h2 {
		font-size: 16px;
		padding-top: 5px;
	}
}

@media (max-width: 850px) {
	.menu-link {
		font-size: 12px;
	}
}

@media(max-width: 850px) {
	.menu-item {
		padding-right: 10px;
	}
}

@media(max-width:850px) {
	.h2 {
		font-size: 20px;
		padding-top: 5px;
	}
}

@media(max-width: 850px) {
	.logo-img {
		width: 50px;
		height: 50px;
	}
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
