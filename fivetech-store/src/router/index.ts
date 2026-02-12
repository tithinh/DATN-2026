import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

// Public routes
const publicRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/cilent/Home.vue'),
    meta: { title: 'Techfive - Phụ kiện điện thoại chính hãng' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/cilent/Login.vue'),
    meta: { title: 'Đăng nhập', guestOnly: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/cilent/Register.vue'),
    meta: { title: 'Đăng ký', guestOnly: true }
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: 'products', name: 'Products', component: () => import('@/views/cilent/Products.vue'), meta: { title: 'Tất cả sản phẩm' } },
      { path: 'product/:id/:slug?', name: 'ProductDetail', component: () => import('@/views/cilent/ProductDetail.vue'), props: true, meta: { title: 'Chi tiết sản phẩm' } },
      { path: 'cart', name: 'Cart', component: () => import('@/views/cilent/CartView.vue'), meta: { title: 'Giỏ hàng' } },
      { path: 'news', name: 'News', component: () => import('@/views/cilent/News.vue'), meta: { title: 'Tin tức & Bài viết' } },
      { path: 'contact', name: 'Contact', component: () => import('@/views/cilent/Contact.vue'), meta: { title: 'Liên hệ' } },
      { path: 'account', name: 'UserProfile', component: () => import('@/views/cilent/UserProfile.vue'), meta: { title: 'Tài khoản của tôi' } },
      { path: 'checkout', name: 'Checkout', component: () => import('@/views/cilent/CheckoutView.vue'), meta: { title: 'Thanh toán' } },
      { path: 'order-success', name: 'OrderSuccess', component: () => import('@/views/cilent/OrderSuccess.vue'), meta: { title: 'Đặt hàng thành công' } }
    ]
  }
]

// Admin routes
const adminRoutes = [
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('@/views/admin/AdminLoginView.vue'),
    meta: { title: 'Admin Login' }
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true, requiresAdmin: true },
    children: [
      { path: '', name: 'AdminDashboard', component: () => import('@/views/admin/AdminDashboardView.vue'), meta: { title: 'Dashboard' } },
      { path: 'products', name: 'AdminProducts', component: () => import('@/views/admin/AdminProductsView.vue'), meta: { title: 'Quản lý sản phẩm' } },
      { path: 'categories', name: 'AdminCategories', component: () => import('@/views/admin/AdminCategoriesView.vue'), meta: { title: 'Quản lý danh mục' } },
      { path: 'orders', name: 'AdminOrders', component: () => import('@/views/admin/AdminOrdersView.vue'), meta: { title: 'Quản lý đơn hàng' } },
      { path: 'users', name: 'AdminUsers', component: () => import('@/views/admin/AdminUsersView.vue'), meta: { title: 'Quản lý người dùng' } },
      { path: 'comments', name: 'AdminComments', component: () => import('@/views/admin/AdminCommentsView.vue'), meta: { title: 'Quản lý bình luận' } },
      { path: 'news', name: 'AdminNews', component: () => import('@/views/admin/AdminNewsView.vue'), meta: { title: 'Quản lý tin tức' } },
      { path: 'contacts', name: 'AdminContacts', component: () => import('@/views/admin/AdminContactsView.vue'), meta: { title: 'Quản lý liên hệ' } },
      { path: 'vouchers', name: 'AdminVouchers', component: () => import('@/views/admin/AdminVouchersView.vue'), meta: { title: 'Quản lý mã giảm giá' } },
    ]
  }
]

const notFoundRoute = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/views/cilent/NotFoundView.vue'),
  meta: { title: 'Không tìm thấy trang' }
}

const routes = [...publicRoutes, ...adminRoutes, notFoundRoute]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router