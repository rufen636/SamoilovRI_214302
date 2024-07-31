import { createStore } from 'vuex';

export default createStore({
	state: {
		isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
		userRole: localStorage.getItem('userRole') || null,
		login: localStorage.getItem('login') || null,
		applicantId: localStorage.getItem('applicant_id') || null,
		companyId: localStorage.getItem('company_id') || null
	},
	mutations: {
		setIsAuthenticated(state, value) {
			state.isAuthenticated = value;
		},
		setUserRole(state, role) {
			state.userRole = role;
			localStorage.setItem('userRole', role);
		},
		setLogin(state, login) { // Мутация для установки логина пользователя
			state.login = login;
			localStorage.setItem('login', login); // Сохраняем логин пользователя в localStorage
		},
		setApplicantId(state, applicantId) { // Мутация для установки applicant_id
			state.applicantId = applicantId;
			localStorage.setItem('applicant_id', applicantId); // Сохраняем applicant_id в localStorage
		},
		setCompanyId(state, companyId) { // Мутация для установки applicant_id
			state.companyId = companyId;
			localStorage.setItem('company_id', companyId); // Сохраняем applicant_id в localStorage
		},
		resetUser(state) {
			state.userRole = null;
			state.login = null;
			state.applicantId = null;
			localStorage.removeItem('userRole');
			localStorage.removeItem('login');
			localStorage.removeItem('applicant_id');
		},
	},
});
