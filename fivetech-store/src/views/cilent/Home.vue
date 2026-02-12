<template>
  <div class="home-page">
    <!-- HEADER -->
    <HomeHeader />

    <!-- HERO SECTION -->
    <HomeHero />

    <!-- PHỤ KIỆN BÁN CHẠY -->
    <section class="product-section">
      <div class="section-container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <h2 class="section-title">Phụ kiện bán chạy</h2>
            <p class="section-subtitle">Sản phẩm được khách hàng yêu thích nhất</p>
          </div>
          <a href="/products" class="view-all-link">Xem tất cả →</a>
        </div>
        <div class="products-grid">
          <!-- Product 1 -->
          <article class="product-card">
            <span class="product-badge badge-hot">Hot</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop" alt="Ốp lưng" class="product-image"/>
              <button class="wishlist-btn" title="Yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div class="product-info">
              <h3 class="product-name">Ốp lưng iPhone 15 Pro Max MagSafe</h3>
              <div class="product-price"><span class="current-price">299.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(128)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <!-- Product 2 -->
          <article class="product-card">
            <span class="product-badge badge-hot">Hot</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop" alt="Sạc" class="product-image"/>
              <button class="wishlist-btn" title="Yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div class="product-info">
              <h3 class="product-name">Củ sạc nhanh 65W GaN USB-C</h3>
              <div class="product-price"><span class="current-price">450.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(95)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <!-- Product 3 -->
          <article class="product-card">
            <span class="product-badge badge-hot">Hot</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop" alt="Tai nghe" class="product-image"/>
              <button class="wishlist-btn" title="Yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div class="product-info">
              <h3 class="product-name">Tai nghe Bluetooth Pro ANC</h3>
              <div class="product-price"><span class="current-price">1.290.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★☆</span><span class="review-count">(76)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <!-- Product 4 -->
          <article class="product-card">
            <span class="product-badge badge-hot">Hot</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&h=400&fit=crop" alt="Pin" class="product-image"/>
              <button class="wishlist-btn" title="Yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div class="product-info">
              <h3 class="product-name">Pin dự phòng 20000mAh PD 65W</h3>
              <div class="product-price"><span class="current-price">890.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(142)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <!-- Product 5 -->
          <article class="product-card">
            <span class="product-badge badge-hot">Hot</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1600541519467-937869997e34?w=400&h=400&fit=crop" alt="Cáp" class="product-image"/>
              <button class="wishlist-btn" title="Yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div class="product-info">
              <h3 class="product-name">Cáp sạc Type-C to Lightning 2m</h3>
              <div class="product-price"><span class="current-price">189.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(234)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <!-- Product 6 -->
          <article class="product-card">
            <span class="product-badge badge-hot">Hot</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop" alt="Kính" class="product-image"/>
              <button class="wishlist-btn" title="Yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div class="product-info">
              <h3 class="product-name">Kính cường lực 9D Full màn</h3>
              <div class="product-price"><span class="current-price">99.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★☆</span><span class="review-count">(312)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <!-- Product 7 -->
          <article class="product-card">
            <span class="product-badge badge-hot">Hot</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop" alt="Đồng hồ" class="product-image"/>
              <button class="wishlist-btn" title="Yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div class="product-info">
              <h3 class="product-name">Dây đeo Apple Watch Sport</h3>
              <div class="product-price"><span class="current-price">249.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(89)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <!-- Product 8 -->
          <article class="product-card">
            <span class="product-badge badge-hot">Hot</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop" alt="Giá đỡ" class="product-image"/>
              <button class="wishlist-btn" title="Yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div class="product-info">
              <h3 class="product-name">Giá đỡ điện thoại MagSafe ô tô</h3>
              <div class="product-price"><span class="current-price">399.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(67)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- BANNER QUẢNG CÁO 1 -->
    <PromoBanner />

    <!-- PHỤ KIỆN MỚI VỀ -->
    <section class="product-section section-alt">
      <div class="section-container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <h2 class="section-title">Phụ kiện mới về</h2>
            <p class="section-subtitle">Cập nhật những sản phẩm mới nhất</p>
          </div>
          <a href="/products?filter=new" class="view-all-link">Xem tất cả →</a>
        </div>
        <div class="products-grid">
          <!-- New Product 1 -->
          <article class="product-card">
            <span class="product-badge badge-new">New</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?w=400&h=400&fit=crop" alt="Ốp lưng" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Ốp lưng iPhone 16 Ultra Slim</h3>
              <div class="product-price"><span class="current-price">349.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(12)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <!-- New Product 2-8 similar structure -->
          <article class="product-card">
            <span class="product-badge badge-new">New</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1628815113969-0487917f26eb?w=400&h=400&fit=crop" alt="Sạc" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Sạc không dây MagSafe 15W Pro</h3>
              <div class="product-price"><span class="current-price">599.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★☆</span><span class="review-count">(8)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-new">New</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1631867675167-90a456a90863?w=400&h=400&fit=crop" alt="AirTag" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Ốp AirTag da cao cấp</h3>
              <div class="product-price"><span class="current-price">199.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(5)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-new">New</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&h=400&fit=crop" alt="Hub" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Hub USB-C 7 in 1 4K HDMI</h3>
              <div class="product-price"><span class="current-price">790.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(15)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-new">New</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop" alt="Loa" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Loa Bluetooth JBL Flip 6</h3>
              <div class="product-price"><span class="current-price">2.490.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(23)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-new">New</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1623126908029-58cb08a2b272?w=400&h=400&fit=crop" alt="Bút" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Bút cảm ứng Stylus Pro iPad</h3>
              <div class="product-price"><span class="current-price">450.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★☆</span><span class="review-count">(18)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-new">New</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=400&h=400&fit=crop" alt="Tripod" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Tripod Selfie Bluetooth 170cm</h3>
              <div class="product-price"><span class="current-price">320.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(42)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-new">New</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop" alt="Lens" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Lens Macro 15x cho điện thoại</h3>
              <div class="product-price"><span class="current-price">280.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★☆</span><span class="review-count">(31)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- BANNER 2 -->
    <section class="promo-banner">
      <div class="banner-container">
        <div class="banner-content banner-reverse">
          <div class="banner-image">
            <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop" alt="Tai nghe"/>
            <div class="banner-discount"><span class="discount-percent">40%</span><span class="discount-text">OFF</span></div>
          </div>
          <div class="banner-text">
            <span class="banner-tag">🎧 Flash Sale</span>
            <h2 class="banner-title">Tai nghe Bluetooth giảm sốc</h2>
            <p class="banner-description">Ưu đãi có hạn cho các dòng tai nghe chống ồn cao cấp.</p>
            <a href="/promotions" class="banner-btn">Mua ngay</a>
          </div>
        </div>
      </div>
    </section>

    <!-- PHỤ KIỆN KHUYẾN MÃI -->
    <section class="product-section">
      <div class="section-container">
        <div class="section-header">
          <div class="section-title-wrapper">
            <h2 class="section-title">🔥 Phụ kiện khuyến mãi</h2>
            <p class="section-subtitle">Giảm giá sốc - Số lượng có hạn</p>
          </div>
          <a href="/promotions" class="view-all-link">Xem tất cả →</a>
        </div>
        <div class="products-grid">
          <!-- Sale Product 1 -->
          <article class="product-card">
            <span class="product-badge badge-sale">-35%</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1601972599748-19fe5e5e7c74?w=400&h=400&fit=crop" alt="Ốp lưng" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Ốp lưng Samsung S24 Ultra Clear</h3>
              <div class="product-price"><span class="current-price">195.000đ</span><span class="old-price">299.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(56)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <!-- Sale Products 2-8 -->
          <article class="product-card">
            <span class="product-badge badge-sale">-50%</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=400&h=400&fit=crop" alt="Pin" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Pin dự phòng 10000mAh Slim</h3>
              <div class="product-price"><span class="current-price">249.000đ</span><span class="old-price">499.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★☆</span><span class="review-count">(89)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-sale">-30%</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1600541519467-937869997e34?w=400&h=400&fit=crop" alt="Cáp" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Cáp sạc 3 đầu đa năng 1.5m</h3>
              <div class="product-price"><span class="current-price">69.000đ</span><span class="old-price">99.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(178)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-sale">-45%</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop" alt="Giá đỡ" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Giá đỡ điện thoại để bàn xoay 360</h3>
              <div class="product-price"><span class="current-price">109.000đ</span><span class="old-price">199.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★☆</span><span class="review-count">(67)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-sale">-40%</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=400&fit=crop" alt="Kính" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Kính cường lực Samsung Galaxy</h3>
              <div class="product-price"><span class="current-price">59.000đ</span><span class="old-price">99.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(245)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-sale">-55%</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop" alt="Dây đeo" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Dây đeo đồng hồ thông minh Silicon</h3>
              <div class="product-price"><span class="current-price">89.000đ</span><span class="old-price">199.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★☆</span><span class="review-count">(92)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-sale">-25%</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop" alt="Sạc" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Củ sạc nhanh 20W USB-C</h3>
              <div class="product-price"><span class="current-price">149.000đ</span><span class="old-price">199.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★★</span><span class="review-count">(134)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
          <article class="product-card">
            <span class="product-badge badge-sale">-60%</span>
            <div class="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop" alt="Phụ kiện" class="product-image"/>
            </div>
            <div class="product-info">
              <h3 class="product-name">Túi đựng phụ kiện đa năng</h3>
              <div class="product-price"><span class="current-price">79.000đ</span><span class="old-price">199.000đ</span></div>
              <div class="product-rating"><span class="stars">★★★★☆</span><span class="review-count">(56)</span></div>
              <button class="add-to-cart-btn">Thêm vào giỏ</button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- BANNER 3 -->
    <section class="promo-banner">
      <div class="banner-container">
        <div class="banner-content">
          <div class="banner-text">
            <span class="banner-tag">🚚 Miễn phí vận chuyển</span>
            <h2 class="banner-title">Freeship đơn từ 300K toàn quốc</h2>
            <p class="banner-description">Áp dụng cho tất cả đơn hàng từ 300.000đ. Giao hàng nhanh 2-4 tiếng nội thành.</p>
            <a href="/products" class="banner-btn">Mua sắm ngay</a>
          </div>
          <div class="banner-image">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop" alt="Freeship"/>
          </div>
        </div>
      </div>
    </section>

    <!-- BÀI VIẾT -->
    <BlogSection />

    <!-- Ý KIẾN KHÁCH HÀNG -->
    <TestimonialsSection />

    <!-- FOOTER -->
    <HomeFooter />
  </div>
