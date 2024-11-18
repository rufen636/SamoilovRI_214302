<template>
  <header-main />
  <p style="height: 100px;"></p>
  
  <div v-if="isProfileComplete" class="container">
    <!-- Блок с данными компании -->
    <div class="block-left">
      <div class="text-area1">
        <h1>Профиль компании</h1>
        <ul type="none" class="ul1">
          <li style="left:0;" class="li1">Компания:</li>
          <li style="right: 0;" class="li1">{{ company.name_company }}</li>
        </ul>
        <p style="height: 20px;"></p>

        <!-- Вывод откликов -->
        <div v-if="responses.length > 0">
          <ul type="none" class="ul2">
            <li style="left:0;" class="li1">
              Имя и номер телефона кандидата, который откликнулся:
              <ul v-for="response in responses" :key="response.id">
                <li>{{ response.firstName }} {{ response.lastName }}</li>
                <li>{{ response.number }}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div v-else>Откликов нет</div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Блок с активными вакансиями -->
    <div class="block-right">
      <div class="text-area1">
        <h1>Активные вакансии</h1>
        <div class="container">
          <div class="block-left">
            <div class="text-area">
              <div v-for="vacancy in vacancies" :key="vacancy.id">
                <h2>{{ vacancy.jobTitle }}</h2>
                <ul type="none" class="ul1">
                  <li style="left:7px;" class="li1">Опыт: {{ vacancy.experience }} (лет)</li>
                </ul>
                <p style="height: 20px;"></p>
                <ul type="none" class="ul2">
                  <li class="li2" style="left:7px;">{{ vacancy.activity }}</li>
                </ul>
                <p style="height: 20px;"></p>
                <ul type="none" class="ul2">
                  <li class="li2" style="left:7px;">{{ vacancy.skills }}</li>
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

  <!-- Когда профиль не заполнен -->
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
      vacancies: [], // Здесь будут вакансии
      responses: [], // Здесь будут отклики
      login: localStorage.getItem('login') || '' // Получаем логин из localStorage
    }
  },
  computed: {
    isProfileComplete() {
      // Проверяем, заполнен ли профиль
      return (
        this.company.name_company &&
        this.company.activity &&
        this.company.experience &&
        this.company.skills
      );
    }
  },
  async mounted() {
    try {
      const login = this.login;
      if (!login) {
        throw new Error('Логин не найден в localStorage');
      }

      console.log('Логин перед отправкой:', login);

      // Отправляем запрос на сервер с объектом
      const response = await axios.post('http://localhost:8000/api/companyTake', { login });

      console.log('Полученные данные:', response.data); // Логирование для проверки данных

      // Проверка структуры данных
      if (response.data) {
        // Изменяем структуру данных
        this.company = {
          name_company: response.data.company.name_company || '', // Привязываем поля из ответа
          activity: response.data.company.activity || '',
          experience: response.data.company.experience || '',
          skills: response.data.company.skills || ''
        };

        // Вакансии и отклики
        this.vacancies = response.data.vacancies || [];
        this.responses = response.data.responses || [];

        console.log('Данные компании:', this.company);
        console.log('Вакансии:', this.vacancies); // Логирование вакансий для проверки
        console.log('Отклики:', this.responses); // Логирование откликов для проверки
      } else {
        console.error('Данные компании отсутствуют или имеют неверный формат.');
      }
    } catch (error) {
      // Обработка ошибок
      console.error('Ошибка при получении данных:', error.response ? error.response.data : error.message);
      alert('Произошла ошибка при получении данных: ' + (error.response ? error.response.data : error.message));
    }
  },
  methods: {
    async deleteData(id) {
      try {
        const login = this.login;
        if (!login || !id) {
          throw new Error('Логин или ID вакансии не могут быть null');
        }

        console.log('Login:', login); // Логирование для проверки
        console.log('Deleting vacancy with ID:', typeof(vacancyId)); // Логирование удаления
				const response1 = await axios.post('http://localhost:8000/api/companyTake', { login });
				console.log('Полученные данные:', response1.data.vacancies[id-1].id);
				id = response1.data.vacancies[id-1].id;
        const response = await axios.post('http://localhost:8000/api/deletecomp', { id }).then(response => console.log(response.data))
				.catch(error => console.error(error));

				console.log(id);

        if (response.status === 200) {
          this.vacancies = this.vacancies.filter((vacancy) => vacancy.id !== id);
          alert('Вакансия успешно удалена');
        } else {
          alert('Ошибка при удалении вакансии');
        }
      } catch (error) {
        console.error('Ошибка при удалении вакансии:', error.response ? error.response.data : error.message);
        alert('Ошибка при удалении вакансии: ' + (error.response ? error.response.data : error.message));
      }
    }
  },
  components: {
    headerMain
  }
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