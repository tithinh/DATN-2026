<template>
  <div>
    <!-- Page Header -->
    <div class="page-header">
      <h1>Quản lý người dùng</h1>
    </div>

    <!-- Toolbar -->
    <div class="toolbar">
      <div class="toolbar-left">
        <div class="toolbar-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" v-model="searchQuery" placeholder="Tìm theo tên, email..." />
        </div>
        <select class="toolbar-filter" v-model="filterRole">
          <option value="">Tất cả role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
    </div>

    <!-- Table -->
    <div class="admin-card">
      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên người dùng</th>
              <th>Email</th>
              <th>Role</th>
              <th>Trạng thái</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
              <td style="font-weight:600; color: var(--admin-text);">#{{ user.id }}</td>
              <td>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <div :style="{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: user.avatarColor, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontWeight: '700', fontSize: '14px', color: '#fff', minWidth: '36px'
                  }">{{ user.name.charAt(0) }}</div>
                  <span style="font-weight: 500; color: var(--admin-text);">{{ user.name }}</span>
                </div>
              </td>
              <td>{{ user.email }}</td>
              <td>
                <span class="role-badge" :class="user.role">{{ user.role === 'admin' ? 'Admin' : 'User' }}</span>
              </td>
              <td>
                <span class="status-badge" :class="user.active ? 'active' : 'inactive'">
                  {{ user.active ? 'Hoạt động' : 'Bị khoá' }}
                </span>
              </td>
              <td>{{ user.createdAt }}</td>
              <td>
                <div class="action-btns">
                  <button
                    v-if="user.active"
                    class="action-btn lock"
                    @click="toggleUserStatus(user)"
                    title="Khoá tài khoản"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </button>
                  <button
                    v-else
                    class="action-btn unlock"
                    @click="toggleUserStatus(user)"
                    title="Mở khoá tài khoản"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
                  </button>
                  <button class="action-btn edit" @click="openEditModal(user)" title="Sửa">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="admin-pagination">
        <span class="pagination-info">Hiển thị {{ filteredUsers.length }} người dùng</span>
        <div class="pagination-btns">
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
        </div>
      </div>
    </div>

    <!-- Edit User Modal -->
    <div class="admin-modal-overlay" v-if="showEditModal" @click.self="showEditModal = false">
      <div class="admin-modal slide-up">
        <div class="admin-modal-header">
          <h3>Chỉnh sửa người dùng</h3>
          <button class="modal-close" @click="showEditModal = false">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div class="admin-modal-body" v-if="editingUser">
          <div class="admin-form-group">
            <label>Họ tên</label>
            <input class="admin-input" v-model="editingUser.name" />
          </div>
          <div class="admin-form-group">
            <label>Email</label>
            <input class="admin-input" v-model="editingUser.email" type="email" />
          </div>
          <div class="admin-form-group">
            <label>Role</label>
            <select class="admin-select" v-model="editingUser.role">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div class="admin-form-group">
            <label>Trạng thái</label>
            <div class="admin-toggle" @click="editingUser.active = !editingUser.active">
              <button class="toggle-switch" :class="{ active: editingUser.active }" type="button"></button>
              <span style="font-size: 14px; color: var(--admin-text-soft);">{{ editingUser.active ? 'Hoạt động' : 'Bị khoá' }}</span>
            </div>
          </div>
        </div>
        <div class="admin-modal-footer">
          <button class="admin-btn admin-btn-outline" @click="showEditModal = false">Huỷ</button>
          <button class="admin-btn admin-btn-primary" @click="saveUser">Lưu thay đổi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const filterRole = ref('')
const showEditModal = ref(false)
const editingUser = ref(null)

const users = ref([
  { id: 1, name: 'Nguyễn Văn An', email: 'an@gmail.com', role: 'admin', active: true, createdAt: '01/01/2026', avatarColor: '#6366f1' },
  { id: 2, name: 'Trần Thị Bình', email: 'binh@gmail.com', role: 'user', active: true, createdAt: '05/01/2026', avatarColor: '#22c55e' },
  { id: 3, name: 'Lê Hoàng Cường', email: 'cuong@gmail.com', role: 'user', active: true, createdAt: '10/01/2026', avatarColor: '#f59e0b' },
  { id: 4, name: 'Phạm Minh Đức', email: 'duc@gmail.com', role: 'user', active: false, createdAt: '15/01/2026', avatarColor: '#ef4444' },
  { id: 5, name: 'Hoàng Thị Em', email: 'em@gmail.com', role: 'user', active: true, createdAt: '20/01/2026', avatarColor: '#3b82f6' },
  { id: 6, name: 'Vũ Đình Phúc', email: 'phuc@gmail.com', role: 'admin', active: true, createdAt: '25/01/2026', avatarColor: '#8b5cf6' },
  { id: 7, name: 'Đỗ Thanh Giang', email: 'giang@gmail.com', role: 'user', active: false, createdAt: '28/01/2026', avatarColor: '#ec4899' },
  { id: 8, name: 'Bùi Văn Hải', email: 'hai@gmail.com', role: 'user', active: true, createdAt: '01/02/2026', avatarColor: '#14b8a6' },
])

const filteredUsers = computed(() => {
  return users.value.filter(u => {
    const matchSearch = u.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || u.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchRole = !filterRole.value || u.role === filterRole.value
    return matchSearch && matchRole
  })
})

const toggleUserStatus = (user) => {
  user.active = !user.active
}

const openEditModal = (user) => {
  editingUser.value = { ...user }
  showEditModal.value = true
}

const saveUser = () => {
  const idx = users.value.findIndex(u => u.id === editingUser.value.id)
  if (idx !== -1) {
    users.value[idx] = { ...editingUser.value }
  }
  showEditModal.value = false
}
</script>