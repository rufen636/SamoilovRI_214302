<template>
	<header-main />
	<p style="height: 100px;"></p>
	<div v-if="isProfileComplete" class="container">
		<div class="block-left">
			<div class="text-area1">
				<h1>Профиль компании</h1>
				<ul type="none" class="ul1">
					<li style="left:0;" class="li1">Компания:</li>
					<li style="right: 0;" class="li1">{{ company.name_company }}</li>
				</ul>
				<p style="height: 20px;"></p>
				<div v-if="responses.length > 0">
					<ul type="none" class="ul2">
						<li style="left:0;" class="li1">
							Имя и номер телефона кандидата,
							который откликнулся:
							<ul v-for="response in responses" :key="response.id">
								<li>{{ response.first_name }}</li>
								<li>{{ response.number }}</li>
							</ul>
						</li>
					</ul>
				</div>
				<div v-else>Откликов нет</div>
			</div>
		</div>
		<div class="divider"></div>
		<div class="block-right">
			<div class="text-area1">
				<h1>Активные вакансии</h1>
				<div class="container">
					<div class="block-left">
						<div class="text-area">
							<div v-for="vacancy in vacancies" :key="vacancy.id">
								<h2>{{ vacancy.job_title }}</h2>
								<ul type="none" class="ul1">
									<li style="left:7px;" class="li1">Опыт: {{ vacancy.experience }} (лет)</li>
								</ul>
								<p style="height: 20px;"></p>
								<ul type="none" class="ul2">
									<li class="li2" style="left:7px;">{{ vacancy.activity }}</li>
								</ul>
								<p style="height: 20px;"></p>
								<ul type="none" class="ul2">
									<li class="li2" style="left:7px;">{{ vacancy.skills }} </li>
								</ul>
								<button class="btn" @click="deleteData(vacancy.id)">Удалить</button>
							</div>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<h1>Профиль не заполнен</h1>
		Перейдите на главную и нажмите на 'Присоединиться'
	</div>
</template>

<script>
import headerMain from '../components/headerMain.vue';
import axios from 'axios';

export default {
	name: 'userCard',
	data() {
		return {
			company: {},
			vacancies: [],
			responses: [],
			login: localStorage.getItem('login')
		}
	},
	computed: {
		isProfileComplete() {
			return this.company.name_company && this.company.activity && this.company.experience && this.company.skills;
		}
	},
	async mounted() {
		try {
			const login = localStorage.getItem('login');
			if (!login) {
				throw new Error('Логин не найден в localStorage');
			}
			const response = await axios.get('http://localhost:3000/api/companyTake', {
				params: { login }
			});
			this.company = response.data.company;
			this.vacancies = response.data.vacancies;
			this.responses = response.data.responses;
		} catch (error) {
			console.error('Ошибка при получении данных:', error.message);
			alert('Произошла ошибка при получении данных');
		}
	},
	methods: {
		async deleteData(vacancyId) {
			try {
				const login = localStorage.getItem('login');
				console.log('Deleting vacancy with ID:', vacancyId); // Debug log
				const response = await axios.post('http://localhost:3000/api/deletecomp', { login, vacancyId });
				if (response.status === 200) {
					this.vacancies = this.vacancies.filter(vacancy => vacancy.id !== vacancyId);
					alert('Вакансия успешно удалена');
				} else {
					alert('Ошибка при удалении вакансии');
				}
			} catch (error) {
				console.error('Ошибка при удалении вакансии:', error.message);
				alert('Ошибка при удалении вакансии');
			}
		}
	},
	components: {
		headerMain
	},
}
</script>
<style lang="scss" scoped>
.btn {
	margin-top: 100px;
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

.btn:hover {
	cursor: pointer;
	opacity: 0.8;
}

.btn:disabled {
	cursor: not-allowed;
	opacity: 1 !important;
	background: #eee !important;
	border-color: #ddd !important;
	color: #999 !important;
}

.btn:active {
	box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.all-text {
	width: 4000px;
}

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
	padding-left: 10px;
	padding-bottom: 25px;
	background-color: #F5EBE0;
	border: 2px solid rgba(0, 0, 0, 0.494);
	border-radius: 3rem;
}

@media(max-width: 850px) {
	.text-area {
		background-color: white;
		border: none;
		border-radius: none;
	}
}

.response {
	background-color: #487edc;
	border: 2px solid rgba(0, 0, 0, 0.494);
	border-radius: 3rem;
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

.text-area1 {
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

.text-area1 {
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