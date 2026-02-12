<template>
  <!-- Mobile Filter Toggle -->
  <button class="filter-toggle" @click="drawerOpen = true">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>
    <span>Bộ lọc</span>
  </button>

  <!-- Mobile Overlay -->
  <div class="filter-overlay" :class="{ active: drawerOpen }" @click="drawerOpen = false"></div>

  <!-- Sidebar -->
  <aside class="filter-sidebar" :class="{ open: drawerOpen }">
    <!-- Close button for mobile -->
    <button class="filter-close" @click="drawerOpen = false">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </button>

    <!-- Header -->
    <div class="filter-header">
      <h3 class="filter-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
        Bộ lọc
      </h3>
      <button class="clear-filter" @click="handleClearAll">Xóa tất cả</button>
    </div>

    <!-- Category Filter -->
    <div class="filter-section">
      <h4 class="filter-section-title">Danh mục</h4>
      <ul class="filter-list">
        <li v-for="cat in categories" :key="cat.id" class="filter-item">
          <label class="filter-label" :class="{ checked: selectedCategories.includes(cat.name) }">
            <input type="checkbox" :value="cat.name" v-model="selectedCategories" />
            <span class="custom-checkbox">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span class="label-text">{{ cat.name }}</span>
            <span class="item-count">{{ cat.count }}</span>
          </label>
        </li>
      </ul>
    </div>

    <div class="filter-divider"></div>

    <!-- Price Filter -->
    <div class="filter-section">
      <h4 class="filter-section-title">Khoảng giá</h4>
      <div class="price-slider-wrapper">
        <input
          type="range"
          min="0"
          max="10000000"
          step="100000"
          v-model="maxPrice"
          class="price-slider"
          :style="sliderTrackStyle"
        />
        <div class="price-range-labels">
          <span>0đ</span>
          <span class="price-value">{{ formatPrice(maxPrice) }}</span>
        </div>
      </div>
      <div class="price-inputs">
        <div class="price-input-group">
          <span class="price-input-label">Từ</span>
          <input type="number" placeholder="0" class="price-input" v-model="minHash" />
        </div>
        <span class="price-dash">–</span>
        <div class="price-input-group">
          <span class="price-input-label">Đến</span>
          <input type="number" placeholder="10,000,000" class="price-input" v-model="maxPriceInput" />
        </div>
      </div>
    </div>

    <div class="filter-divider"></div>

    <!-- Brand Filter -->
    <div class="filter-section">
      <h4 class="filter-section-title">Thương hiệu</h4>
      <ul class="filter-list">
        <li v-for="brand in brands" :key="brand" class="filter-item">
          <label class="filter-label" :class="{ checked: selectedBrands.includes(brand) }">
            <input type="checkbox" :value="brand" v-model="selectedBrands" />
            <span class="custom-checkbox">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span class="label-text">{{ brand }}</span>
          </label>
        </li>
      </ul>
    </div>

    <!-- Apply Button (mobile) -->
    <button class="filter-apply-btn" @click="drawerOpen = false">
      Áp dụng bộ lọc
    </button>
  </aside>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'

const emit = defineEmits(['update:filter', 'clear-all'])

const drawerOpen = ref(false)

const categories = [
  { id: 1, name: 'Ốp lưng', count: 128 },
  { id: 2, name: 'Cáp sạc', count: 86 },
  { id: 3, name: 'Tai nghe', count: 54 },
  { id: 4, name: 'Sạc nhanh', count: 42 },
  { id: 5, name: 'Pin dự phòng', count: 38 },
  { id: 6, name: 'Phụ kiện MagSafe', count: 29 },
]

const brands = ['Apple', 'Samsung', 'Baseus', 'Anker', 'Xiaomi']

const selectedCategories = ref<string[]>([])
const selectedBrands = ref<string[]>([])
const maxPrice = ref(5000000)
const minHash = ref<number | null>(null)
const maxPriceInput = ref<number | null>(null)

const sliderTrackStyle = computed(() => {
  const percent = (Number(maxPrice.value) / 10000000) * 100
  return {
    background: `linear-gradient(to right, #ff6b35 0%, #f7931e ${percent}%, #e2e8f0 ${percent}%, #e2e8f0 100%)`
  }
})

watch([selectedCategories, selectedBrands, maxPrice], () => {
  emit('update:filter', {
    categories: selectedCategories.value,
    brands: selectedBrands.value,
    maxPrice: maxPrice.value
  })
})

const handleClearAll = () => {
  selectedCategories.value = []
  selectedBrands.value = []
  maxPrice.value = 5000000
  minHash.value = null
  maxPriceInput.value = null
  emit('clear-all')
}

const formatPrice = (price: number) => {
  if (!price) return '0đ'
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}
</script>

