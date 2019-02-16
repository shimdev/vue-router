import Vue from 'vue'
import Router from 'vue-router'
import Student from '@/components/Student'
import Class from '@/components/Class'
import StudentForm from '@/components/StudentForm'
import ClassForm from '@/components/ClassForm'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/student',
			name: 'student',
			component: Student
		},
		{
			path: '/class',
			name: 'class',
			component: Class
		},
		{
			path: '/student-form',
			name: 'studentForm',
			component: StudentForm
		},
		{
			path: '/class-form',
			name: 'classForm',
			component: ClassForm
		}
	]
})