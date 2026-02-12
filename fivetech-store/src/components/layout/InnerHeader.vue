<template>
  <header class="inner-header">
    <div class="header-container">
      <!-- Logo -->
      <a href="/" class="logo">
        <span class="logo-icon">T5</span>
        <span class="logo-text">Techfive</span>
      </a>

      <!-- Navigation Menu -->
      <nav class="nav-menu">
        <a href="/" class="nav-link">Trang chủ</a>
        <a href="/products" class="nav-link">Sản phẩm</a>
        <a href="/news" class="nav-link">Tin tức</a>
        <a href="/contact" class="nav-link">Liên hệ</a>
      </nav>

      <!-- Search Box -->
      <div class="search-box">
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input type="text" placeholder="Tìm kiếm sản phẩm..." class="search-input" />
      </div>

      <!-- Auth Buttons -->
      <div class="auth-buttons">
        <a href="/login" class="auth-btn login-btn">Đăng nhập</a>
        <a href="/register" class="auth-btn register-btn">Đăng ký</a>
      </div>

      <!-- Cart Icon -->
      <a href="/cart" class="cart-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        <span class="cart-count">3</span>
      </a>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.inner-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #ffffff;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #e2e8f0;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.logo-text {
  font-size: 26px;
  font-weight: 800;
  color: #0a1628;
  letter-spacing: -0.5px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  padding: 10px 20px;
  color: #475569;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #ff6b35;
  background: rgba(255, 107, 53, 0.08);
}

.nav-link.active {
  color: #ff6b35;
  background: rgba(255, 107, 53, 0.1);
  font-weight: 600;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  background: #f1f5f9;
  border-radius: 50px;
  border: 1.5px solid #e2e8f0;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.search-box:focus-within {
  background: #ffffff;
  border-color: #ff6b35;
  box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.08);
}

.search-icon {
  position: absolute;
  left: 14px;
  color: #94a3b8;
  pointer-events: none;
  transition: color 0.3s;
}

.search-box:focus-within .search-icon {
  color: #ff6b35;
}

.search-input {
  width: 220px;
  padding: 10px 16px 10px 40px;
  border: none;
  background: transparent;
  color: #0f172a;
  font-size: 14px;
  outline: none;
}

.search-input::placeholder {
  color: #94a3b8;
}

.cart-icon {
  position: relative;
  width: 48px;
  height: 48px;
  padding: 0;
  color: #475569;
  border-radius: 12px;
  background: #f1f5f9;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-icon:hover {
  background: rgba(255, 107, 53, 0.1);
  color: #ff6b35;
}

/* Auth Buttons */
.auth-buttons {
  display: flex;
  align-items: center;
  gap: 12px;
}

.auth-btn {
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.login-btn {
  color: #475569;
  background: transparent;
  border: 1px solid #e2e8f0;
}

.login-btn:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #0f172a;
}

.register-btn {
  color: #ffffff;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.register-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
}

.cart-count {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu-toggle {
  display: none;
  padding: 8px;
  background: transparent;
  border: none;
  color: #475569;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .nav-menu { display: none; }
  .search-box { flex: 1; max-width: 300px; }
  .search-input { width: 100%; padding-left: 40px; }
  .mobile-menu-toggle { display: block; }
}

@media (max-width: 640px) {
  .header-container { padding: 0 16px; height: 64px; }
  .logo-text { display: none; }
  .search-box { display: none; }
}
</style>
