<template>
  <!-- FULL WIDTH -->
  <header
  class="sticky top-0 z-50
         backdrop-blur-md bg-white/90
         border-b border-gray-200"
>
  <div class="header-inner h-16 lg:h-20">

    <!-- LEFT -->
    <router-link to="/" class="flex items-center gap-3">
      <div
        class="w-10 h-10 lg:w-11 lg:h-11
               rounded-xl bg-gray-900 text-white
               flex items-center justify-center
               font-extrabold text-lg shadow-md"
      >
        FT
      </div>
      <span
        class="hidden sm:block
               text-xl lg:text-2xl
               font-extrabold text-gray-900"
      >
        FiveTech
      </span>
    </router-link>

    <!-- CENTER -->
    <nav class="hidden lg:flex items-center gap-10">
      <router-link
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="relative font-medium text-gray-700 hover:text-gray-900
               transition"
        active-class="text-gray-900 font-semibold"
      >
        {{ item.label }}
        <span
          class="absolute -bottom-2 left-0
                 w-full h-[2px]
                 bg-gray-900
                 scale-x-0 hover:scale-x-100
                 transition-transform origin-left"
        />
      </router-link>
    </nav>

    <!-- RIGHT -->
    <div class="flex items-center gap-3 sm:gap-5">
      <router-link to="/search" class="p-2 rounded-full hover:bg-gray-100">
        <Search class="w-6 h-6" />
      </router-link>

      <router-link to="/wishlist" class="relative p-2 rounded-full hover:bg-gray-100">
        <Heart class="w-6 h-6" />
        <span v-if="wishlistCount" class="badge">
          {{ wishlistCount }}
        </span>
      </router-link>

      <router-link to="/cart" class="relative p-2 rounded-full hover:bg-gray-100">
        <ShoppingCart class="w-6 h-6" />
        <span v-if="cartStore.totalItems" class="badge">
          {{ cartStore.totalItems }}
        </span>
      </router-link>

      <router-link
        v-if="isLoggedIn"
        to="/account"
        class="hidden sm:inline-flex font-medium px-3 py-2"
      >
        Tài khoản
      </router-link>

      <router-link
        v-else
        to="/login"
        class="hidden sm:inline-flex rounded-lg bg-gray-900
               text-white px-5 py-2.5 text-sm font-semibold
               hover:bg-gray-800 transition"
      >
        Đăng nhập
      </router-link>

      <button class="lg:hidden p-2 rounded-full hover:bg-gray-100">
        <Menu class="w-7 h-7" />
      </button>
    </div>

  </div>
</header>

</template>

<script setup>
import { Heart, ShoppingCart, Search, Menu } from 'lucide-vue-next'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const wishlistCount = 2 // demo
const isLoggedIn = false // gắn auth store sau

const navItems = [
  { label: 'Sản phẩm', to: '/products' },
  { label: 'Khuyến mãi', to: '/promotions' },
  { label: 'Tìm kiếm', to: '/search' },
]
</script>
