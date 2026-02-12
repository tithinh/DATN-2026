<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <!-- Column 1 -->
        <div>
          <h3>FiveTech Store</h3>
          <p>Phụ kiện điện thoại chính hãng – Giá tốt – Giao hàng nhanh</p>
        </div>

        <!-- Column 2 -->
        <div>
          <h4>Danh mục</h4>
          <ul>
            <li>Ốp lưng</li>
            <li>Pin dự phòng</li>
            <li>Cáp sạc</li>
            <li>Tai nghe</li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div>
          <h4>Hỗ trợ</h4>
          <ul>
            <li>Chính sách đổi trả</li>
            <li>Hướng dẫn mua hàng</li>
            <li>Liên hệ</li>
            <li>FAQ</li>
          </ul>
        </div>

        <!-- Column 4 -->
        <div>
          <h4>Liên hệ</h4>
          <p>Hotline: 1900 xxxx</p>
          <p>Email: support@fivetech.vn</p>
        </div>
      </div>

      <div class="footer-bottom">
        © 2026 FiveTech Store. All rights reserved.
      </div>
    </div>
  </footer>
</template>
<style scoped>
  /* Footer full width */
.footer {
  width: 100vw;
  background: #111827;
  color: #d1d5db;
}

/* Footer inner – CỰC KỲ QUAN TRỌNG */
.footer-inner {
  max-width: 1600px;
  margin: 0 auto;
  padding: 4rem clamp(1.5rem, 4vw, 3rem);
}

/* Grid nằm ngang đúng */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  text-align: center;
}

/* Mobile */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

/* Title */
.footer h3,
.footer h4 {
  color: #fff;
  margin-bottom: 1rem;
}

/* List */
.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer li {
  margin-bottom: 0.5rem;
}

/* Bottom */
.footer-bottom {
  border-top: 1px solid #374151;
  margin-top: 3rem;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
}
  
</style>