<style scoped>
/* =====================================================
   FILTER SIDEBAR - Premium Modern Style
   ===================================================== */

.filter-sidebar {
  background: #ffffff;
  border-radius: 18px;
  padding: 28px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
  height: fit-content;
  position: sticky;
  top: 100px;
}

/* ---- Header ---- */
.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.filter-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: #0f172a;
}

.filter-title svg {
  color: #ff6b35;
}

.clear-filter {
  background: none;
  border: none;
  color: #ff6b35;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 0;
  position: relative;
  transition: color 0.2s;
}

.clear-filter::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1.5px;
  background: #ff6b35;
  transition: width 0.3s ease;
}

.clear-filter:hover {
  color: #e85a2a;
}

.clear-filter:hover::after {
  width: 100%;
}

/* ---- Sections ---- */
.filter-section {
  margin-bottom: 0;
}

.filter-section-title {
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-divider {
  height: 1px;
  background: #e5e7eb;
  margin: 24px 0;
}

/* ---- Filter List & Items ---- */
.filter-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.filter-item {
  margin-bottom: 4px;
}

.filter-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #475569;
  padding: 7px 10px;
  border-radius: 10px;
  transition: all 0.2s ease;
  position: relative;
}

.filter-label:hover {
  background: rgba(255, 107, 53, 0.04);
  color: #0f172a;
}

.filter-label.checked {
  color: #0f172a;
  font-weight: 500;
}

.filter-label input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* ---- Custom Checkbox ---- */
.custom-checkbox {
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 2px solid #cbd5e1;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: #ffffff;
}

.custom-checkbox svg {
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.2s ease;
  color: #ffffff;
}

.filter-label.checked .custom-checkbox {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
}

.filter-label.checked .custom-checkbox svg {
  opacity: 1;
  transform: scale(1);
}

.label-text {
  flex: 1;
}

.item-count {
  font-size: 12px;
  color: #94a3b8;
  background: #f1f5f9;
  padding: 2px 8px;
  border-radius: 20px;
  font-weight: 500;
}

/* ---- Price Slider ---- */
.price-slider-wrapper {
  margin-bottom: 20px;
}

.price-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  margin: 8px 0;
}

.price-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #ff6b35;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.25);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.price-slider::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  box-shadow: 0 4px 14px rgba(255, 107, 53, 0.35);
}

.price-slider::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #ff6b35;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.25);
  cursor: pointer;
}

.price-range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #94a3b8;
  margin-top: 6px;
}

.price-value {
  font-weight: 600;
  color: #ff6b35;
}

/* ---- Price Inputs ---- */
.price-inputs {
  display: flex;
  align-items: center;
  gap: 10px;
}

.price-input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.price-input-label {
  font-size: 11px;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.price-input {
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  color: #0f172a;
  background: #f8fafc;
  outline: none;
  transition: all 0.25s ease;
  box-sizing: border-box;
}

.price-input:focus {
  border-color: #ff6b35;
  background: #ffffff;
  box-shadow: 0 0 0 4px rgba(255, 107, 53, 0.08);
}

.price-input::placeholder {
  color: #cbd5e1;
}

.price-dash {
  color: #cbd5e1;
  font-size: 18px;
  font-weight: 300;
  margin-top: 18px;
}

/* ---- Mobile: Filter Toggle Button ---- */
.filter-toggle {
  display: none;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.25s;
}

.filter-toggle:hover {
  border-color: #ff6b35;
  color: #ff6b35;
}

/* ---- Mobile: Close Button ---- */
.filter-close {
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f1f5f9;
  border: none;
  border-radius: 10px;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #475569;
  transition: all 0.2s;
}

.filter-close:hover {
  background: #e2e8f0;
  color: #0f172a;
}

/* ---- Mobile: Overlay ---- */
.filter-overlay {
  display: none;
}

/* ---- Mobile: Apply Button ---- */
.filter-apply-btn {
  display: none;
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 24px;
  transition: all 0.3s;
}

.filter-apply-btn:hover {
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.35);
}

/* =====================================================
   RESPONSIVE
   ===================================================== */

@media (max-width: 1024px) {
  .filter-sidebar {
    width: 260px;
    padding: 24px;
  }
}

@media (max-width: 768px) {
  .filter-toggle {
    display: flex;
  }

  .filter-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .filter-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  .filter-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 320px;
    max-width: 85vw;
    border-radius: 0 18px 18px 0;
    z-index: 1000;
    overflow-y: auto;
    transform: translateX(-100%);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 28px;
    padding-top: 60px;
  }

  .filter-sidebar.open {
    transform: translateX(0);
  }

  .filter-close {
    display: flex;
  }

  .filter-apply-btn {
    display: block;
  }
}
</style>
