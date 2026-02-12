<template>
  <div>
    <!-- Page Header -->
    <div class="page-header">
      <h1>Quản lý bình luận</h1>
    </div>

    <!-- Toolbar -->
    <div class="toolbar">
      <div class="toolbar-left">
        <div class="toolbar-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" v-model="searchQuery" placeholder="Tìm theo nội dung, người bình luận..." />
        </div>
        <select class="toolbar-filter" v-model="filterStatus">
          <option value="">Tất cả trạng thái</option>
          <option value="pending">Chờ duyệt</option>
          <option value="approved">Đã duyệt</option>
        </select>
      </div>
    </div>

    <!-- Table -->
    <div class="admin-card">
      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Người bình luận</th>
              <th>Nội dung</th>
              <th>Sản phẩm</th>
              <th>Đánh giá</th>
              <th>Ngày</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="comment in filteredComments" :key="comment.id">
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div :style="{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: comment.avatarColor, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontWeight: '700', fontSize: '12px', color: '#fff', minWidth: '32px'
                  }">{{ comment.author.charAt(0) }}</div>
                  <span style="font-weight: 500; color: var(--admin-text);">{{ comment.author }}</span>
                </div>
              </td>
              <td style="max-width: 280px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                {{ comment.content }}
              </td>
              <td style="font-weight: 500; color: var(--admin-text);">{{ comment.product }}</td>
              <td>
                <div style="display: flex; gap: 2px;">
                  <span v-for="star in 5" :key="star" :style="{ color: star <= comment.rating ? '#f59e0b' : 'var(--admin-border)', fontSize: '14px' }">★</span>
                </div>
              </td>
              <td>{{ comment.date }}</td>
              <td>
                <span class="status-badge" :class="comment.approved ? 'active' : 'pending'">
                  {{ comment.approved ? 'Đã duyệt' : 'Chờ duyệt' }}
                </span>
              </td>
              <td>
                <div class="action-btns">
                  <button
                    v-if="!comment.approved"
                    class="action-btn approve"
                    @click="approveComment(comment)"
                    title="Duyệt"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
                  </button>
                  <button class="action-btn delete" @click="confirmDelete(comment)" title="Xoá">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="admin-pagination">
        <span class="pagination-info">Hiển thị {{ filteredComments.length }} bình luận</span>
        <div class="pagination-btns">
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
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
            <h4>Xoá bình luận?</h4>
            <p>Bạn có chắc muốn xoá bình luận của "{{ deleteTarget?.author }}"? Hành động này không thể hoàn tác.</p>
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
import { ref, computed } from 'vue'

const searchQuery = ref('')
const filterStatus = ref('')
const showDeleteModal = ref(false)
const deleteTarget = ref(null)

const comments = ref([
  { id: 1, author: 'Nguyễn Văn An', content: 'Ốp lưng rất đẹp, chất lượng tốt, vừa vặn với điện thoại. Giao hàng nhanh, đóng gói cẩn thận.', product: 'Ốp lưng iPhone 15 Pro', rating: 5, date: '12/02/2026', approved: true, avatarColor: '#6366f1' },
  { id: 2, author: 'Trần Thị Bình', content: 'Pin dùng được khá lâu, sạc nhanh. Nhưng hơi nặng so với mong đợi.', product: 'Pin dự phòng Anker', rating: 4, date: '11/02/2026', approved: true, avatarColor: '#22c55e' },
  { id: 3, author: 'Lê Hoàng Cường', content: 'Cáp sạc nhanh thật sự nhanh, chất liệu dây bền. Rất hài lòng!', product: 'Cáp sạc Baseus 65W', rating: 5, date: '10/02/2026', approved: false, avatarColor: '#f59e0b' },
  { id: 4, author: 'Phạm Minh Đức', content: 'Tai nghe chống ồn tốt, âm thanh hay. Đáng tiền!', product: 'Sony WH-1000XM5', rating: 5, date: '09/02/2026', approved: false, avatarColor: '#ef4444' },
  { id: 5, author: 'Hoàng Thị Em', content: 'Kính cường lực dán dễ, không bong bóng. Nhưng viền hơi dày.', product: 'Kính cường lực Samsung', rating: 3, date: '08/02/2026', approved: true, avatarColor: '#3b82f6' },
  { id: 6, author: 'Vũ Đình Phúc', content: 'Sạc nhanh thật sự ấn tượng, nhỏ gọn dễ mang theo.', product: 'Sạc GaN 65W Ugreen', rating: 4, date: '07/02/2026', approved: false, avatarColor: '#8b5cf6' },
  { id: 7, author: 'Đỗ Thanh Giang', content: 'Sản phẩm bình thường, không có gì đặc biệt.', product: 'AirPods Pro 2 Case', rating: 2, date: '06/02/2026', approved: true, avatarColor: '#ec4899' },
  { id: 8, author: 'Bùi Văn Hải', content: 'Giá đỡ rất chắc chắn, thiết kế đẹp. Sẽ mua thêm cho bạn bè!', product: 'Giá đỡ Lamicall', rating: 5, date: '05/02/2026', approved: false, avatarColor: '#14b8a6' },
])

const filteredComments = computed(() => {
  return comments.value.filter(c => {
    const matchSearch = c.content.toLowerCase().includes(searchQuery.value.toLowerCase()) || c.author.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchStatus = !filterStatus.value || (filterStatus.value === 'approved' ? c.approved : !c.approved)
    return matchSearch && matchStatus
  })
})

const approveComment = (comment) => {
  comment.approved = true
}

const confirmDelete = (comment) => {
  deleteTarget.value = comment
  showDeleteModal.value = true
}

const doDelete = () => {
  comments.value = comments.value.filter(c => c.id !== deleteTarget.value.id)
  showDeleteModal.value = false
}
</script>
