<template>
	<header-main />
	<p style="height: 100px;"></p>
	<div v-if="isProfileComplete" class="container">
		<div class="block-left">
			<div class="text-area1">
				<h1>Профиль</h1>
				<ul type="none" class="ul1">
					<li style="left:0;" class="li1">ФИО: </li>
					<li style="right: 0;" class="li1">{{ second_name }} {{ first_name }} {{ surname }}</li>
				</ul>
				<p style="height: 20px;"></p>
				<ul type="none" class="ul2">
					<li style="left:0;" class="li1">Номер телефона: </li>
					<li style="right: 0;" class="li1">{{ number }}</li>
				</ul>

			</div>
		</div>
		<div class="divider"></div>
		<div class="block-right">
			<div class="text-area1">
				<h1>Активные анкеты</h1>
				<div class="container">
					<div class="block-left">
						<div class="text-area">
							<h2>{{ second_name }} {{ first_name }} {{ surname }}</h2>
							<ul type="none" class="ul1">
								<li style="left:7px;" class="li1">Опыт: {{ experience }} (лет)</li>
							</ul>
							<p style="height: 20px;"></p>
							<ul type="none" class="ul2">
								<li class="li2" style="left:7px;">{{ field_of_work }}</li>
							</ul>
							<p style="height: 20px;"></p>
							<ul type="none" class="ul2">
								<li class="li2" style="left:7px;">{{ skills }}</li>
							</ul>
							<button class="btn" @click="deleteData">Удалить</button>
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
	name: 'userCard',//св-во name для откладки
	data() {
		return {
			first_name: '',
			second_name: '',
			surname: '',
			experience: '',
			skills: '',
			field_of_work: '',
			number: '',
			login: localStorage.getItem('login')
		}
	},
	computed: {
		isProfileComplete() {
			return this.first_name && this.second_name && this.surname && this.experience && this.skills && this.field_of_work && this.number;
		}
	}, async mounted() {
		try {
			const login = localStorage.getItem('login');
			if (!login) {
				throw new Error('Логин не найден в localStorage');
			}

			const response = await axios.post(`http://localhost:3000/api/applicantTake`, { login });
			const applicantData = response.data;

			this.first_name = applicantData.first_name;
			this.second_name = applicantData.second_name;
			this.surname = applicantData.surname;
			this.experience = applicantData.experience;
			this.skills = applicantData.skills;
			this.field_of_work = applicantData.field_of_work;
			this.number = applicantData.number;
			this.$store.commit('setApplicantId', response.data.id);
		} catch (error) {
			console.error('Ошибка при загрузке профиля:', error.message);
			// Обработка ошибки загрузки профиля
		}
	},
	methods: {
		async deleteData() {
			try {
				const login = localStorage.getItem('login');
				if (!login) {
					throw new Error('Логин не найден в localStorage');
				}
				const response = await axios.post('http://localhost:3000/api/deleteappl', { login });
				if (response.status === 200) {
					this.first_name = '';
					this.second_name = '';
					this.surname = '';
					this.field_of_work = '';
					this.experience = '';
					this.skills = '';
					alert('Профиль успешно удален');
				} else {
					alert('Ошибка при удалении профиля');
				}
			} catch (error) {
				console.error('Ошибка при удалении профиля:', error.message);
				alert('Ошибка при удалении профиля');
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

@media(max-width: 850px) {
	.text-area {
		background-color: white;
		border: none;
		border-radius: none;
	}
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