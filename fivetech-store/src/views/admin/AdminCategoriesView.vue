<template>
  <div>
    <!-- Page Header -->
    <div class="page-header">
      <h1>Quản lý danh mục</h1>
    </div>

    <!-- Toolbar -->
    <div class="toolbar">
      <div class="toolbar-left"></div>
      <div class="toolbar-right">
        <button class="admin-btn admin-btn-primary" @click="openAddModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
          Thêm danh mục
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
              <th>Tên danh mục</th>
              <th>Mô tả</th>
              <th>Số sản phẩm</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cat in categories" :key="cat.id">
              <td style="font-weight:600; color: var(--admin-text);">#{{ cat.id }}</td>
              <td style="font-weight:600; color: var(--admin-text);">
                <span style="display: inline-flex; align-items: center; gap: 8px;">
                  <span :style="{ width: '8px', height: '8px', borderRadius: '50%', background: cat.color, display: 'inline-block' }"></span>
                  {{ cat.name }}
                </span>
              </td>
              <td style="max-width: 300px;">{{ cat.description }}</td>
              <td>
                <span style="background: var(--admin-info-soft); color: var(--admin-info); padding: 3px 10px; border-radius: 6px; font-size: 12px; font-weight: 600;">
                  {{ cat.productsCount }} sản phẩm
                </span>
              </td>
              <td>{{ cat.createdAt }}</td>
              <td>
                <div class="action-btns">
                  <button class="action-btn edit" @click="openEditModal(cat)" title="Sửa">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                  </button>
                  <button class="action-btn delete" @click="confirmDelete(cat)" title="Xoá">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add/Edit Modal -->
    <div class="admin-modal-overlay" v-if="showModal" @click.self="closeModal">
      <div class="admin-modal slide-up">
        <div class="admin-modal-header">
          <h3>{{ isEditing ? 'Chỉnh sửa danh mục' : 'Thêm danh mục mới' }}</h3>
          <button class="modal-close" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div class="admin-modal-body">
          <div class="admin-form-group">
            <label>Tên danh mục <span class="required">*</span></label>
            <input class="admin-input" v-model="form.name" placeholder="Nhập tên danh mục" />
          </div>
          <div class="admin-form-group">
            <label>Mô tả</label>
            <textarea class="admin-textarea" v-model="form.description" placeholder="Nhập mô tả danh mục..." rows="4"></textarea>
          </div>
        </div>
        <div class="admin-modal-footer">
          <button class="admin-btn admin-btn-outline" @click="closeModal">Huỷ</button>
          <button class="admin-btn admin-btn-primary" @click="submitForm">
            {{ isEditing ? 'Cập nhật' : 'Thêm danh mục' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation -->
    <div class="admin-modal-overlay" v-if="showDeleteModal" @click.self="showDeleteModal = false">
      <div class="admin-modal slide-up" style="max-width: 420px;">
        <div class="admin-modal-body">
          <div class="confirm-dialog">
            <div class="confirm-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
            </div>
            <h4>Xoá danh mục?</h4>
            <p>Bạn có chắc muốn xoá danh mục "{{ deleteTarget?.name }}"? Tất cả sản phẩm trong danh mục sẽ bị ảnh hưởng.</p>
          </div>
        </div>
        <div class="admin-modal-footer">
          <button class="admin-btn admin-btn-outline" @click="showDeleteModal = false">Huỷ</button>
          <button class="admin-btn admin-btn-danger" @click="doDelete">Xoá</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const showDeleteModal = ref(false)
const isEditing = ref(false)
const deleteTarget = ref(null)

const form = ref({ name: '', description: '' })

const categories = ref([
  { id: 1, name: 'Ốp lưng', description: 'Ốp lưng điện thoại các loại, nhiều mẫu mã đa dạng', productsCount: 245, createdAt: '01/01/2026', color: '#6366f1' },
  { id: 2, name: 'Pin dự phòng', description: 'Pin sạc dự phòng dung lượng cao, sạc nhanh', productsCount: 89, createdAt: '01/01/2026', color: '#22c55e' },
  { id: 3, name: 'Cáp sạc', description: 'Cáp sạc USB-C, Lightning, Micro USB chất lượng cao', productsCount: 156, createdAt: '01/01/2026', color: '#f59e0b' },
  { id: 4, name: 'Tai nghe', description: 'Tai nghe Bluetooth, có dây, gaming chính hãng', productsCount: 67, createdAt: '01/01/2026', color: '#ef4444' },
  { id: 5, name: 'Kính cường lực', description: 'Kính cường lực bảo vệ màn hình smartphone', productsCount: 198, createdAt: '01/01/2026', color: '#3b82f6' },
  { id: 6, name: 'Sạc', description: 'Củ sạc nhanh GaN, sạc không dây các loại', productsCount: 112, createdAt: '01/01/2026', color: '#8b5cf6' },
  { id: 7, name: 'Phụ kiện khác', description: 'Giá đỡ, túi đựng, sticker và phụ kiện khác', productsCount: 73, createdAt: '01/01/2026', color: '#ec4899' },
])

const openAddModal = () => {
  isEditing.value = false
  form.value = { name: '', description: '' }
  showModal.value = true
}

const openEditModal = (cat) => {
  isEditing.value = true
  form.value = { ...cat }
  showModal.value = true
}

const closeModal = () => { showModal.value = false }

const submitForm = () => { showModal.value = false }

const confirmDelete = (cat) => {
  deleteTarget.value = cat
  showDeleteModal.value = true
}

const doDelete = () => {
  categories.value = categories.value.filter(c => c.id !== deleteTarget.value.id)
  showDeleteModal.value = false
}
</script>