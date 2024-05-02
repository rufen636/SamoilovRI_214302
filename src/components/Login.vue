<template>
	<header-main />
	<div class="container">
		<h2 class="text-auth">Введите логин</h2>
		<input v-model="login" class="btm" type="text" placeholder="Логин..." />
		<h2 class="text-auth">Введите пароль</h2>
		<input v-model="password" class="btm" type="password" placeholder="Пароль..." />

		<input @click="loginUser" class="btn" type="button" value="Далее">
	</div>
</template>

<script>
import headerMain from '../components/headerMain.vue';
import axios from 'axios'; // Импорт библиотеки axios
export default {
	name: 'userCard',
	data() {
		return {
			login: '',
			password: '',
			role: ''
		};
	},
	methods: {
		async onLogin() {
			if (!this.validate()) return false

			const { login, password } = this
			this.reset()
			const response = await axios.post('/api/login', { login, password })
			const role = response.data.role // Предположим, что роль приходит в ответе от сервера

			if (role === 'applicant') {
				this.$router.push('/applicant')
			} else if (role === 'company') {
				this.$router.push('/company')
			}
		}

	},
	components: {
		headerMain,
	},
};
</script>
<style lang="scss" scoped>
.container {
	border: solid 3px #834C0B;
	box-shadow: 4px 4px 4px 4px #834d0b98;
	padding: 0 20px;
	width: 300px;
	height: 300px;
	margin-top: 160px;
	position: relative;
	left: 40%;

}

.btm {
	padding-left: 0.5rem;
	padding-top: 0.5rem;
	padding-right: 8.6rem;
	padding-bottom: 0.5rem;
	border: 2px solid #834C0B;
}

.text-auth {
	text-align: center;
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

}

.btn:active {
	color: white;
	background: #2c3e50;
}
</style>
