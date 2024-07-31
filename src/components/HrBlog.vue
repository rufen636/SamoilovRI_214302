<template>
	<header-main />
	<p style="height: 100px;"></p>
	<div class="container">
		<div class="block" v-for="vacancy in vacancies" :key="vacancy.id">
			<div class="text-area">
				<h2 style="margin-left: 35px;">{{ vacancy.name_company }}</h2>
				<h3 style="margin-left: 35px;">{{ vacancy.job_title }}</h3>
				<ul type=" none" class="ul1">
					<li class="li1">Требуемый опыт: {{ vacancy.experience }}</li>
				</ul>
				<p style="height: 20px;"></p>
				<ul type="none" class="ul2">
					<li class="li2">{{ vacancy.activity }}</li>
				</ul>
				<p style="height: 20px;"></p>
				<ul type="none" class="ul2">
					<li class="li2">Требуемые скилы: {{ vacancy.skills }}</li>
				</ul>
				<button class="btn" @click="respondToVacancy(vacancy.id)">Откликнуться</button>
			</div>
			<p style="padding-top: 30px;"></p>
		</div>
	</div>
</template>

<script>
import headerMain from '../components/headerMain.vue';
import axios from 'axios';

export default {
	data() {
		return {
			vacancies: [],
		};
	},
	async mounted() {
		try {
			const response = await axios.get('http://localhost:3000/api/allCompanysData');
			this.vacancies = response.data;
		} catch (error) {
			console.error('Ошибка при получении данных:', error);
			alert('Произошла ошибка при получении данных');
		}
	},
	methods: {
		async respondToVacancy(companyId) {
			try {
				const applicantId = localStorage.getItem('applicant_id');
				if (!applicantId) {
					throw new Error('ID соискателя не найден в localStorage');
				}

				const response = await axios.post('http://localhost:3000/api/respond', {
					applicant_id: applicantId,
					company_id: companyId
				});

				if (response.status === 201) {
					alert('Отклик успешно отправлен');
				}
			} catch (error) {
				if (error.response && error.response.status === 400) {
					alert('Вы уже откликались на эту компанию');
				} else {
					console.error('Ошибка при отправке отклика:', error);
					alert('Произошла ошибка при отправке отклика');
				}
			}
		}
	},
	components: {
		headerMain,
	},
};
</script>

<style lang="scss" scoped>
.btn {
	margin-top: 100px;
	margin-left: 30px;
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
./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue./headerMain.vue