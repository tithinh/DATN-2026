<template>
  <div class="checkout-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="separator">/</span>
          <a href="/cart">Giỏ hàng</a>
          <span class="separator">/</span>
          <span class="current">Thanh toán</span>
        </nav>
        <h1 class="page-title">Thanh toán</h1>
        <p class="page-subtitle">Hoàn tất thông tin để đặt hàng</p>
      </div>
    </div>

    <!-- Checkout Steps -->
    <div class="checkout-content">
      <div class="container">
        <div class="checkout-steps">
          <div class="step-item completed">
            <span class="step-number">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span class="step-label">Giỏ hàng</span>
          </div>
          <div class="step-connector completed"></div>
          <div class="step-item active">
            <span class="step-number">2</span>
            <span class="step-label">Thanh toán</span>
          </div>
          <div class="step-connector"></div>
          <div class="step-item">
            <span class="step-number">3</span>
            <span class="step-label">Hoàn tất</span>
          </div>
        </div>

        <!-- Checkout Layout -->
        <div class="checkout-layout">
          <!-- Left Column: Forms -->
          <div class="checkout-form">
            <!-- Customer Info -->
            <div class="checkout-section">
              <h3 class="checkout-section-title">
                <span class="section-icon info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                Thông tin người nhận
              </h3>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Họ và tên <span class="required">*</span></label>
                  <input type="text" class="form-input" placeholder="Nguyễn Văn A" v-model="customerInfo.name" />
                </div>
                <div class="form-group">
                  <label class="form-label">Số điện thoại <span class="required">*</span></label>
                  <input type="tel" class="form-input" placeholder="0912 345 678" v-model="customerInfo.phone" />
                </div>
              </div>

              <div class="form-row full">
                <div class="form-group">
                  <label class="form-label">Email <span class="required">*</span></label>
                  <input type="email" class="form-input" placeholder="email@example.com" v-model="customerInfo.email" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Tỉnh / Thành phố <span class="required">*</span></label>
                  <select class="form-input form-select" v-model="customerInfo.city">
                    <option value="">Chọn tỉnh/thành phố</option>
                    <option value="hanoi">Hà Nội</option>
                    <option value="hcm">TP. Hồ Chí Minh</option>
                    <option value="danang">Đà Nẵng</option>
                    <option value="haiphong">Hải Phòng</option>
                    <option value="cantho">Cần Thơ</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Quận / Huyện <span class="required">*</span></label>
                  <select class="form-input form-select" v-model="customerInfo.district">
                    <option value="">Chọn quận/huyện</option>
                    <option value="q1">Quận 1</option>
                    <option value="q2">Quận 2</option>
                    <option value="q3">Quận 3</option>
                    <option value="bthanh">Bình Thạnh</option>
                    <option value="govap">Gò Vấp</option>
                  </select>
                </div>
              </div>

              <div class="form-row full">
                <div class="form-group">
                  <label class="form-label">Địa chỉ cụ thể <span class="required">*</span></label>
                  <input type="text" class="form-input" placeholder="Số nhà, tên đường, phường/xã" v-model="customerInfo.address" />
                </div>
              </div>
            </div>

            <!-- Shipping Method -->
            <div class="checkout-section">
              <h3 class="checkout-section-title">
                <span class="section-icon shipping-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </span>
                Phương thức vận chuyển
              </h3>

              <div class="shipping-methods">
                <label 
                  class="shipping-option" 
                  :class="{ selected: selectedShipping === 'standard' }"
                  @click="selectedShipping = 'standard'"
                >
                  <input type="radio" name="shipping" value="standard" v-model="selectedShipping" />
                  <span class="shipping-radio"></span>
                  <div class="shipping-details">
                    <div class="shipping-name">Giao hàng tiêu chuẩn</div>
                    <div class="shipping-desc">3-5 ngày làm việc</div>
                  </div>
                  <span class="shipping-price free">Miễn phí</span>
                </label>

                <label 
                  class="shipping-option" 
                  :class="{ selected: selectedShipping === 'express' }"
                  @click="selectedShipping = 'express'"
                >
                  <input type="radio" name="shipping" value="express" v-model="selectedShipping" />
                  <span class="shipping-radio"></span>
                  <div class="shipping-details">
                    <div class="shipping-name">Giao hàng nhanh</div>
                    <div class="shipping-desc">1-2 ngày làm việc</div>
                  </div>
                  <span class="shipping-price">30.000đ</span>
                </label>

                <label 
                  class="shipping-option" 
                  :class="{ selected: selectedShipping === 'same-day' }"
                  @click="selectedShipping = 'same-day'"
                >
                  <input type="radio" name="shipping" value="same-day" v-model="selectedShipping" />
                  <span class="shipping-radio"></span>
                  <div class="shipping-details">
                    <div class="shipping-name">Giao trong ngày</div>
                    <div class="shipping-desc">Nhận hàng trong 2-4 giờ (nội thành)</div>
                  </div>
                  <span class="shipping-price">50.000đ</span>
                </label>
              </div>
            </div>

            <!-- Payment Method -->
            <div class="checkout-section">
              <h3 class="checkout-section-title">
                <span class="section-icon payment-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                </span>
                Phương thức thanh toán
              </h3>

              <div class="payment-methods">
                <label 
                  class="payment-option" 
                  :class="{ selected: selectedPayment === 'cod' }"
                  @click="selectedPayment = 'cod'"
                >
                  <input type="radio" name="payment" value="cod" v-model="selectedPayment" />
                  <span class="payment-radio"></span>
                  <span class="payment-icon cod">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </span>
                  <div class="payment-details">
                    <div class="payment-name">Thanh toán khi nhận hàng (COD)</div>
                    <div class="payment-desc">Trả tiền mặt khi nhận được hàng</div>
                  </div>
                </label>

                <label 
                  class="payment-option" 
                  :class="{ selected: selectedPayment === 'bank' }"
                  @click="selectedPayment = 'bank'"
                >
                  <input type="radio" name="payment" value="bank" v-model="selectedPayment" />
                  <span class="payment-radio"></span>
                  <span class="payment-icon bank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>
                  </span>
                  <div class="payment-details">
                    <div class="payment-name">Chuyển khoản ngân hàng</div>
                    <div class="payment-desc">Chuyển khoản qua tài khoản ngân hàng</div>
                  </div>
                </label>

                <label 
                  class="payment-option" 
                  :class="{ selected: selectedPayment === 'momo' }"
                  @click="selectedPayment = 'momo'"
                >
                  <input type="radio" name="payment" value="momo" v-model="selectedPayment" />
                  <span class="payment-radio"></span>
                  <span class="payment-icon momo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  </span>
                  <div class="payment-details">
                    <div class="payment-name">Ví MoMo</div>
                    <div class="payment-desc">Thanh toán qua ví điện tử MoMo</div>
                  </div>
                </label>

                <label 
                  class="payment-option" 
                  :class="{ selected: selectedPayment === 'vnpay' }"
                  @click="selectedPayment = 'vnpay'"
                >
                  <input type="radio" name="payment" value="vnpay" v-model="selectedPayment" />
                  <span class="payment-radio"></span>
                  <span class="payment-icon vnpay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  </span>
                  <div class="payment-details">
                    <div class="payment-name">VNPay</div>
                    <div class="payment-desc">Thanh toán qua VNPay (ATM/Visa/Master)</div>
                  </div>
                </label>
              </div>
            </div>

            <!-- Order Note -->
            <div class="checkout-section">
              <h3 class="checkout-section-title">
                <span class="section-icon note-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </span>
                Ghi chú đơn hàng
              </h3>
              <textarea 
                class="form-textarea" 
                placeholder="Ghi chú thêm cho đơn hàng (không bắt buộc)... VD: Giao giờ hành chính, gọi trước 30 phút..."
                v-model="orderNote"
              ></textarea>
            </div>
          </div>

          <!-- Right Column: Order Summary -->
          <div class="order-summary-sidebar">
            <div class="summary-header">
              <h3>Đơn hàng của bạn</h3>
              <span class="items-count">{{ cartItems.length }} sản phẩm</span>
            </div>

            <!-- Order Items -->
            <div class="order-items">
              <div class="order-item" v-for="item in cartItems" :key="item.id">
                <img :src="item.image" :alt="item.name" class="order-item-image" />
                <div class="order-item-info">
                  <span class="order-item-name">{{ item.name }}</span>
                  <span class="order-item-variant">{{ item.variant }}</span>
                  <span class="order-item-qty">x{{ item.quantity }}</span>
                </div>
                <span class="order-item-price">{{ formatPrice(item.price * item.quantity) }}</span>
              </div>
            </div>

            <!-- Calculations -->
            <div class="summary-calculations">
              <div class="calc-row">
                <span>Tạm tính</span>
                <span class="calc-value">{{ formatPrice(subtotal) }}</span>
              </div>
              <div class="calc-row discount">
                <span>Giảm giá</span>
                <span class="calc-value">-{{ formatPrice(0) }}</span>
              </div>
              <div class="calc-row shipping">
                <span>Phí vận chuyển</span>
                <span class="calc-value" :class="{ free: shippingFee === 0 }">
                  {{ shippingFee === 0 ? 'Miễn phí' : formatPrice(shippingFee) }}
                </span>
              </div>
            </div>

            <!-- Total -->
            <div class="summary-total">
              <span class="total-label">Tổng cộng</span>
              <span class="total-value">{{ formatPrice(total) }}</span>
            </div>

            <!-- Place Order Button -->
            <button class="place-order-btn" @click="placeOrder">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Đặt hàng
            </button>

            <div class="order-secure-note">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Giao dịch được bảo mật SSL 256-bit
            </div>

            <router-link to="/cart" class="back-to-cart">← Quay lại giỏ hàng</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Customer Info
const customerInfo = ref({
  name: '',
  phone: '',
  email: '',
  city: '',
  district: '',
  address: ''
})

// Shipping & Payment
const selectedShipping = ref('standard')
const selectedPayment = ref('cod')
const orderNote = ref('')

// Cart Items (static demo data)
const cartItems = ref([
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
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const shippingFee = computed(() => {
  if (selectedShipping.value === 'express') return 30000
  if (selectedShipping.value === 'same-day') return 50000
  return 0
})

const total = computed(() => subtotal.value + shippingFee.value)

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

const placeOrder = () => {
  // Navigate to success page
  router.push({ name: 'OrderSuccess', query: { orderId: 'FT' + Date.now().toString().slice(-8) } })
}
</script>
