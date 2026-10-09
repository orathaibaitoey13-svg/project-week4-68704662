import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import('../views/Customer.vue')
  },
  {
    path: '/employee',
    name: 'employee',
    component: () => import('../views/Employee.vue')
  },
  {
    path: '/add_Contact',
    name: 'add_Contact',
    component: () => import('../views/Add_contact.vue')
  },
  {
    path: '/add_Customer',
    name: 'add_Customer',
    component: () => import('../views/Add_Customer.vue')
  },
  {
    path: '/add_employee',
    name: 'add_employee',
    component: () => import('../views/Add_employee.vue')
  },
  {
    path: '/customer_crud',
    name: 'customer_crud',
    component: () => import('../views/customer_crud.vue')
  },
  {
    path: '/employee_crud',
    name: 'employee_crud',
    component: () => import('../views/employee_crud.vue')
  },
  {
    path: '/Contact_crud',
    name: 'Contact_crud',
    component: () => import('../views/contact_crud.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
