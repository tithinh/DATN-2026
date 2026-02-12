<template>
  <div class="user-profile-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="separator">/</span>
          <span class="current">Tài khoản của tôi</span>
        </nav>
        <h1 class="page-title">Tài khoản của tôi</h1>
        <p class="page-subtitle">Quản lý thông tin cá nhân và theo dõi đơn hàng</p>
      </div>
    </div>

    <!-- Main Content -->
    <section class="profile-section">
      <div class="container">
        <div class="profile-layout">
          <!-- Sidebar Navigation -->
          <aside class="profile-sidebar">
            <div class="user-avatar-card">
              <div class="avatar-wrapper">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Avatar" class="avatar-image" />
                <button class="avatar-edit-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                </button>
              </div>
              <h3 class="user-name">Nguyễn Văn An</h3>
              <p class="user-email">nguyenvanan@email.com</p>
              <span class="member-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                Thành viên VIP
              </span>
            </div>
            
            <nav class="sidebar-nav">
              <button 
                v-for="tab in tabs" 
                :key="tab.id" 
                class="nav-item"
                :class="{ active: activeTab === tab.id }"
                @click="activeTab = tab.id"
              >
                <span class="nav-icon" v-html="tab.icon"></span>
                <span class="nav-text">{{ tab.label }}</span>
                <span v-if="tab.badge" class="nav-badge">{{ tab.badge }}</span>
              </button>
            </nav>

            <button class="logout-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
              Đăng xuất
            </button>
          </aside>

          <!-- Main Content Area -->
          <main class="profile-content">
            <!-- Personal Info Tab -->
            <div v-if="activeTab === 'personal'" class="tab-panel">
              <div class="panel-header">
                <h2 class="panel-title">Thông tin cá nhân</h2>
                <p class="panel-desc">Cập nhật thông tin để bảo mật tài khoản và nhận ưu đãi</p>
              </div>

              <div class="info-cards-grid">
                <!-- Basic Info Card -->
                <div class="info-card">
                  <div class="card-header">
                    <span class="card-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                    </span>
                    <h3>Thông tin cơ bản</h3>
                    <button class="edit-btn">Chỉnh sửa</button>
                  </div>
                  <div class="card-body">
                    <div class="info-row">
                      <span class="label">Họ và tên</span>
                      <span class="value">Nguyễn Văn An</span>
                    </div>
                    <div class="info-row">
                      <span class="label">Ngày sinh</span>
                      <span class="value">15/08/1995</span>
                    </div>
                    <div class="info-row">
                      <span class="label">Giới tính</span>
                      <span class="value">Nam</span>
                    </div>
                  </div>
                </div>

                <!-- Contact Info Card -->
                <div class="info-card">
                  <div class="card-header">
                    <span class="card-icon contact">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </span>
                    <h3>Thông tin liên hệ</h3>
                    <button class="edit-btn">Chỉnh sửa</button>
                  </div>
                  <div class="card-body">
                    <div class="info-row">
                      <span class="label">Email</span>
                      <span class="value">nguyenvanan@email.com</span>
                    </div>
                    <div class="info-row">
                      <span class="label">Số điện thoại</span>
                      <span class="value">0912 345 678</span>
                    </div>
                  </div>
                </div>

                <!-- Address Card -->
                <div class="info-card full-width">
                  <div class="card-header">
                    <span class="card-icon address">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    <h3>Địa chỉ giao hàng</h3>
                    <button class="edit-btn">Thêm địa chỉ</button>
                  </div>
                  <div class="card-body">
                    <div class="address-list">
                      <div class="address-item default">
                        <div class="address-badge">Mặc định</div>
                        <div class="address-info">
                          <strong>Nguyễn Văn An</strong> | 0912 345 678
                          <p>123 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p>
                        </div>
                        <div class="address-actions">
                          <button class="action-btn">Sửa</button>
                          <button class="action-btn danger">Xóa</button>
                        </div>
                      </div>
                      <div class="address-item">
                        <div class="address-info">
                          <strong>Nguyễn Văn An</strong> | 0912 345 678
                          <p>456 Đường Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh</p>
                        </div>
                        <div class="address-actions">
                          <button class="action-btn">Đặt mặc định</button>
                          <button class="action-btn">Sửa</button>
                          <button class="action-btn danger">Xóa</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Security Card -->
                <div class="info-card full-width">
                  <div class="card-header">
                    <span class="card-icon security">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </span>
                    <h3>Bảo mật</h3>
                  </div>
                  <div class="card-body">
                    <div class="security-options">
                      <div class="security-item">
                        <div class="security-info">
                          <strong>Mật khẩu</strong>
                          <p>Đổi mật khẩu định kỳ để bảo vệ tài khoản</p>
                        </div>
                        <button class="submit-btn small">Đổi mật khẩu</button>
                      </div>
                      <div class="security-item">
                        <div class="security-info">
                          <strong>Xác thực 2 bước</strong>
                          <p>Bảo mật thêm với mã OTP qua SMS hoặc email</p>
                        </div>
                        <label class="toggle-switch">
                          <input type="checkbox" checked />
                          <span class="slider"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Current Orders Tab -->
            <div v-if="activeTab === 'orders'" class="tab-panel">
              <div class="panel-header">
                <h2 class="panel-title">Thông tin đơn hàng</h2>
                <p class="panel-desc">Theo dõi tình trạng đơn hàng đang xử lý</p>
              </div>

              <!-- Order Stats -->
              <div class="order-stats">
                <div class="stat-card">
                  <div class="stat-icon pending">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div class="stat-info">
                    <span class="stat-number">2</span>
                    <span class="stat-label">Chờ xác nhận</span>
                  </div>
                </div>
                <div class="stat-card">
                  <div class="stat-icon processing">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
                  </div>
                  <div class="stat-info">
                    <span class="stat-number">1</span>
                    <span class="stat-label">Đang đóng gói</span>
                  </div>
                </div>
                <div class="stat-card">
                  <div class="stat-icon shipping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                  </div>
                  <div class="stat-info">
                    <span class="stat-number">1</span>
                    <span class="stat-label">Đang vận chuyển</span>
                  </div>
                </div>
                <div class="stat-card">
                  <div class="stat-icon delivered">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div class="stat-info">
                    <span class="stat-number">15</span>
                    <span class="stat-label">Đã giao</span>
                  </div>
                </div>
              </div>

              <!-- Active Orders List -->
              <div class="orders-list">
                <div class="order-card" v-for="order in currentOrders" :key="order.id">
                  <div class="order-header">
                    <div class="order-id">
                      <span class="label">Mã đơn:</span>
                      <span class="value">#{{ order.id }}</span>
                    </div>
                    <span class="order-status" :class="order.statusClass">{{ order.status }}</span>
                  </div>
                  
                  <div class="order-progress">
                    <div class="progress-track">
                      <div class="progress-fill" :style="{ width: order.progress + '%' }"></div>
                    </div>
                    <div class="progress-steps">
                      <div class="step" :class="{ completed: order.step >= 1 }">
                        <span class="step-dot"></span>
                        <span class="step-label">Đặt hàng</span>
                      </div>
                      <div class="step" :class="{ completed: order.step >= 2 }">
                        <span class="step-dot"></span>
                        <span class="step-label">Xác nhận</span>
                      </div>
                      <div class="step" :class="{ completed: order.step >= 3 }">
                        <span class="step-dot"></span>
                        <span class="step-label">Vận chuyển</span>
                      </div>
                      <div class="step" :class="{ completed: order.step >= 4 }">
                        <span class="step-dot"></span>
                        <span class="step-label">Thành công</span>
                      </div>
                    </div>
                  </div>

                  <div class="order-items">
                    <div class="item" v-for="item in order.items" :key="item.name">
                      <img :src="item.image" :alt="item.name" class="item-image" />
                      <div class="item-info">
                        <h4 class="item-name">{{ item.name }}</h4>
                        <p class="item-variant">{{ item.variant }}</p>
                      </div>
                      <div class="item-qty">x{{ item.qty }}</div>
                      <div class="item-price">{{ formatPrice(item.price) }}</div>
                    </div>
                  </div>

                  <div class="order-footer">
                    <div class="order-total">
                      <span class="label">Tổng tiền:</span>
                      <span class="value">{{ formatPrice(order.total) }}</span>
                    </div>
                    <div class="order-actions">
                      <button class="action-btn outline">Xem chi tiết</button>
                      <button class="action-btn primary">Theo dõi đơn hàng</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Order History Tab -->
            <div v-if="activeTab === 'history'" class="tab-panel">
              <div class="panel-header">
                <h2 class="panel-title">Lịch sử mua hàng</h2>
                <p class="panel-desc">Xem lại các đơn hàng đã hoàn thành</p>
              </div>

              <!-- History Filter -->
              <div class="history-filter">
                <div class="filter-group">
                  <label>Thời gian:</label>
                  <select class="filter-select">
                    <option value="all">Tất cả</option>
                    <option value="7days">7 ngày qua</option>
                    <option value="30days">30 ngày qua</option>
                    <option value="3months">3 tháng qua</option>
                    <option value="6months">6 tháng qua</option>
                    <option value="1year">1 năm qua</option>
                  </select>
                </div>
                <div class="filter-group">
                  <label>Trạng thái:</label>
                  <select class="filter-select">
                    <option value="all">Tất cả</option>
                    <option value="completed">Hoàn thành</option>
                    <option value="cancelled">Đã hủy</option>
                    <option value="returned">Đã trả hàng</option>
                  </select>
                </div>
                <div class="search-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  <input type="text" placeholder="Tìm theo mã đơn, tên sản phẩm..." />
                </div>
              </div>

              <!-- History Table -->
              <div class="history-table-wrapper">
                <table class="history-table">
                  <thead>
                    <tr>
                      <th>Mã đơn</th>
                      <th>Ngày đặt</th>
                      <th>Sản phẩm</th>
                      <th>Tổng tiền</th>
                      <th>Trạng thái</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="order in orderHistory" :key="order.id">
                      <td class="order-id-cell">#{{ order.id }}</td>
                      <td>{{ order.date }}</td>
                      <td>
                        <div class="product-preview">
                          <img :src="order.image" :alt="order.productName" />
                          <span>{{ order.productName }} <template v-if="order.moreItems">+{{ order.moreItems }} sản phẩm</template></span>
                        </div>
                      </td>
                      <td class="price-cell">{{ formatPrice(order.total) }}</td>
                      <td>
                        <span class="status-badge" :class="order.statusClass">{{ order.status }}</span>
                      </td>
                      <td>
                        <div class="table-actions">
                          <button class="table-btn">Xem</button>
                          <button class="table-btn" v-if="order.statusClass === 'completed'">Mua lại</button>
                          <button class="table-btn review-trigger" v-if="order.statusClass === 'completed'" @click="openReviewModal(order)">Đánh giá</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Pagination -->
              <div class="pagination">
                <button class="page-btn prev" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">3</button>
                <span class="page-dots">...</span>
                <button class="page-btn">10</button>
                <button class="page-btn next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            <!-- Wishlist Tab -->
            <div v-if="activeTab === 'wishlist'" class="tab-panel">
              <div class="panel-header">
                <h2 class="panel-title">Sản phẩm yêu thích</h2>
                <p class="panel-desc">Danh sách sản phẩm bạn đã lưu để mua sau</p>
              </div>

              <!-- Wishlist Stats -->
              <div class="wishlist-stats">
                <div class="stats-text">
                  <span class="count">{{ wishlistItems.length }}</span> sản phẩm yêu thích
                </div>
                <button class="clear-all-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                  Xóa tất cả
                </button>
              </div>

              <!-- Wishlist Grid -->
              <div class="wishlist-grid">
                <div class="wishlist-card" v-for="item in wishlistItems" :key="item.id">
                  <div class="wishlist-image">
                    <img :src="item.image" :alt="item.name" />
                    <button class="remove-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                    <span v-if="item.discount" class="discount-badge">-{{ item.discount }}%</span>
                  </div>
                  <div class="wishlist-info">
                    <span class="category">{{ item.category }}</span>
                    <h4 class="product-name">{{ item.name }}</h4>
                    <div class="rating">
                      <div class="stars">
                        <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" :fill="n <= item.rating ? '#f59e0b' : '#e2e8f0'" stroke="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                      </div>
                      <span class="review-count">({{ item.reviews }})</span>
                    </div>
                    <div class="price-row">
                      <span class="current-price">{{ formatPrice(item.price) }}</span>
                      <span v-if="item.originalPrice" class="original-price">{{ formatPrice(item.originalPrice) }}</span>
                    </div>
                    <div class="stock-status" :class="item.inStock ? 'in-stock' : 'out-of-stock'">
                      <span class="dot"></span>
                      {{ item.inStock ? 'Còn hàng' : 'Hết hàng' }}
                    </div>
                  </div>
                  <div class="wishlist-actions">
                    <button class="add-to-cart-btn" :disabled="!item.inStock">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                      Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </div>

              <!-- Load More Button -->
              <div class="load-more">
                <button class="load-more-btn">
                  Xem thêm sản phẩm
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>

    <!-- Review Modal Overlay -->
    <Teleport to="body">
      <Transition name="review-modal">
        <div v-if="showReviewModal" class="review-overlay" @click.self="closeReviewModal">
          <div class="review-modal">
            <!-- Modal Header -->
            <div class="review-modal-header">
              <div class="review-modal-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                Đánh giá sản phẩm
              </div>
              <button class="review-close-btn" @click="closeReviewModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            <!-- Modal Body -->
            <div class="review-modal-body">
              <!-- Product Being Reviewed -->
              <div class="review-product-info">
                <img :src="reviewProduct.image" :alt="reviewProduct.name" class="review-product-img" />
                <div class="review-product-details">
                  <h4 class="review-product-name">{{ reviewProduct.name }}</h4>
                  <p class="review-product-order">Đơn hàng: #{{ reviewProduct.orderId }}</p>
                  <p class="review-product-date">Ngày mua: {{ reviewProduct.date }}</p>
                </div>
              </div>

              <!-- Star Rating -->
              <div class="review-rating-section">
                <label class="review-label">Đánh giá của bạn <span class="required">*</span></label>
                <div class="star-rating-container">
                  <div class="star-rating">
                    <button 
                      v-for="star in 5" 
                      :key="star" 
                      class="star-btn"
                      :class="{ active: star <= (hoverRating || selectedRating), hover: star <= hoverRating }"
                      @mouseenter="hoverRating = star"
                      @mouseleave="hoverRating = 0"
                      @click="selectedRating = star"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" :fill="star <= (hoverRating || selectedRating) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                    </button>
                  </div>
                  <span class="rating-text">{{ ratingTexts[selectedRating] || 'Chọn đánh giá' }}</span>
                </div>
              </div>

              <!-- Review Title -->
              <div class="review-field">
                <label class="review-label">Tiêu đề đánh giá</label>
                <input type="text" class="review-input" placeholder="VD: Sản phẩm rất tốt, đáng mua..." v-model="reviewTitle" />
              </div>

              <!-- Review Content -->
              <div class="review-field">
                <label class="review-label">Nội dung đánh giá <span class="required">*</span></label>
                <textarea 
                  class="review-textarea" 
                  rows="5"
                  placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm này... (tối thiểu 20 ký tự)"
                  v-model="reviewContent"
                ></textarea>
                <div class="char-count" :class="{ warning: reviewContent.length > 0 && reviewContent.length < 20 }">
                  {{ reviewContent.length }}/500 ký tự
                </div>
              </div>

              <!-- Image Upload -->
              <div class="review-field">
                <label class="review-label">Hình ảnh (tùy chọn)</label>
                <div class="review-upload-area">
                  <div class="uploaded-images">
                    <div class="upload-preview" v-for="(img, index) in reviewImages" :key="index">
                      <img :src="img" alt="Review" />
                      <button class="remove-upload" @click="removeImage(index)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </button>
                    </div>
                    <label class="upload-btn" v-if="reviewImages.length < 5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                      <span>Thêm ảnh</span>
                      <input type="file" accept="image/*" multiple hidden @change="handleImageUpload" />
                    </label>
                  </div>
                  <p class="upload-hint">Tối đa 5 ảnh, mỗi ảnh không quá 5MB</p>
                </div>
              </div>

              <!-- Pros & Cons -->
              <div class="review-pros-cons">
                <div class="review-field">
                  <label class="review-label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                    Ưu điểm
                  </label>
                  <input type="text" class="review-input" placeholder="VD: Chất lượng cao, đẹp, bền..." v-model="reviewPros" />
                </div>
                <div class="review-field">
                  <label class="review-label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h8"/></svg>
                    Nhược điểm
                  </label>
                  <input type="text" class="review-input" placeholder="VD: Giá hơi cao, giao hàng chậm..." v-model="reviewCons" />
                </div>
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="review-modal-footer">
              <button class="review-cancel-btn" @click="closeReviewModal">Hủy bỏ</button>
              <button 
                class="review-submit-btn" 
                :disabled="!canSubmitReview"
                @click="submitReview"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 15 22l-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>
                Gửi đánh giá
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeTab = ref('personal')

