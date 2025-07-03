<template>
    <div class="min-h-screen flex items-center justify-center" style="background-color: var(--color-green-very-light); padding: 1rem;">
      <div
        class="bg-white max-w-md w-full rounded-xl shadow-lg p-8"
        style="color: var(--color-green-dark);"
      >
        <h2 class="text-3xl font-bold text-center mb-6">สมัครสมาชิก</h2>
  
        <form @submit.prevent="handleRegister" class="space-y-6">
          <div>
            <label for="name" class="label-text">ชื่อ - นามสกุล</label>
            <input
              id="name"
              v-model="name"
              type="text"
              required
              placeholder="กรอกชื่อของคุณ"
              class="custom-input"
            />
          </div>
  
          <div>
            <label for="email" class="label-text">อีเมล</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              placeholder="example@email.com"
              class="custom-input"
            />
          </div>
  
          <div>
            <label for="password" class="label-text">รหัสผ่าน</label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              placeholder="ตั้งรหัสผ่าน"
              class="custom-input"
            />
          </div>
  
          <div>
            <label for="confirmPassword" class="label-text">ยืนยันรหัสผ่าน</label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              required
              placeholder="กรอกรหัสผ่านอีกครั้ง"
              class="custom-input"
            />
          </div>
  
          <button type="submit" class="custom-button">สมัครสมาชิก</button>
        </form>
  
        <p class="text-center mt-6 text-sm" style="color: var(--color-green-dark);">
    มีบัญชีแล้ว?
    <button
      @click="$emit('switch', 'login')"
      class="font-semibold underline text-[var(--color-green-light)] hover:text-[var(--color-green-dark)]"
    >
      เข้าสู่ระบบ
    </button>
  </p>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  
  function handleRegister() {
    if (password.value !== confirmPassword.value) {
      alert('❗ รหัสผ่านไม่ตรงกัน')
      return
    }
  
    // TODO: เชื่อม API หรือ Firebase ที่นี่
    alert(`✅ Register: ${name.value}, ${email.value}`)
  }
  </script>
  