<template>
  <div>
    <!-- Page Header -->
    <div class="page-header">
      <h1>Quản lý đơn hàng</h1>
    </div>

    <!-- Toolbar -->
    <div class="toolbar">
      <div class="toolbar-left">
        <div class="toolbar-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" v-model="searchQuery" placeholder="Tìm theo mã đơn, khách hàng..." />
        </div>
        <select class="toolbar-filter" v-model="filterStatus">
          <option value="">Tất cả trạng thái</option>
          <option value="pending">Chờ xử lý</option>
          <option value="shipping">Đang giao</option>
          <option value="completed">Hoàn thành</option>
          <option value="cancelled">Đã huỷ</option>
        </select>
      </div>
    </div>

    <!-- Table -->
    <div class="admin-card">
      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Mã đơn</th>
              <th>Khách hàng</th>
              <th>SĐT</th>
              <th>Ngày đặt</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in filteredOrders" :key="order.id">
              <td style="font-weight:700; color: var(--admin-text);">#{{ order.id }}</td>
              <td style="font-weight:500; color: var(--admin-text);">{{ order.customer }}</td>
              <td>{{ order.phone }}</td>
              <td>{{ order.date }}</td>
              <td style="font-weight:600; color: var(--admin-warning);">{{ order.total }}</td>
              <td>
                <span class="status-badge" :class="order.statusClass">{{ order.statusText }}</span>
              </td>
              <td>
                <div class="action-btns">
                  <button class="action-btn view" @click="openDetail(order)" title="Xem chi tiết">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="admin-pagination">
        <span class="pagination-info">Hiển thị {{ filteredOrders.length }} đơn hàng</span>
        <div class="pagination-btns">
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn">3</button>
        </div>
      </div>
    </div>

    <!-- Order Detail Modal -->
    <div class="admin-modal-overlay" v-if="showDetail" @click.self="closeDetail">
      <div class="admin-modal wide slide-up">
        <div class="admin-modal-header">
          <h3>Chi tiết đơn hàng #{{ selectedOrder?.id }}</h3>
          <button class="modal-close" @click="closeDetail">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div class="admin-modal-body" v-if="selectedOrder">
          <!-- Customer & Order Info -->
          <div class="order-detail-grid">
            <div class="order-info-card">
              <h4>👤 Thông tin khách hàng</h4>
              <div class="info-row">
                <span class="info-label">Họ tên:</span>
                <span class="info-value">{{ selectedOrder.customer }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Email:</span>
                <span class="info-value">{{ selectedOrder.email }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Điện thoại:</span>
                <span class="info-value">{{ selectedOrder.phone }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Địa chỉ:</span>
                <span class="info-value">{{ selectedOrder.address }}</span>
              </div>
            </div>
            <div class="order-info-card">
              <h4>📦 Thông tin đơn hàng</h4>
              <div class="info-row">
                <span class="info-label">Mã đơn:</span>
                <span class="info-value" style="font-weight:700;">#{{ selectedOrder.id }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Ngày đặt:</span>
                <span class="info-value">{{ selectedOrder.date }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Tổng tiền:</span>
                <span class="info-value" style="color: var(--admin-warning); font-weight:700;">{{ selectedOrder.total }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Trạng thái:</span>
                <span class="info-value">
                  <span class="status-badge" :class="selectedOrder.statusClass">{{ selectedOrder.statusText }}</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Payment Info -->
          <div style="margin-bottom: 20px;">
            <h4 style="font-size: 14px; font-weight: 600; color: var(--admin-text-muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">💳 Thông tin thanh toán</h4>
            <div class="admin-table-wrapper" style="background: var(--admin-bg); border: 1px solid var(--admin-border); border-radius: var(--admin-radius);">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Phương thức</th>
                    <th>Trạng thái</th>
                    <th>Mã giao dịch</th>
                    <th>Ngày thanh toán</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight: 600;">{{ selectedOrder.paymentMethod || 'COD' }}</td>
                    <td>
                      <span class="status-badge" :class="selectedOrder.paymentStatus === 'Đã thanh toán' ? 'completed' : 'pending'">
                        {{ selectedOrder.paymentStatus || 'Chưa thanh toán' }}
                      </span>
                    </td>
                    <td style="font-family: monospace;">{{ selectedOrder.transactionId || '---' }}</td>
                    <td>{{ selectedOrder.date }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Products in Order -->
          <div style="margin-bottom: 20px;">
            <h4 style="font-size: 14px; font-weight: 600; color: var(--admin-text-muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">🛒 Sản phẩm trong đơn</h4>
            <div class="admin-table-wrapper" style="background: var(--admin-bg); border: 1px solid var(--admin-border); border-radius: var(--admin-radius);">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Sản phẩm</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in selectedOrder.items" :key="item.name">
                    <td style="font-weight: 500; color: var(--admin-text);">{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.qty }}</td>
                    <td style="font-weight: 600; color: var(--admin-text);">{{ item.subtotal }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Update Status -->
          <div class="admin-form-group">
            <label>Cập nhật trạng thái đơn hàng</label>
            <select class="admin-select" v-model="selectedOrder.statusClass">
              <option value="pending">Chờ xử lý</option>
              <option value="shipping">Đang giao</option>
              <option value="completed">Hoàn thành</option>
              <option value="cancelled">Đã huỷ</option>
            </select>
          </div>
        </div>
        <div class="admin-modal-footer">
          <button class="admin-btn admin-btn-outline" @click="closeDetail">Đóng</button>
          <button class="admin-btn admin-btn-primary" @click="updateOrderStatus">Cập nhật trạng thái</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const filterStatus = ref('')
const showDetail = ref(false)
const selectedOrder = ref(null)

const orders = ref([
  {
    id: 'DH2401', customer: 'Nguyễn Văn An', email: 'an@gmail.com', phone: '0901234567',
    address: '123 Nguyễn Huệ, Q.1, TP.HCM', date: '12/02/2026', total: '1.250.000₫',
    statusClass: 'completed', statusText: 'Hoàn thành', paymentMethod: 'Momo', paymentStatus: 'Đã thanh toán', transactionId: 'MOMO12345678',
    items: [
      { name: 'Ốp lưng iPhone 15 Pro', price: '350.000₫', qty: 2, subtotal: '700.000₫' },
      { name: 'Cáp sạc Baseus 65W', price: '180.000₫', qty: 1, subtotal: '180.000₫' },
      { name: 'Kính cường lực iPhone', price: '150.000₫', qty: 1, subtotal: '150.000₫' }
    ]
  },
  {
    id: 'DH2402', customer: 'Trần Thị Bình', email: 'binh@gmail.com', phone: '0912345678',
    address: '456 Lê Lợi, Q.3, TP.HCM', date: '12/02/2026', total: '8.500.000₫',
    statusClass: 'shipping', statusText: 'Đang giao', paymentMethod: 'COD', paymentStatus: 'Chưa thanh toán', transactionId: '',
    items: [
      { name: 'Tai nghe Sony WH-1000XM5', price: '8.500.000₫', qty: 1, subtotal: '8.500.000₫' }
    ]
  },
  {
    id: 'DH2403', customer: 'Lê Hoàng Cường', email: 'cuong@gmail.com', phone: '0923456789',
    address: '789 Trần Hưng Đạo, Q.5, TP.HCM', date: '11/02/2026', total: '1.070.000₫',
    statusClass: 'pending', statusText: 'Chờ xử lý', paymentMethod: 'Banking', paymentStatus: 'Đã thanh toán', transactionId: 'VCB987654321',
    items: [
      { name: 'Pin dự phòng Anker 20000mAh', price: '650.000₫', qty: 1, subtotal: '650.000₫' },
      { name: 'Sạc nhanh GaN 65W', price: '420.000₫', qty: 1, subtotal: '420.000₫' }
    ]
  },
  {
    id: 'DH2404', customer: 'Phạm Minh Đức', email: 'duc@gmail.com', phone: '0934567890',
    address: '321 Võ Văn Tần, Q.3, TP.HCM', date: '11/02/2026', total: '720.000₫',
    statusClass: 'completed', statusText: 'Hoàn thành', paymentMethod: 'ZaloPay', paymentStatus: 'Đã thanh toán', transactionId: 'ZALO456123',
    items: [
      { name: 'Ốp lưng Samsung S24', price: '250.000₫', qty: 1, subtotal: '250.000₫' },
      { name: 'Cáp sạc USB-C', price: '180.000₫', qty: 1, subtotal: '180.000₫' },
      { name: 'Kính cường lực Samsung', price: '150.000₫', qty: 1, subtotal: '150.000₫' }
    ]
  },
  {
    id: 'DH2405', customer: 'Hoàng Thị Em', email: 'em@gmail.com', phone: '0945678901',
    address: '654 Hai Bà Trưng, Q.1, TP.HCM', date: '10/02/2026', total: '3.200.000₫',
    statusClass: 'cancelled', statusText: 'Đã huỷ', paymentMethod: 'COD', paymentStatus: 'Huỷ bỏ', transactionId: '',
    items: [
      { name: 'AirPods 4', price: '3.200.000₫', qty: 1, subtotal: '3.200.000₫' }
    ]
  },
  {
    id: 'DH2406', customer: 'Vũ Đình Phúc', email: 'phuc@gmail.com', phone: '0956789012',
    address: '987 CMT8, Q.10, TP.HCM', date: '09/02/2026', total: '470.000₫',
    statusClass: 'shipping', statusText: 'Đang giao', paymentMethod: 'COD', paymentStatus: 'Chưa thanh toán', transactionId: '',
    items: [
      { name: 'Giá đỡ Lamicall', price: '320.000₫', qty: 1, subtotal: '320.000₫' },
      { name: 'Kính cường lực', price: '150.000₫', qty: 1, subtotal: '150.000₫' }
    ]
  },
])

const filteredOrders = computed(() => {
  return orders.value.filter(o => {
    const matchSearch = o.customer.toLowerCase().includes(searchQuery.value.toLowerCase()) || o.id.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchStatus = !filterStatus.value || o.statusClass === filterStatus.value
    return matchSearch && matchStatus
  })
})

const openDetail = (order) => {
  selectedOrder.value = { ...order }
  showDetail.value = true
}

const closeDetail = () => {
  showDetail.value = false
  selectedOrder.value = null
}

const updateOrderStatus = () => {
  const statusMap = {
    pending: 'Chờ xử lý',
    shipping: 'Đang giao',
    completed: 'Hoàn thành',
    cancelled: 'Đã huỷ'
  }
  // Update in the list
  const idx = orders.value.findIndex(o => o.id === selectedOrder.value.id)
  if (idx !== -1) {
    orders.value[idx].statusClass = selectedOrder.value.statusClass
    orders.value[idx].statusText = statusMap[selectedOrder.value.statusClass]
  }
  showDetail.value = false
}
</script>