// Handle ?active=orders query param
onMounted(() => {
  if (route.query.active) {
    activeTab.value = route.query.active
  }
})

// ========== Review Modal State ==========
const showReviewModal = ref(false)
const selectedRating = ref(0)
const hoverRating = ref(0)
const reviewTitle = ref('')
const reviewContent = ref('')
const reviewPros = ref('')
const reviewCons = ref('')
const reviewImages = ref([])
const reviewProduct = ref({
  name: '',
  image: '',
  orderId: '',
  date: ''
})

const ratingTexts = {
  1: 'Rất tệ 😞',
  2: 'Tệ 😕',
  3: 'Bình thường 😐',
  4: 'Tốt 😊',
  5: 'Tuyệt vời! 🤩'
}

const canSubmitReview = computed(() => {
  return selectedRating.value > 0 && reviewContent.value.length >= 20
})

const openReviewModal = (order) => {
  reviewProduct.value = {
    name: order.productName,
    image: order.image,
    orderId: order.id,
    date: order.date
  }
  // Reset form
  selectedRating.value = 0
  hoverRating.value = 0
  reviewTitle.value = ''
  reviewContent.value = ''
  reviewPros.value = ''
  reviewCons.value = ''
  reviewImages.value = []
  showReviewModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeReviewModal = () => {
  showReviewModal.value = false
  document.body.style.overflow = ''
}

const handleImageUpload = (e) => {
  const files = Array.from(e.target.files)
  files.forEach(file => {
    if (reviewImages.value.length < 5) {
      const reader = new FileReader()
      reader.onload = (event) => {
        reviewImages.value.push(event.target.result)
      }
      reader.readAsDataURL(file)
    }
  })
}

const removeImage = (index) => {
  reviewImages.value.splice(index, 1)
}

const submitReview = () => {
  if (!canSubmitReview.value) return
  // Demo: just close the modal
  alert('Cảm ơn bạn đã đánh giá! ⭐')
  closeReviewModal()
}

const tabs = [
  {
    id: 'personal',
    label: 'Thông tin cá nhân',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>'
  },
  {
    id: 'orders',
    label: 'Đơn hàng hiện tại',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>',
    badge: '4'
  },
  {
    id: 'history',
    label: 'Lịch sử mua hàng',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  },
  {
    id: 'wishlist',
    label: 'Sản phẩm yêu thích',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    badge: '6'
  }
]

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

// Sample current orders data
const currentOrders = ref([
  {
    id: 'DH202402001',
    status: 'Đang vận chuyển',
    statusClass: 'shipping',
    progress: 75,
    step: 3,
    items: [
      { name: 'Pin sạc dự phòng Anker 20000mAh', variant: 'Màu đen', qty: 1, price: 890000, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=100&h=100&fit=crop' },
      { name: 'Cáp sạc USB-C to Lightning', variant: '2m', qty: 2, price: 350000, image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop' }
    ],
    total: 1590000
  },
  {
    id: 'DH202402002',
    status: 'Đã xác nhận',
    statusClass: 'processing',
    progress: 50,
    step: 2,
    items: [
      { name: 'Tai nghe Bluetooth AirPods Pro 2', variant: 'Trắng', qty: 1, price: 5990000, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=100&h=100&fit=crop' }
    ],
    total: 5990000
  }
])

// Sample order history data
const orderHistory = ref([
  { id: 'DH202401015', date: '15/01/2024', productName: 'Ốp lưng iPhone 15 Pro Max', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=60&h=60&fit=crop', moreItems: 2, total: 1250000, status: 'Hoàn thành', statusClass: 'completed' },
  { id: 'DH202401012', date: '12/01/2024', productName: 'Sạc nhanh 65W GaN', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=60&h=60&fit=crop', moreItems: 0, total: 750000, status: 'Hoàn thành', statusClass: 'completed' },
  { id: 'DH202401008', date: '08/01/2024', productName: 'Apple Watch Band', image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=60&h=60&fit=crop', moreItems: 1, total: 450000, status: 'Đã hủy', statusClass: 'cancelled' },
  { id: 'DH202312028', date: '28/12/2023', productName: 'Kính cường lực Samsung S24', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=60&h=60&fit=crop', moreItems: 0, total: 320000, status: 'Hoàn thành', statusClass: 'completed' },
  { id: 'DH202312020', date: '20/12/2023', productName: 'Giá đỡ điện thoại trên ô tô', image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=60&h=60&fit=crop', moreItems: 3, total: 2150000, status: 'Hoàn thành', statusClass: 'completed' }
])

// Sample wishlist data
const wishlistItems = ref([
  { id: 1, name: 'Apple AirPods Pro 2nd Generation', category: 'Tai nghe', price: 5990000, originalPrice: 6990000, discount: 14, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=300&h=300&fit=crop', rating: 5, reviews: 128, inStock: true },
  { id: 2, name: 'Samsung Galaxy Buds FE', category: 'Tai nghe', price: 2490000, originalPrice: 2990000, discount: 17, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop', rating: 4, reviews: 86, inStock: true },
  { id: 3, name: 'Anker PowerCore 26800mAh', category: 'Pin sạc dự phòng', price: 1290000, originalPrice: null, discount: null, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop', rating: 5, reviews: 245, inStock: true },
  { id: 4, name: 'Baseus GaN 100W Charger', category: 'Củ sạc', price: 890000, originalPrice: 1190000, discount: 25, image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop', rating: 4, reviews: 67, inStock: false },
  { id: 5, name: 'MagSafe Charger for iPhone', category: 'Sạc không dây', price: 990000, originalPrice: null, discount: null, image: 'https://images.unsplash.com/photo-1628815113969-0487917f4ece?w=300&h=300&fit=crop', rating: 5, reviews: 189, inStock: true },
  { id: 6, name: 'Spigen Ultra Hybrid iPhone 15 Case', category: 'Ốp lưng', price: 450000, originalPrice: 550000, discount: 18, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop', rating: 4, reviews: 312, inStock: true }
])
</script>

<style scoped>
@import './css/user-profile.css';
</style>
