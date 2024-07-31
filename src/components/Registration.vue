<template>
	<header-main />

	<div class="container">
		<h2 class="text-auth">Введите логин</h2>
		<input v-model="login" class="btm" type="text" placeholder="Логин..." />
		<h2 class="text-auth">Введите пароль</h2>
		<input v-model="password" class="btm" type="password" placeholder="Пароль..." />
		<h2 class="text-auth">Повторите пароль</h2>
		<input v-model="confirmPassword" class="btm" type="password" placeholder="Снова пароль)" />
		<h2 class="text-auth">Цель создания аккаунта</h2>
		<div class="container2">
			<h3 class="text-checkbox">Работадатель</h3>
			<input type="checkbox" v-model="selectedRoles.company">
		</div>
		<div class="container2">
			<h3 class="text-checkbox">Соискатель</h3>
			<input type="checkbox" v-model="selectedRoles.applicant">
		</div>

		<input class="btn" type="button" value="Далее" @click="submitForm" :disabled="!canCreate">
	</div>
</template>

<script>
import headerMain from '../components/headerMain.vue';
import axios from 'axios';

export default {
	name: 'userCard',
	data() {
		return {
			login: '',
			password: '',
			confirmPassword: '',
			selectedRoles: { applicant: false, company: false },
		};
	},
	computed: {
		canCreate() {
			return this.login.trim() && this.password.trim() && this.confirmPassword.trim();
		}
	},
	methods: {
		validate() {
			if (this.login.length < 4) {
				alert('Логин должен содержать не менее 4 символов');
				return false;
			}
			if (this.password.length < 7) {
				alert('Пароль должен содержать не менее 7 символов');
				return false;
			}
			if (this.password !== this.confirmPassword) {
				alert('Пароли не совпадают');
				return false;
			}
			return true;
		},
		async submitForm() {
			if (!this.validate()) return;

			try {
				const selectedRoles = Object.keys(this.selectedRoles).filter(role => this.selectedRoles[role]);
				const response = await axios.post('http://localhost:3000/api/register', {
					login: this.login,
					password: this.password,
					roles: selectedRoles
				});

				if (response.status === 201) {
					console.log('User successfully created');
					this.$router.push('/login');
				} else {
					console.error('Failed to create user');
				}
			} catch (error) {
				console.error('Error creating user:', error);
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
	height: 580px;
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

.text-checkbox {
	float: left;
	display: block;
}

.check-box {
	float: left;
	display: block;

}

.container2 {
	display: flex;
}
</style>
./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue