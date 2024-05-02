import { createRouter, createWebHashHistory } from 'vue-router'
import Main from './components/Main.vue'
import ContactUs from './components/ContactUs.vue'
import Join from './components/Join.vue'
import HrBlog from './components/HrBlog.vue'
import Login from './components/Login.vue'
import FindTalent from './components/FindTalent.vue'
import Registration from './components/Registration.vue'
import loginApplicant from './components/loginApplicant.vue'
import loginCompany from './components/loginCompany.vue'
import profileApplicant from './components/profileApplicant'
import profileCompany from './components/profileCompany'
import analytics from './components/analytics.vue'

const routes = [
	{
		path: '/',
		component: Main
	}, {
		path: '/contact',
		component: ContactUs
	}, {
		path: '/join',
		component: Join
	}, {
		path: '/login',
		component: Login
	}, {
		path: '/talent',
		component: FindTalent
	}, {
		path: '/blog',
		component: HrBlog
	},
	{
		path: '/register',
		component: Registration
	}, {
		path: '/applicant',
		component: loginApplicant,
		name: loginApplicant,
	}, {
		path: '/company',
		component: loginCompany,
		name: loginCompany,
	}, {
		path: '/profilecompany',
		component: profileCompany,
	}, {
		path: '/profileapplicant',
		component: profileApplicant,
	},
	{
		path: '/analysis',
		component: analytics
	}
]

const router = createRouter({
	routes,
	history: createWebHashHistory()

})

export default router