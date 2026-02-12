<template>
  <div>
    <!-- Page Header -->
    <div class="page-header">
      <h1>Quản lý sản phẩm</h1>

    </div>

    <!-- Toolbar -->
    <div class="toolbar">
      <div class="toolbar-left">
        <div class="toolbar-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" v-model="searchQuery" placeholder="Tìm kiếm sản phẩm..." />
        </div>
        <select class="toolbar-filter" v-model="filterCategory">
          <option value="">Tất cả danh mục</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
      <div class="toolbar-right">
        <button class="admin-btn admin-btn-primary" @click="openAddModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
          Thêm sản phẩm
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="admin-card">
      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Danh mục</th>
              <th>Số lượng</th>
              <th>Trạng thái</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in paginatedProducts" :key="p.id">
              <td style="font-weight:600; color: var(--admin-text);">#{{ p.id }}</td>
              <td>
                <div class="table-product-img" :style="{ background: p.imgColor, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px' }">
                  {{ p.imgEmoji }}
                </div>
              </td>
              <td style="font-weight:500; color: var(--admin-text); max-width: 200px;">{{ p.name }}</td>
              <td style="font-weight:600; color: var(--admin-warning);">{{ formatPrice(p.price) }}</td>
              <td>{{ p.category }}</td>
              <td>
                <span :style="{ color: p.stock < 10 ? 'var(--admin-danger)' : 'var(--admin-text-soft)' }">{{ p.stock }}</span>
              </td>
              <td>
                <span class="status-badge" :class="p.active ? 'active' : 'inactive'">
                  {{ p.active ? 'Hiển thị' : 'Ẩn' }}
                </span>
              </td>
              <td>{{ p.createdAt }}</td>
              <td>
                <div class="action-btns">
                  <button class="action-btn edit" @click="openEditModal(p)" title="Sửa">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                  </button>
                  <button class="action-btn delete" @click="confirmDelete(p)" title="Xoá">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="admin-pagination">
        <span class="pagination-info">Hiển thị {{ startItem }}-{{ endItem }} / {{ filteredProducts.length }} sản phẩm</span>
        <div class="pagination-btns">
          <button class="page-btn" :disabled="currentPage === 1" @click="currentPage--">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button class="page-btn" v-for="page in visiblePages" :key="page" :class="{ active: page === currentPage }" @click="currentPage = page">
            {{ page }}
          </button>
          <button class="page-btn" :disabled="currentPage === totalPages" @click="currentPage++">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Add/Edit Product Modal -->
    <div class="admin-modal-overlay" v-if="showModal" @click.self="closeModal">
      <div class="admin-modal wide slide-up">
        <div class="admin-modal-header">
          <h3>{{ isEditing ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới' }}</h3>
          <button class="modal-close" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div class="admin-modal-body">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="admin-form-group">
              <label>Tên sản phẩm <span class="required">*</span></label>
              <input class="admin-input" v-model="form.name" placeholder="Nhập tên sản phẩm" />
            </div>
            <div class="admin-form-group">
              <label>Danh mục <span class="required">*</span></label>
              <select class="admin-select" v-model="form.category">
                <option value="">Chọn danh mục</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
              </select>
            </div>
            <div class="admin-form-group">
              <label>Giá (VNĐ) <span class="required">*</span></label>
              <input class="admin-input" type="number" v-model="form.price" placeholder="0" />
            </div>
            <div class="admin-form-group">
              <label>Số lượng <span class="required">*</span></label>
              <input class="admin-input" type="number" v-model="form.stock" placeholder="0" />
            </div>
          </div>
          <div class="admin-form-group">
            <label>Mô tả</label>
            <textarea class="admin-textarea" v-model="form.description" placeholder="Nhập mô tả sản phẩm..." rows="4"></textarea>
          </div>
          <div class="admin-form-group">
            <label>Hình ảnh sản phẩm</label>
            <div class="upload-area" @click="triggerUpload">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
              <p>Kéo thả hoặc click để upload ảnh</p>
              <span class="upload-hint">PNG, JPG, WEBP (tối đa 5MB)</span>
            </div>
          </div>
          <div class="admin-form-group">
            <label>Trạng thái hiển thị</label>
            <div class="admin-toggle" @click="form.active = !form.active">
              <button class="toggle-switch" :class="{ active: form.active }" type="button"></button>
              <span style="font-size: 14px; color: var(--admin-text-soft);">{{ form.active ? 'Hiển thị' : 'Ẩn' }}</span>
            </div>
          </div>

          <!-- Variants Section -->
          <div class="admin-form-group" style="margin-top: 20px; border-top: 1px solid var(--admin-border); padding-top: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <label style="margin: 0;">Biến thể sản phẩm ({{ form.variants?.length || 0 }})</label>
              <button class="admin-btn admin-btn-sm admin-btn-outline" @click="showAddVariant = !showAddVariant" style="font-size: 11px;">
                {{ showAddVariant ? 'Huỷ thêm' : '+ Thêm biến thể' }}
              </button>
            </div>

            <!-- Add Variant Form -->
            <div v-if="showAddVariant" style="background: var(--admin-bg); padding: 12px; border-radius: 8px; margin-bottom: 16px; border: 1px dashed var(--admin-primary);">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px;">
                <input class="admin-input" v-model="newVariant.sku" placeholder="SKU (Mã)" style="font-size: 12px;" />
                <input class="admin-input" v-model="newVariant.color" placeholder="Màu sắc" style="font-size: 12px;" />
                <input class="admin-input" v-model="newVariant.size" placeholder="Kích thước" style="font-size: 12px;" />
                <input class="admin-input" type="number" v-model="newVariant.price" placeholder="Giá riêng (để 0 nếu bằng giá gốc)" style="font-size: 12px;" />
                <input class="admin-input" type="number" v-model="newVariant.stock" placeholder="Số lượng tồn" style="font-size: 12px;" />
              </div>
              <button class="admin-btn admin-btn-primary admin-btn-sm" style="width: 100%; justify-content: center;" @click="addVariant">Lưu biến thể này</button>
            </div>

            <!-- Variants List -->
            <div v-if="form.variants && form.variants.length > 0" style="display: flex; flex-direction: column; gap: 8px;">
              <div v-for="(v, idx) in form.variants" :key="idx" style="display: flex; align-items: center; justify-content: space-between; background: var(--admin-bg-card); padding: 8px 12px; border: 1px solid var(--admin-border); border-radius: 6px;">
                <div style="display: flex; gap: 12px; align-items: center;">
                  <div style="width: 24px; height: 24px; background: var(--admin-bg); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: var(--admin-text-muted);">{{ idx + 1 }}</div>
                  <div>
                    <div style="font-size: 13px; font-weight: 600; color: var(--admin-text);">{{ v.sku }} - {{ v.color }} / {{ v.size }}</div>
                    <div style="font-size: 11px; color: var(--admin-text-muted);">Giá: {{ v.price ? formatPrice(v.price) : 'Theo SP' }} | Kho: {{ v.stock }}</div>
                  </div>
                </div>
                <button class="action-btn delete" @click="removeVariant(idx)" style="color: var(--admin-danger);"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg></button>
              </div>
            </div>
            <div v-else style="text-align: center; padding: 20px; font-size: 12px; color: var(--admin-text-muted); border: 1px dashed var(--admin-border); border-radius: 8px;">
              Chưa có biến thể nào
            </div>
          </div>
        </div>
        <div class="admin-modal-footer">
          <button class="admin-btn admin-btn-outline" @click="closeModal">Huỷ</button>
          <button class="admin-btn admin-btn-primary" @click="submitForm">
            {{ isEditing ? 'Cập nhật' : 'Thêm sản phẩm' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div class="admin-modal-overlay" v-if="showDeleteModal" @click.self="showDeleteModal = false">
      <div class="admin-modal slide-up" style="max-width: 420px;">
        <div class="admin-modal-body">
          <div class="confirm-dialog">
            <div class="confirm-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
            </div>
            <h4>Xoá sản phẩm?</h4>
            <p>Bạn có chắc muốn xoá "{{ deleteTarget?.name }}"? Hành động này không thể hoàn tác.</p>
          </div>
        </div>
        <div class="admin-modal-footer">
          <button class="admin-btn admin-btn-outline" @click="showDeleteModal = false">Huỷ</button>
          <button class="admin-btn admin-btn-danger" @click="deleteProduct">Xoá</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const searchQuery = ref('')
const filterCategory = ref('')
const currentPage = ref(1)
const itemsPerPage = 8
const showModal = ref(false)
const showDeleteModal = ref(false)
const isEditing = ref(false)
const deleteTarget = ref(null)

const categories = ['Ốp lưng', 'Pin dự phòng', 'Cáp sạc', 'Tai nghe', 'Kính cường lực', 'Sạc', 'Phụ kiện khác']

const showAddVariant = ref(false)
const newVariant = ref({ sku: '', color: '', size: '', price: null, stock: null })

const form = ref({
  name: '', category: '', price: 0, stock: 0, description: '', active: true, variants: []
})

const addVariant = () => {
  if (!newVariant.value.sku) return
  form.value.variants.push({ ...newVariant.value })
  newVariant.value = { sku: '', color: '', size: '', price: null, stock: null }
  showAddVariant.value = false
}

const removeVariant = (index) => {
  form.value.variants.splice(index, 1)
}

const products = ref([
  { id: 1, name: 'Ốp lưng iPhone 15 Pro Max MagSafe', price: 350000, category: 'Ốp lưng', stock: 120, active: true, createdAt: '10/02/2026', imgEmoji: '📱', imgColor: '#1e293b', variants: [{ sku: 'OP-15PM-BLK', color: 'Đen', size: 'Pro Max', price: 350000, stock: 50 }, { sku: 'OP-15PM-BLU', color: 'Xanh', size: 'Pro Max', price: 350000, stock: 70 }] },
  { id: 2, name: 'Pin dự phòng Anker 20000mAh', price: 650000, category: 'Pin dự phòng', stock: 45, active: true, createdAt: '09/02/2026', imgEmoji: '🔋', imgColor: '#1e293b', variants: [] },
  { id: 3, name: 'Cáp sạc nhanh USB-C Baseus 65W', price: 180000, category: 'Cáp sạc', stock: 200, active: true, createdAt: '08/02/2026', imgEmoji: '🔌', imgColor: '#1e293b', variants: [] },
  { id: 4, name: 'Tai nghe Bluetooth Sony WH-1000XM5', price: 8500000, category: 'Tai nghe', stock: 15, active: true, createdAt: '07/02/2026', imgEmoji: '🎧', imgColor: '#1e293b', variants: [] },
  { id: 5, name: 'Kính cường lực Samsung Galaxy S24', price: 150000, category: 'Kính cường lực', stock: 300, active: true, createdAt: '06/02/2026', imgEmoji: '🔳', imgColor: '#1e293b', variants: [] },
  { id: 6, name: 'Sạc nhanh GaN 65W Ugreen', price: 420000, category: 'Sạc', stock: 80, active: true, createdAt: '05/02/2026', imgEmoji: '⚡', imgColor: '#1e293b', variants: [] },
  { id: 7, name: 'Ốp lưng Samsung S24 Ultra Clear', price: 250000, category: 'Ốp lưng', stock: 90, active: false, createdAt: '04/02/2026', imgEmoji: '📱', imgColor: '#1e293b', variants: [] },
  { id: 8, name: 'AirPods Pro 2 Case Cover', price: 120000, category: 'Phụ kiện khác', stock: 60, active: true, createdAt: '03/02/2026', imgEmoji: '🎵', imgColor: '#1e293b', variants: [] },
  { id: 9, name: 'Pin dự phòng Xiaomi 10000mAh', price: 350000, category: 'Pin dự phòng', stock: 8, active: true, createdAt: '02/02/2026', imgEmoji: '🔋', imgColor: '#1e293b', variants: [] },
  { id: 10, name: 'Tai nghe AirPods 4', price: 3200000, category: 'Tai nghe', stock: 25, active: true, createdAt: '01/02/2026', imgEmoji: '🎧', imgColor: '#1e293b', variants: [] },
  { id: 11, name: 'Dán màn hình iPad Pro 12.9', price: 280000, category: 'Kính cường lực', stock: 5, active: true, createdAt: '31/01/2026', imgEmoji: '🔳', imgColor: '#1e293b', variants: [] },
  { id: 12, name: 'Giá đỡ điện thoại Lamicall', price: 320000, category: 'Phụ kiện khác', stock: 40, active: true, createdAt: '30/01/2026', imgEmoji: '📐', imgColor: '#1e293b', variants: [] },
])

const filteredProducts = computed(() => {
  return products.value.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchCategory = !filterCategory.value || p.category === filterCategory.value
    return matchSearch && matchCategory
  })
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProducts.value.slice(start, start + itemsPerPage)
})

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))
const startItem = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const endItem = computed(() => Math.min(currentPage.value * itemsPerPage, filteredProducts.value.length))

const visiblePages = computed(() => {
  const pages = []
  for (let i = 1; i <= totalPages.value; i++) pages.push(i)
  return pages
})

watch([searchQuery, filterCategory], () => { currentPage.value = 1 })

const formatPrice = (price) => price.toLocaleString('vi-VN') + '₫'

const openAddModal = () => {
  isEditing.value = false
  form.value = { name: '', category: '', price: 0, stock: 0, description: '', active: true, variants: [] }
  showModal.value = true
  showAddVariant.value = false
}

const openEditModal = (product) => {
  isEditing.value = true
  form.value = { ...product, variants: product.variants ? [...product.variants] : [] }
  showModal.value = true
  showAddVariant.value = false
}

const closeModal = () => {
  showModal.value = false
}

const submitForm = () => {
  // Logic submit
  showModal.value = false
}

const confirmDelete = (product) => {
  deleteTarget.value = product
  showDeleteModal.value = true
}

const deleteProduct = () => {
  products.value = products.value.filter(p => p.id !== deleteTarget.value.id)
  showDeleteModal.value = false
  deleteTarget.value = null
}

const triggerUpload = () => {
  // Trigger file input
}
</script>