</template>

<script setup>
import HomeHeader from '@/components/home/HomeHeader.vue'
import HomeHero from '@/components/home/HomeHero.vue'
import PromoBanner from '@/components/home/PromoBanner.vue'
import BlogSection from '@/components/home/BlogSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import HomeFooter from '@/components/home/HomeFooter.vue'
</script>

<style scoped>
/* ================= IMPORT GOOGLE FONTS ================= */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* ================= BASE STYLES ================= */
.home-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #0f172a;
  background: #f8fafc;
  line-height: 1.6;
}

/* ================= PRODUCT SECTION ================= */
.product-section { padding: 80px 0; background: #f8fafc; }
.product-section.section-alt { background: #ffffff; }
.section-container { max-width: 1400px; margin: 0 auto; padding: 0 24px; }

.section-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 48px; gap: 24px;
}
.section-title {
  font-size: 36px; font-weight: 800; color: #0f172a; margin: 0 0 8px 0;
  position: relative; display: inline-block;
}
.section-title::after {
  content: ''; position: absolute; left: 0; bottom: -8px;
  width: 60px; height: 4px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); border-radius: 2px;
}
.section-subtitle { font-size: 16px; color: #64748b; margin: 16px 0 0 0; }
.view-all-link {
  display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px;
  background: linear-gradient(135deg, #0a1628 0%, #1a2d4a 100%); color: #ffffff;
  text-decoration: none; font-weight: 600; font-size: 14px; border-radius: 10px;
  transition: all 0.3s ease;
}
.view-all-link:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(10, 22, 40, 0.3); }

/* ================= PRODUCTS GRID ================= */
.products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }

