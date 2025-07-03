<template>
    <div class="min-h-screen bg-[var(--color-green-very-light)] flex items-center justify-center px-4">
      <div class="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <div class="flex flex-col items-center mb-6">
          <div class="bg-[var(--color-green-light)] rounded-full p-3 mb-3">
            <svg class="w-8 h-8 text-[var(--color-green-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.652 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-[var(--color-green-dark)]">เข้าสู่ระบบ</h2>
          <p class="text-[var(--color-green-medium)] text-sm">ระบบจองสนามกีฬา</p>
        </div>
  
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="relative">
            <input v-model="email" type="email" required
                   placeholder="อีเมล"
                   class="w-full pl-10 pr-4 py-3 border rounded-lg text-[var(--color-green-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-green-medium)]"/>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="w-5 h-5 text-[var(--color-green-light)]" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z"/>
              </svg>
            </div>
          </div>
  
          <div class="relative">
            <input v-model="password" type="password" required
                   placeholder="รหัสผ่าน"
                   class="w-full pl-10 pr-4 py-3 border rounded-lg text-[var(--color-green-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-green-medium)]"/>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="w-5 h-5 text-[var(--color-green-light)]" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path d="M12 15v2m0-8a4 4 0 00-4 4v4h8v-4a4 4 0 00-4-4z"/>
              </svg>
            </div>
          </div>
  
          <button type="submit"
                  class="w-full py-3 rounded-lg font-semibold bg-[var(--color-green-medium)] text-white hover:bg-[var(--color-green-dark)] transition">
            <router-link
  to="/dashboard"
>
  เข้าสู่ระบบ
</router-link>

          </button>
        </form>
  
        <p class="text-center text-sm text-[var(--color-green-dark)] mt-6">
          ยังไม่มีบัญชี?
          <button @click="$emit('switch','register')"
                  class="text-[var(--color-green-medium)] font-semibold hover:underline">
                  สมัครสมาชิก
          </button>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  function handleLogin() {
    alert(`กำลังเข้าสู่ระบบด้วย: ${email.value}`)
    // TODO: เชื่อม API login จริง
  }
  </script>
  