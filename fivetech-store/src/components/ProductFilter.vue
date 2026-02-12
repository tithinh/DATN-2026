<template>
  <aside class="filter-sidebar">
    <div class="filter-header">
      <h3 class="filter-title">Bộ lọc</h3>
      <button class="clear-filter" @click="$emit('clear-all')">Xóa tất cả</button>
    </div>

    <!-- Category Filter -->
    <div class="filter-group">
      <h4 class="filter-group-title">Danh mục</h4>
      <ul class="filter-list">
        <li v-for="cat in categories" :key="cat.id" class="filter-item">
          <label class="filter-label">
            <input type="checkbox" class="filter-checkbox" :value="cat.name" v-model="selectedCategories" />
            <span class="checkmark"></span>
            <span class="label-text">{{ cat.name }}</span>
            <span class="count">({{ cat.count }})</span>
          </label>
        </li>
      </ul>
    </div>

    <!-- Price Filter -->
    <div class="filter-group">
      <h4 class="filter-group-title">Khoảng giá</h4>
      <div class="price-range">
        <input 
          type="range" 
          min="0" 
          max="10000000" 
          v-model="maxPrice" 
          class="range-slider" 
        />
        <div class="price-labels">
          <span>0đ</span>
          <span>{{ formatPrice(maxPrice) }}</span>
        </div>
      </div>
      <div class="price-inputs">
        <input type="number" placeholder="Từ" class="price-input" v-model="minHash" />
        <span class="price-separator">-</span>
        <input type="number" placeholder="Đến" class="price-input" v-model="maxPriceInput" />
      </div>
    </div>

    <!-- Brand Filter -->
    <div class="filter-group">
      <h4 class="filter-group-title">Thương hiệu</h4>
      <ul class="filter-list">
        <li v-for="brand in brands" :key="brand" class="filter-item">
          <label class="filter-label">
            <input type="checkbox" class="filter-checkbox" :value="brand" v-model="selectedBrands" />
            <span class="checkmark"></span>
            <span class="label-text">{{ brand }}</span>
          </label>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  // We can pass initial filters here if needed
}>()

const emit = defineEmits(['update:filter', 'clear-all'])

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

watch([selectedCategories, selectedBrands, maxPrice], () => {
  emit('update:filter', {
    categories: selectedCategories.value,
    brands: selectedBrands.value,
    maxPrice: maxPrice.value
  })
})

const formatPrice = (price: number) => {
    if(!price) return '0đ';
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}
</script>

<style scoped>
.filter-sidebar {
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  height: fit-content;
  position: sticky;
  top: 100px;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
}

.filter-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: #0f172a;
}

.clear-filter {
  background: none;
  border: none;
  color: #ff6b35;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.filter-group {
  margin-bottom: 28px;
}

.filter-group-title {
  font-size: 15px;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 16px 0;
}

.filter-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.filter-item {
  margin-bottom: 12px;
}

.filter-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #475569;
  transition: color 0.3s;
}

.filter-label:hover { color: #0f172a; }

.filter-checkbox {
  width: 18px;
  height: 18px;
  accent-color: #ff6b35;
  cursor: pointer;
}

.label-text { flex: 1; }

.count {
  font-size: 12px;
  color: #94a3b8;
}

/* Price Range */
.price-range {
  margin-bottom: 16px;
}

.range-slider {
  width: 100%;
  accent-color: #ff6b35;
  cursor: pointer;
}

.price-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #94a3b8;
  margin-top: 8px;
}

.price-inputs {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price-input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
  width: 100%; /* Fix width */
}

.price-input:focus { border-color: #ff6b35; }

.price-separator {
  color: #94a3b8;
}
</style>
