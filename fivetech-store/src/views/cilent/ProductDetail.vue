<template>
  <div class="product-detail-page">
    <!-- Breadcrumb -->
    <div class="breadcrumb-section">
      <div class="container">
        <nav class="breadcrumb">
          <a href="/">Trang chủ</a>
          <span class="separator">/</span>
          <a href="/products">Sản phẩm</a>
          <span class="separator">/</span>
          <span class="current">Ốp lưng iPhone 15 Pro Max MagSafe</span>
        </nav>
      </div>
    </div>

    <!-- Product Section -->
    <section class="product-section">
      <div class="container">
        <div class="product-layout">
          <!-- Product Gallery -->
          <div class="product-gallery">
            <div class="main-image">
              <span class="product-badge badge-hot">Hot</span>
              <img src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&h=600&fit=crop" alt="Ốp lưng iPhone" class="gallery-image" />
              <button class="zoom-btn" title="Phóng to">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="zoom-icon">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>
            </div>
            <div class="thumbnail-list">
              <button class="thumbnail active">
                <img src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=150&h=150&fit=crop" alt="Thumb 1" />
              </button>
              <button class="thumbnail">
                <img src="https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=150&h=150&fit=crop" alt="Thumb 2" />
              </button>
              <button class="thumbnail">
                <img src="https://images.unsplash.com/photo-1601972599748-19fe5e5e7c74?w=150&h=150&fit=crop" alt="Thumb 3" />
              </button>
              <button class="thumbnail">
                <img src="https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=150&h=150&fit=crop" alt="Thumb 4" />
              </button>
            </div>
          </div>

          <!-- Product Info -->
          <div class="product-info">
            <h1 class="product-title">Ốp lưng iPhone 15 Pro Max MagSafe Premium</h1>
            
            <div class="product-meta">
              <div class="rating">
                <span class="stars">★★★★★</span>
                <span class="rating-text">4.9 (128 đánh giá)</span>
              </div>
              <span class="divider">|</span>
              <span class="sold">Đã bán 1.2K</span>
              <span class="divider">|</span>
              <span class="sku">SKU: TF-OP-15PM-001</span>
            </div>

            <div class="price-box">
              <span class="current-price">299.000đ</span>
              <span class="old-price">399.000đ</span>
              <span class="discount-badge">-25%</span>
            </div>

            <!-- Variants -->
            <div class="variant-section">
              <h4 class="variant-title">Màu sắc</h4>
              <div class="variant-options">
                <button class="variant-btn active">
                  <span class="color-dot" style="background: #1a1a2e;"></span>
                  Đen
                </button>
                <button class="variant-btn">
                  <span class="color-dot" style="background: #ffffff; border: 1px solid #e2e8f0;"></span>
                  Trắng
                </button>
                <button class="variant-btn">
                  <span class="color-dot" style="background: #3b82f6;"></span>
                  Xanh
                </button>
                <button class="variant-btn">
                  <span class="color-dot" style="background: #ef4444;"></span>
                  Đỏ
                </button>
              </div>
            </div>

            <!-- Quantity -->
            <div class="quantity-section">
              <h4 class="variant-title">Số lượng</h4>
              <div class="quantity-box">
                <button class="qty-btn">−</button>
                <input type="number" value="1" class="qty-input" />
                <button class="qty-btn">+</button>
              </div>
              <span class="stock-info">Còn 156 sản phẩm</span>
            </div>

            <!-- Actions -->
            <div class="action-buttons">
              <button class="btn-add-cart">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                </span>
                Thêm vào giỏ hàng
              </button>
              <button class="btn-buy-now">Mua ngay</button>
            </div>

            <!-- Features -->
            <div class="features-list">
              <div class="feature-item">
                <span class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </span>
                <span>Hỗ trợ MagSafe - Sạc không dây</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </span>
                <span>Bảo vệ camera, chống sốc 4 góc</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2" ry="2"/><polyline points="16 8 20 8 23 11 23 16 16 16"/><path d="M16 16v-8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                </span>
                <span>Freeship đơn từ 300K</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
                </span>
                <span>Đổi trả trong 7 ngày</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tabs Section -->
    <section class="tabs-section">
      <div class="container">
        <div class="tabs-header">
          <button class="tab-btn active">Mô tả sản phẩm</button>
          <button class="tab-btn">Thông số kỹ thuật</button>
          <button class="tab-btn">Đánh giá (128)</button>
        </div>

        <div class="tab-content">
          <!-- Description Tab -->
          <div class="tab-pane active">
            <h3>Ốp lưng iPhone 15 Pro Max MagSafe Premium</h3>
            <p>Ốp lưng được thiết kế đặc biệt dành cho iPhone 15 Pro Max với công nghệ MagSafe tích hợp, cho phép sạc không dây và gắn các phụ kiện MagSafe một cách dễ dàng.</p>
            
            <h4>Đặc điểm nổi bật:</h4>
            <ul>
              <li>Chất liệu TPU cao cấp, độ bền cao, chống trầy xước</li>
              <li>Thiết kế slim fit, không làm dày máy</li>
              <li>Gờ camera nổi bảo vệ cụm camera khỏi trầy xước</li>
              <li>4 góc chống sốc, bảo vệ máy khi rơi</li>
              <li>Tương thích hoàn toàn với MagSafe và các phụ kiện từ tính</li>
              <li>Dễ dàng lắp đặt và tháo gỡ</li>
            </ul>

            <h4>Hướng dẫn sử dụng:</h4>
            <p>Lắp ốp lưng vào điện thoại từ phía dưới lên, đảm bảo các cổng kết nối được căn chỉnh chính xác. Để tháo, bắt đầu từ góc dưới và nhẹ nhàng gỡ ra.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section">
      <div class="container">
        <h2 class="section-title">Đánh giá từ khách hàng</h2>
        
        <div class="reviews-summary">
          <div class="rating-overview">
            <span class="big-rating">4.9</span>
            <div class="rating-details">
              <span class="stars-big">★★★★★</span>
              <span class="total-reviews">128 đánh giá</span>
            </div>
          </div>
          <div class="rating-bars">
            <div class="rating-bar"><span>5 ★</span><div class="bar"><div class="fill" style="width: 85%;"></div></div><span>108</span></div>
            <div class="rating-bar"><span>4 ★</span><div class="bar"><div class="fill" style="width: 10%;"></div></div><span>13</span></div>
            <div class="rating-bar"><span>3 ★</span><div class="bar"><div class="fill" style="width: 4%;"></div></div><span>5</span></div>
            <div class="rating-bar"><span>2 ★</span><div class="bar"><div class="fill" style="width: 1%;"></div></div><span>1</span></div>
            <div class="rating-bar"><span>1 ★</span><div class="bar"><div class="fill" style="width: 1%;"></div></div><span>1</span></div>
          </div>
        </div>

        <div class="reviews-list">
          <!-- Review 1 -->
          <div class="review-card">
            <div class="review-header">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" alt="Avatar" class="reviewer-avatar" />
              <div class="reviewer-info">
                <h4 class="reviewer-name">Nguyễn Văn An</h4>
                <div class="review-meta">
                  <span class="stars">★★★★★</span>
                  <span class="review-date">20/01/2026</span>
                </div>
              </div>
            </div>
            <p class="review-content">Ốp lưng rất đẹp, vừa vặn với máy. MagSafe hoạt động tốt, sạc không dây nhanh. Rất hài lòng với sản phẩm này!</p>
            <div class="review-images">
              <img src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=100&h=100&fit=crop" alt="Review img" />
            </div>
          </div>
          <!-- Review 2 -->
          <div class="review-card">
            <div class="review-header">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" alt="Avatar" class="reviewer-avatar" />
              <div class="reviewer-info">
                <h4 class="reviewer-name">Trần Thị Mai</h4>
                <div class="review-meta">
                  <span class="stars">★★★★★</span>
                  <span class="review-date">18/01/2026</span>
                </div>
              </div>
            </div>
            <p class="review-content">Chất lượng tốt so với giá tiền. Giao hàng nhanh, đóng gói cẩn thận. Sẽ mua thêm màu khác.</p>
          </div>
          <!-- Review 3 -->
          <div class="review-card">
            <div class="review-header">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop" alt="Avatar" class="reviewer-avatar" />
              <div class="reviewer-info">
                <h4 class="reviewer-name">Lê Hoàng Nam</h4>
                <div class="review-meta">
                  <span class="stars">★★★★☆</span>
                  <span class="review-date">15/01/2026</span>
                </div>
              </div>
            </div>
            <p class="review-content">Ốp đẹp, bám tay tốt. Chỉ có điều hơi khó tháo ra. Nhìn chung là hài lòng.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Products -->
    <section class="related-section">
      <div class="container">
        <h2 class="section-title">Sản phẩm liên quan</h2>
        <div class="related-grid">
          <article class="product-card">
            <span class="product-badge badge-new">New</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=400&h=400&fit=crop" alt="Related 1" class="product-image"/>
            </div>
            <div class="product-card-info">
              <h3 class="product-name">Ốp lưng iPhone 16 Ultra Slim</h3>
              <div class="product-price"><span class="current-price">349.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="count">(45)</span></div>
            </div>
          </article>
          <article class="product-card">
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1601972599748-19fe5e5e7c74?w=400&h=400&fit=crop" alt="Related 2" class="product-image"/>
            </div>
            <div class="product-card-info">
              <h3 class="product-name">Ốp lưng Samsung S24 Clear</h3>
              <div class="product-price"><span class="current-price">199.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★☆</span><span class="count">(32)</span></div>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-sale">-30%</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop" alt="Related 3" class="product-image"/>
            </div>
            <div class="product-card-info">
              <h3 class="product-name">Kính cường lực iPhone 15</h3>
              <div class="product-price"><span class="current-price">69.000đ</span><span class="old-price">99.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="count">(156)</span></div>
            </div>
          </article>
          <article class="product-card">
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1628815113969-0487917f26eb?w=400&h=400&fit=crop" alt="Related 4" class="product-image"/>
            </div>
            <div class="product-card-info">
              <h3 class="product-name">Sạc không dây MagSafe 15W</h3>
              <div class="product-price"><span class="current-price">599.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★☆</span><span class="count">(78)</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

