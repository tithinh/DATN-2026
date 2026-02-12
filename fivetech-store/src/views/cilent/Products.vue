<template>
  <div class="products-page">
    <!-- Page Header / Breadcrumb -->
    <div class="page-header">
      <div class="container">
        <nav class="breadcrumb">
          <router-link to="/">Trang chủ</router-link>
          <span class="separator">/</span>
          <span class="current">Sản phẩm</span>
        </nav>
        <h1 class="page-title">Tất cả sản phẩm</h1>
        <p class="page-subtitle">Khám phá hơn 1000+ phụ kiện điện thoại chính hãng</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="products-content">
      <div class="content-container">
        <!-- Sidebar Filter Component -->
        <ProductFilter @update:filter="handleFilterChange" @clear-all="handleClearFilter" />

        <!-- Products Main -->
        <div class="products-main">
          <!-- Toolbar -->
          <div class="products-toolbar">
            <div class="results-count">
              Hiển thị <strong>{{ products.length }}</strong> sản phẩm
            </div>
            <div class="toolbar-actions">
              <select class="sort-select" v-model="sortBy">
                <option value="newest">Mới nhất</option>
                <option value="price_asc">Giá thấp đến cao</option>
                <option value="price_desc">Giá cao đến thấp</option>
                <option value="bestseller">Bán chạy nhất</option>
                <option value="rating">Đánh giá cao</option>
              </select>
              <div class="view-modes">
                <button class="view-btn active">▦</button>
                <button class="view-btn">☰</button>
              </div>
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="loading" class="loading-state">
            Loading...
          </div>

          <!-- Products Grid -->
          <div v-else class="products-grid">
            <ProductCard 
              v-for="product in products" 
              :key="product.id" 
              :product="product" 
              @add-to-cart="addToCart"
              @quick-view="quickView"
            />
          </div>

          <!-- Empty State -->
          <div v-if="!loading && products.length === 0" class="empty-state">
            Không tìm thấy sản phẩm nào phù hợp.
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button class="page-btn prev">← Trước</button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span class="page-dots">...</span>
            <button class="page-btn next">Sau →</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Quick View Modal -->
  <ProductQuickView 
    :is-open="quickViewOpen" 
    :product="selectedProduct" 
    @close="quickViewOpen = false"
    @add-to-cart="handleQuickViewAddToCart"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/products'
import ProductFilter from '@/components/ProductFilter.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductQuickView from '@/components/ProductQuickView.vue'

// Store initialization
const productStore = useProductStore()
const { products, loading } = storeToRefs(productStore)

const sortBy = ref('newest')

// Quick View State
const quickViewOpen = ref(false)
const selectedProduct = ref<any>(null)

onMounted(() => {
  productStore.fetchProducts()
})

const handleFilterChange = (filters: any) => {
  console.log('Filters changed:', filters)
  // Implement filter logic or call store action
}

const handleClearFilter = () => {
  console.log('Clear filters')
  // Implement clear filter logic
}

const addToCart = (product: any) => {
  console.log('Add to cart', product)
  // Implement add to cart logic (maybe use cart store)
}

const quickView = (product: any) => {
  selectedProduct.value = product
  quickViewOpen.value = true
}

const handleQuickViewAddToCart = (data: any) => {
  console.log('Add to cart from QuickView', data)
  // Reuse addToCart or implement specific logic
  addToCart(data)
}
</script>


