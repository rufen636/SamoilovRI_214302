<template>
	<header-main />
	<div class="container">
		<p style="color:#834C0B;">Присоединитесь </p>
		<p></p>
		<h1>Начните с нами работать</h1>
		<pre style="font-family:
		Inika, 'Source Sans Pro';">
У нас нет просто вакансий – у нас есть уникальные возможности для
тех, кто стремится к успеху и готов делиться своим профессионализмом
и энтузиазмом.
		</pre>
		<p></p>
		<h1>Заполните анкету</h1>
		<div class="">
			<p>Имя</p>
			<input v-model="first_name" class="btm" type="text" placeholder="Имя...">
			<p>Отчество</p>
			<input v-model="surname" class="btm" type="text" placeholder="Отчество...">
			<p>Фамилия</p>
			<input v-model="second_name" class="btm" type="text" placeholder="Фамилия..">
			<p>Опыт работы(в годах)</p>
			<input v-model="experience" class="btm" type="text" placeholder="Опыт работы...">
			<p>Скиллы</p>
			<textarea v-model="skills" cols="32" wrap="hard" minlength="50" id="big-btn" class="btm" type="text"
				placeholder="Скиллы..."></textarea>
			<p>Сфера желаемой работы</p>
			<textarea v-model="field_of_work" cols="32" wrap="hard" minlength="50" id="big-btn" class="btm" type="textarea"
				placeholder="Сфера..."></textarea>
			<p>Номер телефона</p>
			<input v-model="number" class="btm" type="text" placeholder="Номер телефона...">

		</div>
		<p></p>
		<input class="btn" type="button" value="Отправить" @click="applicant_save">

	</div>
	<img class="img" src="../assets/ABS-HR_Career-Path_Desktop_750x350.jpeg">
	<div class="decorate-block"></div>
	<div class="decorate-block" style="top: 500px;left:800px; height: 700px;"></div>
</template>

<script>
import axios from 'axios';
import HeaderMain from './headerMain.vue';
export default {
	data() {
		return {
			first_name: '',
			second_name: '',
			surname: '',
			experience: '',
			skills: '',
			field_of_work: '',
			number: '',
			login: ''
		}
	},
	methods: {
		async applicant_save() {
			// Получаем значения полей из формы
			const {
				first_name,
				second_name,
				surname,
				experience,
				skills,
				field_of_work,
				number,
			} = this;
			try {
				// Получаем логин из localStorage
				const login = localStorage.getItem('login');
				if (!login) {
					console.error('Ошибка: логин не найден в localStorage');
					alert('Произошла ошибка: логин не найден');
					return;
				}

				const data = {
					first_name,
					second_name,
					surname,
					experience,
					skills,
					field_of_work,
					number,
					login // Передаем логин из localStorage
				};

				// Отправляем данные на сервер
				const response = await axios.post('/api/applicant', data);

				if (response.status === 201) {
					console.log('Form successfully created');
					this.$router.push('/profileapplicant');
					alert('Данные успешно сохранены!');
				} else {
					console.error('Failed to create form');
				}
			} catch (error) {
				if (error.response && error.response.status === 400) {
					this.$router.push('/profileapplicant');
				} else {
					console.error('Ошибка при сохранении данных:', error);
					alert('Произошла ошибка при сохранении данных');
				}
			}
		}
	},
	computed: {//кэширование и  аргумент передать нельзя

	},
	watch: {//следят за изменением свойств(называются как и св-ва за которыми буде следить)


	},
	components: {
		HeaderMain
	},
}
</script>

<style lang="scss" scoped>
* {

	margin-left: 20px;
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

#big-btn {
	font-family:
		Inika, 'Source Sans Pro';
	padding-bottom: 8rem;
	padding-right: 0.6rem;
	font-size: 16px;

}

.btm {
	padding-left: 0.5rem;
	padding-top: 0.5rem;
	padding-right: 8.6rem;
	padding-bottom: 0.5rem;
	border: 2px solid #834C0B;
}

.img {
	height: 400px;
	width: 600px;
	position: absolute;
	left: 700px;
	top: 650px;
	border-radius: 4rem;
}

.container {
	margin-top: 150px;
}

.decorate-block {
	width: 100px;
	height: 1200px;
	background-color: rgba(128, 128, 128, 0.561);
	position: absolute;
	left: 1100px;
	top: 0;
	z-index: -1;
}
</style>
./headerLogin.vue./headerLogin.vue./headerLogin.vue./headerLogin.vue./headerLogin.vue./headerLogin.vue./headerLogin.vue./headerLogin.vue./headerLogin.vue