<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="handleLogin">
      <h2>Admin Login</h2>

      <label for="username">Username</label>
      <input
        id="username"
        v-model="username"
        type="text"
        placeholder="Enter username"
        required
      />

      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="Enter password"
        required
      />

      <button type="submit" :disabled="loading">
        {{ loading ? 'Logging in...' : 'Login' }}
      </button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

function handleLogin() {
  errorMessage.value = ''
  loading.value = true

  // ตัวอย่างการตรวจสอบ username/password แบบง่าย (เปลี่ยนเป็นเชื่อม API จริงได้)
  setTimeout(() => {
    loading.value = false
    if (username.value === 'admin' && password.value === 'password123') {
      alert('Login successful! Redirecting...')
      // ทำ redirect หรือเปลี่ยนหน้าได้ เช่น
      // router.push('/admin/dashboard')
    } else {
      errorMessage.value = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
    }
  }, 1000)
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e3fef7;
  font-family: "Sarabun", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.login-form {
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgb(0 60 67 / 0.2);
  width: 320px;
  box-sizing: border-box;
  text-align: center;
}

.login-form h2 {
  margin-bottom: 1.5rem;
  color: #135d66;
}

.login-form label {
  display: block;
  text-align: left;
  margin-bottom: 0.3rem;
  color: #003c43;
  font-weight: 600;
}

.login-form input {
  width: 100%;
  padding: 0.5rem 0.7rem;
  margin-bottom: 1rem;
  border: 1.5px solid #77b0aa;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.login-form input:focus {
  outline: none;
  border-color: #135d66;
}

.login-form button {
  width: 100%;
  background-color: #135d66;
  color: white;
  border: none;
  padding: 0.6rem 0;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-form button:disabled {
  background-color: #77b0aa;
  cursor: not-allowed;
}

.login-form button:hover:not(:disabled) {
  background-color: #003c43;
}

.error {
  color: #e55353;
  margin-top: 1rem;
  font-weight: 600;
}
</style>

