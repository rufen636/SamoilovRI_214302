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
		<h1>Заполните вакансию</h1>
		<div class="">
			<p>Какую компанию представляете?</p>
			<input v-model="name_company" class="btm" type="text" placeholder="Компания...">
			<p>Должность соискателя?</p>
			<input v-model="job_title" class="btm" type="text" placeholder="Должноссть...">
			<p>Чем занимается компания?</p>
			<textarea v-model="activity" cols="32" wrap="hard" minlength="50" id="big-btn" class="btm " type="text"
				placeholder="Деятельность..."></textarea>
			<p>Какой желаемый опыт сотрудника?(в годах)</p>
			<input v-model="experience" class="btm" type="text" placeholder="Опыт работы...">
			<p>Какие навыки?</p>
			<textarea v-model="skills" cols="32" wrap="hard" minlength="50" id="big-btn" class="btm" type="textarea"
				placeholder="Навыки..."></textarea>
		</div>
		<p></p>
		<input class="btn" type="button" value="Отправить" @click="company_save">

	</div>
	<img class="img" src="../assets/ABS-HR_Career-Path_Desktop_750x350.jpeg">
	<div class="decorate-block"></div>
	<div class="decorate-block" style="top: 500px;left:800px; height: 700px;"></div>

</template>
<script>
import headerMain from '../components/headerMain.vue';
import axios from 'axios';

export default {
	data() {
		return {
			name_company: '',
			activity: '',
			experience: '',
			skills: '',
			job_title: '',
			login: ''
		};
	},
	methods: {
		async company_save() {
			const { name_company, activity, experience, skills, job_title } = this;
			try {
				const login = localStorage.getItem('login');
				if (!login) {
					console.error('Ошибка: логин не найден в localStorage');
					alert('Произошла ошибка: логин не найден');
					return;
				}

				const data = { name_company, activity, experience, skills, login, job_title };

				const response = await axios.post('/api/company', data);

				if (response.status === 201) {
					console.log('Form successfully created');
					this.$router.push('/profilecompany');
					alert('Данные успешно сохранены!');
				} else {
					console.error('Failed to create form');
				}
			} catch (error) {
				if (error.response && error.response.status === 400) {
					alert('Вакансия уже существует');
					this.$router.push('/profilecompany');
				} else {
					console.error('Ошибка при сохранении данных:', error);
					alert('Произошла ошибка при сохранении данных');
				}
			}
		}
	},
	components: {
		headerMain
	}
};
</script>

<style lang="scss" scoped>
* {
	font-family:
		Inika, 'Source Sans Pro';
	color: #2c3e50;
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
	height: 1000px;
	background-color: rgba(128, 128, 128, 0.561);
	position: absolute;
	left: 1100px;
	top: 0;
	z-index: -1;
}
</style>
./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue