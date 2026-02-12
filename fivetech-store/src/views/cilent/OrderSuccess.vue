<template>
  <div class="checkout-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="separator">/</span>
          <span class="current">Đặt hàng thành công</span>
        </nav>
        <h1 class="page-title">Đặt hàng thành công</h1>
        <p class="page-subtitle">Cảm ơn bạn đã mua hàng tại FiveTech</p>
      </div>
    </div>

    <div class="order-success-page">
      <div class="container">
        <!-- Success Hero -->
        <div class="success-hero">
          <div class="success-checkmark">
            <div class="checkmark-circle">
              <svg class="checkmark-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <!-- Confetti particles -->
            <div class="success-particles">
              <span class="particle"></span>
              <span class="particle"></span>
              <span class="particle"></span>
              <span class="particle"></span>
              <span class="particle"></span>
              <span class="particle"></span>
              <span class="particle"></span>
              <span class="particle"></span>
            </div>
          </div>
          <h2 class="success-title">Đặt hàng thành công! 🎉</h2>
          <p class="success-subtitle">
            Đơn hàng của bạn đã được xác nhận. Chúng tôi sẽ xử lý và giao hàng trong thời gian sớm nhất.
          </p>
          <div class="order-id-display">
            <span class="order-id-label">Mã đơn hàng:</span>
            <span class="order-id-value">{{ orderId }}</span>
          </div>
        </div>

        <!-- Order Tracking -->
        <div class="order-tracking-section">
          <h3 class="tracking-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Theo dõi đơn hàng
          </h3>

          <!-- Timeline Tracker -->
          <div class="order-timeline">
            <div class="timeline-line">
              <div class="timeline-progress" :style="{ width: progressWidth }"></div>
            </div>

            <div 
              class="timeline-step" 
              v-for="(step, index) in trackingSteps" 
              :key="index"
              :class="step.status"
            >
              <div class="timeline-dot">
                <svg v-if="step.status === 'completed'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <component v-else :is="'span'" v-html="step.icon"></component>
              </div>
              <div class="timeline-label">{{ step.label }}</div>
              <div class="timeline-time" v-if="step.time">{{ step.time }}</div>
            </div>
          </div>

          <!-- Order Details Grid -->
          <div class="order-details-grid">
            <!-- Shipping Info -->
            <div class="detail-card">
              <h4 class="detail-card-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                Thông tin giao hàng
              </h4>
              <div class="detail-card-content">
                <div class="detail-row">
                  <span class="detail-label">Người nhận</span>
                  <span class="detail-value">Nguyễn Văn A</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Số điện thoại</span>
                  <span class="detail-value">0912 345 678</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Địa chỉ</span>
                  <span class="detail-value">123 Nguyễn Huệ, Q.1, TP.HCM</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Vận chuyển</span>
                  <span class="detail-value">Giao hàng tiêu chuẩn</span>
                </div>
              </div>
            </div>

            <!-- Payment Info -->
            <div class="detail-card">
              <h4 class="detail-card-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                Thông tin thanh toán
              </h4>
              <div class="detail-card-content">
                <div class="detail-row">
                  <span class="detail-label">Phương thức</span>
                  <span class="detail-value">Thanh toán khi nhận hàng (COD)</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Trạng thái</span>
                  <span class="detail-value success">Chờ thu tiền</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Tạm tính</span>
                  <span class="detail-value">{{ formatPrice(subtotal) }}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Phí vận chuyển</span>
                  <span class="detail-value success">Miễn phí</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Tổng cộng</span>
                  <span class="detail-value highlight">{{ formatPrice(subtotal) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Order Products -->
          <div class="order-products-section">
            <h4 class="order-products-title">Sản phẩm đã đặt ({{ orderItems.length }})</h4>
            <div class="order-product-list">
              <div class="order-product-item" v-for="item in orderItems" :key="item.id">
                <img :src="item.image" :alt="item.name" class="order-product-img" />
                <div class="order-product-info">
                  <div class="order-product-name">{{ item.name }}</div>
                  <div class="order-product-variant">Phân loại: {{ item.variant }}</div>
                  <div class="order-product-qty">Số lượng: {{ item.quantity }}</div>
                </div>
                <div class="order-product-price">{{ formatPrice(item.price * item.quantity) }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Email Notification -->
        <div class="email-notification">
          <div class="email-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div class="email-text">
            <strong>Xác nhận đơn hàng đã được gửi qua email</strong>
            Chi tiết đơn hàng và thông tin theo dõi đã được gửi đến email email@example.com
          </div>
        </div>

        <!-- Actions -->
        <div class="success-actions">
          <router-link to="/account?active=orders" class="btn-track-order">

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Theo dõi đơn hàng
          </router-link>
          <router-link to="/products" class="btn-continue-shopping">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            Tiếp tục mua sắm
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const orderId = computed(() => route.query.orderId || 'FT20260212')

// Order Items (static demo)
const orderItems = ref([
  {
    id: 1,
    name: "Ốp lưng iPhone 15 Pro Max MagSafe Premium",
    variant: "Đen",
    price: 299000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Củ sạc nhanh 65W GaN USB-C",
    variant: "Trắng",
    price: 450000,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth Pro ANC",
    variant: "Trắng",
    price: 1290000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=150&h=150&fit=crop"
  }
])

const subtotal = computed(() => {
  return orderItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

// Tracking Steps
const trackingSteps = ref([
  {
    label: 'Đã đặt hàng',
    status: 'completed',
    time: '19:46 - 12/02',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'
  },
  {
    label: 'Xác nhận',
    status: 'current',
    time: 'Đang xử lý',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  },
  {
    label: 'Đang giao',
    status: 'pending',
    time: '',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'
  },
  {
    label: 'Đã giao',
    status: 'pending',
    time: '',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
  }
])

const progressWidth = computed(() => {
  const completedSteps = trackingSteps.value.filter(s => s.status === 'completed').length
  const currentSteps = trackingSteps.value.filter(s => s.status === 'current').length
  const totalSteps = trackingSteps.value.length - 1
  const progress = (completedSteps + currentSteps * 0.5) / totalSteps * 100
  return progress + '%'
})
</script>