/* ================= PRODUCT CARD ================= */
.product-card {
  position: relative; background: #ffffff; border-radius: 20px; overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #f1f5f9;
}
.product-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12); }
.product-badge {
  position: absolute; top: 16px; left: 16px; z-index: 10; padding: 6px 14px;
  font-size: 12px; font-weight: 700; text-transform: uppercase; border-radius: 50px;
}
.badge-hot { background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); color: #ffffff; box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4); }
.badge-new { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4); }
.badge-sale { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: #ffffff; box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4); }
.product-image-wrapper { position: relative; width: 100%; padding-top: 100%; overflow: hidden; background: #f8fafc; }
.product-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.product-card:hover .product-image { transform: scale(1.08); }

/* Nút yêu thích */
.wishlist-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  aspect-ratio: 1 / 1;
  padding: 0;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  z-index: 20;
}

.wishlist-btn:hover {
  transform: scale(1.15);
  background: #fef2f2;
  color: #ef4444;
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.25);
}

.wishlist-btn:hover svg {
  fill: #ef4444;
}

.wishlist-btn.active {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
}

.wishlist-btn.active svg {
  fill: white;
}

.wishlist-btn svg {
  width: 18px;
  height: 18px;
  transition: all 0.3s ease;
}
.product-info { padding: 20px; }
.product-name { font-size: 16px; font-weight: 600; color: #0f172a; margin: 0 0 12px 0; line-height: 1.4; min-height: 44px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.product-price { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
.current-price { font-size: 20px; font-weight: 800; color: #ff6b35; }
.old-price { font-size: 14px; color: #94a3b8; text-decoration: line-through; }
.product-rating { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
.stars { color: #fbbf24; font-size: 14px; }
.review-count { font-size: 13px; color: #94a3b8; }
.add-to-cart-btn {
  width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 14px 20px; background: linear-gradient(135deg, #0a1628 0%, #1a2d4a 100%);
  color: #ffffff; border: none; border-radius: 12px; font-weight: 600; font-size: 14px;
  cursor: pointer; transition: all 0.3s ease;
}
.add-to-cart-btn:hover { background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3); transform: translateY(-2px); }

/* ================= PROMO BANNER ================= */
.promo-banner { padding: 40px 0; background: #f8fafc; }
.banner-container { max-width: 1400px; margin: 0 auto; padding: 0 24px; }
.banner-content {
  display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 60px;
  padding: 60px 80px; background: linear-gradient(135deg, #0a1628 0%, #1a2d4a 100%);
  border-radius: 30px; overflow: hidden;
}
.banner-reverse { direction: rtl; }
.banner-reverse > * { direction: ltr; }
.banner-tag {
  display: inline-block; padding: 8px 20px; background: rgba(255, 107, 53, 0.2);
  border: 1px solid rgba(255, 107, 53, 0.3); border-radius: 50px;
  font-size: 14px; font-weight: 600; color: #ff6b35; margin-bottom: 20px;
}
.banner-title { font-size: 40px; font-weight: 800; color: #ffffff; line-height: 1.2; margin: 0 0 16px 0; }
.banner-description { font-size: 16px; color: #94a3b8; line-height: 1.7; margin: 0 0 28px 0; }
.banner-btn {
  display: inline-flex; align-items: center; gap: 10px; padding: 16px 32px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); color: #ffffff;
  text-decoration: none; font-weight: 700; font-size: 16px; border-radius: 12px;
  transition: all 0.3s ease; box-shadow: 0 8px 30px rgba(255, 107, 53, 0.4);
}
.banner-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(255, 107, 53, 0.5); }
.banner-image { position: relative; }
.banner-image img { width: 100%; height: 320px; object-fit: cover; border-radius: 20px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3); }
.banner-discount {
  position: absolute; top: -20px; right: -20px; width: 100px; height: 100px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); border-radius: 50%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.5);
}
.discount-percent { font-size: 28px; font-weight: 800; color: #ffffff; line-height: 1; }
.discount-text { font-size: 14px; font-weight: 700; color: rgba(255, 255, 255, 0.9); }

/* ================= RESPONSIVE ================= */
@media (max-width: 1200px) {
  .products-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 1024px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .banner-content { grid-template-columns: 1fr; padding: 50px; text-align: center; }
  .banner-reverse { direction: ltr; }
  .section-header { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 640px) {
  .product-section { padding: 60px 0; }
  .section-title { font-size: 28px; }
  .products-grid { grid-template-columns: 1fr; gap: 20px; }
  .banner-content { padding: 40px 24px; border-radius: 20px; }
  .banner-title { font-size: 26px; }
  .banner-image img { height: 200px; }
  .product-info { padding: 16px; }
  .product-name { font-size: 15px; min-height: auto; }
  .current-price { font-size: 18px; }
}
</style>
